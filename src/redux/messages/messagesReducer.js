import initialState from './../testState/testState';
import { ADD_NEW_MESSAGE, UPDATE_NEW_MESSAGE } from './messagesActions';

const initMessageState = initialState.homepage.messages;

export const messageReducer = (state = initMessageState, action) => {

  switch (action.type) {
    case ADD_NEW_MESSAGE:
      action.payload.body = state.newMessageText;

      return {
        ...state,
        allMessages: [...state.allMessages, action.payload],
        newMessageText: ''
      }
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: action.payload
      }
    default:
      return state;
  }
};
