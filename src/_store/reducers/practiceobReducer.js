import { SET_TECHNOLOGY, WITHDRAW_MONEY, DEPOSIT_MONEY, INCREASE_TIME, DECREASE_TIME } from '../constants/constants';

const practiceob = {
    'text': 'react',
    'ownername': "Ohans Emmanuel",
    'balance': 50000,
    'clock' : {
        days: 1,
        hours: 6,
        minutes: 20,
        seconds: 0,
        activeSession: "minutes"
    }
};

export const practiceobReducer = (state = practiceob, action) => {
    switch (action.type) {
        case SET_TECHNOLOGY:
            return {
                ...state,
                text: action.text
            }
        case WITHDRAW_MONEY:


            let afterwidthValue = state.balance - action.value;

            if (afterwidthValue < 0) {
                alert('Don\'t you have enough money!')
                return state
            }
            return {
                ...state,
                balance: afterwidthValue
            }
        case DEPOSIT_MONEY:

            let afterdepovalue = state.balance + parseInt(action.value);

            if (afterdepovalue > 100000) {
                alert('Exceeded Account limit reached!')
                return state
            }


            return {
                ...state,
                balance: afterdepovalue
            }
        case INCREASE_TIME:

            let increstime = state.clock;

            increstime.seconds += parseInt(action.time);

            if (increstime.seconds >= 60) {

                console.log(increstime.seconds)
                let minute = Math.floor(increstime.seconds / 60);
                increstime.minutes += minute;
                increstime.seconds -= 60;
            }
            if (increstime.minutes >= 60) {
                let hours = Math.floor(increstime.minutes / 60);
                increstime.hours += hours;
                increstime.minutes -= 60;
            }
            if (increstime.hours >= 24) {
                let days = Math.floor(increstime.hours / 24);
                increstime.days += days;
                increstime.hours -= 24;
            }

            return {
                ...state,
                clock: increstime
            }
        case DECREASE_TIME:

            let decresetime = state.clock;

            decresetime.seconds -= parseInt(action.time);

            if (decresetime.seconds <= 0 ) {
                if(decresetime.minutes <= 0){
                    if (decresetime.hours <= 0) {
                        if (decresetime.days <= 0 && (decresetime.seconds +  parseInt(action.time) <= 0)) {
                            alert('You don\'t have a enough time to reduce!');
                            return state
                        }else {
                            if(decresetime.seconds + parseInt(action.time) <= 0){
                                decresetime.days -= 1;
                            }
                        }
                    }else {
                        decresetime.hours -= 1;
                        decresetime.minutes = 59; 
                    }    
                                
                }else {
                    decresetime.minutes -= 1;
                    if( decresetime.seconds == 0){
                        decresetime.seconds = 0 ;
                    }else {
                        decresetime.seconds += 60;
                    }
                }
               
            }

            console.log(decresetime)

            return {
                ...state,
                clock: decresetime
            }

        default:
            return state
    }



}

