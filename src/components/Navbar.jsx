import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar({ theme, onToggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    const navItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll("section[id]");
            let current = "";

            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop - 100) {
                    current = section.getAttribute("id");
                }
            });

            if (current) {
                setActiveSection(current);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
            <nav className="navbar">

                {/* LOGO */}
                <a href="#" className="logo">
                    <span>&lt;</span> Chatu <span>/&gt;</span>
                </a>

                {/* NAVIGATION */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={
                                    activeSection === item.id ? "active" : ""
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}

                    {/* LET'S CONNECT */}
                    <li>
                        <a
                            href="#contact"
                            className="connect-btn"
                            onClick={() => setMenuOpen(false)}
                        >
                            Let's Connect
                        </a>
                    </li>
                </ul>

                {/* THEME SWITCH */}
                <button
                    className={`theme-toggle ${
                        theme === "dark" ? "dark" : ""
                    }`}
                    title={
                        theme === "dark"
                            ? "Switch to Light Mode"
                            : "Switch to Dark Mode"
                    }
                    aria-label="Toggle theme"
                    onClick={onToggleTheme}
                >
                    <span className="theme-icon sun">☀️</span>
                    <span className="theme-icon moon">🌙</span>
                    <span className="toggle-knob"></span>
                </button>

                {/* MOBILE MENU */}
                <button
                    className="menu-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    ≡
                </button>

            </nav>
        </header>
    );
}
