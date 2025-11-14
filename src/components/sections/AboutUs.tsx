"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export default function Us({ t }: { t: any }) {
  return (
    <section
      id="aboutUs"
      className="relative text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
        >
          <SectionTitle>{t.aboutUs.title}</SectionTitle>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/70 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto"
        >
          {t.aboutUs.description}
        </motion.p>
      </div>
    </section>
  );
}
