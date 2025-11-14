"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, Star, Trophy } from "lucide-react";

export default function Competitions({ t }: { t: any }) {

  const competitions = [
    {
      id: 1,
      date: "2025-10-17",
      city: "Buenos Aires",
      name: "TORNEO FED",
      highlights: [
        { title: `Crew - ${t.competitions.choreography} “Swipe right”`, score: "92 pts", mention: t.competitions.awards.featured },
        { title: `Crew - ${t.competitions.choreography} “Home”`, score: "90 pts", mention: t.competitions.awards.tecnique },
        { title: `Mega Crew - ${t.competitions.choreography} “Thule”`, score: "90 pts" },
        { mention: t.competitions.awards.coach },
      ],
    },
    {
      id: 2,
      date: "2025-10-04",
      city: "Buenos Aires",
      name: "WORLD OF DANCE Argentina",
      highlights: [
        { title: `Crew - ${t.competitions.choreography} “Swipe Right”`, score: "78 pts", mention: t.competitions.awards.featured2 },
        { title: `Crew - ${t.competitions.choreography} “Home”`, score: "81 pts" },
        { title: `Mega Crew - ${t.competitions.choreography} “Thule”`, score: "79 pts" },
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % competitions.length);
  const prev = () => setIndex((i) => (i - 1 + competitions.length) % competitions.length);

  const current = competitions[index];

  return (
    <section id="shows" className="relative text-white py-24 overflow-hidden">
      {/* Título */}
      <div className="text-center mb-14 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          <SectionTitle>{t.competitions.title}</SectionTitle>
        </motion.h2>
      </div>

      {/* Slider container */}
      <div className="relative flex justify-center items-center max-w-3xl mx-auto px-4 md:px-0">
        <div className="relative w-full md:w-[80%] overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-sm shadow-lg p-6 md:p-8 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-white"
            >
              {/* Fecha + ciudad */}
              <div className="text-white/60 text-xs uppercase tracking-widest mb-1">
                {formatDate(current.date, t.lang)} · {current.city}
              </div>

              {/* Nombre del torneo */}
              <h3 className="text-2xl font-extrabold mb-4">{current.name}</h3>

              {/* Highlights */}
              <div className="space-y-2 text-sm">
                {current.highlights.map((h, i) => {
                  const isMentionOnly = !h.title && !h.score && h.mention;
                  return (
                    <div
                      key={i}
                      className={`rounded-xl border border-white/10 p-3 ${isMentionOnly ? "bg-white/5 text-center italic" : "bg-white/10"
                        }`}
                    >
                      {!isMentionOnly ? (
                        <>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 font-medium">
                              <Star size={13} className="text-white/70" />
                              {h.title}
                            </div>
                            {h.score && <div className="text-white/60 text-xs">{h.score}</div>}
                          </div>

                          {h.mention && (
                            <div className="flex items-center gap-1 text-[11px] text-white/60 mt-1">
                              <Award size={11} className="opacity-70" />
                              <span>{h.mention}</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                          <Award size={13} className="opacity-80" />
                          <span>{h.mention}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles izquierda/derecha */}
        <button
          onClick={prev}
          className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {competitions.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-white" : "bg-white/30 hover:bg-white/60"
              }`}
          />
        ))}
      </div>
    </section>
  );
}

export function formatDate(dateStr: string, lang: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "Invalid date";

  const monthsEs = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthName = lang === "es" ? monthsEs[d.getMonth()] : monthsEn[d.getMonth()];

  return `${monthName.toUpperCase()} ${d.getDate()}, ${d.getFullYear()}`;
}
