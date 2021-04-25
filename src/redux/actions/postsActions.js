import constants from './../constants/constants';

const { ADD_NEW_POST, UPDATE_NEW_POST } = constants;

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
