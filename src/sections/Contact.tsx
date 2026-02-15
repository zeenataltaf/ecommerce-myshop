import Section from "@/components/Section";

export default function Contact() {
  return (
    <Section id="contact">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <form className="max-w-md flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded-lg p-3"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="border rounded-lg p-3"
        />

        <textarea
          placeholder="Your Message"
          className="border rounded-lg p-3 h-32"
        />

        <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </Section>
  );
}
