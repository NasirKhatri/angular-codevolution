import { createReducer, on } from "@ngrx/store";
import { PostStateInterface } from "../post-redux/postState.interface";
import * as PostsActions from './actions';

export const initialState: PostStateInterface = {
    isLoading: false,
    posts: [],
    error: null
}

export const reducers = createReducer(
    initialState,
    on(PostsActions.getPosts, (state: PostStateInterface) => ({ ...state, isLoading: true })),
    on(PostsActions.getPostsSuccess, (state: PostStateInterface, action) => ({ 
        ...state, 
        isLoading: false,
        posts: action.posts
    })),
    on(PostsActions.getPostsFailure, (state: PostStateInterface, action) => ({ 
        ...state, 
        isLoading: false,
        error: action.error   
    })),
    
    )