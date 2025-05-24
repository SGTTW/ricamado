// src/components/terms/TermsContent.tsx
const TermsContent = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 md:p-8 my-12 prose max-w-none">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By using GetWater (&quot;Platform&quot;), you agree to these Terms and
          our Privacy Policy. These Terms govern your access to the water
          ordering services we provide to connect businesses with vendors.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
        <p className="mb-4">
          GetWater is a technology platform that facilitates transactions
          between:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Business customers (&quot;Users&quot;) seeking water delivery
            services
          </li>
          <li>
            Licensed water vendors (&quot;Vendors&quot;) providing delivery
            services
          </li>
        </ul>
        <p>
          <strong>Note:</strong> GetWater does not directly provide water
          delivery services.
        </p>
      </section>

      {/* Add other sections following the same pattern */}

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Business Users</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate delivery information</li>
              <li>Ensure safe access for deliveries</li>
              <li>Report issues within 24 hours</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Vendors (V2)</h3>
            <p className="text-gray-600 italic">
              Vendor-specific terms will apply upon marketplace launch.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>
          For questions about these Terms, contact us at{" "}
          <a
            href="mailto:info.getwater@gmail.com"
            className="text-blue-600 hover:underline"
          >
            info.getwater@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsContent;
