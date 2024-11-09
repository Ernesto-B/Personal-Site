// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/projects.css';



function Projects() {
    return (
        <main>
            <section className="featured-projects">
                <h2>Featured</h2>
                <div className="featured-project-grid">
                    <ProjectCard
                        title="Featured Project 1"
                        description="A brief description of the featured project."
                        link="https://github.com/yourusername/featured_project1"
                        icons={["path/to/featured-icon2.png", "path/to/featured-icon2.png"]}
                        backgroundImage="https://www.flaticon.com/free-icons/javascript"
                    />
                    <ProjectCard
                        title="Featured Project 2"
                        description="A brief description of the featured project."
                        link="https://github.com/yourusername/featured_project2"
                        icons={["path/to/featured-icon3.png", "path/to/featured-icon4.png"]}
                        backgroundImage="path/to/featured-background2.jpg"
                    />
                </div>
            </section>
            <section className="project-section">
                <h2>All Projects</h2>
                <div className="project-grid">
                    <ProjectCard
                        title="Project 1"
                        description="A brief description of Project 1."
                        link="https://github.com/yourusername/project1"
                        icons={["path/to/icon1.png", "path/to/icon2.png"]}
                        backgroundImage="path/to/background1.jpg"
                    />
                    <ProjectCard
                        title="Project 2"
                        description="A brief description of Project 2."
                        link="https://github.com/yourusername/project2"
                        icons={["path/to/icon3.png", "path/to/icon4.png"]}
                        backgroundImage="path/to/background2.jpg"
                    />
                    <ProjectCard
                        title="Project 3"
                        description="A brief description of Project 3."
                        link="https://github.com/yourusername/project3"
                        icons={["path/to/icon5.png", "path/to/icon6.png"]}
                        backgroundImage="path/to/background3.jpg"
                    />
                </div>
            </section>
        </main>
    );
}

export default Projects;
