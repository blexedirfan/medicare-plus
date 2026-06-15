"use client";

import { motion } from "framer-motion";

const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Cardiologist",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
  {
    name: "Dr. Michael Chen",
    role: "General Physician",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },
  {
    name: "Dr. Emily Roberts",
    role: "Pediatrician",
    img: "https://images.unsplash.com/photo-1594824475317-d0f0b4f5c1c5",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="section container">
      <h2 className="text-3xl font-bold text-center mb-12">
        Trusted Medical Experts
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((doc, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="card text-center overflow-hidden"
          >
            <img
              src={doc.img}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold">{doc.name}</h3>
            <p className="text-gray-500">{doc.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}