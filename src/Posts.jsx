import React, { use } from 'react';

const Posts = ({postPromise}) => {

    const allPost = use(postPromise);
    return (
        <div className='text-center font-extrabold'>
            <h3>Total Post: {allPost.length} </h3>
        </div>
    );
};

export default Posts;