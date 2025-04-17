import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {ThemeService} from '../../services/theme.service';
import {HeartRateChartComponent} from '../../components/heart-rate-chart/heart-rate-chart.component';
import {TempChartComponent} from '../../components/temp-chart/temp-chart.component';
import {OxygenRateChartComponent} from '../../components/oxygen-rate-chart/oxygen-rate-chart.component';
import {RespirationRateChartComponent} from '../../components/respiration-rate-chart/respiration-rate-chart.component';

@Component({
  standalone: true,
  templateUrl: './reports.component.html',
  imports: [
    NgForOf,
    NgClass,
    HeartRateChartComponent,
    TempChartComponent,
    OxygenRateChartComponent,
    RespirationRateChartComponent
  ],
  styles: [`
  .reports {
    width: 100%;
  }

  .reports.dark {
    background-color: #090d11;
    color: #f8f9fa;
  }

  .reports.light {
    background-color: #ffffff;
    border-color: #dee2e6;
  }

  .container.light {
    background-color: #ffffff;
    color: #212529;
  }

  .container.dark {
    background-color: #090d11;
    color: #f8f9fa;
  }

  .card.light {
    background-color: #ffffff;
    border-color: #dee2e6;
  }

  .card.dark {
    background-color: #273244;
    border-color: #3a3f44;
  }

  .card-header.light {
    background-color: #f8f9fa;
    color: #212529;
  }

  .card-header.dark {
    background-color: #1c2532;
    color: #f8f9fa;
  }

  .card-body.dark {
    color: #f8f9fa;
  }

  .card-body.light {
    color: #212529;
  }

  .list-group-item {
    background-color: inherit;
    color: inherit;
  }
`]
})
export class ReportsComponent implements OnInit  {
  constructor(private themeService: ThemeService) {}

  theme: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.theme = theme;
    });
  }

  patientStats = {
    name: 'Timothy Strzelecki',
    age: 42,
    weight: '180 lbs',
    height: "5'11\"",
    bloodType: 'O+',
    patientId: '001256',
    heartRate: 76,
    temperature: 98.6,
    bloodPressure: '120/80',
    oxygenRate: 97,
    respirationRate: 17
  };

  medicationSchedule = [
    { time: '8:00 AM', name: 'Lisinopril', type: 'Medication' },
    { time: '12:00 PM', name: 'Metformin', type: 'Medication' },
    { time: '3:00 PM', name: 'Physical Therapy', type: 'Therapy' },
    { time: '6:00 PM', name: 'Amlodipine', type: 'Medication' }
  ];
  notes = [
    {
      time: '2025-04-10 09:15 AM',
      text: 'Patient reported mild headaches. Advised to increase hydration and monitor symptoms.'
    },
    {
      time: '2025-04-12 01:30 PM',
      text: 'Blood pressure within target range. Continue current medication. Scheduled next check-up in 2 weeks.'
    },
    {
      time: '2025-04-14 04:45 PM',
      text: 'Patient requested clarification on dietary restrictions. Provided detailed guidance on sodium intake.'
    }
  ];

  downloadReportAsPDF(): void {
    const report = document.getElementById('reportContent');
    if (report) {
      import('html2pdf.js').then(html2pdf => {
        html2pdf.default()
          .from(report)
          .set({
            filename: `${this.patientStats.name.toLowerCase().replace(/ /g, '-')}-report-${new Date().toISOString().replace(/[:.]/g, '-')}.pdf`,
            pagebreak: {before: '.new-page', avoid: ['h2', 'h3', 'h4', '.field']},
            html2canvas: { scale: 2 }
          })
          .save();
      });
    }
  }
}
