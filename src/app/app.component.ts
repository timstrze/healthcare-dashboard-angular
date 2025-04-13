import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationBarComponent, RouterOutlet, LoadingSpinnerComponent],
  template: `
    <app-loading-spinner />
    <app-navigation-bar />
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
