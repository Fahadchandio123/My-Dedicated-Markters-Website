import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class Home implements AfterViewInit, OnDestroy {
    stats = [
        { value: '231+', label: 'PROJECTS DONE' },
        { value: '212+', label: 'CLIENTS HAPPY' },
        { value: '4.7', label: 'CLIENTS RATING' },
        { value: '35+', label: 'AWARDS' }
    ];

    @ViewChildren('statValue') statValueEls!: QueryList<ElementRef<HTMLElement>>;

    private observer: IntersectionObserver | null = null;
    private timers: ReturnType<typeof setTimeout>[] = [];
    private hasRun = false;

    ngAfterViewInit(): void {
        // Observe the first stat value to know when section is in view
        const firstEl = this.statValueEls.first?.nativeElement;
        if (!firstEl) return;

        this.observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !this.hasRun) {
                this.hasRun = true;
                this.runScramble();
            }
        }, { threshold: 0.5 });

        this.observer.observe(firstEl);
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
        this.timers.forEach(t => clearTimeout(t));
    }

    private scrambleText(el: HTMLElement, finalText: string, delay: number): void {
        const duration = 900;
        const tickRate = 40;
        const ticks = duration / tickRate;
        let tick = 0;

        // Parse numeric part and suffix (e.g. "231+" → num=231, suffix="+")
        const match = finalText.match(/^([\d.]+)(.*)$/);
        if (!match) {
            el.textContent = finalText;
            return;
        }

        const finalNum = parseFloat(match[1]);
        const suffix = match[2] ?? '';
        const isDecimal = finalText.includes('.');
        const decimals = isDecimal ? (match[1].split('.')[1]?.length ?? 1) : 0;

        // Start from a higher number and count down
        const startNum = finalNum * 3.5;

        const t = setTimeout(() => {
            const interval = setInterval(() => {
                tick++;
                const progress = tick / ticks;
                // Ease-out: fast at start, slow at end
                const eased = 1 - Math.pow(1 - progress, 2);
                const current = startNum - (startNum - finalNum) * eased;

                el.textContent = current.toFixed(decimals) + suffix;

                if (tick >= ticks) {
                    clearInterval(interval);
                    el.textContent = finalText;
                }
            }, tickRate);
        }, delay);

        this.timers.push(t);
    }

    private runScramble(): void {
        this.statValueEls.forEach((ref, i) => {
            const final = this.stats[i].value;
            // Clear to dashes first
            ref.nativeElement.textContent = final.replace(/[^\s]/g, '-');
            this.scrambleText(ref.nativeElement, final, i * 200);
        });
    }
}
