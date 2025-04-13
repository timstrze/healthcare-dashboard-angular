import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeartMonitorComponent} from '../../components/heart-monitor/heart-monitor.component';
import {PatientDetailsComponent} from '../../components/patient-details/patient-details.component';
import {AlertIndicatorComponent} from '../../components/alert-indicator/alert-indicator.component';
import {MedicationTherapyScheduleComponent} from '../../components/medication-therapy-schedule/medication-therapy-schedule.component';
import {VitalsDashboardComponent} from '../../components/vitals-dashboard/vitals-dashboard.component';
import {TempChartComponent} from '../../components/temp-chart/temp-chart.component';
import {BloodPressureChartComponent} from '../../components/blood-pressure-chart/blood-pressure-chart.component';

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
    BloodPressureChartComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  selectedVital: string = 'Body Temperature';
}
