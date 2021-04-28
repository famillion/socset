import { combineReducers, createStore } from "redux";
import postsReducer from "./posts/postsReducer";
import { messageReducer } from "./messages/messagesReducer";
import state from "./testState/testState";

const reducers = combineReducers({
  postsReducer,
  messageReducer
});

let store = createStore(reducers);

window.state = store;
export default store;
