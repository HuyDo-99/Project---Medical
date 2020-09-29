import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisHighBloodPressureComponent } from './diagnosis-high-blood-pressure.component';

describe('DiagnosisHighBloodPressureComponent', () => {
  let component: DiagnosisHighBloodPressureComponent;
  let fixture: ComponentFixture<DiagnosisHighBloodPressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisHighBloodPressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisHighBloodPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
