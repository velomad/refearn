import { combineReducers } from "redux";
import ui from "./ui";
import user from "./user";
import offers from "./offers";

export default combineReducers({
  ui,
  user,
  offers
});
