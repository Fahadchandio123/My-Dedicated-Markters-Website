import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {

  ngAfterViewInit(): void {
    // Hero animations
    gsap.fromTo('.hero-title-top', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, delay: 0.2, ease: 'power3.out' });
    gsap.fromTo('.hero-title-main', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' });
    gsap.fromTo('.hero-astronaut-main', { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 1.2, delay: 0.3, ease: 'power3.out' });
    gsap.fromTo('.hero-astronaut-secondary', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1, delay: 0.8, ease: 'power3.out' });
    gsap.fromTo('.hero-top-left', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1 });
    gsap.fromTo('.hero-top-right', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1.1 });
    gsap.fromTo('.hero-dominate h2', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.8, delay: 1.2, stagger: 0.15, ease: 'power3.out' });

    // Intro section
    gsap.fromTo('.intro-text', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '.intro-section', start: 'top 80%' }
    });

    // Who section
    gsap.fromTo('.who-title', { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.who-section', start: 'top 70%' }
    });
    gsap.fromTo('.who-item', { opacity: 0, x: -30 }, {
      opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
      scrollTrigger: { trigger: '.who-list', start: 'top 75%' }
    });
    gsap.fromTo('.planet-orb', { opacity: 0, scale: 0.7 }, {
      opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: '.who-section', start: 'top 70%' }
    });

    // Statement
    gsap.fromTo('.statement-title', { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.statement-section', start: 'top 75%' }
    });

    // Stats
    gsap.fromTo('.stat-item', { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: '.stats-section', start: 'top 80%' }
    });
  }
}
