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
  // Navigation Menu Items
  navItems = [
    { label: 'Home', link: '/', active: false },
    { label: 'About', link: '/about', active: false },
    { label: 'Services', link: '/services', active: true },
    { label: 'Our Team', link: '/team', active: false },
    { label: 'Contact', link: '/contact', active: false },
    { label: 'Blog', link: '/blog', active: false },
  ];

  // What We Offer Pills
  offerPills = [
    'Graphic Design', 'EMAIL MARKETING', 'VIDEO EDITING', 'SEO',
    'SOCIAL MEDIA MARKETING', 'UI / UX', 'BRAND IDENTITY',
    'GOOGLE ADS', 'WEBSITE DEVELOPMENT'
  ];

  // Specific Services Sections
  detailedServices = [
    {
      title: 'Brand Identity',
      subtitle: 'Elevate Your Business with a Compelling Brand Identity',
      desc1: 'Your brand is more than a logo; it\'s the essence of your business. We help you craft a unique identity that resonates with your audience and sets you apart in the market.',
      desc2: 'A strong brand identity is the foundation of successful businesses. It shapes how your audience perceives your company, creating lasting impressions and fostering loyalty. Our team works closely with you to design a cohesive brand strategy that speaks to your values and vision.',
      badge: 'IDENTITY',
      mainText: 'bRANDING',
      bgColor: '#EAEAEA'
    },
    {
      title: 'Graphic Designing',
      subtitle: 'Elevate Your Business with a Compelling Graphic Design',
      desc1: 'Your brand is more than a logo; it\'s the essence of your business. We help you craft a unique identity that resonates with your audience and sets you apart in the market.',
      desc2: 'A strong brand identity is the foundation of successful businesses. It shapes how your audience perceives your company, creating lasting impressions and fostering loyalty. Our team works closely with you to design a cohesive brand strategy that speaks to your values and vision.',
      badge: 'DESIGNING',
      mainText: 'graphic',
      bgColor: '#EAEAEA'
    },
    {
      title: 'Video & VFX',
      subtitle: 'Elevate Your Business with a Compelling Video & VFX Editing',
      desc1: 'Your brand is more than a logo; it\'s the essence of your business. We help you craft a unique identity that resonates with your audience and sets you apart in the market.',
      desc2: 'A strong brand identity is the foundation of successful businesses. It shapes how your audience perceives your company, creating lasting impressions and fostering loyalty. Our team works closely with you to design a cohesive brand strategy that speaks to your values and vision.',
      badge: 'EDITING',
      mainText: 'Video & VFX',
      bgColor: '#EAEAEA'
    },
    {
      title: 'Digital Marketing',
      subtitle: 'Elevate Your Business with a Compelling Brand Identity',
      desc1: 'Your brand is more than a logo; it\'s the essence of your business. We help you craft a unique identity that resonates with your audience and sets you apart in the market.',
      desc2: 'A strong brand identity is the foundation of successful businesses. It shapes how your audience perceives your company, creating lasting impressions and fostering loyalty. Our team works closely with you to design a cohesive brand strategy that speaks to your values and vision.',
      badge: 'MARKETING',
      mainText: 'DIGIT AL',
      bgColor: '#EAEAEA'
    },
    {
      title: 'UI & UX',
      subtitle: 'Elevate Your Business with a Compelling UI & UX Designing',
      desc1: 'Your brand is more than a logo; it\'s the essence of your business. We help you craft a unique identity that resonates with your audience and sets you apart in the market.',
      desc2: 'A strong brand identity is the foundation of successful businesses. It shapes how your audience perceives your company, creating lasting impressions and fostering loyalty. Our team works closely with you to design a cohesive brand strategy that speaks to your values and vision.',
      badge: 'DESIGNING',
      mainText: 'Ui & UX',
      bgColor: '#EAEAEA'
    },
    {
      title: 'Web Development',
      subtitle: 'Elevate Your Business with a Compelling Brand Identity',
      desc1: 'Your brand is more than a logo; it\'s the essence of your business. We help you craft a unique identity that resonates with your audience and sets you apart in the market.',
      desc2: 'A strong brand identity is the foundation of successful businesses. It shapes how your audience perceives your company, creating lasting impressions and fostering loyalty. Our team works closely with you to design a cohesive brand strategy that speaks to your values and vision.',
      badge: 'DEVELOPMENT',
      mainText: 'WEB SITE',
      bgColor: '#EAEAEA'
    },
    {
      title: 'App Development',
      subtitle: 'Elevate Your Business with a Compelling Brand Identity',
      desc1: 'Your brand is more than a logo; it\'s the essence of your business. We help you craft a unique identity that resonates with your audience and sets you apart in the market.',
      desc2: 'A strong brand identity is the foundation of successful businesses. It shapes how your audience perceives your company, creating lasting impressions and fostering loyalty. Our team works closely with you to design a cohesive brand strategy that speaks to your values and vision.',
      badge: 'DEVELOPMENT',
      mainText: 'APPLICATION',
      bgColor: '#CF8BF3',
      darkText: true
    }
  ];

  // How It Works Steps
  steps = [
    {
      title: 'Free Consultations',
      desc: 'Let’s start with a conversation to understand your goals and needs'
    },
    {
      title: 'Discover Your Needs',
      desc: 'We’ll explore your project requirements and align them with your vision.'
    },
    {
      title: 'Plan & Develop',
      desc: 'We create a custom plan and start developing the solution for you.'
    },
    {
      title: 'Launch & Support',
      desc: 'We launch your project and provide ongoing support for continued success.'
    }
  ];

  // FAQs
  faqs = [
    {
      question: 'What services does your agency offer?',
      answer: 'Our agency provides a range of services to meet your business needs, including custom software solutions, graphic design, web development, and digital marketing. We specialize in creating high-quality, user-friendly, and visually appealing products that enhance efficiency and drive growth.',
      open: true
    },
    {
      question: 'How do you ensure the quality of your work?',
      answer: 'We have a rigorous quality assurance process involving code reviews, automated testing, and dedicated QA engineers to verify every feature.',
      open: false
    },
    {
      question: 'How do you handle project revisions or changes?',
      answer: 'We follow an agile methodology allowing for iterative feedback and changes throughout the project lifecycle within the agreed scope.',
      open: false
    },
    {
      question: 'What if I\'m not satisfied with the final result?',
      answer: 'Client satisfaction is our priority. We offer milestone reviews to ensure alignment, and will work with you to address any concerns before final delivery.',
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  // Testimonials
  testimonials = [
    { text: 'The results are outstanding!', author: 'Gracie Abrams' },
    { text: 'Nice work, love it!🔥', author: 'Byeon Wo Soek' },
    { text: 'Nice work, love it!🔥', author: 'Byeon Wo Soek' },
    { text: 'Nice work, love it!🔥', author: 'Byeon Wo Soek' },
    { text: 'Highly Recommended!', author: 'Carlos Sainz' },
    { text: 'That was amazing! Greatjob!', author: 'Louis Patridge' },
  ];

  ngAfterViewInit() {
    gsap.fromTo('.hero-fade-up', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.2 });
    gsap.fromTo('.service-section', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, scrollTrigger: { trigger: '.services-container', start: 'top 80%' } });
  }
}
