import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Gem,
  Play,
  Sparkles,
  Target,
} from "lucide-react";
import { CTASection } from "./components/CTASection";
import { MotionSection } from "./components/MotionSection";
import { PortfolioGrid } from "./components/PortfolioGrid";
import { SectionHeading } from "./components/SectionHeading";
import { ServiceCard } from "./components/ServiceCard";
import { processSteps, services, testimonials } from "./data/site";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#050914] text-white">
      <section className="relative px-6 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.34),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(216,183,106,0.24),transparent_24%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <MotionSection className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-bold text-[#d8b76a]">
              <Sparkles size={16} aria-hidden="true" />
              Studio digital pour marques ambitieuses
            </p>
            <h1 className="mt-7 text-4xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Transformez votre présence digitale en un système clair, premium et prêt à convertir.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Nader Digital Studio aide les dirigeants, entrepreneurs et PME à clarifier
              leur offre, renforcer leur image et générer plus de demandes qualifiées grâce
              à un site, des contenus et une direction digitale cohérents.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#d8b76a] px-6 text-sm font-black text-[#071023] transition hover:bg-[#f1d98e]"
              >
                Demander une estimation
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 px-6 text-sm font-black text-white transition hover:bg-white/10"
              >
                Voir les réalisations
              </Link>
            </div>
            <p className="mt-4 text-sm font-bold text-slate-400">
              Réponse sous 24h avec une direction claire pour votre projet.
            </p>
          </MotionSection>

          <MotionSection className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="rounded-2xl bg-[#0a1024] p-5 ring-1 ring-white/10">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                    Digital command center
                  </span>
                  <span className="rounded-full bg-[#8b5cf6]/20 px-3 py-1 text-xs font-bold text-[#c4b5fd]">
                    Premium
                  </span>
                </div>
                <div className="grid gap-4 py-5 sm:grid-cols-2">
                  {[
                    ["Sites web", "98", "Performance"],
                    ["Landing", "4.7x", "Conversion"],
                    ["Social", "30j", "Calendrier"],
                    ["Vidéos", "12", "Formats courts"],
                  ].map(([title, stat, label]) => (
                    <div className="rounded-2xl bg-white/[0.06] p-5" key={title}>
                      <p className="text-sm text-slate-400">{title}</p>
                      <p className="mt-3 text-4xl font-black text-white">{stat}</p>
                      <p className="mt-2 text-sm font-bold text-[#d8b76a]">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(139,92,246,0.36),rgba(216,183,106,0.16))] p-5">
                  <div className="flex items-center gap-3">
                    <Play className="text-[#d8b76a]" size={22} aria-hidden="true" />
                    <p className="font-black">Une présence digitale prête à vendre</p>
                  </div>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[82%] rounded-full bg-[#d8b76a]" />
                  </div>
                </div>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      <MotionSection className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Le problème"
            title="Votre offre est solide, mais votre présence digitale ne le montre pas encore."
            description="Un site trop générique, des contenus irréguliers ou une identité floue peuvent faire perdre la confiance avant même le premier échange."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {["Message confus", "Design daté", "Peu de demandes"].map((item) => (
              <div className="rounded-2xl border border-red-400/20 bg-red-400/[0.08] p-5" key={item}>
                <Target className="text-red-200" size={24} aria-hidden="true" />
                <p className="mt-6 text-lg font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="border-y border-white/10 bg-white/[0.035] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-3xl border border-[#d8b76a]/25 bg-[#d8b76a]/10 p-8">
            <Gem className="text-[#d8b76a]" size={42} aria-hidden="true" />
            <h2 className="mt-8 text-3xl font-black leading-tight sm:text-5xl">
              Une solution complète : stratégie, design, contenu et lancement.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              "Un positionnement clair pour être compris en quelques secondes.",
              "Un design premium cohérent avec votre niveau d'expertise.",
              "Des contenus et formats courts prêts pour vos canaux sociaux.",
              "Une structure pensée pour générer des contacts qualifiés.",
            ].map((item) => (
              <div className="flex gap-4 rounded-2xl bg-white/[0.06] p-5" key={item}>
                <CheckCircle2 className="mt-1 shrink-0 text-[#d8b76a]" size={22} aria-hidden="true" />
                <p className="leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="services" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Tout ce qu'il faut pour construire une présence digitale crédible et performante."
            description="Chaque service peut être pris seul ou intégré dans un accompagnement complet."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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

      <MotionSection className="bg-[#08122a] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Méthode"
            title="Une méthode simple, structurée et orientée résultat."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-6" key={step.title}>
                <p className="text-sm font-black text-[#d8b76a]">0{index + 1}</p>
                <h3 className="mt-8 text-xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Portfolio"
              title="Des directions digitales nettes, modernes et mémorables."
            />
            <Link className="inline-flex h-11 w-fit items-center rounded-xl border border-white/15 px-5 text-sm font-black text-white transition hover:bg-white/10" href="/portfolio">
              Voir tous les projets
            </Link>
          </div>
          <PortfolioGrid />
        </div>
      </MotionSection>

      <MotionSection className="border-y border-white/10 bg-white/[0.035] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Témoignages"
            title="Des clients qui repartent avec une image plus claire et plus forte."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure className="rounded-2xl border border-white/10 bg-white/[0.06] p-6" key={testimonial.author}>
                <BarChart3 className="text-[#8b5cf6]" size={26} aria-hidden="true" />
                <blockquote className="mt-6 leading-8 text-slate-200">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-black text-white">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </MotionSection>

      <CTASection />
    </main>
  );
}
