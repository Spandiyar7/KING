import { LuxuryLink } from "@/components/LuxuryLink";

export default function ShowroomRedirectPage() {
  return (
    <main className="bg-[#f8f8f7] px-6 py-36 text-[#3f3f3f] md:py-44">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-black/40">KING</p>
        <h1 className="thin-title mt-6 text-[clamp(3.2rem,7vw,7rem)] leading-none">Шоурум заменен мастерской</h1>
        <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-8 text-black/56">
          Здесь мы показываем процесс, материалы и индивидуальное производство мебели KING.
        </p>
        <LuxuryLink href="/workshop" className="mt-10">
          Перейти в мастерскую
        </LuxuryLink>
      </div>
    </main>
  );
}
