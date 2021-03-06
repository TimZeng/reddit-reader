import { FETCH_POSTS_FAILURE } from '../actions';

export default (state = null, action) => {

  switch ( action.type ) {

    case FETCH_POSTS_FAILURE:
      const { error } = action.payload;
      const message = (!!error.response && error.response.data.message) || error.message || 'There is some issue loading posts.';
      return `subreddit '${action.payload.subreddit}': ${message}`;

  }

  return null;
}