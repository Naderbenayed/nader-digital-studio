import { Mail, MessageCircle, Phone } from "lucide-react";
import { MotionSection } from "../components/MotionSection";
import { SectionHeading } from "../components/SectionHeading";

export default function ContactPage() {
  return (
    <main className="bg-[#050914] text-white">
      <MotionSection className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Parlez-moi de votre projet digital."
              description="Décrivez votre objectif, votre délai et le type d'accompagnement souhaité. Je vous réponds avec une proposition claire."
            />
            <div className="mt-10 grid gap-4">
              {[
                ["Email", "benayednader4@gmail.com", Mail],
                ["WhatsApp", "+33 6 44 72 72 88", MessageCircle],
                ["Appel découverte", "+33 6 44 72 72 88", Phone],
              ].map(([label, value, Icon]) => (
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5" key={label as string}>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#8b5cf6]/18 text-[#d8b76a]">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">{label as string}</p>
                    <p className="font-black text-white">{value as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/25">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Nom
                <input className="h-12 rounded-xl border border-white/10 bg-[#071023] px-4 text-white outline-none ring-[#8b5cf6] transition focus:ring-2" name="name" placeholder="Votre nom" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Email
                <input className="h-12 rounded-xl border border-white/10 bg-[#071023] px-4 text-white outline-none ring-[#8b5cf6] transition focus:ring-2" name="email" placeholder="vous@email.com" type="email" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Service recherché
                <select className="h-12 rounded-xl border border-white/10 bg-[#071023] px-4 text-white outline-none ring-[#8b5cf6] transition focus:ring-2" name="service">
                  <option>Site web premium</option>
                  <option>Landing page</option>
                  <option>Création de contenu</option>
                  <option>Vidéos courtes</option>
                  <option>Identité digitale</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Message
                <textarea className="min-h-36 rounded-xl border border-white/10 bg-[#071023] px-4 py-3 text-white outline-none ring-[#8b5cf6] transition focus:ring-2" name="message" placeholder="Votre projet, vos objectifs, votre délai..." />
              </label>
              <button className="h-12 rounded-xl bg-[#d8b76a] px-6 text-sm font-black text-[#071023] transition hover:bg-[#f1d98e]" type="submit">
                Envoyer la demande
              </button>
            </div>
          </form>
        </div>
      </MotionSection>
    </main>
  );
}
