import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighBloodPressureComponent } from './high-blood-pressure.component';

describe('HighBloodPressureComponent', () => {
  let component: HighBloodPressureComponent;
  let fixture: ComponentFixture<HighBloodPressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighBloodPressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighBloodPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
