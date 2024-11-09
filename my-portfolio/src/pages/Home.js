// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import '../styles/buttons.css';

function Home() {
    return (
        <main className="home">
            <section className="intro">
                <h1>My <span className="highlight">Projects</span> & <span className="highlight">Skills</span></h1>
                <p>Discover the work I’ve done and the skills I bring to the table. Click on a project in the projects page to dive into its details, or explore my thoughts and learnings through my blogs.</p>
                <div className="cta-buttons">
                    <Link to="/projects" className="cta primary">View Projects</Link>
                    <Link to="/blog" className="cta secondary">Read Blog</Link>
                </div>
            </section>

            <section className="content-section">
                <h2>About Me</h2>
                <section className="skills-section">
                    <div className="skills-icons-grid">
                        <div><img src="path/to/icon1.png" alt="Tech Icon 1" /></div>
                        <div><img src="path/to/icon2.png" alt="Tech Icon 2" /></div>
                        <div><img src="path/to/icon3.png" alt="Tech Icon 3" /></div>
                        <div><img src="path/to/icon4.png" alt="Tech Icon 4" /></div>
                        {/* Additional icons */}
                    </div>
                    <div className="skills-list">
                        <h3>Skills</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                </section>

                <h2 className="recent-blogs-title">Recent Blogs</h2>
                <div className="recent-blogs">
                    <div className="project-card">
                        <h3>Project 1</h3>
                        <p>A brief description of Project 1.</p>
                        <Link to="/projects#project1" className="project-link">Learn More</Link>
                    </div>
                    <div className="project-card">
                        <h3>Project 2</h3>
                        <p>A brief description of Project 2.</p>
                        <Link to="/projects#project2" className="project-link">Learn More</Link>
                    </div>
                    <div className="project-card">
                        <h3>Project 2</h3>
                        <p>A brief description of Project 2.</p>
                        <Link to="/projects#project2" className="project-link">Learn More</Link>
                    </div>
                </div>
            </section>

            <h2>Connect With Me</h2>
            <section className="quick-links">
                <a href="path/to/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta small">Download Resume</a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="cta small">LinkedIn</a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="cta small">GitHub</a>
            </section>
        </main>
    );
}

export default Home;
