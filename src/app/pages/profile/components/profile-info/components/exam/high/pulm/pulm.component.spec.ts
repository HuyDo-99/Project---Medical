import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulmComponent } from './pulm.component';

describe('PulmComponent', () => {
  let component: PulmComponent;
  let fixture: ComponentFixture<PulmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
