"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export default function Dancers({ t }: { t: any }) {

  const dancers = [
    {
      name: "Rocio",
      lastName: "Badino",
      role: t.dancers.role.director,
      image: "/dancers/RocioBadino.jpeg",
    },
    {
      name: "Abril",
      lastName: "Polsak",
      role: t.dancers.role.dancer,
      image: "/dancers/AbrilPolsak.jpeg",
    },
    {
      name: "Camila",
      lastName: "Leon Czapliski",
      role: t.dancers.role.dancer,
      image: "/dancers/CamilaLeonCzapliski.jpeg",
    },
    {
      name: "Carolina",
      lastName: "Ladogana",
      role: t.dancers.role.dancer,
      image: "/dancers/CarolinaLadogana.jpeg",
    },
    {
      name: "Carolina",
      lastName: "Martins",
      role: t.dancers.role.dancer,
      image: "/dancers/CarolinaMartins.jpeg",
    },
    {
      name: "Clari",
      lastName: "Pozzi",
      role: t.dancers.role.dancer,
      image: "/dancers/ClariPozzi.jpeg",
    },
    {
      name: "Dolores",
      lastName: "Schroder",
      role: t.dancers.role.dancer,
      image: "/dancers/DoloresSchroder.jpeg",
    },
    {
      name: "Felicitas",
      lastName: "Moure",
      role: t.dancers.role.dancer,
      image: "/dancers/FelicitasMoure.jpeg",
    },
    {
      name: "Guadalupe",
      lastName: "Barra",
      role: t.dancers.role.dancer,
      image: "/dancers/GuadalupeBarra.jpeg",
    },
    {
      name: "Guillermina",
      lastName: "Tondato",
      role: t.dancers.role.dancer,
      image: "/dancers/GuillerminaTondato.jpeg",
    },
    {
      name: "Lara",
      lastName: "Correa Torres",
      role: t.dancers.role.dancer,
      image: "/dancers/LaraCorreaTorres.jpeg",
    },
    {
      name: "Laura",
      lastName: "Loayza",
      role: t.dancers.role.dancer,
      image: "/dancers/LauraLoayza.jpeg",
    },
    {
      name: "Lourdes",
      lastName: "Tombari",
      role: t.dancers.role.dancer,
      image: "/dancers/LourdesTombari.jpeg",
    },
    {
      name: "Lucila",
      lastName: "Bloise",
      role: t.dancers.role.dancer,
      image: "/dancers/LucilaBloise.jpeg",
    },
    {
      name: "Luisiana",
      lastName: "Valderrama",
      role: t.dancers.role.dancer,
      image: "/dancers/LuisianaValderrama.jpeg",
    },
    {
      name: "Magdalena",
      lastName: "Blanco",
      role: t.dancers.role.dancer,
      image: "/dancers/MagdalenaBlanco.jpeg",
    },
    {
      name: "Magdalena",
      lastName: "Romero Oro",
      role: t.dancers.role.dancer,
      image: "/dancers/MagdalenaRomeroOro.jpeg",
    },
    {
      name: "Malena",
      lastName: "Castello",
      role: t.dancers.role.dancer,
      image: "/dancers/MalenaCastello.jpeg",
    },
    {
      name: "Maria Victoria",
      lastName: "Castillo",
      role: t.dancers.role.dancer,
      image: "/dancers/MariaVictoriaCastillo.jpeg",
    },
    {
      name: "Mia",
      lastName: "Cristofani",
      role: t.dancers.role.dancer,
      image: "/dancers/MiaCristofani.jpeg",
    },
    {
      name: "Micaela",
      lastName: "Gomez Re",
      role: t.dancers.role.dancer,
      image: "/dancers/MicaelaGomezRe.jpeg",
    },
    {
      name: "Morena",
      lastName: "Frachi",
      role: t.dancers.role.dancer,
      image: "/dancers/MorenaFrachi.jpeg",
    },
    {
      name: "Olivia",
      lastName: "Picciolo",
      role: t.dancers.role.dancer,
      image: "/dancers/OliviaPicciolo.jpeg",
    },
    {
      name: "Rocio",
      lastName: "Feraud",
      role: t.dancers.role.dancer,
      image: "/dancers/RocioFeraud.jpeg",
    },
    {
      name: "Rosario",
      lastName: "Nossetto",
      role: t.dancers.role.dancer,
      image: "/dancers/RosarioNossetto.jpeg",
    },    
  ];

  return (
    <section
      id="dancers"
      className="relative text-white py-24 overflow-hidden"
    >
      {/* Título */}
      <div className="text-center mb-14 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          <SectionTitle >{t.dancers.title}</SectionTitle>
        </motion.h2>
      </div>

      {/* Grid de bailarines */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-2 px-2 md:px-6">
        {dancers.map((dancer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.02, duration: 0.3 }}
            className="relative group overflow-hidden rounded-lg bg-neutral-900 shadow-md"
          >
            <img
              src={dancer.image}
              alt={dancer.name}
              className="w-full h-[140px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-1.5 md:p-2">
              <p className="text-[10px] md:text-xs font-semibold">{dancer.name}</p>
              <p className="text-[10px] md:text-xs font-semibold">{dancer.lastName}</p>
              <p className="text-[9px] md:text-[10px] text-white/70">{dancer.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
