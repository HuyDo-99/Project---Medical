import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRowMenuComponent } from './tab-row-menu.component';

describe('TabRowMenuComponent', () => {
  let component: TabRowMenuComponent;
  let fixture: ComponentFixture<TabRowMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRowMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabRowMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
