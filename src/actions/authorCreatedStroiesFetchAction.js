export default function fetchAuthorsCreatedStories() {
  return dispatch => {
    dispatch({type: 'FETCHING_AUTHORSCREATEDSTORIES'});
    return (
      fetch('http://localhost:3001/stories')
      .then(resq => resq.json())
      .then(authorsCreatedStories => dispatch({type: 'LOADING_AUTHORSCREATEDSTORIES', payload: authorsCreatedStories }))
      .catch(function(error) {console.log('There has been a problem with your fetch operation:', error.message)})
    )
  }
}
