import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CoreService {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  icon: string;
}

interface AdvantageCard {
  title: string;
  body: string;
}

interface RoadmapStep {
  step: string;
  title: string;
  desc: string;
}

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services implements AfterViewInit, OnDestroy {
  selectedService = '';

  coreFour: CoreService[] = [
    {
      key: 'seo',
      title: 'SEO',
      subtitle: 'Strategy-first, data-driven organic growth',
      description: 'From technical SEO and content clusters to authority building, we engineer compounding traffic systems that convert intent into pipeline.',
      metric: '+164% Qualified Organic Sessions',
      icon: 'search'
    },
    {
      key: 'smm',
      title: 'Social Media Marketing',
      subtitle: 'Content that builds communities',
      description: 'We turn your brand voice into repeatable social series that drive relevance, engagement, and inbound demand across modern channels.',
      metric: '4.1x Engagement Lift',
      icon: 'users'
    },
    {
      key: 'ppc',
      title: 'Pay-Per-Click (PPC)',
      subtitle: 'High-ROI lead generation',
      description: 'We build full-funnel paid media systems with clear attribution, creative testing loops, and ruthless cost-per-acquisition efficiency.',
      metric: '38% Lower Cost per SQL',
      icon: 'target'
    },
    {
      key: 'content',
      title: 'Content Marketing',
      subtitle: 'Authority-building storytelling',
      description: 'From positioning narratives to conversion copy, we publish content that educates buyers, earns trust, and moves decisions forward.',
      metric: '3.4x Faster Sales Conversations',
      icon: 'pen'
    }
  ];

  dedicatedAdvantages: AdvantageCard[] = [
    {
      title: 'Dedicated Talent, Not Rotating Accounts',
      body: 'You get a focused team embedded in your weekly rhythm, not a revolving cast that relearns your business every month.'
    },
    {
      title: 'Integrated with Your Stack',
      body: 'We plug into your CRM, analytics, ad accounts, and workflows to execute with full visibility and operational speed.'
    },
    {
      title: 'Transparent Performance Cadence',
      body: 'Weekly sprint updates + monthly growth reviews ensure decisions are data-backed and tied to real business outcomes.'
    },
    {
      title: 'Built to Scale with You',
      body: 'As your growth targets evolve, your dedicated pod scales in capacity, channels, and complexity without friction.'
    }
  ];
  roadmap: RoadmapStep[] = [
    { step: '01', title: 'Audit', desc: 'Deep-dive into funnel health, positioning, channel performance, and competitive whitespace.' },
    { step: '02', title: 'Strategy', desc: 'Prioritized growth roadmap with messaging architecture, offer strategy, and measurable KPIs.' },
    { step: '03', title: 'Execution', desc: 'Rapid launch across SEO, PPC, social, and content with iterative creative and channel optimization.' },
    { step: '04', title: 'Optimization', desc: 'Continuous testing, attribution analysis, and scale decisions driven by revenue-focused reporting.' }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      const service = (params.get('service') || '').toLowerCase();
      this.selectedService = this.mapServiceParamToCoreKey(service);
    });
  }

  ngAfterViewInit(): void {
    gsap.fromTo('.hero-panel, .hero-copy > *', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 });

    gsap.utils.toArray('.core-card').forEach((card) => {
      gsap.fromTo(card as Element, { y: 36, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: { trigger: card as Element, start: 'top 85%' }
      });
    });

    gsap.utils.toArray('.roadmap-step').forEach((step) => {
      gsap.fromTo(step as Element, { x: 24, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: { trigger: step as Element, start: 'top 82%' }
      });
    });
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }

  isCoreServiceHighlighted(key: string): boolean {
    return this.selectedService === key;
  }

  private mapServiceParamToCoreKey(value: string): string {
    if (value.includes('seo')) return 'seo';
    if (value.includes('social') || value.includes('smm')) return 'smm';
    if (value.includes('ppc') || value.includes('ads') || value.includes('digital-marketing')) return 'ppc';
    if (value.includes('content') || value.includes('brand') || value.includes('graphic')) return 'content';
    return '';
  }
}