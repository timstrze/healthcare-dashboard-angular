import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-patients',
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class PatientsComponent {
  patients = [
    { id: '001', name: 'Timothy Strzelecki', age: 42, gender: 'Male', condition: 'Stable' },
    { id: '002', name: 'Ava Thompson', age: 36, gender: 'Female', condition: 'Monitoring' },
    { id: '003', name: 'Raj Mehta', age: 58, gender: 'Male', condition: 'Critical' },
    { id: '004', name: 'Linda Chan', age: 45, gender: 'Female', condition: 'Stable' },
    { id: '005', name: 'Marcus O\'Neil', age: 50, gender: 'Male', condition: 'Discharged' },
    { id: '006', name: 'Sophia Garcia', age: 30, gender: 'Female', condition: 'Monitoring' },
    { id: '007', name: 'Ethan Patel', age: 27, gender: 'Male', condition: 'Stable' },
    { id: '008', name: 'Isabella Nguyen', age: 33, gender: 'Female', condition: 'Stable' },
    { id: '009', name: 'Liam Jackson', age: 60, gender: 'Male', condition: 'Critical' },
    { id: '010', name: 'Chloe Davis', age: 48, gender: 'Female', condition: 'Monitoring' },
    { id: '011', name: 'Noah Kim', age: 52, gender: 'Male', condition: 'Stable' },
    { id: '012', name: 'Emma Rossi', age: 41, gender: 'Female', condition: 'Stable' },
    { id: '013', name: 'Oliver Cohen', age: 39, gender: 'Male', condition: 'Discharged' },
    { id: '014', name: 'Avery Morgan', age: 34, gender: 'Female', condition: 'Monitoring' },
    { id: '015', name: 'Lucas Bennett', age: 56, gender: 'Male', condition: 'Stable' },
    { id: '016', name: 'Mia Chen', age: 38, gender: 'Female', condition: 'Stable' },
    { id: '017', name: 'Elijah Reed', age: 63, gender: 'Male', condition: 'Critical' },
    { id: '018', name: 'Amelia Turner', age: 29, gender: 'Female', condition: 'Monitoring' },
    { id: '019', name: 'James Lee', age: 44, gender: 'Male', condition: 'Stable' },
    { id: '020', name: 'Harper Adams', age: 37, gender: 'Female', condition: 'Discharged' },
    { id: '021', name: 'Benjamin Foster', age: 46, gender: 'Male', condition: 'Monitoring' },
    { id: '022', name: 'Charlotte Rivera', age: 31, gender: 'Female', condition: 'Stable' },
    { id: '023', name: 'Henry Brooks', age: 59, gender: 'Male', condition: 'Critical' }
  ];
}
