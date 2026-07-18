"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="h-[2px] w-full bg-[linear-gradient(90deg,#03428E_0%,#6AA84F_50%,#0095DA_100%)]"
      />
    </div>
  );
}
