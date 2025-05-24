// src/app/properties/page.tsx
import Container from "@/components/common/Container";
import PropertyHero from "@/components/properties/PropertyHero";
import PropertySearch from "@/components/properties/PropertySearch";
import PropertyList from "@/components/properties/PropertyList";
import properties from "@/data/propertyData";
// import PropertyInsightSection from "@/components/properties/PropertyInsightSection";

export default function PropertiesPage() {
  return (
    <Container>
      <PropertyHero />
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <div className="mb-8 ">
          <PropertySearch variant="default" />
        </div>
        <PropertyList properties={properties} />
        {/* <PropertyInsightSection/> */}
        {/* Purpose-Driven Insights */}{" "}
        {/* <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Beyond the Listing
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Lifestyle Alignment",
                description:
                  "Properties curated to match your personal and professional aspirations.",
              },
              {
                title: "Community Impact",
                description:
                  "Spaces that contribute positively to local neighborhoods and ecosystems.",
              },
              {
                title: "Future-Focused",
                description:
                  "Properties designed with sustainability, technology, and holistic living in mind.",
              },
            ].map((insight, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-600">
                  {insight.title}
                </h3>
                <p className="text-gray-700">{insight.description}</p>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </Container>
  );
}
