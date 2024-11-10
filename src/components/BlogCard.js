// src/components/BlogCard.js
import React from 'react';
import '../styles/blogCard.css';

function BlogCard({ post }) {
    return (
        <a href={`#${post.id}`} className="blog-card-link">
            <div className="blog-card">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-content">
                    <div className="blog-left">
                        <h3>{post.title}</h3>
                        <p>Created: {post.createdDate}</p>
                        <p>Edited: {post.editedDate}</p>
                    </div>
                    <div className="blog-right">
                        <p>{post.description}</p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default BlogCard;
