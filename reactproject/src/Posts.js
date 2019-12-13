import React, { useState, useEffect } from 'react';
import './App.css';
import Post from "./Post";
import { Link } from "react-router-dom";

function Posts() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [posts, setPosts] = useState([]);

    const fetchItems = async () => {
        let data, jsonData;
        data = await fetch(
            "http://apebookb-apebook.rahtiapp.fi/posts"
        );
        
        jsonData = await data.json();
        setPosts(jsonData);
    }

    return (
        <div className="app">
            <h1 className="title">ApeBook</h1>
            <h2 className="title2">Posts:</h2>
            <Link to="/newPost">
                <button className ="button">New Post</button>
            </Link>
            {posts.map(post => (
                <Post key={post._id} id={post._id} user={post.user} title={post.title} text={post.text} />
            ))}

        </div>
    );
}

export default Posts;