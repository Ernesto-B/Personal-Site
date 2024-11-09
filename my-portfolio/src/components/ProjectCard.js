// src/components/ProjectCard.js
import React from 'react';
import '../styles/navbar.css';


function ProjectCard({ title, description, link, icons, backgroundImage }) {
    const cardStyle = {
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #2a3d45, #1c2c30)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="project-card" style={cardStyle}>
            <div className="overlay">
                <h3>{title}</h3>
                <div className="tech-icons">
                    {icons.map((icon, index) => (
                        <img key={index} src={icon} alt={`Tech Icon ${index + 1}`} />
                    ))}
                </div>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
        </div>
    );
}

export default ProjectCard;
