export const deleteSession = (data) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/sessions/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'DELETE',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(session => dispatch({type: 'DELETE_SESSION', payload: session}))
  }

}