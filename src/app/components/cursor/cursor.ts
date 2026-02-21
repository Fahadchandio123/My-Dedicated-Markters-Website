import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursor.html',
  styleUrl: './cursor.scss'
})
export class Cursor implements OnInit, OnDestroy {
  private cursorDot!: HTMLElement;
  private cursorRing!: HTMLElement;
  private mouseX = 0;
  private mouseY = 0;
  private ringX = 0;
  private ringY = 0;
  private animFrame!: number;
  private listeners: (() => void)[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    this.cursorRing = document.querySelector('.cursor-ring') as HTMLElement;

    const moveListener = this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      if (this.cursorDot) {
        this.cursorDot.style.left = `${e.clientX}px`;
        this.cursorDot.style.top = `${e.clientY}px`;
      }
    });

    const enterListener = this.renderer.listen('document', 'mouseenter', () => {
      if (this.cursorDot) this.cursorDot.style.opacity = '1';
      if (this.cursorRing) this.cursorRing.style.opacity = '1';
    });

    const leaveListener = this.renderer.listen('document', 'mouseleave', () => {
      if (this.cursorDot) this.cursorDot.style.opacity = '0';
      if (this.cursorRing) this.cursorRing.style.opacity = '0';
    });

    this.listeners.push(moveListener, enterListener, leaveListener);
    this.animateCursor();

    // Add hover effect on interactive elements
    document.querySelectorAll('a, button, .card, input, textarea').forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursorRing?.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        this.cursorRing?.classList.remove('cursor-hover');
      });
    });
  }

  private animateCursor() {
    this.ringX += (this.mouseX - this.ringX) * 0.12;
    this.ringY += (this.mouseY - this.ringY) * 0.12;
    if (this.cursorRing) {
      this.cursorRing.style.left = `${this.ringX}px`;
      this.cursorRing.style.top = `${this.ringY}px`;
    }
    this.animFrame = requestAnimationFrame(() => this.animateCursor());
  }

  ngOnDestroy() {
    this.listeners.forEach(l => l());
    cancelAnimationFrame(this.animFrame);
  }
}
