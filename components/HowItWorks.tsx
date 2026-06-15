"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "Create Account", desc: "Sign up for free and complete your health profile in minutes." },
  { num: "2", title: "Choose a Doctor", desc: "Browse specialists by field, ratings, and availability." },
  { num: "3", title: "Book Appointment", desc: "Select your preferred time slot — in-person or online." },
  { num: "4", title: "Get Treated", desc: "Receive expert care and access your records anytime." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">Simple Process</span>
          <h2 className="section-title">Book in Under 2 Minutes</h2>
          <p className="section-subtitle mx-auto">
            Getting quality healthcare has never been this easy.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {/* Connector line desktop only */}
          <div className="hidden md:block absolute top-7 left-[15%] right-[15%] h-px bg-gradient-to-r from-blue-500 to-teal-500 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="text-center relative z-10"
            >
              <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center text-white font-extrabold text-lg mb-5 shadow-lg"
                style={{ background: "linear-gradient(135deg, #2563EB, #0D9488)", fontFamily: "Sora, sans-serif" }}>
                {step.num}
              </div>
              <h3 className="font-bold text-slate-800 text-sm mb-1.5">{step.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}