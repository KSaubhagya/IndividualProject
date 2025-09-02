import { useNavigate } from "react-router-dom";

import {
  Container,
  Button,
  Features,
  AboutSection,
} from "../styles/AboutStyles";

import about from "../assests/about1.png";
import PomPom from "../components/PomPom";

function About() {
  const navigate = useNavigate();
  return (
    <Container>
      <PomPom />
      <AboutSection>
        <div className="about-container">
          <div className="image-wrapper">
            <div className="parallelogram">
              <img src={about} alt="About E-AD" />
            </div>
          </div>
          <div className="about-content">
            <h1 className="main-heading">Neurodiversity</h1>
            <h2 className="sub-heading">E-learning</h2>

            <p className="about-text">
              Our e-Learning modules have been designed and created by
              psychologists and neurodivergent individuals with over 15 years of
              experience in the field of neurodiversity, creating CDP-certified
              neuro-inclusive training of the highest quality.
            </p>
            <p className="about-text">
              With worldwide accessibility, our modules provide a wealth of
              benefits to empower you and your colleagues in embracing
              neurodiversity, whilst equipping neurodivergent individuals with
              the skills they need to thrive in the workplace.
            </p>
          </div>
        </div>

        <div className="cta-button">
          <Button onClick={() => navigate("/module")}>
            E-Learning Modules
          </Button>
        </div>
      </AboutSection>

      <Features>
        <h2>Global accessibility, anytime & anywhere</h2>
        <div className="features-grid">
          <div className="feature">
            <p>Neurodiverse-friendly</p>
          </div>
          <div className="feature">
            <p>Interactive Content</p>
          </div>
          <div className="feature">
            <p>Lived Experience</p>
          </div>
          <div className="feature">
            <p>SCORM Compliant</p>
          </div>
          <div className="feature">
            <p>Accessible Everywhere</p>
          </div>
          <div className="feature">
            <p>Easily Scalable</p>
          </div>
          <div className="feature">
            <p>CPD-Certified Training</p>
          </div>
          <div className="feature">
            <p>Cost and Time Effective</p>
          </div>
        </div>
      </Features>
    </Container>
  );
}

export default About;
