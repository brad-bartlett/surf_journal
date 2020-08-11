
export default function SessionReducer(state = {sessions: []}, action) {
    switch (action.type){
        case 'FETCH_SESSIONS':
            return {
                sessions: action.payload
            }
            case 'ADD_SESSION':
                return {...state, sessions: [...state.sessions, action.payload]}
                
        
            default:
            return state
    }
}