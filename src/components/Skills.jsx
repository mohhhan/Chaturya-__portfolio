import "./Skills.css";

const skills = [
    { name: "C ", level: 75 },
    { name: "C++ ", level: 70 },
    { name: "Python ", level: 65 },
    { name: "HTML ", level: 70 },
    { name: "CSS ", level: 95 },
    { name: "JavaScript ", level: 55 },
    { name: "React ", level: 0 },
    { name: "Git & GitHub ", level: 85 },
    { name: "SQL ", level: 100 },
];

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2>My Skills</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="skill-item"
                        data-level={skill.level}
                    >
                        <span>{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                    </div>
                ))}
            </div>
        </section>
    );
}