// src/pages/BlogPost.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../styles/blogPost.css';

function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/blogPosts/blogPosts.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load blog posts");
                }
                return response.json();
            })
            .then((data) => {
                const foundPost = data.find((post) => post.id === id);
                setPost(foundPost);
            })
            .catch((error) => console.error("Error loading blog post:", error));
    }, [id]);

    if (!post) {
        return <div className="blog-post-content">Blog post not found</div>;
    }

    return (
        <div className="blog-post-container">
            <div className="blog-post-content">
                <h1>{post.title}</h1>
                <p className="blog-post-date">
                    Created: {post.createdDate} | Edited: {post.editedDate}
                </p>
                <ReactMarkdown
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={oneDark}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        }
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </div>
            <button
                onClick={() => navigate('/blog')}
                className="back-button"
            >
                ← Back to Blogs
            </button>
        </div>
    );
}

export default BlogPost;
