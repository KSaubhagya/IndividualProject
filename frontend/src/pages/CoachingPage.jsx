import React, { useState } from "react";
import {
  Container,
  Header,
  HeroText,
  Button,
  Section,
  SectionTitle,
  SectionSubtitle,
  PillButton,
  HeroImageDiamond,
  FeatureGrid,
  FeatureCard,
  SpecializationGrid,
  SpecializationCard,
  PopupOverlay,
  PopupContent,
} from "../styles/CoachingPageStyles";
import banner from "../assests/adhd3.jpg";
import PomPom from "../components/PomPom";

const CoachingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <Container>
      <PomPom />
      {/* Hero Section */}
      <Header>
        {/* <HeroImageDiamond src={supportImage} alt="Coach" /> */}
        <HeroText>
          <h1>Neurodiversity Coaching Centre of Excellence</h1>
          <p>
            Delivering the highest quality coaching to employees throughout
            their career.
          </p>
          <Button
            onClick={() =>
              document
                .getElementById("get-in-touch")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore our Coaching
          </Button>
        </HeroText>
      </Header>
      <Section>
        <SectionTitle>Why e-ad?</SectionTitle>
        <SectionSubtitle>
          With years of experience in neurodiversity coaching, we’ve supported
          individuals across all stages of their career. Delivering the highest
          quality coaching to employees throughout their career.
        </SectionSubtitle>
        <FeatureCard>
          <HeroImageDiamond src={banner} alt="banner" />
        </FeatureCard>

        {/* Features Grid */}

        <FeatureGrid>
          <FeatureCard>
            <p>Coaching & Neurodiversity Experts</p>
          </FeatureCard>
          <FeatureCard>
            <p>Inclusive Workplaces</p>
          </FeatureCard>
          <FeatureCard>
            <p>Maximising Strengths</p>
          </FeatureCard>
          <FeatureCard>
            <p>Expert Leadership Team</p>
          </FeatureCard>
        </FeatureGrid>
      </Section>
      {/* Coaching Specializations */}
      <Section>
        <SectionTitle>What neurodiversity coaching do we offer?</SectionTitle>
        <SpecializationGrid>
          <SpecializationCard>
            <h3>Leadership Coaching</h3>
            <p>Designed for those in or aspiring to leadership roles.</p>

            <Button
              onClick={() =>
                document
                  .getElementById("get-in-touch")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Find out more →
            </Button>
          </SpecializationCard>
          <SpecializationCard>
            <h3>Support Coaching</h3>
            <p>
              Designed for individuals navigating their personal neurodiversity
              journey.
            </p>
            <Button
              onClick={() =>
                document
                  .getElementById("get-in-touch")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Find out more →
            </Button>
          </SpecializationCard>
        </SpecializationGrid>
      </Section>
      <Section id="get-in-touch">
        <SectionTitle>
          Enquire about our neurodiversity coaching offers
        </SectionTitle>
        <PillButton onClick={() => setShowPopup(true)}>Get in Touch</PillButton>
      </Section>

      {showPopup && (
        <PopupOverlay onClick={() => setShowPopup(false)}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <h3>📞 Contact Us</h3>
            <p>Phone: +94 77 123 4567</p>
            <p>Email: contact@ead.com</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </PopupContent>
        </PopupOverlay>
      )}
    </Container>
  );
};

export default CoachingPage;
