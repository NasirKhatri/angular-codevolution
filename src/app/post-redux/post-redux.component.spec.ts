import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReduxComponent } from './post-redux.component';

describe('PostReduxComponent', () => {
  let component: PostReduxComponent;
  let fixture: ComponentFixture<PostReduxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostReduxComponent]
    });
    fixture = TestBed.createComponent(PostReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
