import { combineReducers, createStore } from "redux";
import postsReducer from "./posts/postsReducer";
import { messageReducer } from "./messages/messagesReducer";

const reducers = combineReducers({
  postsReducer,
  messageReducer
});

let store = createStore(reducers);

export default store;
