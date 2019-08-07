export default function commentFetch() {
  return dispatch => {
    dispatch({type: 'FETCHING_COMMENTS'});
    return (
      fetch('/comments')
        .then(resp => resp.json())
        .then(comments => dispatch({type: 'LOADING_COMMENTS', payload: comments}))
    )
  }
}
