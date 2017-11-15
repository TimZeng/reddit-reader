import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PostCard, Loading, SearchInput, SubredditTag } from '../components';
import { fetchPosts, addSubreddit, updateActiveSubreddit } from '../actions';

class App extends Component {
  constructor() {
    super();

    this.state = {
      search: ''
    }
  }

  componentWillMount() {
    this.props.fetchPosts(this.props.subredditName);
  }

  renderHeader() {
    return (
      <header>
        <img src='https://seeklogo.com/images/R/reddit-logo-8ABF8F5F2B-seeklogo.com.png'/>
        <span>Reddit Reader</span>
      </header>
    )
  }

  renderSubreddits() {
    const { subreddits, subredditName } = this.props;
    return (
      <div className='subreddit-tag-container'>
        { subreddits.map(subreddit =>
          <SubredditTag
            key={ subreddit }
            active={ subreddit === subredditName }
            tagName={subreddit}
            onClick={this.changeSubreddit}
            onClose={() => console.log('should remove tag')}
          />
        ) }
      </div>
    )
  }

  renderLoading() {
    if ( !this.props.processing ) {
      return null;
    }

    return (
      <Loading />
    )
  }

  updateSearch = search => {
    this.setState({ search });
  }

  handleKeyPress = event => {
    if ( event.key === 'Enter' ) {
      this.submitSearch();
    }
  }

  submitSearch = () => {
    let { search } = this.state;
    search = search.replace(/\s/g, '');

    if ( search.length > 0 ) {
      this.props.addSubreddit(search);
      this.changeSubreddit(search);
      this.setState({ search: '' });
    }
  }

  changeSubreddit = subreddit => {
    const { fetchPosts, updateActiveSubreddit } = this.props;
    fetchPosts(subreddit);
    updateActiveSubreddit(subreddit);
  }

  renderSearchInput() {
    let { search } = this.state;
    search = search.replace(/\s/g, '');
    return (
      <SearchInput
        value={this.state.search}
        onChange={this.updateSearch}
        onKeyPress={this.handleKeyPress}
        onClick={this.submitSearch}
        disabled={search.length === 0}
      />
    )
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        { this.renderHeader() }
        { this.renderLoading() }

        <div className='container'>
          { this.renderSubreddits() }
          { this.renderSearchInput() }
          {
            posts.map(post => (
              <PostCard key={post.data.id} post={post} />
            ))
          }
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ posts, subredditName, subreddits, processing }) =>
({ posts, subredditName, subreddits, processing });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts, addSubreddit, updateActiveSubreddit
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);