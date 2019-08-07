export default function storyReducer(state={stories: [], loading: false}, action) {
  switch(action.type) {

    case 'LOADING_STORIES':
      return {...state, loading:true};

    case 'FETCHING_STORIES':
      return {stories: [...state.stories, action.payload], loading: false}

      // need another case or seperate reducer for commentAction. just add another comments key point to array for now.

    default:
      return state;
  }
}
