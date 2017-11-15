import { combineReducers } from 'redux';

import PostsReducer from './reducer_posts';
import SubredditNameReducer from './reducer_subredditName';
import SubredditsReducer from './reducer_subreddits';
import ProcessingReducer from './reducer_processing';
import AlertReducer from './reducer_alert';

const rootReducer = combineReducers({
  posts: PostsReducer,
  subredditName: SubredditNameReducer,
  subreddits: SubredditsReducer,
  processing: ProcessingReducer,
  alert: AlertReducer
});

export default rootReducer;