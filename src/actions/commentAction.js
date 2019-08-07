export function commentUpload(storyComment) {
  // let commentData = storyComment.serializeArray();
  // debugger
  return dispatch => {
    dispatch({type: 'UPLOADING_COMMENT'});
    return (
      fetch('https://localhost:3001/comments.json', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'X-CSRF-Token': valueCSRF
      },
      body: JSON.stringify(storyComment),
      credentials: 'same-origin'  //might not need this.

      })
      .then(resp => resp.json())
      .then(comment => {
        dispatch({type:'FETCHING_COMMENT', payload: comment})
      })
      .catch(function(error) {console.log('There has been a problem with your fetch operation: ', error.message);})

      // .then(resp => reap.json()) // use this to update redux state.
    )
  }
}
