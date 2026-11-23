import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Hero({ onNavigate }) {
  return (
    <section className="pt-10 pb-12">
      <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-6 text-xs font-mono rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        {PROFILE.availability}
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {PROFILE.name}
      </h1>
      <p className="mt-1 text-base font-mono text-zinc-500 dark:text-zinc-400">
        {PROFILE.role} · {PROFILE.location}
      </p>

      <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl">
        {PROFILE.bio}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-mono">
        {PROFILE.socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700"
          >
            {social.label}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ))}

        <button
          onClick={() => onNavigate?.("contact")}
          className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 cursor-pointer"
        >
          email
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {PROFILE.highlights.map((item) => (
          <div
            key={item.label}
            className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40"
          >
            <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              {item.label}
            </div>
            <div className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {item.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}