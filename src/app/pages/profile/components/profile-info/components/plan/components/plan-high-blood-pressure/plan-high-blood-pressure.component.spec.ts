import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanHighBloodPressureComponent } from './plan-high-blood-pressure.component';

describe('PlanHighBloodPressureComponent', () => {
  let component: PlanHighBloodPressureComponent;
  let fixture: ComponentFixture<PlanHighBloodPressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanHighBloodPressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanHighBloodPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
