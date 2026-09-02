import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>
                &copy; {year} Nikhil. All rights reserved.
            </p>

            <nav aria-label="social links">
                <a
                    href="https://github.com/mohhhan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="www.linkedin.com/in/abhishek-athmakuri-7a0a283821"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </nav>
        </footer>
    );
}
