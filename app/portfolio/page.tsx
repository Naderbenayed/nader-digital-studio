import { CTASection } from "../components/CTASection";
import { MotionSection } from "../components/MotionSection";
import { PortfolioGrid } from "../components/PortfolioGrid";
import { SectionHeading } from "../components/SectionHeading";

export default function PortfolioPage() {
  return (
    <main className="bg-[#050914] text-white">
      <MotionSection className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Quelques directions possibles pour des marques qui veulent mieux exister en ligne."
            description="Exemples de projets représentatifs : sites vitrines, landing pages, social media, vidéos courtes et identités digitales."
          />
          <div className="mt-12">
            <PortfolioGrid />
          </div>
        </div>
      </MotionSection>
      <CTASection title="Votre projet peut devenir la prochaine référence du studio." />
    </main>
  );
}
