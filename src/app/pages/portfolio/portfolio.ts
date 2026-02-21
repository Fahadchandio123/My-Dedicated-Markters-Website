import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements AfterViewInit {
  activeFilter = 'All';
  filters = ['All', 'SEO', 'Social Media', 'PPC', 'Web Design'];

  projects = [
    { title: 'TechStart Growth Campaign', category: 'SEO', result: '+340% Organic Traffic', color: '#7c3aed', tag: 'SEO' },
    { title: 'FashionBrand Social Takeover', category: 'Social Media', result: '2M+ Impressions', color: '#9333ea', tag: 'Social Media' },
    { title: 'E-Commerce PPC Overhaul', category: 'PPC', result: '5x ROAS Achieved', color: '#a855f7', tag: 'PPC' },
    { title: 'SaaS Website Redesign', category: 'Web Design', result: '+180% Conversions', color: '#7c3aed', tag: 'Web Design' },
    { title: 'Local Business SEO', category: 'SEO', result: '#1 Google Rankings', color: '#9333ea', tag: 'SEO' },
    { title: 'Restaurant Social Media', category: 'Social Media', result: '+500% Engagement', color: '#a855f7', tag: 'Social Media' },
    { title: 'B2B Lead Gen Campaign', category: 'PPC', result: '300+ Qualified Leads', color: '#7c3aed', tag: 'PPC' },
    { title: 'Startup Brand Identity', category: 'Web Design', result: 'Full Brand Launch', color: '#9333ea', tag: 'Web Design' },
  ];

  get filteredProjects() {
    if (this.activeFilter === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    setTimeout(() => {
      gsap.fromTo('.project-card', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05 });
    }, 10);
  }

  ngAfterViewInit() {
    gsap.fromTo('.portfolio-hero-content > *', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.2 });
    gsap.fromTo('.project-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' } });
  }
}
