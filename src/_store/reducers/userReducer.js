import { user } from "../../_helpers/user";
import { SET_ACTIVE_USER } from "../constants/skypeconst";

export const skypeReducer = (state = user, action) => {

    switch (action.type) {
        case SET_ACTIVE_USER:
            let newSender = action.usrid;
            return {
                ...state,
                email: newSender.email,
                name: newSender.name,
                profile_pic: newSender.profile_pic,
                status: newSender.status,
                user_id: newSender.user_id
            }

        default:
            return state
    }
}