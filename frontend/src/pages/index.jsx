import React from "react";
import styled from 'styled-components';


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
    gap: 20px;
    margin-top: 40px;
  }

  .feature {
    background-color: #383757;
    padding: 20px;
    border-radius: 10px;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const HowItWorks = styled.section`
  padding: 50px 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .steps {
    display: flex;
    justify-content: center;
    gap: 40px;
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

function App() {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <HeroText>
          <h1>E-Learning Platform for ADHD</h1>
          <p>
            We believe in a world where ADHD is a strength. Our mission is to
            empower individuals to reach their potential through personalized
            learning experiences.
          </p>
          <Button>Let's Get Started</Button>
        </HeroText>
      </Header>

      {/* Features Section */}
      <Features>
        <h2>Why Choose E-AD?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Variety</h3>
            <p>Access a wide range of resources tailored for ADHD learners.</p>
          </div>
          <div className="feature">
            <h3>Customize</h3>
            <p>Create a learning path that suits your needs and style.</p>
          </div>
          <div className="feature">
            <h3>Support</h3>
            <p>Receive guidance and tools to help you succeed.</p>
          </div>
          <div className="feature">
            <h3>Awareness</h3>
            <p>Learn about ADHD and leverage it as a strength.</p>
          </div>
        </div>
      </Features>

      {/* How It Works Section */}
      <HowItWorks>
        <h2>How Does This Work?</h2>
        <div className="steps">
          <div className="step">1</div>
          <div className="step">2</div>
          <div className="step">3</div>
        </div>
      </HowItWorks>

      {/* Footer */}
      <Footer>
        <p>
          &copy; {new Date().getFullYear()} E-AD | <a href="#terms">Terms</a> |{" "}
          <a href="#privacy">Privacy</a>
        </p>
      </Footer>
    </Container>
  );
}

export default App;