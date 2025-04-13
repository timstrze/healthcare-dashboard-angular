// blood-pressure-chart.component.ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-blood-pressure-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blood-pressure-chart.component.html',
  styleUrls: ['./blood-pressure-chart.component.css']
})
export class BloodPressureChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  ngAfterViewInit(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM'],
        datasets: [
          {
            label: 'Systolic',
            data: [118, 120, 122, 119, 117],
            borderColor: '#3366cc',
            backgroundColor: 'rgba(51, 102, 204, 0.2)',
            tension: 0.4,
            pointBackgroundColor: '#3366cc'
          },
          {
            label: 'Diastolic',
            data: [78, 80, 82, 79, 77],
            borderColor: '#dc3912',
            backgroundColor: 'rgba(220, 57, 18, 0.2)',
            tension: 0.4,
            pointBackgroundColor: '#dc3912'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            suggestedMin: 70,
            suggestedMax: 130
          }
        },
        plugins: {
          legend: { display: true }
        }
      }
    });
  }
}
