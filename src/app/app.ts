import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

import { Cursor } from './components/cursor/cursor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Cursor],
  template: `
    <app-cursor></app-cursor>
    <div class="noise-overlay"></div>
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>

  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class App { }
