export * from './request';

export const ADD_SUBREDDIT = 'ADD_SUBREDDIT';
export const REMOVE_SUBREDDIT = 'REMOVE_SUBREDDIT';
export const UPDATE_ACTIVE_SUBREDDIT = 'UPDATE_ACTIVE_SUBREDDIT';

export const addSubreddit = subreddit => ({
  type: ADD_SUBREDDIT,
  payload: subreddit
});

export const updateActiveSubreddit = subreddit => ({
  type: UPDATE_ACTIVE_SUBREDDIT,
  payload: subreddit
});