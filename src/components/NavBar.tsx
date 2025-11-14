"use client";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar({ t, onLangChange }: { t: any; onLangChange: () => void }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
            <nav className="container mx-auto flex items-center justify-between px-4 md:px-6 py-3">
                {/* Logo */}
                <div
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setOpen(false);
                    }}
                    className="cursor-pointer flex items-center gap-3"
                >
                    <Logo />
                </div>

                {/* Links desktop */}
                <div className="hidden md:flex items-center gap-6 text-xs md:text-sm">
                    <a href="#aboutUs" className="hover:text-white/80">{t.nav.aboutUs}</a>
                    <a href="#gallery" className="hover:text-white/80">{t.nav.gallery}</a>
                    <a href="#dancers" className="hover:text-white/80">{t.nav.dancers}</a>
                    <a href="#shows" className="hover:text-white/80">{t.nav.shows}</a>
                    <a href="#contact" className="hover:text-white/80">{t.nav.contact}</a>
                </div>

                {/* Controles escritorio */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={onLangChange}
                        className="text-xs px-2 py-1 rounded-md border border-white/20 hover:bg-white/10"
                    >
                        {t.nav.toggleLang}
                    </button>
                    <a
                        href="https://www.instagram.com/_gravitycompany"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs opacity-80 hover:opacity-100"
                    >
                        Instagram ↗
                    </a>
                </div>

                {/* Botón hamburguesa */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-2xl focus:outline-none"
                >
                    {open ? "✕" : "☰"}
                </button>
            </nav>

            {/* Menú móvil desplegable */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10 py-6"
                    >
                        <div className="flex flex-col items-center gap-5 text-sm">
                            <a onClick={() => {
                                setOpen(false);
                                setTimeout(() => {
                                    document.querySelector("#aboutUs")?.scrollIntoView({ behavior: "smooth" });
                                }, 250); // tiempo para que cierre la animación
                            }}
                                className="hover:text-white/80"
                            >
                                {t.nav.aboutUs}
                            </a>
                            <a onClick={() => {
                                setOpen(false);
                                setTimeout(() => {
                                    document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
                                }, 250); // tiempo para que cierre la animación
                            }}
                                className="hover:text-white/80"
                            >
                                {t.nav.gallery}
                            </a>
                            <a onClick={() => {
                                setOpen(false);
                                setTimeout(() => {
                                    document.querySelector("#dancers")?.scrollIntoView({ behavior: "smooth" });
                                }, 250); // tiempo para que cierre la animación
                            }}
                            >
                                {t.nav.dancers}
                            </a>
                            <a onClick={() => {
                                setOpen(false);
                                setTimeout(() => {
                                    document.querySelector("#shows")?.scrollIntoView({ behavior: "smooth" });
                                }, 250); // tiempo para que cierre la animación
                            }}
                            >
                                {t.nav.shows}
                            </a>
                            <a onClick={() => {
                                setOpen(false);
                                setTimeout(() => {
                                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                                }, 250); // tiempo para que cierre la animación
                            }}
                            >
                                {t.nav.contact}
                            </a>

                            {/* Separador */}
                            <div className="w-10 h-px bg-white/20 my-2" />

                            {/* Idioma + Instagram en la misma línea */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => {
                                        onLangChange();
                                        setOpen(false);
                                    }}
                                    className="text-xs px-3 py-1 rounded-md border border-white/20 hover:bg-white/10"
                                >
                                    {t.nav.toggleLang}
                                </button>

                                <a
                                    href={`https://www.instagram.com/${process.env.NEXT_PUBLIC_GRAVITY_INSTAGRAM}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setOpen(false)}
                                    className="text-xs opacity-80 hover:opacity-100"
                                >
                                    Instagram ↗
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
