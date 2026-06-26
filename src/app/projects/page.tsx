import { LuxuryLink } from "@/components/LuxuryLink";

export default function ProjectsRedirectPage() {
  return (
    <main className="bg-[#f8f8f7] px-6 py-36 text-[#3f3f3f] md:py-44">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-black/40">KING</p>
        <h1 className="thin-title mt-6 text-[clamp(3.2rem,7vw,7rem)] leading-none">Проекты перенесены в мастерскую</h1>
        <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-8 text-black/56">
          Индивидуальные заказы, производство и работа с дизайнерами теперь собраны в разделе мастерской.
        </p>
        <LuxuryLink href="/workshop" className="mt-10">
          Перейти в мастерскую
        </LuxuryLink>
      </div>
    </main>
  );
}
