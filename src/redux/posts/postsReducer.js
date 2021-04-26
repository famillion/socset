import initialState from '../testState/testState';
import constants from './postsActions';

let initPostsState = initialState.homepage.posts

const { ADD_NEW_POST, UPDATE_NEW_POST, LIKE_POST } = constants;

const postsReducer = (state = initPostsState, action) => {

  switch (action.type) {
    case ADD_NEW_POST:
      action.payout.body = state.newPostText;
      state.allPosts.push(action.payout);

      return {
        ...state,
        allPosts: [...state.allPosts],
        newPostText: ''
      };

    case UPDATE_NEW_POST:
      return {
        ...state,
        newPostText: action.payout
      };
    case LIKE_POST:
      state.allPosts.map(post=> {
        if(post.id === action.payout){
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
