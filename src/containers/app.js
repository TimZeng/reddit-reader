import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PostCard from '../components/postCard';
import Loading from '../components/loading';
import { fetchPosts } from '../actions';

class App extends Component {
  componentWillMount() {
    this.props.fetchPosts('news');
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <header>
          <img src='https://seeklogo.com/images/R/reddit-logo-8ABF8F5F2B-seeklogo.com.png'/>
          <span>Reddit Reader</span>
        </header>

        <div className='container'>
          {
            posts.length === 0
            ? <Loading />
            : null
          }
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

const mapStateToProps = ({ posts, subredditName }) => ({ posts, subredditName });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);