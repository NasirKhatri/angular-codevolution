import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectiveformtwoComponent } from './rectiveformtwo.component';

describe('RectiveformtwoComponent', () => {
  let component: RectiveformtwoComponent;
  let fixture: ComponentFixture<RectiveformtwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RectiveformtwoComponent]
    });
    fixture = TestBed.createComponent(RectiveformtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
