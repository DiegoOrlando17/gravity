"use client";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { Instagram, Youtube, Mail } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";

export default function Footer({ t }: { t: any }) {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-black/30 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Fila superior: logo + nombre + redes alineadas */}
          <div className="flex items-center justify-between w-full mb-2">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="font-extrabold text-lg">{t.footer.company}</span>
            </div>

            {/* Redes dentro de la misma fila */}
            <div className="flex gap-5">
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_GRAVITY_EMAIL}`}
                className="text-white/70 hover:text-white transition"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`https://www.instagram.com/${process.env.NEXT_PUBLIC_GRAVITY_INSTAGRAM}`}
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://www.youtube.com/${process.env.NEXT_PUBLIC_GRAVITY_YOUTUBE}`}
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={`https://www.tiktok.com/${process.env.NEXT_PUBLIC_GRAVITY_TIKTOK}`}
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition"
                title="TikTok"
              >
                <TikTokIcon  className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Descripción y trademark debajo */}
          <div>
            <p className="text-xs text-white/40">
              {t.footer.rights}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
