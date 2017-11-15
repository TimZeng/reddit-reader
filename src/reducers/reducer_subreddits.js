import {
  ADD_SUBREDDIT, REMOVE_SUBREDDIT
} from '../actions/index';

export default ( state = ['news'], action ) => {

  switch ( action.type ) {

    case ADD_SUBREDDIT:
      const subreddit = state.find(element => element === action.payload);
      if ( !subreddit ) return [ ...state, action.payload ];

  }

  return state;

};