"use client";

import { motion } from "framer-motion";

export default function SectionDivider({
  align = "left",
}: {
  align?: "left" | "right";
}) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="relative h-px w-full">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="h-px w-full bg-neutral-200"
        />
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: align === "left" ? "left" : "right" }}
          className={`absolute top-0 h-px w-16 bg-[#03428E] ${
            align === "left" ? "left-0" : "right-0"
          }`}
        />
      </div>
    </div>
  );
}
