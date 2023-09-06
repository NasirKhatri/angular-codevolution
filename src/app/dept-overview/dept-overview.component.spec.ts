import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptOverviewComponent } from './dept-overview.component';

describe('DeptOverviewComponent', () => {
  let component: DeptOverviewComponent;
  let fixture: ComponentFixture<DeptOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptOverviewComponent]
    });
    fixture = TestBed.createComponent(DeptOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
