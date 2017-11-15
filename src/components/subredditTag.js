import React from 'react';

export const SubredditTag = ({ active, tagName, index, onClick, onClose }) => (
  <div className={`button subreddit-tag ${active?'active':''}`}>
    <span className='tag-name' onClick={() => onClick(tagName)}>
      {tagName}
    </span>

    <i
      onClick={() => onClose(index)}
      className="button fa fa-times"
    />
  </div>
);