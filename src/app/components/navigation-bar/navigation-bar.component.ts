import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertIndicatorComponent } from '../alert-indicator/alert-indicator.component';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterModule, AlertIndicatorComponent, NgbDropdownModule, NgClass, FormsModule],
  templateUrl: './navigation-bar.component.html',
  styles: [`
    .navbar.light {
      background-color: #e3f2fd;
      color: #212529;
    }

    .navbar.dark {
      background-color: #1e2a38;
      color: #f8f9fa;
    }

    .navbar.dark .nav-link,
    .navbar.dark .navbar-brand span {
      color: #f8f9fa !important;
    }

    .dropdown-menu.light {
      background-color: #ffffff;
      color: #212529;
    }

    .dropdown-menu.dark {
      background-color: #1e2a38;
      color: #f8f9fa;
    }

    .dropdown-menu.dark .dropdown-item {
      color: #f8f9fa;
    }

    .dropdown-menu.dark .dropdown-item:hover {
      background-color: #2c3e50;
    }

    .dropdown-menu.light .dropdown-item:hover {
      background-color: #f1f1f1;
    }

    .nav-tabs .nav-link {
      border: 1px solid #ccc;
      font-weight: 500;
    }

    .dark-stroke path {
      stroke: #f8f9fa;
      stroke-width: 1;
    }

    .navbar.dark {
      background-color: #1e2a38;
    }

    .navbar.dark .nav-link,
    .navbar.dark .navbar-brand span {
      color: #f8f9fa !important;
    }

    .dropdown-menu.dark .dropdown-item {
      color: #f8f9fa;
    }

    .dropdown-menu.dark .dropdown-item:hover {
      background-color: #2c3e50;
    }

    .dark-stroke path {
      stroke: #f8f9fa;
      stroke-width: 1;
    }
  `]
})
export class NavigationBarComponent {
  @Output() themeChanged = new EventEmitter<any>();
  theme: 'light' | 'dark' = 'light';
  selectedLanguage: string = 'en';

  constructor(private modalService: NgbModal, private languageService: LanguageService) {}

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(this.theme);
    this.themeChanged.emit(this.theme);
  }

  openLanguageModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  setLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}
