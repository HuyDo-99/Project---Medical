import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StomachacheComponent } from './stomachache.component';

describe('StomachacheComponent', () => {
  let component: StomachacheComponent;
  let fixture: ComponentFixture<StomachacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StomachacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StomachacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
