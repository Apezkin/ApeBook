import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function NewPost() {

    const [length, setLength] = useState(0); //For a visual representation of how long the post text is
    
    const charCounter = (event => { //Updating the char counter for post text
        event.preventDefault();
        setLength(event.target.value.length);
        });

    const submitPost = (async event => { //Post to database
        event.preventDefault();
        const bodyData = {
            user: event.target.user.value,
            title: event.target.title.value,
            text: event.target.text.value
        }
        await fetch(
            "http://apebookb-apebook.rahtiapp.fi/posts", {
                method: "post",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(bodyData)
            }
        );
        window.location.href="/posts" //Go back to mainpage after posting
    });

    return(
        <div className="app">
            <h1 className="title">ApeBook</h1>
            <h2 className="title2">New Post</h2>
            <Link to="/posts">
                <button className="button">Back</button>
            </Link>
            <form onSubmit={submitPost} className="title2">
                User:<br></br>
                <input className="inputUser" type="text" maxLength="20" name="user"></input><br></br>
                Title:<br></br>
                <input className="input" type="text" maxLength="50" name="title"></input><br></br>
                Text:<br></br>
                <textarea onChange={charCounter} className="input2" maxLength="500" name="text" rows="4" cols="100"></textarea>
                <p className="margin">Characters: {length}/500</p>
                <button type="submit" className="button2">Save</button>
            </form>
        </div>
    );
}

export default NewPost;