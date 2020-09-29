import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllegryComponent } from './allegry.component';

describe('AllegryComponent', () => {
  let component: AllegryComponent;
  let fixture: ComponentFixture<AllegryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllegryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllegryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
