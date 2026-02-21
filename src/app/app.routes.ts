import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home – My Digital Marketers' },
  { path: 'about', component: About, title: 'About – My Digital Marketers' },
  { path: 'services', component: Services, title: 'Services – My Digital Marketers' },
  { path: 'portfolio', component: Portfolio, title: 'Portfolio – My Digital Marketers' },
  { path: 'contact', component: Contact, title: 'Contact – My Digital Marketers' },
  { path: '**', redirectTo: '' }
];
