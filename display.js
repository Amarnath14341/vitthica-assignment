import React from 'react';

const Display = (props) => {
    const post = props.post;
    console.log(post);
    return(
        <div>
        {post.map(info=> {
            return(
                <div>
                <p>{info.email}</p>
                <p>{info.fist_name + info.last_name}</p>
                </div>
            )
        })}
        </div>
    )
}

export default Display;
