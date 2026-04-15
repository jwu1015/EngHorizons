"use client";

import { useState, useTransition, type FormEvent } from "react";
import { submitContactForm } from "@/app/contact/actions";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    startTransition(() => {
      void submitContactForm(formData).then((res) => {
        if (res.ok) {
          setSuccess(true);
          form.reset();
        } else {
          setError(res.error);
        }
      });
    });
  }

  if (success) {
    return (
      <div className="rounded-sm border border-border bg-background px-5 py-6">
        <p className="font-heading text-base font-semibold text-foreground">
          Message sent
        </p>
        <p className="mt-2 text-body text-muted">
          Thanks for reaching out. We will get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-5 text-body font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {error ? (
        <p
          className="rounded-sm border border-border bg-surface px-3 py-2 text-body text-foreground"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <div>
        <label htmlFor="contact-name" className="block font-heading text-base font-semibold text-foreground">
          Name <span className="text-muted">(required)</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          className="mt-2 w-full rounded-sm border border-border bg-surface px-3 py-2 text-body text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block font-heading text-base font-semibold text-foreground">
          Email <span className="text-muted">(required)</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-2 w-full rounded-sm border border-border bg-surface px-3 py-2 text-body text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block font-heading text-base font-semibold text-foreground">
          Message <span className="text-muted">(optional)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          maxLength={5000}
          className="mt-2 w-full resize-y rounded-sm border border-border bg-surface px-3 py-2 text-body text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex min-h-[2.75rem] items-center justify-center rounded-sm bg-accent px-5 py-2.5 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-on-accent transition-colors [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
