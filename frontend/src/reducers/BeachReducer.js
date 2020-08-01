export default function BeachReducer(state = {beaches: []}, action) {
    switch (action.type){
        case 'FETCH_BEACHES':
            return {
                beaches: action.payload
            }
        default:
            return state
    }
}