"use client";

import { motion } from "framer-motion";

const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Cardiologist",
    rating: "4.9",
    exp: "12 yrs",
    reviews: "150+",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80",
  },
  {
    name: "Dr. Michael Chen",
    role: "General Physician",
    rating: "4.8",
    exp: "9 yrs",
    reviews: "200+",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80",
  },
  {
    name: "Dr. Emily Roberts",
    role: "Pediatrician",
    rating: "5.0",
    exp: "8 yrs",
    reviews: "180+",
    img: "https://images.unsplash.com/photo-1594824475317-d0f0b4f5c1c5?w=500&q=80",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">Our Team</span>
          <h2 className="section-title">Trusted Medical Experts</h2>
          <p className="section-subtitle mx-auto">
            Board-certified doctors with years of experience, handpicked for their expertise and patient care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-56 object-cover object-top"
              />
              <div className="p-5">
                <h3 className="font-bold text-slate-800">{doc.name}</h3>
                <p className="text-sm font-semibold text-teal-600 mt-0.5 mb-3">{doc.role}</p>
                <div className="flex gap-4 text-xs text-slate-400">
                  <span>⭐ {doc.rating}</span>
                  <span>{doc.exp} exp.</span>
                  <span>{doc.reviews} reviews</span>
                </div>
                <a
                  href="#contact"
                  className="block mt-4 text-center text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-xl py-2.5 transition-all duration-200"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}