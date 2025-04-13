import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="loader.isLoading | async" class="spinner-overlay">
      <div class="spinner-border text-primary" role="status"></div>
    </div>
  `,
  styles: [`
    .spinner-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background-color: rgba(255, 255, 255, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
  `]
})
export class LoadingSpinnerComponent {
  constructor(public loader: LoadingService) {}
}
