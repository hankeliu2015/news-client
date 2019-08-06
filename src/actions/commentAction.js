export function commentUpload(storyComment) {

  return dispatch => {
    dispatch({type: 'UPLOADING_COMMENT'});
    return (
      fetch('/comments', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'X-CSRF-Token': valueCSRF
      },
      body: JSON.stringify(storyComment) //? need pass in the bodydate
      //credentials: 'same-origin'  //might not need this.

      })
      // .then(resp => reap.json()) // use this to update redux state.
    )
  }
}
