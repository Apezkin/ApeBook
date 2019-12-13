import React from "react";

function Post (props) {

    const removePost = async () => {
        await fetch (
            "http://apebookb-apebook.rahtiapp.fi/posts" + props.id, {
            method: "DELETE",
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"}
            }
        )
        
        window.location.href="/posts"
    };

    return (
        <div className="post">
            <button onClick={removePost} className="removePostButton">Remove</button>
            <h5>{props.user}</h5>
            <h3>{props.title}</h3>
            <p className="content">{props.text}</p>
        </div>
    );
}

export default Post;