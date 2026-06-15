import MotionWrapper from "./MotionWrapper";

export default function CTA() {
  return (
    <section className="section container">
      <MotionWrapper>
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold">
            Ready to take control of your health?
          </h2>

          <p className="mt-3 text-white/80">
            Book your first consultation in less than 2 minutes.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>
      </MotionWrapper>
    </section>
  );
}