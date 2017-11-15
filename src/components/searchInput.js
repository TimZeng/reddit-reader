import React from 'react';

export const SearchInput = ({ value, onChange, onKeyPress, onClick, disabled }) => (
  <div className="light-text search-input">
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      onKeyPress={onKeyPress}
      placeholder='Search subreddits'
    />
    <i
      onClick={disabled ? null : onClick}
      className={`button fa fa-search ${disabled ? 'disabled' : ''}`}
    />
  </div>
);

