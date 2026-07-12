"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { company } from "@/lib/site";

/**
 * Static-site contact form: composes a neatly formatted WhatsApp message and
 * opens it in a wa.me chat with The Ascend (+1 236 990-0625). No backend.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "*New inquiry from theascend.ca*",
      "",
      `*Name:* ${name.trim() || "Not given"}`,
      `*Email:* ${email.trim()}`,
      "",
      "*Message:*",
      message.trim(),
    ];
    const url = `https://wa.me/${company.whatsappDigits}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder:text-mist-soft/60 transition-colors focus:border-dawn-400 focus:bg-white/10 focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-mist">
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-mist">
            Email <span className="text-dawn-400">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputCls}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-mist">
          Message <span className="text-dawn-400">*</span>
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputCls} resize-y`}
          placeholder="Tell us about your team and what you want to achieve"
        />
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-pill bg-white px-7 py-3.5 font-semibold text-summit-900 transition-all duration-300 hover:bg-dawn-300 active:scale-[0.98]"
        >
          <Send className="size-4" aria-hidden />
          Send via WhatsApp
        </button>
        <p className="flex items-center gap-2 text-sm text-mist-soft">
          <MessageCircle className="size-4 text-dawn-500" aria-hidden />
          Goes straight to {company.whatsapp}
        </p>
      </div>

      <p role="status" aria-live="polite" className="text-sm text-dawn-300">
        {sent
          ? "WhatsApp should have opened with your message ready. Just press send and we'll get back to you within one business day."
          : ""}
      </p>
    </form>
  );
}
