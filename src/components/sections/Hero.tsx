"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export default function Hero({ t }: { t: any }) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black -mt-[var(--nav-height)] flex items-center justify-center text-center" style={{ paddingTop: "var(--nav-height) - 1rem", }}>
      {/* Video de fondo */}
      <video
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Capa de oscurecimiento suave para contraste */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido central */}
      <div className="text-center mb-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 px-6 max-w-4xl pt-[calc(var(--nav-height)_+_4rem)]"
        >
          <SectionTitle >{t.hero.title}</SectionTitle>

          {/* <p className="mt-6 text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto text-center">
          {t.hero.description}
        </p> */}
        </motion.div>
      </div>
    </section>
  );
}
