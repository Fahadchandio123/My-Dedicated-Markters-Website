import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ServiceDropdownItem {
  label: string;
  path: string;
  queryParams: { service: string };
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  isServicesDropdownOpen = false;
  servicesProvided: ServiceDropdownItem[] = [
    { label: 'Brand Identity', path: '/services', queryParams: { service: 'brand-identity' } },
    { label: 'Graphic Designing', path: '/services', queryParams: { service: 'graphic-designing' } },
    { label: 'Video Editing', path: '/services', queryParams: { service: 'video-editing' } },
    { label: 'Digital Marketing', path: '/services', queryParams: { service: 'digital-marketing' } },
    { label: 'UI & UX', path: '/services', queryParams: { service: 'ui-ux' } },
    { label: 'Web Development', path: '/services', queryParams: { service: 'web-development' } },
    { label: 'App Development', path: '/services', queryParams: { service: 'app-development' } }
  ];

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.closeServicesDropdown();
    }
  }

  ngOnInit() { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.closeServicesDropdown();
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleServicesDropdown(event: Event): void {
    event.stopPropagation();
    this.isServicesDropdownOpen = !this.isServicesDropdownOpen;
  }

  closeServicesDropdown(): void {
    this.isServicesDropdownOpen = false;
  }
}