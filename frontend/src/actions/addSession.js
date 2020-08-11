export const addSession = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/sessions', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(session => dispatch({type: 'ADD_SESSION', payload: session}))
  }

}