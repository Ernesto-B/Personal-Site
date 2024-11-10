// src/pages/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../styles/blog.css';

// Sample blog data (same as in Blog.js)
const blogData = [
    {
        id: 1,
        title: "Blog Post 1",
        description: "A short description or excerpt from Blog Post 1.",
        dateCreated: "2023-12-01",
        dateEdited: "2023-12-02",
        image: "path/to/image1.jpg",
        markdownContent: "# Blog Post 1\n\nThis is the content of Blog Post 1."
    },
    {
        id: 2,
        title: "Blog Post 2",
        description: "A short description or excerpt from Blog Post 2.",
        dateCreated: "2023-11-28",
        dateEdited: "2023-12-01",
        image: "path/to/image2.jpg",
        markdownContent: "# Blog Post 2\n\nThis is the content of Blog Post 2."
    }
];

function BlogPost() {
    const { id } = useParams();
    const blog = blogData.find(b => b.id.toString() === id);

    if (!blog) {
        return <p>Blog post not found.</p>;
    }

    return (
        <main className="blog-post">
            <h1>{blog.title}</h1>
            <p><strong>Created:</strong> {blog.dateCreated}</p>
            <p><strong>Edited:</strong> {blog.dateEdited}</p>
            <img src={blog.image} alt={blog.title} className="blog-post-image" />
            <ReactMarkdown>{blog.markdownContent}</ReactMarkdown>
        </main>
    );
}

export default BlogPost;
