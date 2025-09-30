import React, { use } from 'react';
import Post from './Post';

const Posts = ({postPromise}) => {

    const allPost = use(postPromise);
    return (
        <div className='text-center'>
            <h3>Total Post: {allPost.length} </h3>

            <div className='border-2 rounded-2xl grid grid-cols-1 md:grid-cols-4 gap-4 p-4 '>
                {
                    allPost.map(post=> <Post post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;