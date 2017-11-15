import React from 'react';

export const PostCard = ({ post }) => (
  <div className='post-card'>
    <div className='title'>
      <a href={post.data.url} target='__blank'>{post.data.title}</a>
    </div>

    <p className='info light-text'>
      <span>by&nbsp;
        <a
          href={`https://www.reddit.com/user/${post.data.author}`}
          target='__blank'
        >
          {post.data.author}
        </a>
      </span>
      &nbsp;&middot;&nbsp;
      <span>{post.data.num_comments} comments</span>
      &nbsp;&middot;&nbsp;
      <span>{post.data.score} votes</span>
      &nbsp;&middot;&nbsp;
      <span>{post.data.subreddit}</span>
    </p>

  </div>
);

