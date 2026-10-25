import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Which side the content slides in from. Text: "right". Images: "left". */
  direction?: "left" | "right" | "up";
  delay?: number;
  className?: string;
};

export function Reveal({ children, direction = "right", delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenOffset =
    direction === "left"
      ? "-translate-x-10"
      : direction === "right"
        ? "translate-x-10"
        : "translate-y-8";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-[850ms] ease-out will-change-transform",
        visible ? "translate-x-0 translate-y-0 opacity-100" : cn(hiddenOffset, "opacity-0"),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
