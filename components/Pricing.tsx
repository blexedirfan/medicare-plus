"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "0",
    desc: "For individuals exploring the platform",
    featured: false,
    features: [
      { text: "2 consultations/month", active: true },
      { text: "Online doctor chat", active: true },
      { text: "Basic health records", active: true },
      { text: "Lab result access", active: false },
      { text: "Priority booking", active: false },
      { text: "Family accounts", active: false },
    ],
  },
  {
    name: "Pro",
    price: "29",
    desc: "For individuals who need full access",
    featured: true,
    features: [
      { text: "Unlimited consultations", active: true },
      { text: "Video & chat support", active: true },
      { text: "Full health records", active: true },
      { text: "Lab result access", active: true },
      { text: "Priority booking", active: true },
      { text: "Family accounts", active: false },
    ],
  },
  {
    name: "Family",
    price: "59",
    desc: "For families of up to 6 members",
    featured: false,
    features: [
      { text: "Unlimited consultations", active: true },
      { text: "Video & chat support", active: true },
      { text: "Full health records", active: true },
      { text: "Lab result access", active: true },
      { text: "Priority booking", active: true },
      { text: "Up to 6 family accounts", active: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">Transparent Pricing</span>
          <h2 className="section-title">Simple, Honest Plans</h2>
          <p className="section-subtitle mx-auto">
            No hidden charges. Choose the plan that fits your healthcare needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
                plan.featured
                  ? "border-2 border-blue-500 shadow-2xl shadow-blue-100 scale-105"
                  : "border border-slate-100 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold text-white px-4 py-1.5 rounded-full whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg, #2563EB, #0D9488)" }}>
                  Most Popular
                </div>
              )}

              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{plan.name}</p>
              <div className="flex items-end gap-1 my-2">
                <span className="text-lg font-bold text-slate-500 mb-2">$</span>
                <span className="text-5xl font-extrabold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>
                  {plan.price}
                </span>
                <span className="text-slate-400 text-sm mb-2">/mo</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">{plan.desc}</p>

              <hr className="border-slate-100 mb-4" />

              <ul className="space-y-3 mb-7">
                {plan.features.map((f) => (
                  <li key={f.text} className={`flex items-center gap-2.5 text-sm ${f.active ? "text-slate-700" : "text-slate-300"}`}>
                    <span className={`font-bold ${f.active ? "text-teal-500" : "text-slate-300"}`}>
                      {f.active ? "✓" : "–"}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={plan.featured ? "btn-primary w-full text-center block" : "btn-outline w-full text-center block"}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}