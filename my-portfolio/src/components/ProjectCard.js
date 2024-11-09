// src/components/ProjectCard.js
import React from 'react';

function ProjectCard({ title, description, link }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <div className="tech-icons">
                <img src="path/to/icon1.png" alt="Tech Icon 1" />
                <img src="path/to/icon2.png" alt="Tech Icon 2" />
            </div>
            <p>{description}</p>
            <a href={link}>View on GitHub</a>
        </div>
    );
}

export default ProjectCard;
