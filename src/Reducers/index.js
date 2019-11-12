import { combineReducers } from "redux";
import blogDetailsReducer from "../Features/BlogsSlice";
import entryDetailsReducer from "../Features/EntriesSlice";

const rootReducer = combineReducers({
  blogs: blogDetailsReducer,
  entries: entryDetailsReducer
});

export default rootReducer;
