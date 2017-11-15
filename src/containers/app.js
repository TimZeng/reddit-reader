import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PostCard, Loading, SearchInput } from '../components';
import { fetchPosts, addSubreddit } from '../actions';

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
    const { subreddits } = this.props;
    return (
      <div>
        { subreddits.map(subreddit => <span key={subreddit}>{subreddit} </span>) }
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

    this.props.addSubreddit(search);
    this.props.fetchPosts(search);
    this.setState({ search: '' });
  }

  renderSearchInput() {
    return (
      <SearchInput
        value={this.state.search}
        onChange={this.updateSearch}
        onKeyPress={this.handleKeyPress}
        onClick={null}
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
  fetchPosts, addSubreddit
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);