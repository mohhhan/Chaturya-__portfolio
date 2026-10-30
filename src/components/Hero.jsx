import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero-section" id="hero">

            {/* Left side - Photo */}
            <div className="hero-photo">
                <img src="chaturya.jpeg" alt="chaturya" />
            </div>

            {/* Right side - Text */}
            <div className="hero-content">
                <p className="hero-intro">Hello, I'm</p>

                <h1>Chaturya </h1>

                <h2>Full Stack developer</h2>

                <p className="tagline">
                    Building ideas into scalable, user-focused digital experiences.
                    I'm a passionate developer who loves building things from scratch.
                    I turn ideas into clean, functional, and user-friendly experiences.
                    My journey is all about learning, building, and making an impact.
                </p>     
            </div>

        </section>
    );
}
