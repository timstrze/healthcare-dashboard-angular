import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vitals-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitals-dashboard.component.html',
  styleUrl: './vitals-dashboard.component.css',
  styles: [`
    .card.light {
      background-color: #ffffff;
      color: #212529;
      border: 1px solid #dee2e6;
    }

    .card.dark {
      background-color: #1e2a38;
      color: #f8f9fa;
      border: 1px solid #3a3f44;
    }

    .card-header {
      font-weight: 600;
    }

    .table-hover tbody tr:hover {
      background-color: rgba(0, 123, 255, 0.05);
    }

    .card.dark .table-hover tbody tr:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
  `]
})
export class VitalsDashboardComponent {
  @Input() theme: 'light' | 'dark' = 'light';
  vitals = [
    { label: 'Heart Rate', value: '72', selected: false },
    { label: 'Respiration Rate', value: '16', selected: false },
    { label: 'Oxygen Rate', value: '98%', selected: false },
    { label: 'Blood Pressure', value: '120/80', selected: false },
    { label: 'Body Temperature', value: '98.24°F', selected: true },
  ];

  @Output() vitalSelected = new EventEmitter<string>();

  selectItem(selectedItem: { label: string; value: string; selected: boolean }) {
    this.vitals.forEach(item => {
      item.selected = item === selectedItem;
    });
    this.vitalSelected.emit(selectedItem.label);
  }
}
