import { ADD_NEW_QUESTION, ANSWER_QUESTION } from "../actions/questions";
import { FETCH_ALL_USERS } from "../actions/users";

export default function users(state = {}, action) {

    switch (action.type) {

        case FETCH_ALL_USERS:
            return {
                ...state, 
                ...action.users,
            };

        case ANSWER_QUESTION:
            const {authUser, questionId, answer} = action;
            return {
                ...state,
                [authUser] : {
                    ...state[authUser], 
                    answers: {
                        ...state[authUser].answers, 
                        [questionId]: answer
                    }
                }
            };
        
        case ADD_NEW_QUESTION:
            const {id, user} = action;
            return {
                ...state,
                [user]: {
                    ...state[user], 
                    questions: state[user].questions.push(id)
                }
            };
        
        default:
            return state;
    }
}