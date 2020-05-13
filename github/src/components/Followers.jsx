import React, { useState } from 'react';


const Followers = ({ followers, following }) => {
    const [followView, setFollowView] = useState(true)
    console.log(following)

    const follow = (followArr) => {
        return (
            <div className="follow-grid">
                {followArr.map((follower,id) => (
                    <a key={id} href={follower.html_url}>
                    <div className="follow-card">
                        <div className="follow-img">
                            <img src={follower.avatar_url} alt={follower.login}></img>
                        </div>
                        <div className="follow-name">{follower.login} </div>
                    </div></a>
                ))}
            </div>
        )
    }

    const flipFollow = () => {
        setFollowView(!followView);
    }
    return (
        <div>
        {followView ? <div className="button-grid"><div className="button off">Followers</div><div className="button" onClick={flipFollow}>Following</div></div>: <div className="button-grid"><div className="button" onClick={flipFollow}>Followers</div><div className="button off">Following</div></div>}
        {followView ? follow(followers):follow(following)}
        
        </div>
        

    )
};

export default Followers;