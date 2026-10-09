// LIVE SHOW wordmark: a red "on air" dot, LIVE in cream, SHOW in gold.
export default function Logo({ className = "text-2xl" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display uppercase tracking-wider text-cream ${className}`}>
      <span className="h-2 w-2 rounded-full bg-red shadow-[0_0_10px_#e5484d]" aria-hidden="true" />
      <span>
        Live<span className="text-gold">show</span>
      </span>
    </span>
  );
}
