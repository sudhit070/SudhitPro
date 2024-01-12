import { messages } from "../../_helpers/messages";
import { SAY_HELLO, SEND_MESSAGE, DELETE_MESSAGE } from "../constants/skypeconst";

export const messagesReducer = (state = messages, action) => {
    switch (action.type) {
        case SAY_HELLO:
            let newmeg = {
                is_user_msg: true,
                number: 0,
                text: action.msg.msg
            };

            state[action.msg.user_id] = { 0: newmeg };

            return {
                ...state
            }

        case SEND_MESSAGE:

            if (action.usermsg.newmsg !== '') {
                let currentIndex = state[action.usermsg.user_id] ? Object.keys(state[action.usermsg.user_id]).length : 0, newmsge = {
                    is_user_msg: true,
                    number: currentIndex,
                    text: action.usermsg.newmsg
                }

                if (currentIndex == 0) {
                    state[action.usermsg.user_id] = { 0: newmsge };
                } else {
                    state[action.usermsg.user_id][currentIndex] = newmsge;
                }


            }

            return {
                ...state
            }
        case DELETE_MESSAGE:

            delete state[action.userMsgIndex.use_id][action.userMsgIndex.msgIndex]

            return {
                ...state
            }
        default:
            return state
    }
}