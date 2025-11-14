"use client";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import Highlights from "@/components/sections/Highlights";
import Gallery from "@/components/sections/Gallery";
import Dancers from "@/components/sections/Dancers";
import Competitions from "@/components/sections/Competitions";
import Join from "@/components/Join";
import Footer from "@/components/sections/Footer";
import "./globals.css";
import { copy } from "@/lib/i18n";
import AboutUs from "@/components/sections/AboutUs";


export default function Page() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = copy[lang];


  return (
    <main id="top">
      <NavBar t={t} onLangChange={() => setLang(lang === "es" ? "en" : "es")} />
      <Hero t={t} />
      <AboutUs t={t} />
      <Gallery t={t} />
      <Dancers t={t} />
      <Competitions t={t} />      
      <Footer t={t} />
      <Join t={t} />
    </main>
  );
}