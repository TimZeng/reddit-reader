import { combineReducers } from 'redux';

import PostsReducer from './reducer_posts';
import SubredditNameReducer from './reducer_subredditName';
import SubredditsReducer from './reducer_subreddits';
import ProcessingReducer from './reducer_processing';

const rootReducer = combineReducers({
  posts: PostsReducer,
  subredditName: SubredditNameReducer,
  subreddits: SubredditsReducer,
  processing: ProcessingReducer
});

export default rootReducer;