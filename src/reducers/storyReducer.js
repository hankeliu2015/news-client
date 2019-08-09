export default function storyReducer(state={stories: [], loading: false}, action) {
  switch(action.type) {

    case 'LOADING_STORIES':
      return {...state, loading:true};

    case 'FETCHING_STORIES':
      return {stories: [...state.stories, action.payload], loading: false}

    case 'LOADING_AUTHORCREATEDSTORY':
      return {...state, loading:true};

    case 'ADDING_AUTHORCREATEDSTORY':
      return {story: action.payload, loading:false}

    default:
      return state;
  }
}
