import { BadgeCheck, Compass, Gem } from "lucide-react";
import { CTASection } from "../components/CTASection";
import { MotionSection } from "../components/MotionSection";
import { SectionHeading } from "../components/SectionHeading";

export default function AboutPage() {
  return (
    <main className="bg-[#050914] text-white">
      <MotionSection className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="A propos"
            title="Un studio digital pensé pour les marques qui veulent paraître aussi sérieuses qu'elles le sont."
            description="Nader Digital Studio accompagne les entrepreneurs, créateurs et entreprises dans la construction d'une présence digitale claire, premium et utile."
          />
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8">
            <Gem className="text-[#d8b76a]" size={42} aria-hidden="true" />
            <p className="mt-8 text-2xl font-black leading-snug">
              Mon approche mélange stratégie, design, contenu et sens du détail pour créer des supports qui inspirent confiance.
            </p>
          </div>
        </div>
      </MotionSection>
      <MotionSection className="border-y border-white/10 bg-white/[0.035] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Clarté", "Un message simple, lisible et aligné avec votre marché.", Compass],
            ["Exigence", "Un rendu moderne, responsive et professionnel.", BadgeCheck],
            ["Impact", "Des contenus pensés pour créer de la confiance.", Gem],
          ].map(([title, text, Icon]) => (
            <div className="rounded-2xl border border-white/10 bg-[#111936] p-7" key={title as string}>
              <Icon className="text-[#8b5cf6]" size={30} aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-black">{title as string}</h2>
              <p className="mt-4 leading-7 text-slate-300">{text as string}</p>
            </div>
          ))}
        </div>
      </MotionSection>
      <CTASection />
    </main>
  );
}
