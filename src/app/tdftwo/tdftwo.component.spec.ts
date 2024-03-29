import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdftwoComponent } from './tdftwo.component';

describe('TdftwoComponent', () => {
  let component: TdftwoComponent;
  let fixture: ComponentFixture<TdftwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdftwoComponent]
    });
    fixture = TestBed.createComponent(TdftwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
