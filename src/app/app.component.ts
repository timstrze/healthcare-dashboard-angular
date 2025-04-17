import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingSpinnerComponent, NavigationBarComponent],
  template: `
    <app-loading-spinner />
    <app-navigation-bar (themeChanged)="onThemeChanged($event)" />
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  theme: 'light' | 'dark' = 'light';
  language: string = 'en';

  constructor(private themeService: ThemeService, private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  onThemeChanged(mode: 'light' | 'dark') {
    this.themeService.setTheme(mode);
  }
}
