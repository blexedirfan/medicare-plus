"use client";

import { motion } from "framer-motion";

const reviews = [
  "Amazing healthcare service! Very fast and professional.",
  "I booked a doctor in under 2 minutes. Highly recommended!",
  "Excellent experience with online consultation.",
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Patients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card"
            >
              <p className="text-gray-600">"{r}"</p>
              <p className="mt-4 font-semibold">Verified Patient</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}