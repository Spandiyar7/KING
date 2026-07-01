"use client";

import { useState, type FormEvent } from "react";
import { LuxuryLink } from "@/components/LuxuryLink";
import { siteConfig } from "@/config/site";

const fields = [
  { name: "name", label: "Имя", type: "text" },
  { name: "company", label: "Компания", type: "text" },
  { name: "phone", label: "Телефон", type: "tel" },
  { name: "email", label: "Email", type: "email" }
];

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString()
      });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={`grid gap-10 ${compact ? "" : "lg:grid-cols-[0.82fr_1fr]"}`}>
      {!compact ? (
        <div data-luxury-reveal>
          <p className="text-sm uppercase tracking-[0.18em] text-black/36">Заявка</p>
          <h2 className="thin-title mt-5 max-w-xl text-[clamp(3rem,5.5vw,6.8rem)] leading-none">Запросить информацию по модели</h2>
          <p className="mt-8 max-w-md text-sm font-light leading-7 text-black/56">
            Оставьте контакт, и мы подготовим материалы по моделям, размерам, тканям и проектным условиям.
          </p>
          <div className="mt-10 flex flex-wrap gap-6">
            <LuxuryLink href={siteConfig.whatsappHref}>WhatsApp</LuxuryLink>
            <LuxuryLink href={siteConfig.phoneHref}>{siteConfig.phone}</LuxuryLink>
          </div>
        </div>
      ) : null}

      {status === "done" ? (
        <div className="flex min-h-40 flex-col justify-center rounded-2xl border border-black/15 p-8" data-luxury-reveal>
          <p className="text-xl font-light text-black/80">Спасибо! Заявка отправлена.</p>
          <p className="mt-3 max-w-md text-sm font-light leading-7 text-black/56">
            Мы свяжемся с вами в ближайшее время.
          </p>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="grid gap-5"
          onSubmit={handleSubmit}
          data-luxury-reveal
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Не заполняйте: <input name="bot-field" />
            </label>
          </p>
          {fields.map((field) => (
            <label key={field.name} className="group block">
              <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/38">{field.label}</span>
              <input
                name={field.name}
                type={field.type}
                className="focus-ring w-full border-0 border-b border-black/18 bg-transparent px-0 py-4 text-base font-light outline-none transition-colors group-focus-within:border-black"
              />
            </label>
          ))}
          <label className="group block">
            <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/38">Сообщение</span>
            <textarea
              name="message"
              className="focus-ring min-h-32 w-full resize-none border-0 border-b border-black/18 bg-transparent px-0 py-4 text-base font-light outline-none transition-colors group-focus-within:border-black"
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="focus-ring mt-4 w-fit rounded-full border border-black px-8 py-4 text-sm font-medium transition-colors duration-500 hover:bg-black hover:text-white disabled:opacity-60"
          >
            {status === "sending" ? "Отправляем…" : "Отправить заявку"}
          </button>
          {status === "error" ? (
            <p className="text-sm text-red-600">Не удалось отправить. Позвоните нам: {siteConfig.phone}</p>
          ) : null}
        </form>
      )}
    </div>
  );
}
