// import { testimonials } from '@/lib/testimonials';
// import TestimonialsSection from '@/components/sections/Testimonials';
import Container from '@/components/common/Container';

export default function TestimonialsPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Client Testimonials</h1>
        {/* <TestimonialsSection testimonials={testimonials} /> */}
      </div>
    </Container>
  );
}