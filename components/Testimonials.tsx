"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    text: "Amazing healthcare service! The doctor was incredibly thorough and the video consultation was crystal clear. I got my prescription the same day.",
    name: "Ayesha Malik",
    location: "Karachi, Pakistan",
    initials: "AM",
  },
  {
    text: "I booked a specialist in under 2 minutes. The whole experience was seamless — from booking to follow-up. Absolutely love this platform.",
    name: "Rahul Hussain",
    location: "Lahore, Pakistan",
    initials: "RH",
  },
  {
    text: "Excellent experience with Dr. Sarah. She took the time to explain everything clearly. I've already referred three family members to MediCare Plus.",
    name: "Zara Khan",
    location: "Islamabad, Pakistan",
    initials: "ZK",
  },
];

export default function Testimonials() {
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
          <span className="section-label">Patient Stories</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle mx-auto">
            Thousands of patients trust MediCare Plus for their healthcare needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-amber-400 text-base tracking-widest mb-4">★★★★★</div>
              <blockquote className="text-slate-600 text-sm leading-relaxed italic">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #2563EB, #0D9488)" }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{r.name}</p>
                  <p className="text-xs text-slate-400">{r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}