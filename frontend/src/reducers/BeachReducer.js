export default function beachReducer(state = {beaches: []}, action) {
  switch (action.type) {
    case 'FETCH_BEACHES':
      return {beaches: action.payload}
    case 'ADD_SESSION':
      return {...state, beaches: [...state.beaches, action.payload]}
    // case 'ADD_BEACH':
    //   let beaches = state.beaches.map(beach => {
    //     if (beach.id === action.payload.id) {
    //       return action.payload
    //     } else {
    //       return beach
    //     }
    //   })
    //   return {...state, beaches: beaches}
    case 'DELETE_SESSION':
      let beachesTwo = state.beaches.map(beach => {
        if (beach.id === action.payload.id) {
          return action.payload
        } else {
          return beach
        }
      })
      return {...state, beaches: beachesTwo}
    // case 'EDIT_BEACH':
    //   let beachesThree = state.beaches.map(beach => {
    //     if (beach.id === action.payload.id) {
    //       return action.payload
    //     } else {
    //       return beach
    //     }
    //   })
    //   return {...state, beaches: beachesThree}
    default:
      return state
  }
}