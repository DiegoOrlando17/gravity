"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ t }: { t: any }) {

    const videos = [
        { id: "1OkNEHd2BUQ", title: "THE GALLOWS" },
        { id: "VQbQvmGW46k", title: "ESCÁLATE" },
        { id: "_J_zqsHYUJo", title: "CONTROL" },
        { id: "pCh5OHvOtJo", title: "SOLAS" },
        { id: "TcCU98Cm7tw", title: "BURY A FRIEND" },
    ];

    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % videos.length);
    const prev = () => setIndex((i) => (i - 1 + videos.length) % videos.length);

    return (
        <section id="gallery" className="relative text-white py-24 overflow-hidden">
            <div className="text-center mb-14 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight"
                >
                    <SectionTitle >{t.gallery.title}</SectionTitle>
                </motion.h2>
            </div>
            <div className="relative flex justify-center items-center max-w-3xl mx-auto px-4 md:px-0">
                {/* Slider container */}
                <div className="relative w-[90%] md:w-[80%] aspect-video overflow-hidden rounded-2xl shadow-lg">
                    <AnimatePresence mode="wait">
                        <motion.iframe
                            key={videos[index].id}
                            src={`https://www.youtube.com/embed/${videos[index].id}?autoplay=1&mute=1&loop=1&playlist=${videos[index].id}&controls=1&rel=0&showinfo=0`}
                            title={videos[index].title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -80 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                </div>

                {/* Controls */}
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
                {videos.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-white" : "bg-white/30 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>

            <p className="text-center text-white/70 mt-6 text-sm">
                {videos[index].title}
            </p>        </section>
    );
}