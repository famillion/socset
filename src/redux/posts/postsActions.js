const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const LIKE_POST = 'LIKE_POST';

export const addPostAction = (post) => (
  {
    type: ADD_NEW_POST,
    payout: post
  }
);

export const updateNewPostTextAction = (text) => (
  {
    type: UPDATE_NEW_POST,
    payout: text
  }
);

export const likePost = (id) => ({ type: LIKE_POST, payout: id });


export default {
  ADD_NEW_POST: 'ADD_NEW_POST',
  UPDATE_NEW_POST: 'UPDATE_NEW_POST',
  LIKE_POST: 'LIKE_POST'
};
