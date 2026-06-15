import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* New Premium Sections */}
      <Doctors />
      <Testimonials />
      <CTA />

      {/* Existing sections remain */}
      <section className="section container text-center">
        <h2 className="text-3xl font-bold">Services</h2>
        <p className="text-gray-600 mt-3">
          Complete healthcare solutions for everyone.
        </p>
      </section>
      <section id="services" className="section container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Medical Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "General Medicine",
              desc: "Complete primary healthcare for individuals and families.",
            },
            {
              title: "Online Consultation",
              desc: "24/7 video consultations with certified doctors.",
            },
            {
              title: "Emergency Care",
              desc: "Fast response medical support when you need it most.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section container">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold">
            Take Control of Your Health Today
          </h2>

          <p className="mt-3 text-white/80">
            Book your consultation in under 2 minutes with certified doctors.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>
      </section>
      <Contact />
    </main>
  );
}
