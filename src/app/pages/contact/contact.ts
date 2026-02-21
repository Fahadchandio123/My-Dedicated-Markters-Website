import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import gsap from 'gsap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements AfterViewInit {
  formData = { name: '', email: '', company: '', service: '', message: '' };
  submitted = false;
  loading = false;

  services = ['SEO Optimization', 'Social Media Marketing', 'PPC Advertising', 'Content Marketing', 'Email Marketing', 'Web Design', 'Full Package'];

  contactInfo = [
    { icon: '✉', label: 'Email', value: 'hello@mydigitalmarketers.com' },
    { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: '📍', label: 'Location', value: 'New York, NY 10001' },
    { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 9am–6pm EST' },
  ];

  ngAfterViewInit() {
    gsap.fromTo('.contact-hero-content > *', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.2 });
    gsap.fromTo('.contact-form-card', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.4 });
    gsap.fromTo('.contact-info-card', { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.3 });
  }

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
    }, 1500);
  }
}
