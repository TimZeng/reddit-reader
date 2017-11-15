import axios from 'axios';

const endpoint = 'https://www.reddit.com/r/';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const fetchPostsRequest = () => ({type: FETCH_POSTS_REQUEST});

const fetchPostsFailure = (subreddit, error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: { subreddit, error: error }
});

const fetchPostsSuccess = res => ({
  type: FETCH_POSTS_SUCCESS,
  payload: res.data.data.children
});

export const fetchPosts = (subredditName, params={}) => {
  let queryString = '?limit=20';

  for ( let param in params ) {
    queryString += `&${param}=${params[param]}`;
  }

  const requestUrl = `${endpoint}${subredditName}.json${queryString}`;

  return dispatch => {
    dispatch(fetchPostsRequest())
    return axios.get(requestUrl)
      .then(res => dispatch(fetchPostsSuccess(res)))
      .catch(err => dispatch(fetchPostsFailure(subredditName, err)));
  }
};
