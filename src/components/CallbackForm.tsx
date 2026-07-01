"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";

export function CallbackForm() {
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

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-white/20 p-8 text-white" data-luxury-reveal>
        <p className="text-xl font-light">Спасибо! Заявка отправлена.</p>
        <p className="mt-3 text-sm font-light leading-7 text-white/60">
          Мы перезвоним вам в ближайшее время. Можно также написать нам сразу:
        </p>
        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="focus-ring mt-6 inline-flex rounded-full border border-white bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-transparent hover:text-white"
        >
          WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      name="callback"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="grid gap-5 sm:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="callback" />
      <p className="hidden">
        <label>
          Не заполняйте: <input name="bot-field" />
        </label>
      </p>
      <label className="group block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/45">Имя</span>
        <input
          name="name"
          type="text"
          required
          className="focus-ring w-full border-0 border-b border-white/25 bg-transparent px-0 py-4 text-base font-light text-white outline-none transition-colors placeholder:text-white/30 group-focus-within:border-white"
        />
      </label>
      <label className="group block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/45">Телефон</span>
        <input
          name="phone"
          type="tel"
          required
          placeholder="+7 ___ ___ __ __"
          className="focus-ring w-full border-0 border-b border-white/25 bg-transparent px-0 py-4 text-base font-light text-white outline-none transition-colors placeholder:text-white/30 group-focus-within:border-white"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring mt-2 w-fit rounded-full border border-white bg-white px-9 py-4 text-sm font-medium text-black transition-colors duration-500 hover:bg-transparent hover:text-white disabled:opacity-60 sm:col-span-2"
      >
        {status === "sending" ? "Отправляем…" : "Оставить заявку"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-red-300 sm:col-span-2">Не удалось отправить. Позвоните нам: {siteConfig.phone}</p>
      ) : null}
    </form>
  );
}
