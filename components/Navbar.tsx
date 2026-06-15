"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Activity } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-2 font-bold text-blue-600">
          <Activity className="text-teal-500" />
          MediCare Plus
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <a className="hidden md:block btn-primary" href="#contact">
          Book Now
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4">
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#pricing">Pricing</a>
          <a className="btn-primary text-center" href="#contact">
            Book Now
          </a>
        </div>
      )}
    </motion.header>
  );
}