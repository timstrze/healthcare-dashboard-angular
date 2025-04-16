import { AfterViewInit, Component, ElementRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-heart-rate-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heart-rate-chart.component.html',
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

    .heart-chart {
      background-color: #ffffff;
      padding: 1rem;
      border-radius: 8px;
      height: 250px;
    }

    .dark .heart-chart {
      background-color: #1e1e1e !important;
    }

    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  `]
})
export class HeartRateChartComponent implements AfterViewInit, OnChanges {
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
        datasets: [{
          label: 'Heart Rate (BPM)',
          data: [72, 75, 78, 74, 76],
          borderColor: '#ff6b6b',
          backgroundColor: 'rgba(255, 107, 107, 0.2)',
          tension: 0.4,
          pointBackgroundColor: '#ff6b6b'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            suggestedMin: 90,
            suggestedMax: 100,
            ticks: {
              color: isDark ? '#ffffff' : '#212529'
            },
            grid: {
              color: isDark ? '#444' : '#ddd'
            }
          },
          x: {
            ticks: {
              color: isDark ? '#ffffff' : '#212529'
            },
            grid: {
              color: isDark ? '#444' : '#ddd'
            }
          }
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              color: isDark ? '#ffffff' : '#212529'
            }
          }
        }
      }
    });
  }
}
