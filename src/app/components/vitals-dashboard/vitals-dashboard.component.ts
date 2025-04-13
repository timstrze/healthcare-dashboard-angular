import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vitals-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitals-dashboard.component.html',
  styleUrl: './vitals-dashboard.component.css',
})
export class VitalsDashboardComponent {
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
