// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    return (
        <main>
            <section className="featured-projects">
                <h2>Featured</h2>
                <div className="featured-project-grid">
                    <ProjectCard title="Featured Project 1" description="A brief description of the featured project." link="https://github.com/yourusername/featured_project1" />
                    <ProjectCard title="Featured Project 2" description="A brief description of the featured project." link="https://github.com/yourusername/featured_project2" />
                </div>
            </section>
            <section className="project-section">
                <h2>All Projects</h2>
                <div className="project-grid">
                    <ProjectCard title="Project 1" description="A brief description of Project 1." link="https://github.com/yourusername/project1" />
                    <ProjectCard title="Project 2" description="A brief description of Project 2." link="https://github.com/yourusername/project2" />
                    <ProjectCard title="Project 3" description="A brief description of Project 3." link="https://github.com/yourusername/project3" />
                </div>
            </section>
        </main>
    );
}

export default Projects;
