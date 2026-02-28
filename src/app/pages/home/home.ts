import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class Home implements AfterViewInit, OnDestroy {

    stats = [
        { value: 231, suffix: '+', label: 'PROJECTS DONE', decimals: 0 },
        { value: 212, suffix: '+', label: 'CLIENTS HAPPY', decimals: 0 },
        { value: 4.7, suffix: '', label: 'CLIENTS RATING', decimals: 1 },
        { value: 35, suffix: '+', label: 'AWARDS', decimals: 0 }
    ];

    ngAfterViewInit(): void {
        setTimeout(() => {
            const section = document.querySelector('.stats-wrap');
            const els = document.querySelectorAll<HTMLElement>('.stat-value');
            if (!section || !els.length) return;

            // Trigger ONCE when stats section is 30% visible
            ScrollTrigger.create({
                trigger: section,
                start: 'top 80%',
                once: true,
                onEnter: () => {
                    this.stats.forEach((stat, i) => {
                        const el = els[i];
                        if (!el) return;

                        const proxy = { val: 0 };
                        gsap.to(proxy, {
                            val: stat.value,
                            duration: 1.8,
                            delay: i * 0.2,
                            ease: 'power3.out',
                            onUpdate() {
                                el.textContent = proxy.val.toFixed(stat.decimals) + stat.suffix;
                            },
                            onComplete() {
                                el.textContent = stat.value.toFixed(stat.decimals) + stat.suffix;
                            }
                        });
                    });
                }
            });
        }, 300);
    }

    ngOnDestroy(): void {
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
}