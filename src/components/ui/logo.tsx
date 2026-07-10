import Image from "next/image";
import Link from "next/link";

type LogoVariant = "gold" | "dark";

type YMGLogoProps = {
  asLink?: boolean;
  variant?: LogoVariant;
  className?: string;
};

export function YMGLogo({
  asLink = false,
  className = "",
}: YMGLogoProps) {
  const logo = (
    <Image
      src="/LOGO (1).svg"
      alt="YMG Legal"
      width={178}
      height={79}
      className="h-auto w-[128px]"
    />
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="YMG Legal home" className={`inline-flex shrink-0 items-center ${className}`}>
        {logo}
      </Link>
    );
  }

  return <div className={`inline-flex items-center ${className}`}>{logo}</div>;
}
