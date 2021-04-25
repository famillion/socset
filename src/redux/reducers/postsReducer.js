import initialState from './../testState/testState';
import constants from './../constants/constants';

const { ADD_NEW_POST, UPDATE_NEW_POST } = constants;

const postsReducer = (state = initialState, action) => {

  let { allPosts, newPostText } = state.homepage.posts;

  switch (action.type) {
    case ADD_NEW_POST:
      action.payout.body = newPostText;
      allPosts.push(action.payout)
      newPostText = '';
      return { ...state };

    case UPDATE_NEW_POST:
      newPostText = action.payout;
      return { ...state };

    default:
      return state;
  }
}

export default postsReducer;
