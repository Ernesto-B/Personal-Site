// src/pages/BlogPost.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../styles/blog.css';

function BlogPost() {
    const { id } = useParams(); // Get the blog post ID from the URL
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Import blogPosts.json dynamically
        import('../blogPosts/blogPosts.json')
            .then((module) => {
                const blogPosts = module.default;
                const foundPost = blogPosts.find(post => post.id === id);
                setPost(foundPost);
            })
            .catch(error => console.error("Error loading blog post:", error));
    }, [id]);

    if (!post) {
        return <div>Blog post not found</div>;
    }

    return (
        <div className="blog-post">
            <h2>{post.title}</h2>
            <p>Created: {post.createdDate} | Edited: {post.editedDate}</p>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
    );
}

export default BlogPost;
