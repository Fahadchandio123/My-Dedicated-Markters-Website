import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceLineItem {
  name: string;
  status: string;
}

interface ServiceCardItem {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services implements AfterViewInit {
  heroFeatures: string[] = [
    'Positioning Strategy',
    'Content Direction',
    'Paid Media Systems',
    'Social Growth Funnels',
    'Performance Tracking'
  ];


  expertisePoints: string[] = [
    'Expertise in Digital Solutions',
    'Innovative Design Approach',
    'Strategic Digital Marketing',
    'Data-Driven Decisions',
    'Holistic Security Measures',
    'Tailored Digital Strategy',
    'Responsive & Scalable',
    'Proven Track Record'
  ];

  chips: string[] = [
    'WEBSITE DEVELOPMENT',
    'SOCIAL MEDIA MARKETING',
    'EMAIL MARKETING',
    'UI / UX',
    'VIDEO EDITING',
    'SEO',
    'GOOGLE ADS',
    'GRAPHIC DESIGN',
    'BRAND IDENTITY'
  ];
  serviceLines: ServiceLineItem[] = [
    { name: 'Web Design', status: 'Portfolio' },
    { name: 'Design Strategy', status: 'Portfolio' },
    { name: 'SEO Site', status: 'Portfolio' },
    { name: 'Brand Assets', status: 'Portfolio' },
    { name: 'Lead Generation', status: 'Portfolio' },
    { name: 'Video Editing', status: 'Portfolio' }
  ];

  processSteps = [
    { title: 'From Consultation', desc: 'We audit your current brand setup and map where conversions are leaking.' },
    { title: 'Discover Your Needs', desc: 'We align strategy, offer, and channels with your business goals.' },
    { title: 'Plan & Execute', desc: 'Our team launches creative, ads, and funnels in one focused sprint.' },
    { title: 'Launch & Scale', desc: 'We optimize on data and scale what performs across every touchpoint.' }
  ];

  reviewsOrbit: ServiceCardItem[] = [
    { title: 'Great Team', desc: 'Fast results' },
    { title: 'Clear Strategy', desc: 'Easy process' },
    { title: 'Creative Ads', desc: 'High quality' },
    { title: 'Amazing Support', desc: 'Always available' },
    { title: 'Lead Quality', desc: 'Very strong' },
    { title: 'Real Growth', desc: 'Measurable ROI' }
  ];

  faqs = [
    'What Services Does Your Agency Offer?',
    'How Do You Ensure The Quality Of Your Work?',
    'How Do You Handle Revisions Or Changes?',
    'What If I\'m Not Satisfied With The Final Result?'
  ];

  ngAfterViewInit(): void {
    gsap.fromTo(
      '.services-hero-content > *',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, delay: 0.2 }
    );

    gsap.fromTo(
      '.service-detail-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: { trigger: '.line-list', start: 'top 82%' }
      }
    );
  }
}