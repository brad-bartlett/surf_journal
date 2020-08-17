export function fetchBeaches() {
    return (dispatch) => {
    fetch('http://localhost:3000/beaches')
    .then(resp => resp.json())
    .then(beaches => dispatch(
            { type: 'FETCH_BEACHES',
                payload: beaches }
        ))
}}

