import { combineReducers, createStore } from "redux";
import postsReducer from "./reducers/postsReducer";

const reducers = combineReducers({
  postsReducer
});

export let store = createStore(reducers);

// export default store;
