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
                        title="Docker NGINX Load Balancer"
                        description="Load balancing, rate limiting, caching, health checks, Gzip"
                        link="https://github.com/Ernesto-B/Docker-NGINX-Load-Balancer-Demo"
                        icons={[
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
                            "https://static-00.iconduck.com/assets.00/file-type-nginx-icon-1793x2048-yt5u3fm7.png",
                            "https://cdn-icons-png.flaticon.com/512/919/919853.png"
                        ]}
                        backgroundImage="https://encrypted-tbn0.gstatic.com/images"
                        isFeatured={true} // This prop will trigger the featured styling
                    />
                    <ProjectCard
                        title="Email Notifications Using RabbitMQ"
                        description="Message queue, priority queue"
                        link="https://github.com/Ernesto-B/Email-Notifs-RabbitMQ-Demo"
                        icons={["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png", "https://static-00.iconduck.com/assets.00/rabbitmq-icon-484x512-s9lfaapn.png"]}
                        backgroundImage="path/to/featured-background2.jpg"
                        isFeatured={true}
                    />
                </div>
            </section>
            <section className="project-section">
                <h2>All Projects</h2>
                <div className="project-grid">
                    <ProjectCard
                        title="Elasticsearch Product Catalogue"
                        description="Indexing, searching, and filtering data"
                        link="https://github.com/Ernesto-B/Elasticsearch-Product-Catalog-Demo"
                        icons={["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png", "https://static-00.iconduck.com/assets.00/elasticsearch-icon-1839x2048-g9zblqim.png"]}
                        backgroundImage="path/to/featured-background2.jpg"
                        isFeatured={false}
                    />
                    <ProjectCard
                        title="Cassandra DB and REST API"
                        description="Dockerized API providing CRUD capabilities on Cassandra DB"
                        link="https://github.com/Ernesto-B/Docker-Cassandra-Demo"
                        icons={["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png", "https://cdn-icons-png.flaticon.com/512/919/919853.png", "https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,c_fill,w_200,h_200/https://api.charmhub.io/api/v1/media/download/charm_nwYyQPOuk1TkBzmKxWObtvzygxT4YXWh_icon_737a810ab4f3b82b805cce1190e3495ef08c4bc457f7c8b52ff1c54055638927.png"]}
                        backgroundImage="path/to/featured-background2.jpg"
                        isFeatured={false}
                    />
                    <ProjectCard
                        title="API Test Driven Development"
                        description="Using Jest and Supertest libs for API integration testing"
                        link="https://github.com/Ernesto-B/TDD-with-API-Demo"
                        icons={["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png", "https://cdn.buttercms.com/pK1f4C6Qsyga3zzcmUxw"]}
                        backgroundImage="path/to/featured-background2.jpg"
                        isFeatured={false}
                    />
                    <ProjectCard
                        title="SpaceX Data Query Using GraphQL"
                        description="Using GraphQL to fetch information, featuring dynamic querying"
                        link="https://github.com/Ernesto-B/GraphQL-Demo"
                        icons={["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"]}
                        backgroundImage="path/to/featured-background2.jpg"
                        isFeatured={false}
                    />
                    <ProjectCard
                        title="Broadcast Server over UDP and Websocket"
                        description="Websocket & UDP server allowing multiple client connections"
                        link="https://github.com/Ernesto-B/Broadcast-Server-Demo"
                        icons={["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png", "https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png"]}
                        backgroundImage="path/to/featured-background2.jpg"
                        isFeatured={false}
                    />
                    <ProjectCard
                        title="Caching Web Proxy Server"
                        description="Web cache using Axios lib with multiple caching replacement policies"
                        link="https://github.com/Ernesto-B/Caching-Proxy-Server-Demo"
                        icons={["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png", "https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png", "https://cdn.buttercms.com/pK1f4C6Qsyga3zzcmUxw"]}
                        backgroundImage="path/to/featured-background2.jpg"
                        isFeatured={false}
                    />
                    <ProjectCard
                        title="User Auth Using JWT's"
                        description="User authentication and authorization using Bcrypt and JWT's"
                        link="https://github.com/Ernesto-B/UserAuth-and-JWT-Demo"
                        icons={["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png", "https://cdn.buttercms.com/pK1f4C6Qsyga3zzcmUxw"]}
                        backgroundImage="path/to/featured-background2.jpg"
                        isFeatured={false}
                    />
                    <ProjectCard
                        title="CLI Slay the Spire Game"
                        description="My attempt to make my version of Slay the Spire from the ground up. WIP"
                        link="https://github.com/Ernesto-B/Slay-the-Spire-Clone"
                        icons={["https://cdn-icons-png.flaticon.com/512/6132/6132222.png"]}
                        backgroundImage="path/to/featured-background2.jpg"
                        isFeatured={false}
                    />
                    <ProjectCard
                        title="React Memory Game"
                        description="Memory card flipping game to practice React"
                        link="https://github.com/Ernesto-B/React-Memory-Game"
                        icons={["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png", "https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png"]}
                        backgroundImage="path/to/featured-background2.jpg"
                        isFeatured={false}
                    />
                </div>
            </section>
        </main>
    );
}

export default Projects;
