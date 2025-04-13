import { Component } from '@angular/core';

@Component({
  selector: 'app-heart-monitor',
  standalone: true,
  templateUrl: './heart-monitor.component.html',
  styles: [`
    .heart-monitor {
      background-color: #0c1a26;
      color: #e4e4dc;
      padding: 1rem;
      border-radius: 12px;
      font-size: 1.2rem;
      border: 1px solid #ccc;
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
export class HeartMonitorComponent {}
