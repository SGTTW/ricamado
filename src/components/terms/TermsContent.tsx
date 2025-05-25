// src/components/terms/TermsContent.tsx
const TermsContent = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 md:p-8 my-12 prose max-w-none">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By using Ricamado&apos;s services (&apos;Platform&apos;), you agree to
          these Terms and our Privacy Policy. These Terms govern your access to
          our property discovery and agent connection services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
        <p className="mb-4">
          Ricamado is a real estate platform that connects:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Property seekers with life-enhancing spaces</li>
          <li>Verified real estate agents and property owners</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Property Seekers</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate search criteria</li>
              <li>Verify property details before commitments</li>
              <li>Communicate professionally with agents</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Agents & Owners</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Maintain accurate property listings</li>
              <li>Respond promptly to inquiries</li>
              <li>Adhere to fair housing laws</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>
          For questions about these Terms, contact us at{" "}
          <a
            href="mailto:legal@ricamado.com"
            className="text-blue-600 hover:underline"
          >
            legal@ricamado.com
          </a>
        </p>
      </section>
    </div>
  );
};
export default TermsContent;
