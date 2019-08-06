export function() {

  return dispatch => {
    dispatch({type: 'UPLOADING_COMMENT'});
    return (
      fetch('/comments', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-Token': valueCSRF
      },
      body: JSON.stringify(dataFromMyForm),
      credentials: 'same-origin'

      })
      // .then(resp => reap.json())
    )
  }
}
