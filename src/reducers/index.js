import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  lists: () => ({a:['a1','a2'],b:['b1','b2']}),
  subredditName: () => 'a'
});

export default rootReducer;