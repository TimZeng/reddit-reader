import { combineReducers } from 'redux';

import PostsReducer from './reducer_posts';
import SubredditNameReducer from './reducer_subredditName';

const rootReducer = combineReducers({
  posts: PostsReducer,
  subredditName: SubredditNameReducer
});

export default rootReducer;