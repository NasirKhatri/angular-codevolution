import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormTemplateComponent } from './dynamic-form-template.component';

describe('DynamicFormTemplateComponent', () => {
  let component: DynamicFormTemplateComponent;
  let fixture: ComponentFixture<DynamicFormTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormTemplateComponent]
    });
    fixture = TestBed.createComponent(DynamicFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
