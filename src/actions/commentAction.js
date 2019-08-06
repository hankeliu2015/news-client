export function() {

  return dispatch => {
    dispatch({type: 'UPLOADING_COMMENT'});
    return (
      fetch('/storyComments')
        .then(resp => reap.json())
    )
  }
}
