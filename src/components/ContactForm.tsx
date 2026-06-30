"use client";

import type { FormEvent } from "react";
import { LuxuryLink } from "@/components/LuxuryLink";
import { siteConfig } from "@/config/site";

const fields = [
  { name: "name", label: "Имя", type: "text" },
  { name: "company", label: "Компания", type: "text" },
  { name: "phone", label: "Телефон", type: "tel" },
  { name: "email", label: "Email", type: "email" }
];

export function ContactForm({ compact = false }: { compact?: boolean }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Заявка с сайта KING ATELIER",
      data.get("name") ? `Имя: ${data.get("name")}` : "",
      data.get("company") ? `Компания: ${data.get("company")}` : "",
      data.get("phone") ? `Телефон: ${data.get("phone")}` : "",
      data.get("email") ? `Email: ${data.get("email")}` : "",
      data.get("message") ? `Сообщение: ${data.get("message")}` : ""
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`${siteConfig.whatsappHref}?text=${text}`, "_blank", "noopener");
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

      <form className="grid gap-5" onSubmit={handleSubmit} data-luxury-reveal>
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
          className="focus-ring mt-4 w-fit rounded-full border border-black px-8 py-4 text-sm font-medium transition-colors duration-500 hover:bg-black hover:text-white"
        >
          Отправить в WhatsApp
        </button>
      </form>
    </div>
  );
}
