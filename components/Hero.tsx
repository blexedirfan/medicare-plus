"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-blue-200 blur-3xl opacity-30" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-teal-200 blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div>
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 bg-teal-50 border border-teal-200 px-4 py-1.5 rounded-full mb-5"
          >
            ✦ Trusted Healthcare Platform
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Your Health,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Our Priority
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 text-lg text-slate-500 leading-relaxed max-w-md"
          >
            Book appointments with top doctors, get instant consultations, and
            manage your entire healthcare journey — all in one place.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a href="#contact" className="btn-primary">
              <CalendarCheck size={18} /> Book Appointment
            </a>
            <a href="#services" className="btn-outline">
              Explore Services <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex gap-10 mt-10 pt-8 border-t border-slate-100"
          >
            {[
              { val: "500+", label: "Certified Doctors", color: "text-blue-600" },
              { val: "24/7", label: "Online Support", color: "text-teal-600" },
              { val: "50K+", label: "Patients Served", color: "text-blue-600" },
            ].map((s) => (
              <div key={s.label}>
                <h3 className={`text-2xl font-extrabold ${s.color}`} style={{ fontFamily: "Sora, sans-serif" }}>
                  {s.val}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80"
            alt="Doctor"
            className="rounded-3xl shadow-2xl w-full h-[520px] object-cover"
          />

          {/* Floating card top-left */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-6 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <div>
              <p className="text-sm font-semibold text-slate-800">Live Consultation</p>
              <p className="text-xs text-slate-400">Available now</p>
            </div>
          </motion.div>

          {/* Floating card bottom-right */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <div>
              <p className="text-sm font-semibold text-blue-600">98% Satisfaction</p>
              <p className="text-xs text-slate-400">Patient reviews</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}