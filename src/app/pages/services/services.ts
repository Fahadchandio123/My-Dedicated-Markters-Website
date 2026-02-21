import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services implements AfterViewInit {
  services = [
    {
      icon: '🎯', title: 'SEO Optimization', price: 'From $999/mo',
      desc: 'Dominate search rankings with our proven SEO strategies. We handle everything from technical audits to content optimization.',
      features: ['Technical SEO Audit', 'Keyword Research', 'On-Page Optimization', 'Link Building', 'Monthly Reporting']
    },
    {
      icon: '📱', title: 'Social Media Marketing', price: 'From $799/mo',
      desc: 'Build a powerful social presence that drives engagement, followers, and real business results.',
      features: ['Content Strategy', 'Daily Posting', 'Community Management', 'Influencer Outreach', 'Analytics Dashboard']
    },
    {
      icon: '💡', title: 'PPC Advertising', price: 'From $1,299/mo',
      desc: 'Maximize your ad spend with precision-targeted campaigns across Google, Meta, and more.',
      features: ['Campaign Strategy', 'Ad Copywriting', 'A/B Testing', 'Bid Management', 'Conversion Tracking']
    },
    {
      icon: '✍️', title: 'Content Marketing', price: 'From $699/mo',
      desc: 'Compelling content that educates your audience, builds trust, and drives organic growth.',
      features: ['Content Strategy', 'Blog Writing', 'Video Scripts', 'Infographics', 'Content Calendar']
    },
    {
      icon: '📧', title: 'Email Marketing', price: 'From $499/mo',
      desc: 'Nurture leads and retain customers with personalized email campaigns that convert.',
      features: ['List Segmentation', 'Automation Flows', 'Template Design', 'A/B Testing', 'Performance Reports']
    },
    {
      icon: '🌐', title: 'Web Design & Dev', price: 'From $2,999',
      desc: 'Beautiful, high-converting websites built for speed, SEO, and user experience.',
      features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'CMS Integration', '3 Months Support']
    },
  ];

  ngAfterViewInit() {
    gsap.fromTo('.services-hero-content > *', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.2 });
    gsap.fromTo('.service-detail-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: '.services-detail-grid', start: 'top 80%' } });
  }
}
