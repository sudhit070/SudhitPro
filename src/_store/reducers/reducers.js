import { combineReducers } from "redux";
import { skypeReducer } from "./userReducer";
import { practiceobReducer } from "./practiceobReducer";
import { contactReducer } from "./contactsReducer";
import { messagesReducer } from "./messagesReducers";

export default combineReducers({
    user: skypeReducer,
    practiceob: practiceobReducer,
    contacts: contactReducer,
    messages: messagesReducer,
})