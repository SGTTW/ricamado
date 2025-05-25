// src/app/privacy/page.tsx

import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyContent from "@/components/privacy/PrivacyContent";
import Container from "@/components/common/Container";
export default function PrivacyPage() {
  return (
    <Container>
      <PrivacyHero />
      <PrivacyContent />
    </Container>
  );
}
 