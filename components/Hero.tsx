"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-teal-200 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-teal-600 font-semibold"
          >
            Trusted Healthcare Platform
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight mt-3"
          >
            Your Health, <span className="text-blue-600">Our Priority</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 mt-4 text-lg"
          >
            Book appointments with top doctors, get instant consultations,
            and manage your healthcare journey — all in one place.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex gap-4 mt-6 flex-wrap"
          >
            <a href="#contact" className="btn-primary flex items-center gap-2">
              Book Appointment <CalendarCheck size={18} />
            </a>

            <a
              href="#services"
              className="btn-secondary flex items-center gap-2"
            >
              Explore Services <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">500+</h3>
              <p className="text-sm text-gray-500">Doctors</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-600">24/7</h3>
              <p className="text-sm text-gray-500">Support</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">50K+</h3>
              <p className="text-sm text-gray-500">Patients</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT (IMAGE AREA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561"
            alt="Doctor"
            className="rounded-2xl shadow-xl w-full object-cover"
          />

          {/* Floating Card 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-6 left-6 bg-white shadow-lg p-3 rounded-xl"
          >
            <p className="text-sm font-medium">Live Consultation</p>
            <p className="text-xs text-gray-500">Available now</p>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute bottom-6 right-6 bg-white shadow-lg p-3 rounded-xl"
          >
            <p className="text-sm font-medium text-blue-600">
              98% Satisfaction
            </p>
            <p className="text-xs text-gray-500">Patient reviews</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}