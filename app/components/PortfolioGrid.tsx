import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { portfolioItems } from "../data/site";

export function PortfolioGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {portfolioItems.map((item, index) => (
        <article
          className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111936] shadow-2xl shadow-black/20"
          key={item.title}
        >
          <div className="relative min-h-64 overflow-hidden p-5">
            <Image
              alt={item.imageAlt}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              src={item.image}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,20,0.1),rgba(5,9,20,0.86))]" />
            <div className="relative flex items-center justify-between">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
                Projet 0{index + 1}
              </span>
              <ArrowUpRight className="text-white/80" size={22} aria-hidden="true" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <p className="text-sm font-bold text-[#d8b76a]">{item.category}</p>
              <h3 className="mt-2 text-3xl font-black text-white">{item.title}</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a78bfa]">
              {item.result}
            </p>
            <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
