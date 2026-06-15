"use client";

import { motion } from "framer-motion";

const services = [
  { icon: "🩺", title: "General Medicine", desc: "Complete primary healthcare for individuals and families with personalized treatment plans.", bg: "bg-blue-50" },
  { icon: "💻", title: "Online Consultation", desc: "24/7 video consultations with certified doctors — from the comfort of your home.", bg: "bg-teal-50" },
  { icon: "🚑", title: "Emergency Care", desc: "Fast-response medical support with on-call specialists available around the clock.", bg: "bg-red-50" },
  { icon: "🧪", title: "Lab & Diagnostics", desc: "Advanced testing and imaging services with results delivered directly to your dashboard.", bg: "bg-amber-50" },
  { icon: "🧠", title: "Mental Health", desc: "Confidential sessions with licensed therapists and psychiatrists — in-person or online.", bg: "bg-purple-50" },
  { icon: "👶", title: "Pediatric Care", desc: "Specialized healthcare for children from newborns to adolescents by trusted pediatricians.", bg: "bg-pink-50" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Complete Medical Services</h2>
          <p className="section-subtitle mx-auto">
            From routine checkups to specialized care — every aspect of your health covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className={`w-13 h-13 ${s.bg} rounded-xl flex items-center justify-center text-2xl mb-5 w-12 h-12`}>
                {s.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-base mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}