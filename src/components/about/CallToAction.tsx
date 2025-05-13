// src/components/about/CallToAction.tsx
export default function CallToAction() {
    return (
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join Us in Transforming Spaces
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover how Ricamado can help you find a space that resonates with
          your life&apos;s mission.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </section>
    );
  }