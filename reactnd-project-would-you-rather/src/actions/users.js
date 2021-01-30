export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';

export function fetchAllUsers(users) {
    return  {
        type: FETCH_ALL_USERS, 
        users,
    }
}

