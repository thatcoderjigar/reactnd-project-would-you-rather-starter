import { getInitLoad } from "../utils/Api"
import { fetchAllQuestions } from "./questions"
import { fetchAllUsers } from "./users"

export function handleInitLoad() {
    return dispatch => {
        return getInitLoad().then(({users, questions}) => {
            dispatch(fetchAllQuestions(questions));
            dispatch(fetchAllUsers(users));
        })
    }
}