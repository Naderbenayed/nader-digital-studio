"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050914]/86 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#8b5cf6] text-sm font-black text-white shadow-lg shadow-[#8b5cf6]/30">
            ND
          </span>
          <span className="hidden text-sm font-black uppercase tracking-[0.18em] text-white sm:inline">
            Nader Digital Studio
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden h-11 items-center rounded-xl bg-[#d8b76a] px-5 text-sm font-black text-[#071023] transition hover:bg-[#f1d98e] lg:inline-flex"
        >
          Demander un devis
        </Link>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white lg:hidden"
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#071023] px-6 py-5 lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                className="rounded-xl px-4 py-3 text-base font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-xl bg-[#d8b76a] px-4 py-3 text-center text-base font-black text-[#071023]"
              onClick={() => setIsOpen(false)}
            >
              Demander un devis
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
