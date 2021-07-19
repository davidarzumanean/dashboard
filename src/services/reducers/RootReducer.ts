import { combineReducers } from "redux";
import ContactsReducer from "./ContactsReducer";

const RootReducer = combineReducers({
  contacts: ContactsReducer,
});

export default RootReducer;
