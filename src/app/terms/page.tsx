// src/app/terms/page.tsx
import TermsHero from "@/components/terms/TermsHero";
import TermsContent from "@/components/terms/TermsContent";
import Container from "@/components/common/Container";

export default function TermsPage() {
  return (
    <>
      <Container>
        <TermsHero />
        <TermsContent />
      </Container>
    </>
  );
}
