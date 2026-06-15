"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-14 text-center text-white overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2563EB 0%, #0D9488 100%)" }}
        >
          {/* Decorative circles */}
          <div className="absolute top-[-60px] right-[-60px] w-52 h-52 rounded-full bg-white/5" />
          <div className="absolute bottom-[-80px] left-[-40px] w-64 h-64 rounded-full bg-white/5" />

          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 relative z-10" style={{ fontFamily: "Sora, sans-serif" }}>
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-white/80 text-lg mb-8 relative z-10">
            Join 50,000+ patients already benefiting from MediCare Plus. Book your first consultation free.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3.5 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-200 relative z-10"
          >
            Book Free Consultation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}