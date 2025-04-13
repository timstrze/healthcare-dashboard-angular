import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertIndicatorComponent } from '../alert-indicator/alert-indicator.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterModule, AlertIndicatorComponent, NgbDropdownModule],
  templateUrl: './navigation-bar.component.html',
  styles: [`.nav-tabs .nav-link { border: 1px solid #ccc; font-weight: 500; }`]
})
export class NavigationBarComponent {}
