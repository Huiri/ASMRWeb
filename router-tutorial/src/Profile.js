import React from 'react';

const data = {
    chaz:{
        name : '문희리',
        description : '리액트 공부 중'
    },
    happy : {
        name : '전해피',
        description : '공부 방해하는 고양이'
    }
};
const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];

    if(!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;