import { LuxuryLink } from "@/components/LuxuryLink";
import { siteConfig } from "@/config/site";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-10 ${compact ? "" : "lg:grid-cols-[0.82fr_1fr]"}`}>
      {!compact ? (
        <div data-luxury-reveal>
          <p className="text-sm uppercase tracking-[0.18em] text-black/36">Request</p>
          <h2 className="thin-title mt-5 max-w-xl text-[clamp(3rem,5.5vw,6.8rem)] leading-none">Запросить информацию по модели</h2>
          <p className="mt-8 max-w-md text-sm font-light leading-7 text-black/56">
            Оставьте контакт, и мы подготовим материалы по моделям, размерам, тканям и проектным условиям.
          </p>
          <div className="mt-10 flex flex-wrap gap-6">
            <LuxuryLink href={siteConfig.whatsappHref}>WhatsApp</LuxuryLink>
            <LuxuryLink href={siteConfig.catalogHref} download>
              Скачать каталог PDF
            </LuxuryLink>
          </div>
        </div>
      ) : null}

      <form className="grid gap-5" data-luxury-reveal>
        {["Имя", "Компания", "Телефон", "Email"].map((label) => (
          <label key={label} className="group block">
            <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/38">{label}</span>
            <input
              type={label === "Email" ? "email" : "text"}
              className="focus-ring w-full border-0 border-b border-black/18 bg-transparent px-0 py-4 text-base font-light outline-none transition-colors group-focus-within:border-black"
            />
          </label>
        ))}
        <label className="group block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/38">Сообщение</span>
          <textarea className="focus-ring min-h-32 w-full resize-none border-0 border-b border-black/18 bg-transparent px-0 py-4 text-base font-light outline-none transition-colors group-focus-within:border-black" />
        </label>
        <button
          type="button"
          className="focus-ring mt-4 w-fit rounded-full border border-black px-8 py-4 text-sm font-medium transition-colors duration-500 hover:bg-black hover:text-white"
        >
          Связаться с менеджером
        </button>
      </form>
    </div>
  );
}
