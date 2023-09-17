import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsServiceService } from "../posts-service.service";
import * as PostActions from './actions'
import { catchError, mergeMap, map, of } from "rxjs";

@Injectable()
export class PostEffects {
    getPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostActions.getPosts),
            mergeMap(() => {
                return this.postService.getPosts().pipe(
                    map((posts) => PostActions.getPostsSuccess({ posts })),
                    catchError((error) =>
                        of(PostActions.getPostsFailure({ error: error.message })))
                )
            })
        )
    )

    constructor(private actions$: Actions, private postService: PostsServiceService) { }
}