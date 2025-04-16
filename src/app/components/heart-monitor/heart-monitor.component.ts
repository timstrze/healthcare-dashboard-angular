import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-heart-monitor',
  standalone: true,
  templateUrl: './heart-monitor.component.html',
  imports: [
    NgClass
  ],
  styles: [`
    .heart-monitor {
      padding: 1rem;
      border-radius: 12px;
      font-size: 1.2rem;
      border: 1px solid #ccc;
      transition: background-color 0.3s, color 0.3s;
    }

    .heart-monitor.light {
      background-color: #ffffff;
      color: #1a1a1a;
    }

    .heart-monitor.dark {
      background-color: #1e2a38;
      color: #f8f9fa;
      border-color: #3a3f44;
    }

    .pulse {
      font-size: 3rem;
      font-weight: bold;
    }

    .wave {
      width: 100%;
      height: 192px;
      margin: 1rem 0;
      padding: 0;
      overflow: hidden;
    }

    .wave svg {
      display: block;
      width: 100%;
      height: 192px;
    }
  `]
})
export class HeartMonitorComponent {
  @Input() theme: 'light' | 'dark' = 'light';
}
