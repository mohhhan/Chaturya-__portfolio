import { useState } from "react";
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function validate() {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name.";
        }

        if (!formData.email.includes("@")) {
            newErrors.email = "Please enter a valid email.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please enter a message.";
        }

        return newErrors;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setStatus("sending");

        await new Promise((resolve) => setTimeout(resolve, 1200));

        setStatus("sent");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        setTimeout(() => {
            setStatus("idle");
        }, 2500);
    }

    return (
        <section id="contact" className="contact-section">
            <h2>Get In Touch</h2>

            <p className="contact-intro">
                Have an idea, project, or opportunity? Let's connect and
                build something amazing together.
            </p>

            <form
                id="contact-form"
                onSubmit={handleSubmit}
                noValidate
            >
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "error" : ""}
                    />

                    {errors.name && (
                        <small className="error-msg">
                            {errors.name}
                        </small>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "error" : ""}
                    />

                    {errors.email && (
                        <small className="error-msg">
                            {errors.email}
                        </small>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>

                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    >
                        <option value="">Select a topic</option>
                        <option value="hire">
                            Job / Internship Opportunity
                        </option>
                        <option value="collab">
                            Collaboration
                        </option>
                        <option value="project">
                            Project Discussion
                        </option>
                        <option value="other">
                            Other
                        </option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your idea..."
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "error" : ""}
                    />

                    {errors.message && (
                        <small className="error-msg">
                            {errors.message}
                        </small>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={status === "sending"}
                >
                    {status === "sending"
                        ? "Sending..."
                        : status === "sent"
                        ? "Message Sent!"
                        : "Send Message 🚀"}
                </button>
            </form>

            <div className="contact-links">
                <p>
                    Email:{" "}
                    <a href="mailto:jrmohan41@gmail.com">
                        jrmohan41@gmail.com
                    </a>
                </p>

                <p>
                    GitHub:{" "}
                    <a
                        href="https://github.com/mohhhan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/mohhhan
                    </a>
                </p>

                <p>
                    LinkedIn:{" "}
                    <a
                        href="https://www.linkedin.com/in/mohan-j-r-548b0b391"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn Profile
                    </a>
                </p>
            </div>
        </section>
    );
}