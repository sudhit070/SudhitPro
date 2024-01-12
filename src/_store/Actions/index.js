import { SET_TECHNOLOGY, WITHDRAW_MONEY, DEPOSIT_MONEY, INCREASE_TIME, DECREASE_TIME } from '../constants/constants';

export const setTechnology = (state) => {
    return {
        type : SET_TECHNOLOGY,
        text : state
    }
}

export const withdrawMoney = (state) => {
    return {
        type : WITHDRAW_MONEY,
        value: state
    }
}

export const depositMoney = (state) => {
    return {
        type : DEPOSIT_MONEY,
        value: state
    }
}

export const increseTime = (state) => {
    return {
        type : INCREASE_TIME,
        time: state
    }
}

export const discreseTime = (state) => {
    return {
        type : DECREASE_TIME,
        time: state
    }
}