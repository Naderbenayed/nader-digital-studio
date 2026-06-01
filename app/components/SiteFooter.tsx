import Link from "next/link";
import { ExternalLink, Mail, Send } from "lucide-react";
import { navItems } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050914] px-6 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#7c3aed] text-sm font-black">
              ND
            </span>
            <span className="font-black uppercase tracking-[0.18em]">
              Nader Digital Studio
            </span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-slate-300">
            Création de sites web, contenus, vidéos courtes et identités digitales pour
            marques ambitieuses.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d8b76a]">
            Navigation
          </h3>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link className="text-slate-300 transition hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d8b76a]">
            Contact
          </h3>
          <div className="mt-5 flex gap-3">
            <a className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-[#8b5cf6]" href="mailto:benayednader4@gmail.com" aria-label="Email">
              <Mail size={18} aria-hidden="true" />
            </a>
            <a className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-[#8b5cf6]" href="https://wa.me/33644727288" aria-label="WhatsApp">
              <Send size={18} aria-hidden="true" />
            </a>
            <a className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-[#8b5cf6]" href="https://www.linkedin.com/" aria-label="LinkedIn">
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-sm text-slate-400">
        © 2026 Nader Digital Studio. Tous droits réservés.
      </p>
    </footer>
  );
}
