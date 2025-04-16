import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeartMonitorComponent} from '../../components/heart-monitor/heart-monitor.component';
import {PatientDetailsComponent} from '../../components/patient-details/patient-details.component';
import {MedicationTherapyScheduleComponent} from '../../components/medication-therapy-schedule/medication-therapy-schedule.component';
import {VitalsDashboardComponent} from '../../components/vitals-dashboard/vitals-dashboard.component';
import {TempChartComponent} from '../../components/temp-chart/temp-chart.component';
import {BloodPressureChartComponent} from '../../components/blood-pressure-chart/blood-pressure-chart.component';
import {NavigationBarComponent} from '../../components/navigation-bar/navigation-bar.component';
import {ThemeService} from '../../services/theme.service';
import {OxygenRateChartComponent} from '../../components/oxygen-rate-chart/oxygen-rate-chart.component';
import {RespirationRateChartComponent} from '../../components/respiration-rate-chart/respiration-rate-chart.component';
import {HeartRateChartComponent} from '../../components/heart-rate-chart/heart-rate-chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeartMonitorComponent,
    PatientDetailsComponent,
    MedicationTherapyScheduleComponent,
    VitalsDashboardComponent,
    TempChartComponent,
    BloodPressureChartComponent,
    OxygenRateChartComponent,
    RespirationRateChartComponent,
    HeartRateChartComponent
  ],
  styles: [`
    .home {
      height: 100%;
    }
    .home.light {
      background-color: #f8f9fa;
      color: #212529;
    }

    .home.dark {
      background-color: #090d11;
      color: #f8f9fa;
    }
  `],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  selectedVital: string = 'Body Temperature';
  theme: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.theme = theme;
    });
  }
}
