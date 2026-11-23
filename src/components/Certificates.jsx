import { useState, useEffect } from "react";
import { Award, Check, Copy, ExternalLink, Eye, X } from "lucide-react";
import { CERTIFICATES } from "../data/portfolioData";
import TechPill from "./TechPill";
import FilterBar from "./FilterBar";

const CERT_FILTERS = [
  "All",
  "Software Development",
  "Mobile Development",
  "Enterprise ERP",
  "Emerging Tech",
  "Product & Business",
  "Leadership & Recognition",
];

// Extracts clean Drive file ID whether you pass just the ID or a full share URL
function getDriveFileId(value) {
  if (!value) return null;
  const match = value.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : value;
}

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [copiedId, setCopiedId] = useState(null);
  const [previewCert, setPreviewCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setPreviewCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered =
    activeFilter === "All"
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.type === activeFilter);

  const handleCopyId = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const activeDriveId = previewCert ? getDriveFileId(previewCert.driveId) : null;

  return (
    <section id="certificates" className="py-10">
      <div className="space-y-3 mb-6">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          05 — certifications & credentials
        </h2>

        <FilterBar
          filters={CERT_FILTERS}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
          items={CERTIFICATES}
          categoryKey="type"
        />
      </div>

      <div className="space-y-4">
        {filtered.map((cert) => {
          const cleanDriveId = getDriveFileId(cert.driveId);

          return (
            <article
              key={cert.id}
              className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white dark:bg-zinc-950 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                      <Award className="w-3 h-3 text-emerald-500" />
                      {cert.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {cleanDriveId && (
                  <button
                    onClick={() => setPreviewCert(cert)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors shrink-0 self-start cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-500" />
                    <span>View Credential</span>
                  </button>
                )}
              </div>

              {cert.credentialId && (
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-400">
                    Verification ID:
                  </span>
                  <button
                    onClick={() => handleCopyId(cert.credentialId)}
                    title="Copy verification ID"
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    <span>{cert.credentialId}</span>
                    {copiedId === cert.credentialId ? (
                      <Check className="w-3 h-3 text-emerald-500" />
                    ) : (
                      <Copy className="w-3 h-3 opacity-60" />
                    )}
                  </button>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <TechPill key={skill} tech={skill} />
                ))}
              </div>
            </article>
          );
        })}
      </div>

      {/* Google Drive Inline Preview Modal */}
      {previewCert && activeDriveId && (
        <div
          onClick={() => setPreviewCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="truncate">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                  {previewCert.title}
                </h3>
                <p className="text-[11px] font-mono text-zinc-500 truncate">
                  {previewCert.issuer} · {previewCert.date}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`https://drive.google.com/file/d/${activeDriveId}/view`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                  <span>Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => setPreviewCert(null)}
                  aria-label="Close preview"
                  className="p-1.5 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="w-full h-[70vh] bg-zinc-100 dark:bg-zinc-900">
              <iframe
                src={`https://drive.google.com/file/d/${activeDriveId}/preview`}
                title={previewCert.title}
                className="w-full h-full border-0"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}