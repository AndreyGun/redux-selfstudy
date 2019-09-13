import React from 'react';

const Post = (props) => {
    const { title: postTitle, body: postBody } = props.post;
    return(
        <div className="post">
            <h2>{postTitle}</h2>
            <p>{postBody}</p>
        </div>
    );
}

export default Post;