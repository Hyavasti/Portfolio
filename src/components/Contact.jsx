import { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12">
      <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
        04 — get in touch
      </h2>

      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
        Currently open to Software Engineering / IT On-the-Job Training (OJT) opportunities starting{" "}
        <span className="font-medium text-zinc-900 dark:text-zinc-100">mid-January 2027</span>, as
        well as freelance web and Android development projects.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:border-zinc-500 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied!" : PROFILE.email}</span>
        </button>

        <a
          href={`mailto:${PROFILE.email}`}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity"
        >
          <Mail className="w-3.5 h-3.5" />
          Open Mail App
        </a>
      </div>
    </section>
  );
}