import React from 'react';

const Post = ({post}) => {
    return (
        <div className='border-2 border-amber-50 rounded-2xl p-2 bg-green-300 shadow-2xl'>
            <h3 className='font-bold'>Title: <br /> {post.title} </h3>
            <h3>Body: {post.body} </h3>
        </div>
    );
};

export default Post;