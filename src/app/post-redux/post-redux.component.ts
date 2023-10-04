import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, filter } from 'rxjs';
import * as PostActions from 'src/app/store/actions'
import { AppStateInterface } from '../store/appState.interface';
import { errorSelector, isLoadingSelector, postsSelector } from '../store/selectors';
import { PostInterface } from './postState.interface';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-post-redux',
  templateUrl: './post-redux.component.html',
  styleUrls: ['./post-redux.component.css']
})
export class PostReduxComponent implements OnInit {
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  posts$: Observable<PostInterface[]>

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.posts$ = this.store.pipe(select(postsSelector))
  }

  ngOnInit(): void {
    // this.store.dispatch(PostActions.getPosts());

    const clicks = fromEvent<PointerEvent>(document, 'click');
    const positions = clicks.pipe(
      map(ev => [ev.clientX, ev.clientY]),
      filter(x => x[0] > 200)
      );

    positions.subscribe(x => console.log(`x: ${x[0]}, y: ${x[1]}`));
  }

}
