import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-temp-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp-chart.component.html',
  styleUrls: ['./temp-chart.component.css'],
})
export class TempChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  ngAfterViewInit(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM'],
        datasets: [{
          label: 'Temperature (°F)',
          data: [96, 98, 102.5, 103, 101],
          borderColor: '#f66',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.4,
          pointBackgroundColor: '#f66',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            suggestedMin: 93,
            suggestedMax: 104
          }
        },
        plugins: {
          legend: { display: false }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
