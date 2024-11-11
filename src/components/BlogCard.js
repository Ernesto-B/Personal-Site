import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/blogCard.css';

function BlogCard({ post }) {
    return (
        <Link to={`/blog/${post.id}`} className="blog-card-link">
            <div className="blog-card">
                <div className="blog-image-container">
                    <img src={post.image} alt={post.title} className="blog-image" />
                    <div className="blog-image-overlay"></div> {/* Overlay only affects the image */}
                </div>
                <div className="blog-content">
                    <div className="blog-left">
                        <h3>{post.title}</h3>
                        <p className="date">Created: {post.createdDate}</p>
                        <p className="date">Edited: {post.editedDate}</p>
                    </div>
                    <div className="blog-right">
                        <p>{post.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BlogCard;
