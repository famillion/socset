const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

export const addNewMessage = (message) => ({type: ADD_NEW_MESSAGE, payout: message});

export const updateNewMessage = (text) => ({type: UPDATE_NEW_MESSAGE, payout: text});

export default {
  ADD_NEW_MESSAGE,
  UPDATE_NEW_MESSAGE
}
