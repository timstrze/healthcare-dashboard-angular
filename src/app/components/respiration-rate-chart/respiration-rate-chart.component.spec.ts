import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespirationRateChartComponent } from './respiration-rate-chart.component';

describe('RespirationRateChartComponent', () => {
  let component: RespirationRateChartComponent;
  let fixture: ComponentFixture<RespirationRateChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespirationRateChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespirationRateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
