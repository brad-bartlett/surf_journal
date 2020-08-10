export const addSession = (Session, beachId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/beaches/${beachId}/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Session)
      })
      .then(response => response.json())
      .then(beach => {
          if (beach.error) {
            alert(beach.error)
          } else {
            dispatch({type: 'ADD_SESSION', payload: beach})
          }
        }
      )
    }
  }