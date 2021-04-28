export const ADD_NEW_POST = 'ADD_NEW_POST';
export const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
export const LIKE_POST = 'LIKE_POST';

export const addPostAction = (post) => (
  {
    type: ADD_NEW_POST,
    payload: post
  }
);

export const updateNewPostTextAction = (text) => (
  {
    type: UPDATE_NEW_POST,
    payload: text
  }
);

export const likePost = (id) => ({ type: LIKE_POST, payload: id });
