"use client";

import { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<{ name?: string; subject?: string; email?: string; message?: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: typeof errors = {};

        if (name.trim().length < 3) {
        newErrors.name = "Name must be at least 3 characters";
        }
        if (subject.trim().length < 3) {
        newErrors.subject = "Subject must be at least 3 characters";
        }
        if (!email.includes("@")) {
        newErrors.email = "Please enter a valid email";
        }
        if (message.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Message sent!");
            setName("");
            setSubject("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <main style={{ maxWidth: 800, margin: "0 auto", padding: "24px 16px" }}>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, marginTop: 16 }}>
            <input value={name} onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: undefined })); }} placeholder="Full name" />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            <input value={subject} onChange={(e) => { setSubject(e.target.value); setErrors((prev) => ({ ...prev, subject: undefined })); }} placeholder="Subject" />
            {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
            <input value={email} onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: undefined })); }} placeholder="Email" />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <textarea value={message} onChange={(e) => { setMessage(e.target.value); setErrors((prev) => ({ ...prev, message: undefined })); }} placeholder="Message" />
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
            <button type="submit">Send</button>
            </form>
        </main>
    );
}