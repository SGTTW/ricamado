// src/app/about/page.tsx
import Container from "@/components/common/Container";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";

export default function AboutPage() {
  return (
    <Container>
      <AboutHero />
      <AboutContent />
    </Container>
  );
}
