export * from './request';

export const ADD_SUBREDDIT = 'ADD_SUBREDDIT';
export const REMOVE_SUBREDDIT = 'REMOVE_SUBREDDIT';

export const addSubreddit = (subreddit) => ({
  type: ADD_SUBREDDIT,
  payload: subreddit
});