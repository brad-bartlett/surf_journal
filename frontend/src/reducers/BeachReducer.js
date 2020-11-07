export default function beachReducer(state = {beaches: []}, action) {
  switch (action.type) {
    case 'FETCH_BEACHES':
      return {beaches: action.payload}

       default:
      return state
  }
}

// export default function sessioneducer(state = {sessions: []}, action) {
//   switch (action.type) {
//     case 'ADD_SESSION':
//       return {...state, sessions: [...state.sessions, action.payload]}
//     case 'DELETE_SESSION':
//       let sessionsTwo = state.sessions.map(beach => {
//         if (beach.id === action.payload.id) {
//           return action.payload
//         } else {
//           return beach
//         }
//       })
//       return {...state, sessions: sessionsTwo}
    // case 'EDIT_BEACH':
    //   let beachesThree = state.beaches.map(beach => {
    //     if (beach.id === action.payload.id) {
    //       return action.payload
    //     } else {
    //       return beach
    //     }
    //   })
    //   return {...state, beaches: beachesThree}
//     default:
//       return state
//   }
// }