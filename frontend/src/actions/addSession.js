export const addSession = (data) => {
  console.log(data);
  return (dispatch) => {
    fetch(`http://localhost:3000/sessions`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(session => {
      console.log('session',session);
      if(session.error) {
        console.log('Error while adding session');
        return;
      } 
      dispatch({type: 'ADD_SESSION', payload: session})
    })
  }

}