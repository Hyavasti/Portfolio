export default function FilterBar({ filters, activeFilter, onChange, items, categoryKey }) {
  const getCount = (filter) => {
    if (filter === "All") return items.length;
    return items.filter((item) => item[categoryKey] === filter).length;
  };

  return (
    <div
      role="tablist"
      aria-label="Filter items"
      className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900/70"
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter;
        const count = getCount(filter);

        return (
          <button
            key={filter}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md transition-all duration-150 cursor-pointer select-none ${
              isActive
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium shadow-xs border border-zinc-200/80 dark:border-zinc-700"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 border border-transparent"
            }`}
          >
            <span>{filter}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full transition-colors ${
                isActive
                  ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                  : "bg-zinc-200/70 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}