import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthEducationComponent } from './health-education.component';

describe('HealthEducationComponent', () => {
  let component: HealthEducationComponent;
  let fixture: ComponentFixture<HealthEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
