"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  duration = 1.5,
  prefix = "",
  suffix = "",
  padZero = false,
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  padZero?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  const displayText = padZero ? String(display).padStart(2, "0") : String(display);

  return (
    <span ref={ref}>
      {prefix}
      {displayText}
      {suffix}
    </span>
  );
}
