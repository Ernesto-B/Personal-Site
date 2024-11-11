// src/pages/BlogPost.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../styles/blogPost.css';

function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/blogPosts/blogPosts.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const foundPost = data.find(post => post.id === id);
                setPost(foundPost);
            })
            .catch(error => console.error("Error loading blog post:", error));
    }, [id]);

    if (!post) {
        return <div className="blog-post-content">Blog post not found</div>;
    }

    return (
        <div className="blog-post-container">
            <button onClick={() => navigate('/blog')} className="back-button">
                ← Back to Blogs
            </button>
            <div className="blog-post-content">
                <h2>{post.title}</h2>
                <p>Created: {post.createdDate} | Edited: {post.editedDate}</p>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </div>
    );
}

export default BlogPost;
