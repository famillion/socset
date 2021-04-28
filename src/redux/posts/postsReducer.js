import initialState from '../testState/testState';
import { ADD_NEW_POST, UPDATE_NEW_POST, LIKE_POST }  from './postsActions';

let initPostsState = initialState.homepage.posts

const postsReducer = (state = initPostsState, action) => {

  switch (action.type) {
    case ADD_NEW_POST:
      action.payload.body = state.newPostText;

      return {
        ...state,
        allPosts: [...state.allPosts, action.payload],
        newPostText: ''
      };

    case UPDATE_NEW_POST:
      return {
        ...state,
        newPostText: action.payload
      };
    case LIKE_POST:
      state.allPosts.forEach(post=> {
        if(post.id === action.payload){
          post.likesCount++;
        }
      })
      return {
        ...state
      };

    default:
      return state;
  }
}

export default postsReducer;
