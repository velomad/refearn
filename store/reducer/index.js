import { combineReducers } from "redux";
import auth from "./auth";
import ui from "./ui";

export default combineReducers({
  auth: auth,
  ui: ui,
});
