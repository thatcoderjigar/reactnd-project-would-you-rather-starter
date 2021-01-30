import { ADD_NEW_QUESTION, ANSWER_QUESTION, FETCH_ALL_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {

    switch (action.type) {

        case FETCH_ALL_QUESTIONS : 
            return {
                ...state, 
                ...action.questions
            }
        
        case ANSWER_QUESTION : {
            const {authUser, questionId, answer} = action;
            return {
                ...state, 
                [questionId] : {
                    ...state[questionId],
                    [answer] : {
                        ...state[questionId][answer],
                        votes: state[questionId][answer].votes.push(authUser)
                    }
                }
            }
        };

        case ADD_NEW_QUESTION : {
            const {question} = action;
            return {
                ...state, 
                [question.questionId] : question 
            }
        };

        default: 
            return state;
    }
}