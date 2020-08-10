
export default function SessionReducer(state = {sessions: []}, action) {
    switch (action.type){
        case 'FETCH_SESSIONS':
            return {
                sessions: action.payload
            }
        case 'ADD_SESSION':
            let beaches = state.beaches.map(beach => {
                if (beach.id === action.payload.id){
                    return action.payload
                } else {
                    return beach
                }
            })
                return {...state, beaches: beaches}
        
            default:
            return state
    }
}