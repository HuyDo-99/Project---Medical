import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArteriesComponent } from './arteries.component';

describe('ArteriesComponent', () => {
  let component: ArteriesComponent;
  let fixture: ComponentFixture<ArteriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArteriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
