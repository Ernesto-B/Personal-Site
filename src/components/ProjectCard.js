// src/components/ProjectCard.js
import React from 'react';
import '../styles/projects.css';

function ProjectCard({ title, description, link, icons, backgroundImage, isFeatured }) {
    return (
        <div className={`project-card ${isFeatured ? 'featured-project-card' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h3>{title}</h3>
            <div className="tech-icons">
                {icons.map((icon, index) => (
                    <img src={icon} alt="Tech Icon" key={index} />
                ))}
            </div>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
}

export default ProjectCard;
