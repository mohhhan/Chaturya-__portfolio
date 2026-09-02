import "./Projects.css";

const projects = [
    {
        id: "01",
        title: "FareFusion",
        subtitle: "Compare. Choose. Ride.",
        description:
            "A smart cab fare comparison platform built to compare ride fares across different services. I was part of the project team and contributed to its development.",
        tags: ["React", "JavaScript", "API"],
        status: "Completed",
        statusType: "completed",
        type: "Team Project",
    },

    {
        id: "02",
        title: "HabitFlo",
        subtitle: "Track habits. Build consistency.",
        description:
            "A personal habit and lifestyle tracking app for monitoring water intake, screen time, steps, workouts, and study hours.",
        tags: ["React", "JavaScript", "Habit Tracking"],
        status: "In Development",
        statusType: "development",
        type: "Personal Project",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="projects-section">

            <div className="projects-header">
                <p className="projects-intro">WHAT I'VE BUILT</p>

                <h2>My Projects</h2>

                <p className="projects-description">
                    A collection of projects I've worked on while learning,
                    experimenting, and turning ideas into real applications.
                </p>
            </div>

            <div className="project-grid">

                {projects.map((project) => (
                    <article
                        className="project-card"
                        key={project.id}
                    >

                        {/* TOP */}
                        <div className="project-top">

                            <span className="project-number">
                                {project.id}
                            </span>

                            <span
                                className={`project-status ${project.statusType}`}
                            >
                                <span className="status-dot"></span>
                                {project.status}
                            </span>

                        </div>


                        {/* CONTENT */}
                        <div className="project-content">

                            <h3>{project.title}</h3>

                            <h4>{project.subtitle}</h4>

                            <p>
                                {project.description}
                            </p>

                            <div className="project-tags">

                                {project.tags.map((tag) => (
                                    <span
                                        className="tag"
                                        key={tag}
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>

                        </div>


                        {/* FOOTER */}
                        <div className="project-footer">

                            <span className="project-type">
                                {project.type}
                            </span>

                            {project.link ? (
                                <a
                                    href={project.link}
                                    className="project-arrow"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${project.title}`}
                                >
                                    →
                                </a>
                            ) : (
                                <span className="project-arrow">
                                    →
                                </span>
                            )}

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}