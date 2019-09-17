import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/actions/';

import Post from '../post';
import './post-list.css';

const PostList = ({ posts }) => {
    return(
        <div className="post-list">
        {
            posts.map( post => {
                return(
                    <div key={post.id}>
                        <Post post={post}/>
                    </div>
                );
            })
        }
        </div>
    );
};

class PostListContainer extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const {posts, loading, error} = this.props;

        if ( loading ) return <div>...Loading</div>;

        if ( error ) return <div>...Error</div>;

        return(
            <PostList posts={posts} />
        );
    }
};

const mapStateToProps = ({ posts, loading, error }) => {
    return {
        posts,
        loading,
        error
    }
}

const mapDispatchToProps = {
    fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);