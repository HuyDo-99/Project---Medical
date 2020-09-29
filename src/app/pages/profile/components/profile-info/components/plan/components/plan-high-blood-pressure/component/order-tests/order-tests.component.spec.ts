import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTestsComponent } from './order-tests.component';

describe('OrderTestsComponent', () => {
  let component: OrderTestsComponent;
  let fixture: ComponentFixture<OrderTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
