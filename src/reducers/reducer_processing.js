import {
  FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS
} from '../actions/index';

export default ( state = false, action ) => {

  switch ( action.type ) {

    case FETCH_POSTS_REQUEST:
      return true;

    case FETCH_POSTS_SUCCESS:
      return false;

    case FETCH_POSTS_FAILURE:
      return false;

  }

  return state;

}