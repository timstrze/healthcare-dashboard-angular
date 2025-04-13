import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygenRateChartComponent } from './oxygen-rate-chart.component';

describe('OxygenRateChartComponent', () => {
  let component: OxygenRateChartComponent;
  let fixture: ComponentFixture<OxygenRateChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OxygenRateChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OxygenRateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
