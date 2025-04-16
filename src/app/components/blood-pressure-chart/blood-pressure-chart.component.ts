import { AfterViewInit, Component, ElementRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-blood-pressure-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blood-pressure-chart.component.html',
  styles: [`
    .bp-chart {
      background-color: #ffffff;
      padding: 1rem;
      border-radius: 8px;
      height: 250px;
    }
    .dark .bp-chart {
      background-color: #1e1e1e !important;
    }
    canvas {
      width: 100% !important;
      height: 100% !important;
    }

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
  `]
})
export class BloodPressureChartComponent implements AfterViewInit, OnChanges {
  @Input() theme: 'light' | 'dark' = 'light';
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  private chart?: Chart;

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['theme'] && this.chartCanvas) {
      this.createChart();
    }
  }

  private createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    const isDark = this.theme === 'dark';

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
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
            suggestedMax: 130,
            ticks: {
              color: isDark ? '#ffffff' : '#212529'
            },
            grid: {
              color: isDark ? '#ffffff' : '#212529'
            }
          },
          x: {
            ticks: {
              color: isDark ? '#ffffff' : '#212529'
            },
            grid: {
              color: isDark ? '#ffffff' : '#212529'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: isDark ? '#ffffff' : '#212529'
            }
          }
        }
      }
    });
  }
}
