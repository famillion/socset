import initialState from './../testState/testState';
import constants from './messagesActions';

const initMessageState = initialState.homepage.messages;

const { ADD_NEW_MESSAGE, UPDATE_NEW_MESSAGE } = constants;

export const messageReducer = (state = initMessageState, action) => {

  switch (action.type) {
    case ADD_NEW_MESSAGE:
      action.payout.body = state.newMessageText;
      state.allMessages.push(action.payout);

      return {
        ...state,
        allMessages: [...state.allMessages],
        newMessageText: ''
      }
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: action.payout
      }
    default:
      return state;
  }
};
