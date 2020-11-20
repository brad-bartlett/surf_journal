export default function sessionReducer(state = {sessions: []}, action) {
  switch (action.type) {
    
    case 'FETCH_SESSIONS':
        return {sessions: action.payload}

    case 'ADD_SESSION':
      console.log('action', action)
      return {...state, sessions: [...state.sessions, action.payload]}
    
    default:
      return state
  }
}