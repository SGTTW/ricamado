import { faqs } from '@/lib/faqs';
import Container from '@/components/common/Container';
import FaqsSection from '@/components/sections/FaqsSection';

export default function FaqsPage() {
  return (
    <Container>
      <div className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes
          </p>
        </div>

        <FaqsSection faqs={faqs} />
      </div>
    </Container>
  );
}