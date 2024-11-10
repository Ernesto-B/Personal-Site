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
                        <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" /></div>
                        <div><img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript" /></div>
                        <div><img src="https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png" alt="Python" /></div>
                        <div><img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="C++" /></div>
                        <div><img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java" /></div>
                        <div><img src="https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png" alt="Node" /></div>
                        <div><img src="https://static-00.iconduck.com/assets.00/file-type-nginx-icon-1793x2048-yt5u3fm7.png" alt="NGINX" /></div>
                        <div><img src="https://cdn-icons-png.flaticon.com/512/919/919853.png" alt="Docker" /></div>
                        <div><img src="https://cdn-icons-png.flaticon.com/512/518/518713.png" alt="Linux" /></div>
                        <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" alt="GraphQL" /></div>
                        <div><img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="MongoDB" /></div>
                        <div><img src="https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png" alt="Redis" /></div>
                        <div><img src="https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png" alt="PostgreSQL" /></div>
                    </div>
                    <div className="skills-list">
                        <h3>Skills</h3>
                        <ul>
                            <li>Backend software development</li>
                            <li>Unit/integration Testing</li>
                            <li>CI/CD pipelining</li>
                            <li>Networked Systems</li>
                            <li>System Design and Architecture</li>

                        </ul>
                    </div>
                </section>

                <h2 className="recent-blogs-title">Recent Blogs (!)</h2>
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
                <a href="path/to/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta small">Download Resume (!)</a>
                <a href="https://www.linkedin.com/in/ernesto-barreto-58a9b0258/" target="_blank" rel="noopener noreferrer" className="cta small">LinkedIn</a>
                <a href="https://github.com/Ernesto-B?tab=repositories&q=demo&type=&language=&sort=" target="_blank" rel="noopener noreferrer" className="cta small">GitHub</a>
            </section>
        </main>
    );
}

export default Home;
