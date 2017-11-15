import {
  FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS
} from '../actions/index';

export default ( state=[], action ) => {

  switch ( action.type ) {

    case FETCH_POSTS_SUCCESS:
      return action.payload;

  }

  return state;

}