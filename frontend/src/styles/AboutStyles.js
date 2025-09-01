import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  // background-color: #2c2b3e;
  color: #ffffff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Button = styled.button`
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

export const Features = styled.section`
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

export const AboutSection = styled.section`
  padding: 80px 20px;
  // background-color: #2c2b3e;
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
    color: rgb(199, 197, 197);
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
      width: 150%;
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
    color: rgb(199, 197, 197);
    margin-bottom: 20px;
    text-align: justify;
    text-align-last: right;
  }
  .cta-button {
    text-align: center;
    margin-top: 50px;
  }
`;
