"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";

export default function Join({ t }: { t: any }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", video: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setForm({ name: "", email: "", video: "", message: "" });
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-audition", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("sent");
      else throw new Error("Error al enviar");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-50 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-4 py-2 text-sm text-white flex items-center gap-2 backdrop-blur-sm shadow-lg"
      >
        <Send size={16} /> {t.join.button}
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90%] max-w-md bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 text-white"
            >
              {/* Cerrar */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-white/60 hover:text-white"
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>

              <h3 className="text-xl font-semibold mb-4 text-center">
                {t.join.title}
              </h3>
              <p className="text-white/60 text-sm mb-6 text-center">
                {t.join.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={t.join.name}
                  className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder={t.join.email}
                  className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                />
                <input
                  type="text"
                  name="video"
                  value={form.video}
                  onChange={handleChange}
                  required
                  placeholder={t.join.video}
                  className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.join.message}
                  rows={3}
                  className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm transition"
                >
                  <Send size={16} />
                  {status === "sending"
                    ? t.join.sending
                    : status === "sent"
                      ? t.join.sent
                      : status === "error"
                        ? t.join.error
                        : t.join.submit}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
