"use client";
import ContactFooter from "./principal-letters";
import InteractiveCardsDemo from "./projects-card-image";
import GsapSection from "./scrooll-section";
import PortfolioSection from "./section";

export default function SectionOne() {
  return (
    <section>
      <div className={`  text-white`}>
        <GsapSection>
          <PortfolioSection />
          <InteractiveCardsDemo />
          <ContactFooter />
        </GsapSection>
      </div>
    </section>
  );
}
