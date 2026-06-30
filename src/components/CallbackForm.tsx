"use client";

import type { FormEvent } from "react";
import { siteConfig } from "@/config/site";

export function CallbackForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Заявка на звонок — KING ATELIER",
      data.get("name") ? `Имя: ${data.get("name")}` : "",
      data.get("phone") ? `Телефон: ${data.get("phone")}` : "",
      data.get("message") ? `Комментарий: ${data.get("message")}` : ""
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`${siteConfig.whatsappHref}?text=${text}`, "_blank", "noopener");
  }

  return (
    <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
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
      <label className="group block sm:col-span-2">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/45">Комментарий (необязательно)</span>
        <input
          name="message"
          type="text"
          className="focus-ring w-full border-0 border-b border-white/25 bg-transparent px-0 py-4 text-base font-light text-white outline-none transition-colors placeholder:text-white/30 group-focus-within:border-white"
        />
      </label>
      <button
        type="submit"
        className="focus-ring mt-2 w-fit rounded-full border border-white bg-white px-9 py-4 text-sm font-medium text-black transition-colors duration-500 hover:bg-transparent hover:text-white sm:col-span-2"
      >
        Оставить заявку
      </button>
    </form>
  );
}
