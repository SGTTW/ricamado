// src/components/privacy/PrivacyContent.tsx

const PrivacyContent = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 md:p-8 my-12 prose max-w-none">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          Ricamado collects information to provide personalized property recommendations:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Contact details (name, email, phone)</li>
          <li>Property preferences and search history</li>
          <li>Communication records with agents</li>
          
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">For Users</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Match you with suitable properties</li>
              <li>Connect you with verified agents</li>
              <li>Improve our recommendation algorithms</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">For Agents</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Verify professional credentials</li>
              <li>Facilitate client connections</li>
              <li>Provide market insights</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Data Protection</h2>
        <p className="mb-4">
          We implement industry-standard measures including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>SSL encryption for all data transfers</li>
          <li>Regular security audits</li>
          <li>Limited access to sensitive information</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your data at{" "}
          <a
            href="mailto:privacy@ricamado.com"
            className="text-blue-600 hover:underline"
          >
            privacy@ricamado.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyContent;