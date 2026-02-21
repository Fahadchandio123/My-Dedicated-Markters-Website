import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements AfterViewInit {
  team = [
    { name: 'Alex Morgan', role: 'CEO & Founder', avatar: 'AM', bio: '10+ years in digital marketing, ex-Google.' },
    { name: 'Jordan Lee', role: 'Head of SEO', avatar: 'JL', bio: 'SEO expert with $20M+ in organic revenue driven.' },
    { name: 'Taylor Smith', role: 'Creative Director', avatar: 'TS', bio: 'Award-winning designer with a passion for brands.' },
    { name: 'Casey Brown', role: 'PPC Specialist', avatar: 'CB', bio: 'Managed $5M+ in paid ad spend across platforms.' },
  ];

  values = [
    { icon: '🎯', title: 'Results First', desc: 'Every strategy is built around measurable outcomes and real business impact.' },
    { icon: '🤝', title: 'Partnership', desc: 'We treat your business like our own, investing in your long-term success.' },
    { icon: '💡', title: 'Innovation', desc: 'Always ahead of trends, using cutting-edge tools and strategies.' },
    { icon: '🔍', title: 'Transparency', desc: 'Clear communication and honest reporting — no surprises, ever.' },
  ];

  ngAfterViewInit() {
    gsap.fromTo('.about-hero-content > *', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.2 });
    gsap.fromTo('.team-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: '.team-grid', start: 'top 80%' } });
    gsap.fromTo('.value-card', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: '.values-grid', start: 'top 80%' } });
  }
}
