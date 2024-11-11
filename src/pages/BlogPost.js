import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/blog.css';

function Blog() {
    const [search, setSearch] = useState("");
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        // Fetch the blog posts from the public folder
        fetch('/blogPosts/blogPosts.json')
            .then(response => response.json())
            .then(data => setBlogPosts(data))
            .catch(error => console.error("Error loading blog posts:", error));
    }, []);

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
