import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();

  services = ['SEO Optimization', 'Social Media Marketing', 'PPC Advertising', 'Content Marketing', 'Email Marketing', 'Web Design'];
  links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  socials = [
    { name: 'Twitter', icon: 'X', url: '#' },
    { name: 'LinkedIn', icon: 'in', url: '#' },
    { name: 'Instagram', icon: 'IG', url: '#' },
    { name: 'Facebook', icon: 'f', url: '#' },
  ];
}
