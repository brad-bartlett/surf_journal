export default function sessionReducer(state = {sessions: []}, action) {
  switch (action.type) {
    
    case 'FETCH_SESSIONS':
        return {sessions: action.payload}

    case 'ADD_SESSION':
      console.log('action', action)
      return {...state, sessions: [...state.sessions, action.payload]}
    
    case 'DELETE_SESSION':
      let sessionsTwo = state.sessions.map(session => {
        if (session.id === action.payload.id) {
          return action.payload
        } else {
          return session
        }
      })
      
      return {...state, sessions: sessionsTwo}
    
    default:
      return state
  }
}