export default function storyReducer(state={authorStories:[], stories: [], loading: false}, action) {
  switch(action.type) {

    case 'LOADING_STORIES':
      return {...state, loading:true};

    case 'FETCHING_STORIES':
      return {...state, stories: [...state.stories, action.payload], loading: false}

    case 'LOADING_AUTHORCREATEDSTORY':
      return {...state, loading:true};

    case 'ADDING_AUTHORCREATEDSTORY':
      return {...state, authorStories: [...state.authorStories, action.payload], loading:false}

    default:
      return state;
  }
}
