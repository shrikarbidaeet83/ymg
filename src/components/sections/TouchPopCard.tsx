"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
} from "react";

export default function TouchPopCard({
  as: Tag = "article",
  className = "",
  activeClassName = "max-[767px]:z-[60] max-[767px]:-translate-y-10 max-[767px]:scale-[1.45] max-[767px]:rotate-0 min-[768px]:max-[1100px]:z-40 min-[768px]:max-[1100px]:-translate-y-3 min-[768px]:max-[1100px]:scale-105 min-[768px]:max-[1100px]:rotate-0",
  centerOnMobile = false,
  children,
  onPointerDown,
  ...props
}: HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  activeClassName?: string;
  centerOnMobile?: boolean;
}) {
  const [active, setActive] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const clearWhenOutside = (event: PointerEvent) => {
      if (!cardRef.current?.contains(event.target as Node)) setActive(false);
    };

    document.addEventListener("pointerdown", clearWhenOutside, true);
    return () => document.removeEventListener("pointerdown", clearWhenOutside, true);
  }, []);

  return (
    <Tag
      ref={cardRef}
      data-active={active || undefined}
      data-center-on-mobile={centerOnMobile || undefined}
      className={`${className} ${active ? activeClassName : ""}`}
      onPointerDown={(event: React.PointerEvent<HTMLElement>) => {
        if (centerOnMobile && window.matchMedia("(max-width: 767px)").matches) {
          const card = cardRef.current;
          const stage = card?.offsetParent as HTMLElement | null;

          if (card && stage) {
            const centerX = stage.clientWidth / 2;
            const centerY = stage.clientHeight / 2;
            const cardCenterX = card.offsetLeft + card.offsetWidth / 2;
            const cardCenterY = card.offsetTop + card.offsetHeight / 2;

            card.style.setProperty("--touch-pop-center-x", `${centerX - cardCenterX}px`);
            card.style.setProperty("--touch-pop-center-y", `${centerY - cardCenterY}px`);
          }
        }

        setActive(true);
        onPointerDown?.(event);
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
