import Link from "next/link";

type LogoVariant = "gold" | "dark";

function YMGColumnIcon({ variant }: { variant: LogoVariant }) {
  return (
    <svg
      width="30"
      height="33"
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Entablature — top flat piece */}
      <rect
        x="3"
        y="0"
        width="30"
        height="5"
        rx="0.75"
        fill={variant === "gold" ? "#C9A96E" : "#2D2D2D"}
      />
      {/* Three columns */}
      <rect
        x="4.5"
        y="6.5"
        width="8"
        height="20.5"
        rx="0.5"
        fill={variant === "gold" ? "#C9A96E" : "#2D2D2D"}
      />
      <rect
        x="14"
        y="6.5"
        width="8"
        height="20.5"
        rx="0.5"
        fill={variant === "gold" ? "#C9A96E" : "#2D2D2D"}
      />
      <rect
        x="23.5"
        y="6.5"
        width="8"
        height="20.5"
        rx="0.5"
        fill={variant === "gold" ? "#C9A96E" : "#2D2D2D"}
      />
      {/* Upper base */}
      <rect
        x="1.5"
        y="28.5"
        width="33"
        height="4"
        rx="0.75"
        fill={variant === "gold" ? "#C9A96E" : "#2D2D2D"}
      />
      {/* Lower step — widest */}
      <rect
        x="0"
        y="34"
        width="36"
        height="5.5"
        rx="0.75"
        fill={variant === "gold" ? "#C9A96E" : "#2D2D2D"}
      />
    </svg>
  );
}

type YMGLogoProps = {
  asLink?: boolean;
  variant?: LogoVariant;
  className?: string;
};

export function YMGLogo({
  asLink = false,
  variant = "gold",
  className = "",
}: YMGLogoProps) {
  const isGold = variant === "gold";

  const inner = (
    <>
      <YMGColumnIcon variant={variant} />
      <div className="flex flex-col leading-none gap-[5px]">
        <span
          className={`font-bold leading-none text-[1.3rem] tracking-[0.08em] ${
            isGold ? "text-gold" : "text-dark"
          }`}
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          YMG
        </span>
        <span
          className={`text-[0.6rem] tracking-[0.22em] font-medium leading-none ${
            isGold ? "text-gold/70" : "text-body-dark/55"
          }`}
        >
          —LEGAL—
        </span>
      </div>
    </>
  );

  if (asLink) {
    return (
      <Link href="/" className={`flex items-center gap-3 shrink-0 ${className}`}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {inner}
    </div>
  );
}
