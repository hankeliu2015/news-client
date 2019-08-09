export function storyUpload(authorCreatedStory) {
  return dispatch => {
    dispatch({type: 'LOADING_AUTHORCREATEDSTORY'});
    return (
      fetch('http:localhost:3001/stories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(authorCreatedStory),
      })
      .then(resp => resp.json())
      .then(story => {
        dispatch({type: 'ADDING_AUTHORCREATEDSTORY', payload: story})
      })
      .catch(function(error) {console.log('There has been a problem with your fetch operation: ', error.message);})
    )
  }
}
