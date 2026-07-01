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
  children,
  onPointerDown,
  ...props
}: HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  activeClassName?: string;
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
      className={`${className} ${active ? activeClassName : ""}`}
      onPointerDown={(event: React.PointerEvent<HTMLElement>) => {
        setActive(true);
        onPointerDown?.(event);
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
