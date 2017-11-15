import React from 'react';

export const SubredditTag = ({ active, tagName, onClick, onClose }) => (
  <div className={`button subreddit-tag ${active?'active':''}`}>
    <span className='tag-name' onClick={onClick}>
      {tagName}
    </span>

    <i
      onClick={onClose}
      className="button fa fa-times"
    />
  </div>
);