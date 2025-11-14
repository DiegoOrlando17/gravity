"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";


export default function MagneticButton({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-20, 20], [8, -8]);
    const rotateY = useTransform(x, [-20, 20], [-8, 8]);


    const handleMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        x.set(relX / 4);
        y.set(relY / 4);
    };
    const reset = () => { x.set(0); y.set(0); };


    return (
        <motion.div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} style={{ x, y, rotateX, rotateY }} className="will-change-transform" transition={{ type: "spring", stiffness: 150, damping: 12 }}>
            {children}
        </motion.div>
    );
}