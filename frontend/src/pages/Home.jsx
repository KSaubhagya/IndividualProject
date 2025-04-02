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
} from "../styles/HomeStyles";

import varietyImage from "../assests/variety.png";
import customizeImage from "../assests/customize.jpg";
import supportImage from "../assests/support.jpg";
import awarenessImage from "../assests/awareness.avif";
import aboutImage from "../assests/para.jpeg";

function Home() {
  const navigate = useNavigate(); // Initialize navigation
  return (
    <Container>
      <Header>
        <HeroText>
          <h1>E-Learning Platform for ADHD</h1>
          <p>
            We believe in a world where ADHD is a strength. Our mission is to
            empower individuals to reach their potential through personalized
            learning experiences.
          </p>
          <Button onClick={() => navigate("/quiz")}>Let's Get Started</Button>
        </HeroText>
      </Header>

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

      <HowItWorks>
        <h2>How Does This Work?</h2>
        <h1 className="guide-heading">Simple Guide to Start</h1>
        <div className="steps-container">
          <div className="steps">
            <div className="step-item">
              <div className="step">
                <QuestionMarkIcon style={{ fontSize: 40 }} />
              </div>
              <p className="step-text">
                Take our quiz to identify your learning style
              </p>
            </div>
            <ArrowForwardIosIcon className="arrow" />
            <div className="step-item">
              <div className="step">
                <UploadIcon style={{ fontSize: 40 }} />
              </div>
              <p className="step-text">Upload your notes and materials</p>
            </div>
            <ArrowForwardIosIcon className="arrow" />
            <div className="step-item">
              <div className="step">
                <Book style={{ fontSize: 40 }} />
              </div>
              <p className="step-text">
                Get personalized and customized materials
              </p>
            </div>
          </div>
        </div>
      </HowItWorks>

      <AboutSection>
        <div className="divider"></div>

        <div className="what-we-do-container">
          <div className="heading-wrapper">
            <h1 className="main-heading">What We Do</h1>
            <h2 className="sub-heading">With E-AD?</h2>
          </div>
          <div className="text-wrapper">
            <p className="description">
              Neurodiversity is at the heart of what we do. We help our clients
              to better integrate into society by promoting an inclusive
              educational environment, bringing forth the hidden potential. What
              makes us different is our experience, passion and uncompromising
              drive for excellence in everything we do.
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

      {/* <Footer>
        <p>
          &copy; {new Date().getFullYear()} E-AD | <a href="#terms">Terms</a> |{" "}
          <a href="#privacy">Privacy</a> - All Rights Reserved
        </p>
      </Footer> */}
    </Container>
  );
}

export default Home;
