export default function commentReducer(state={comments: [], loading: false}, action) {
  switch(action.type) {

    case 'UPLOADING_COMMENT':
      return {...state, loading:true};

    case 'FETCHING_COMMENT':
      return {comments: [...state.comments, action.payload], loading: false}

    default:
      return state;
  }
}
