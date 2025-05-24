// src/app/contact/page.tsx
import Container from "@/components/common/Container";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
export default function ContactPage() {
  return (
    <Container>
      <ContactHero />
      <ContactForm />
    </Container>
  );
}
