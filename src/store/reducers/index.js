import { combineReducers } from "redux";
import { accountsReducer } from "./accounts";
import { feedbackReducer } from "./feedback";
import { userReducer } from "./user";

export default rootReducer = combineReducers({
    accounts: accountsReducer,
    user: userReducer,
    feedback: feedbackReducer,
})