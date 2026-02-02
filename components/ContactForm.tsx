"use client";

import { useMemo, useState } from "react";

const TOPIC_OPTIONS = [
  "Demo",
  "Sample data",
  "API access",
  "Tables delivery",
  "Location Intelligence app",
  "Consulting",
];

const initialState = {
  name: "",
  company: "",
  email: "",
  message: "",
  topic: "Demo",
};

export default function ContactForm({
  defaultTopic,
  defaultMessage,
}: {
  defaultTopic?: string;
  defaultMessage?: string;
}) {
  const initialTopic =
    defaultTopic && TOPIC_OPTIONS.includes(defaultTopic) ? defaultTopic : "Demo";
  const [form, setForm] = useState({
    ...initialState,
    topic: initialTopic,
    message: defaultMessage ?? "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!form.company.trim()) next.company = "Please add your company.";
    if (!form.email.trim()) {
      next.email = "Please add your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please use a valid email.";
    }
    if (!form.message.trim()) next.message = "Tell us what you need.";
    return next;
  }, [form]);

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ name: true, company: true, email: true, message: true, topic: true });
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      setForm({
        ...initialState,
        topic: initialTopic,
        message: defaultMessage ?? "",
      });
    }
  };

  const showError = (field: keyof typeof form) => touched[field] && errors[field];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-foreground">
          Name
          <input
            type="text"
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            required
          />
          {showError("name") && <span className="text-xs text-accent">{errors.name}</span>}
        </label>
        <label className="space-y-2 text-sm font-semibold text-foreground">
          Company
          <input
            type="text"
            value={form.company}
            onChange={(event) => handleChange("company", event.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, company: true }))}
            className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            required
          />
          {showError("company") && (
            <span className="text-xs text-accent">{errors.company}</span>
          )}
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-foreground">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            required
          />
          {showError("email") && <span className="text-xs text-accent">{errors.email}</span>}
        </label>
        <label className="space-y-2 text-sm font-semibold text-foreground">
          I want
          <select
            value={form.topic}
            onChange={(event) => handleChange("topic", event.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {TOPIC_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="space-y-2 text-sm font-semibold text-foreground">
        Message
        <textarea
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
          rows={4}
          className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          required
        />
        {showError("message") && <span className="text-xs text-accent">{errors.message}</span>}
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:border-accent-strong hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Send request
        </button>
        {submitted && (
          <p className="text-sm font-semibold text-foreground">
            Thanks! We will get back to you shortly.
          </p>
        )}
      </div>
    </form>
  );
}
