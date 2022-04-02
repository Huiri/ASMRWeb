import React from 'react';
import QuoraBox from './QuoraBox';
import Post from './Post';
const Feed = () => {
    return (
        <div className="feed">
            <QuoraBox/>
            <Post />
        </div>
    );
};

export default Feed;