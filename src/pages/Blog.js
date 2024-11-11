import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/blog.css';
import blogPosts from '../blogPosts/blogPost.json'; // Direct import of the JSON data

function Blog() {
    const [search, setSearch] = useState("");

    // Filter posts based on the search query
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
