import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>
                &copy; {year} Mohan. All rights reserved.
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
                    href="https://www.linkedin.com/in/mohan-j-r-548b0b391"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </nav>
        </footer>
    );
}
