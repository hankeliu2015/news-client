export default function commentReducer(state={comments: [], loading: false}, action) {
  switch(action.type) {

    case 'UPLOADING_COMMENT':

    case 'FETCHING_COMMENT':

    default:
      return state;
  }
}
