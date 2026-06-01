import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Prêt à donner plus d'impact à votre présence digitale ?",
  description = "Parlez-moi de votre projet. Je vous réponds avec une direction claire, les prochaines étapes et une estimation adaptée.",
}: CTASectionProps) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#d8b76a]/30 bg-[linear-gradient(135deg,rgba(139,92,246,0.22),rgba(216,183,106,0.14)),#101832] p-8 shadow-2xl shadow-black/25 sm:p-12 lg:p-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d8b76a]">
              Discutons
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">{description}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-xl bg-[#d8b76a] px-6 text-sm font-black text-[#071023] transition hover:bg-[#f1d98e]"
          >
            Lancer le projet
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
