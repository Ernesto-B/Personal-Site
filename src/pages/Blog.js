// src/pages/Blog.js
import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/blog.css';

const blogPosts = [
    {
        id: 1,
        title: "Blog Post 1: Pilot",
        description: "A short description or excerpt from Blog Post 1. A short description or excerpt from Blog Post 1. A short description or excerpt from Blog Post 1. A short description or excerpt from Blog Post 1. A short description or excerpt from Blog Post 1. A short description or excerpt from Blog Post 1. ",
        createdDate: "2023-12-01",
        editedDate: "2023-12-02",
        image: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeNzg-kMHhUBP4AmHnLsrPYzxKHVceLnkwtLhxZlDssj7KjhStloJR6px7EbquZ83uDcygnWkekxysvuNYVzLQ3GyBMRl2PpU7pO.jpg?r=db8",
    },
    {
        id: 2,
        title: "Blog Post 2",
        description: "A short description or excerpt from Blog Post 2.",
        createdDate: "2023-11-28",
        editedDate: "2023-12-01",
        image: "https://pbs.twimg.com/media/FRssFhjVUAADTaK.jpg",
    },
    // Add more blog posts here
];

function Blog() {
    const [search, setSearch] = useState("");

    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="blog-page">
            <div className="blog-posts">
                <h2>Blog Posts</h2>
                {filteredPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
            <aside className="blog-sidebar">
                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="popular-blogs">
                    <h3>Popular Blogs</h3>
                    <ul>
                        {blogPosts.map(post => (
                            <li key={post.id}>
                                <a href={`#${post.id}`}>{post.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </main>
    );
}

export default Blog;
