import {
  Clapperboard,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  PenTool,
  Sparkles,
} from "lucide-react";
import type { ServiceIconName } from "../data/site";

const icons = {
  Clapperboard,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  PenTool,
  Sparkles,
};

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ServiceIconName;
};

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = icons[icon];

  return (
    <article className="group rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-[#8b5cf6]/50 hover:bg-white/[0.08]">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#8b5cf6]/15 text-[#d8b76a] ring-1 ring-white/10">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-xl font-black text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{description}</p>
    </article>
  );
}
