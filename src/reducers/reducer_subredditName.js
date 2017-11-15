import { UPDATE_ACTIVE_SUBREDDIT } from '../actions';

export default ( state='news', action ) => {

  switch ( action.type ) {

    case UPDATE_ACTIVE_SUBREDDIT:
      return action.payload;

  }

  return state;
};