import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormCComponent } from './dynamic-form-c.component';

describe('DynamicFormCComponent', () => {
  let component: DynamicFormCComponent;
  let fixture: ComponentFixture<DynamicFormCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormCComponent]
    });
    fixture = TestBed.createComponent(DynamicFormCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
