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
        <main style={{ maxWidth: 600, margin: "0 auto", padding: "40px 16px" }}>
        <h1 style={{ marginBottom: 10 }}>Contact</h1>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14, marginTop: 16, background: "#fff", padding: 20, borderRadius: 12, border: "1px solid #eee" }}>
                <input value={name} onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: undefined })); }} placeholder="Full name" style={{ padding: "12px", borderRadius: 8, border: "1px solid #ddd", width: "100%" }} />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

                <input value={subject} onChange={(e) => { setSubject(e.target.value); setErrors((prev) => ({ ...prev, subject: undefined })); }} placeholder="Subject" style={{ padding: "12px", borderRadius: 8, border: "1px solid #ddd", width: "100%" }} />
                {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
                <input value={email} onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: undefined })); }} placeholder="Email" style={{ padding: "12px", borderRadius: 8, border: "1px solid #ddd", width: "100%" }} />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <textarea value={message} onChange={(e) => { setMessage(e.target.value); setErrors((prev) => ({ ...prev, message: undefined })); }} placeholder="Message" style={{ padding: "12px", borderRadius: 8, border: "1px solid #ddd", width: "100%", minHeight: 120 }} />
                {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
                <button type="submit" style={{ marginTop: 6, border: "none", background: "#111", color: "#fff", padding: "12px 16px", borderRadius: 10, fontWeight: 700, cursor: "pointer" }}>
                Send message
                </button>
            </form>
        </main>
    );
}