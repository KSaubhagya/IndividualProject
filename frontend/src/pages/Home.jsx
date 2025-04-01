import React from "react";
import styled from 'styled-components';
import { Book } from '@mui/icons-material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import UploadIcon from '@mui/icons-material/Upload';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";


// Sample images (replace with your actual image imports)
import varietyImage from '../assests/variety.png';
import customizeImage from '../assests/customize.jpg';
import supportImage from '../assests/support.jpg';
import awarenessImage from '../assests/awareness.avif';
import aboutImage from '../assests/para.jpeg'; // Add your parallelogram image

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #2c2b3e;
  color: #ffffff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #4b4b6b, #2c2b3e);
  text-align: center;
`;

const HeroText = styled.div`
  max-width: 800px;
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
`;

const Button = styled.button`
  background-color: #6c63ff;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #534bff;
  }
`;

const Features = styled.section`
  padding: 50px 20px;
  background-color: #232239;
  text-align: center;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-top: 40px;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
  .feature {
    background-color: #383757;
    padding: 25px 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-5px);
    }
  }
  .feature-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 12px;
    border: 3px solid rgb(20, 16, 101);
  }
  h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
  p {
    font-size: 1rem;
    margin-top: 0;
  }
`;

const HowItWorks = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #2c2b3e;
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  .guide-heading {
    font-size: 1.5rem;
    margin-bottom: 50px;
    color: #e0e0e0;
    font-weight: 400;
  }
  .steps-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .steps {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .step-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
  }
  .step {
    background-color: #6c63ff;
    color: white;
    padding: 20px;
    border-radius: 50%;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .step-text {
    text-align: center;
    font-size: 1rem;
    color: #e0e0e0;
    margin-top: 0;
  }
  .arrow {
    color: #6c63ff;
    font-size: 2rem;
    margin: 40px 10px 0;
    @media (max-width: 768px) {
      transform: rotate(90deg);
      margin: 20px 0;
    }
  }
`;

const AboutSection = styled.section`
  padding: 80px 20px;
  background-color: #2c2b3e;
  .divider {
    height: 2px;
    background: linear-gradient(90deg, transparent, #6c63ff, transparent);
    margin: 0 auto 50px;
    width: 80%;
    max-width: 600px;
  }
  .what-we-do-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    gap: 60px;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 30px;
    }
  }
  .heading-wrapper {
    flex: 1;
    text-align: left;
  }
  .text-wrapper {
    flex: 1;
    text-align: right;
  }
  .main-heading {
    font-size: 3rem;
    font-weight: 700;
    color: #6c63ff;
    margin-bottom: 10px;
    line-height: 1.1;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  .sub-heading {
    font-size: 1.8rem;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 0;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  .description {
    font-size: 1rem;
    line-height: 1.6;
    color:rgb(199, 197, 197);
    margin-bottom: 30px;
    text-align: justify;
    text-align-last: right;
  }
  .about-container {
    max-width: 1200px;
    margin: 50px auto 0;
    display: flex;
    align-items: center;
    gap: 60px;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 30px;
    }
  }
  .image-wrapper {
    flex: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
    margin-left: -100px; 
  }
  .parallelogram {
    width: 100%;
    max-width: 400px;
    height: 300px;
    background-color: #383757;
    border-radius: 15px;
    transform: skewX(-15deg);
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    position: relative;
    img {
      width: 170%;
      height: 100%;
      object-fit: cover;
     transform: skewX(15deg) translateX(-5%);
    }
  }
  .about-content {
    flex: 1;
    text-align: right;
  }
  .about-heading {
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 20px;
    text-align: right;
  }
  .about-text {
    font-size: 1rem;
    line-height: 1.6;
    color:rgb(199, 197, 197);
    margin-bottom: 20px;
    text-align: justify;
    text-align-last: right;
  }
  .cta-button {
    text-align: center;
    margin-top: 50px;
  }
`;

const Footer = styled.footer`
  background-color: #1a182b;
  padding: 20px;
  text-align: center;
  color: #a0a0a0;
  a {
    color: #6c63ff;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;

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
          <Button onClick={() => navigate('/quiz')}>Let's Get Started</Button>
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
            <img src={customizeImage} alt="Customize" className="feature-image" />
            <h3>Customize</h3>
            <p>Create a learning path that suits your needs and style.</p>
          </div>
          <div className="feature">
            <img src={supportImage} alt="Support" className="feature-image" />
            <h3>Support</h3>
            <p>Receive guidance and tools to help you succeed.</p>
          </div>
          <div className="feature">
            <img src={awarenessImage} alt="Awareness" className="feature-image" />
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
              <p className="step-text">Take our quiz to identify your learning style</p>
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
              <p className="step-text">Get personalized and customized materials</p>
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
              Neurodiversity is at the heart of what we do. We help our clients to better integrate into society 
              by promoting an inclusive educational environment, bringing forth the hidden potential. What makes us 
              different is our experience, passion and uncompromising drive for excellence in everything we do.
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
              E-AD is specially catered for the prevailing gap in the customized education for ADHD (Attention Deficit 
              Hyperactivity Disorder) students. We believe that all minds belong, so it is our mission to inspire a 
              world that supports and values the talents of neurodivergent minds, empowering individuals to be their 
              best selves.
            </p>
            <p className="about-text">
              We want to provide adaptive learning pathways to enhance their engagement and academic performance, 
              letting the students thrive academically while impacting the long-term educational outcomes of millions 
              of learners globally, delivering support to neurodivergent talents.
            </p>
          </div>
        </div>

        <div className="cta-button">
        <Button onClick={() => navigate('/quiz')}>Let's Get Started</Button>
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