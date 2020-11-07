export default function sessioneducer(state = {sessions: []}, action) {
  switch (action.type) {
    
    case 'ADD_SESSION':
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