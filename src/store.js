import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middleware = [thunk];
const initialState = {};

const store = createStore(
  () => {},
  initialState,
  applyMiddleware(...middleware)
);

export default store;
