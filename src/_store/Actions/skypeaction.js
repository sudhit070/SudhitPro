import { SET_ACTIVE_USER, SAY_HELLO, SEND_MESSAGE, DELETE_MESSAGE } from "../constants/skypeconst";


export const setActiveUser = (state) => {
    return {
        type: SET_ACTIVE_USER,
        usrid: state
    }
}

export const sayHello = (state) => {
    return {
        type: SAY_HELLO,
        msg: state
    }
}

export const sendMessage = (state) => {
    return {
        type: SEND_MESSAGE,
        usermsg: state
    }
}

export const deleteMessage = (state) => {
    return {
        type: DELETE_MESSAGE,
        userMsgIndex: state
    }
}