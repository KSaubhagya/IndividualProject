import React from "react";
import styled from "styled-components";
import { Book } from "@mui/icons-material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import UploadIcon from "@mui/icons-material/Upload";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Header,
  HeroText,
  Button,
  Features,
  HowItWorks,
  AboutSection,
  Footer,
} from "../styles/AboutStyles";

import varietyImage from "../assests/variety.png";
import customizeImage from "../assests/customize.jpg";
import supportImage from "../assests/support.jpg";
import awarenessImage from "../assests/awareness.avif";
import aboutImage from "../assests/para.jpeg";

function About() {
  const navigate = useNavigate(); // Initialize navigation
  return (
    <Container>
      <AboutSection>
        {/* <div className="divider"></div> */}

        <div className="what-we-do-container">
          <div className="heading-wrapper">
            <h1 className="main-heading">Neurodiversity</h1>
            <h2 className="sub-heading">E-learning</h2>
          </div>
          <div className="text-wrapper">
            <p className="description">
              Our e-Learning modules have been designed and created by
              psychologists and neurodivergent individuals with over 15 years of
              experience in the field of neurodiversity, creating CDP-certified
              neuro-inclusive training of the highest quality.
            </p>
          </div>
        </div>

        <div className="about-container">
          <div className="image-wrapper">
            <div className="parallelogram">
              <img src={aboutImage} alt="About E-AD" />
            </div>
          </div>
          <div className="about-content">
            <h2 className="about-heading">ABOUT E-AD</h2>
            <p className="about-text">
              E-AD is specially catered for the prevailing gap in the customized
              education for ADHD (Attention Deficit Hyperactivity Disorder)
              students. We believe that all minds belong, so it is our mission
              to inspire a world that supports and values the talents of
              neurodivergent minds, empowering individuals to be their best
              selves.
            </p>
            <p className="about-text">
              We want to provide adaptive learning pathways to enhance their
              engagement and academic performance, letting the students thrive
              academically while impacting the long-term educational outcomes of
              millions of learners globally, delivering support to
              neurodivergent talents.
            </p>
          </div>
        </div>

        <div className="cta-button">
          <Button onClick={() => navigate("/quiz")}>Let's Get Started</Button>
        </div>
      </AboutSection>

      <Features>
        <h2>Why Choose E-AD?</h2>
        <div className="features-grid">
          <div className="feature">
            <img src={varietyImage} alt="Variety" className="feature-image" />
            <h3>Variety</h3>
            <p>Access a wide range of resources tailored for ADHD learners.</p>
          </div>
          <div className="feature">
            <img
              src={customizeImage}
              alt="Customize"
              className="feature-image"
            />
            <h3>Customize</h3>
            <p>Create a learning path that suits your needs and style.</p>
          </div>
          <div className="feature">
            <img src={supportImage} alt="Support" className="feature-image" />
            <h3>Support</h3>
            <p>Receive guidance and tools to help you succeed.</p>
          </div>
          <div className="feature">
            <img
              src={awarenessImage}
              alt="Awareness"
              className="feature-image"
            />
            <h3>Awareness</h3>
            <p>Learn about ADHD and leverage it as a strength.</p>
          </div>
        </div>
      </Features>
    </Container>
  );
}

export default About;
