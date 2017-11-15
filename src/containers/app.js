import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  PostCard,
  Loading,
  SearchInput,
  SubredditTag,
  Alert
} from '../components';

import {
  fetchPosts,
  addSubreddit,
  removeSubreddit,
  updateActiveSubreddit
} from '../actions';

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
        <img src='/images/logo.png'/>
        <span>Reddit Reader</span>
      </header>
    )
  }

  renderSubreddits() {
    const { subreddits, subredditName } = this.props;
    return (
      <div className='subreddit-tag-container'>
        { subreddits.map((subreddit, index) =>
          <SubredditTag
            key={ subreddit }
            active={ subreddit === subredditName }
            tagName={subreddit}
            index={index}
            onClick={this.changeSubreddit}
            onClose={this.removeSubreddit}
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

  renderAlert() {
    const { alert } = this.props;
    return ( <Alert alert={alert}/> )
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

  removeSubreddit = index => {
    this.props.removeSubreddit(index);
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
        { this.renderAlert() }

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

const mapStateToProps = ({ posts, subredditName, subreddits, processing, alert }) =>
({ posts, subredditName, subreddits, processing, alert });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts, addSubreddit, removeSubreddit, updateActiveSubreddit
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);