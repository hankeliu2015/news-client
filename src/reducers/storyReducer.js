export default function storyReducer(state={authorStories:[], allAuthorsStories:[], stories: [], loading: false}, action) {
  switch(action.type) {

    case 'LOADING_STORIES':
      return {...state, loading:true};

    case 'FETCHING_STORIES':
      return {...state, stories: [...state.stories, action.payload], loading: false};

    case 'LOADING_AUTHORCREATEDSTORY':
      return {...state, loading:true};

    case 'ADDING_AUTHORCREATEDSTORY':   // will show it on the page when author is writing. as confirmation the story is published.
      return {...state, authorStories: [...state.authorStories, action.payload], loading:false};

    case 'FETCHING_AUTHORSCREATEDSTORIES':
      return {...state, loading:true};

    case 'LOADING_AUTHORSCREATEDSTORIES':   //will show them on homepage to let other authors read
      return {...state, allAuthorsStories: action.payload, loading: false};

    default:
      return state;
  }
}
