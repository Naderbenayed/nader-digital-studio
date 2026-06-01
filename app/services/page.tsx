import { CTASection } from "../components/CTASection";
import { MotionSection } from "../components/MotionSection";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data/site";

export default function ServicesPage() {
  return (
    <main className="bg-[#050914] text-white">
      <MotionSection className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Des services digitaux pour attirer, convaincre et convertir."
            description="Du site web à l'identité digitale, chaque livrable est pensé pour donner de la cohérence à votre marque et de la clarté à votre offre."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                description={service.description}
                icon={service.icon}
                key={service.title}
                title={service.title}
              />
            ))}
          </div>
        </div>
      </MotionSection>
      <MotionSection className="border-y border-white/10 bg-white/[0.035] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {["Audit express", "Création complète", "Accompagnement mensuel"].map((offer) => (
            <div className="rounded-2xl border border-white/10 bg-[#111936] p-7" key={offer}>
              <h2 className="text-2xl font-black">{offer}</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Une formule adaptable selon votre maturité digitale, vos objectifs et votre calendrier.
              </p>
            </div>
          ))}
        </div>
      </MotionSection>
      <CTASection title="Construisons le service exact dont votre marque a besoin." />
    </main>
  );
}
