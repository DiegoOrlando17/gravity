"use client";
import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
            <motion.svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.95, 1.05, 0.95],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                {/* Círculos exteriores animados */}
                <motion.circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="currentColor"
                    strokeWidth="4"
                    opacity="0.25"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                {[35, 55, 75].map((r, i) => (
                    <motion.circle
                        key={i}
                        cx="100"
                        cy="100"
                        r={r}
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity={0.25 + i * 0.15}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 2 + i, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}

                {/* Banda horizontal + texto */}
                <motion.g
                    transform="rotate(-15 100 100)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    <rect
                        x="25"
                        y="90"
                        width="150"
                        height="22"
                        fill="currentColor"
                        rx="2"
                    />
                    <text
                        x="100"
                        y="106"
                        fontFamily="Arial Black, Arial, sans-serif"
                        fontSize="16"
                        textAnchor="middle"
                        fill="#0B0B0B"
                        letterSpacing="1"
                    >
                        GRAVITY COMPANY
                    </text>
                </motion.g>
            </motion.svg>
        </div>
    );
}
