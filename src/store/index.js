import { createStore, combineReducers } from "redux";
import fortunes from "./fortunes";

const reducers = combineReducers({
  fortunes,
});

export default createStore(reducers);
