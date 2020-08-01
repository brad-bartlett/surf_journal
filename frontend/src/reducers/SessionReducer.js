
export default function SessionReducer(state = {sessions: []}, action) {
    switch (action.type){
        case 'FETCH_SESSIONS':
            return {
                sessions: action.payload
            }
        default:
            return state
    }
}