export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const FETCH_ALL_QUESTIONS = 'FETCH_ALL_QUESTIONS'

export function addNewQuestion(question) {
    return {
        type: ADD_NEW_QUESTION, 
        question, 
    };
}

export function answerQuestion(authedUser, questionId, answer) {
    return {
        type: ANSWER_QUESTION, 
        authedUser, 
        questionId, 
        answer,
    };
}

export function fetchAllQuestions(questions) {
    return {
        type: FETCH_ALL_QUESTIONS, 
        questions,
    }
}