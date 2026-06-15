export default function Contact() {
  return (
    <section id="contact" className="section container">
      <h2 className="text-3xl font-bold text-center mb-10">
        Book an Appointment
      </h2>

      <div className="max-w-xl mx-auto card space-y-4">
        <input
          className="w-full border p-3 rounded-xl"
          placeholder="Your Name"
        />
        <input
          className="w-full border p-3 rounded-xl"
          placeholder="Phone Number"
        />
        <textarea
          className="w-full border p-3 rounded-xl"
          placeholder="Message"
        ></textarea>

        <button className="btn-primary w-full">
          Submit Request
        </button>
      </div>
    </section>
  );
}