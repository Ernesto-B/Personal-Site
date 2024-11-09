// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import '../styles/buttons.css';

function Home() {
    return (
        <main className="home">
            <section className="intro">
                <h1>Visualize Your <span className="highlight">Projects</span> & <span className="highlight">Skills</span></h1>
                <p>Discover the work I’ve done and the skills I bring to the table. Explore my projects and dive into my thoughts in the blog.</p>
                <div className="cta-buttons">
                    <Link to="/projects" className="cta primary">View Projects</Link>
                    <Link to="/blog" className="cta secondary">Read Blog</Link>
                </div>
            </section>

            <section className="content-section">
                <div className="skills-section">
                    <h2>Technologies & Skills</h2>
                    <div className="skills-icons">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="Python" title="Python" />
                        <img src="path/to/icon2.png" alt="Django" title="Django" />
                        <img src="path/to/icon3.png" alt="React" title="React" />
                        {/* Add more icons as needed */}
                    </div>
                </div>
                
                <div className="projects-section">
                    <h2>Recent Projects</h2>
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
                </div>
            </section>

            <section className="quick-links">
                <h2>Connect with Me</h2>
                <a href="path/to/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta small">Download Resume</a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="cta small">LinkedIn</a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="cta small">GitHub</a>
            </section>
        </main>
    );
}

export default Home;
