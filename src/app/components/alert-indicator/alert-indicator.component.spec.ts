import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertIndicatorComponent } from './alert-indicator.component';

describe('AlertIndicatorComponent', () => {
  let component: AlertIndicatorComponent;
  let fixture: ComponentFixture<AlertIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
