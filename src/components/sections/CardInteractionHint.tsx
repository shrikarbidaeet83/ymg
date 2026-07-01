type CardInteractionHintProps = {
  className?: string;
  tone?: "light" | "dark";
};

export default function CardInteractionHint({
  className = "",
  tone = "dark",
}: CardInteractionHintProps) {
  const toneClass =
    tone === "light"
      ? "text-[#7b6d58] before:bg-[#d9b46d]/55 after:bg-[#d9b46d]/55"
      : "text-[#e4c27a]/80 before:bg-[#d9b46d]/45 after:bg-[#d9b46d]/45";

  return (
    <p
      className={`mx-auto mt-3 inline-flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] before:block before:h-px before:w-7 after:block after:h-px after:w-7 sm:mt-4 sm:text-[0.68rem] ${toneClass} ${className}`}
    >
      <span className="sm:hidden">Tap to bring forward</span>
      <span className="hidden sm:inline">Click to bring forward</span>
    </p>
  );
}
