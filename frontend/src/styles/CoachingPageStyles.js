import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 60px 20px;
  // background: linear-gradient(135deg, #4b4b6b, #2c2b3e);
  text-align: center;
`;

export const HeroText = styled.div`
  max-width: 800px;
  margin-top: 20px;
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #ffffff;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #cfcfcf;
  }
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
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #534bff;
    transform: translateY(-2px);
  }
`;

export const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #bdbdbd;
  max-width: 800px;
  margin: 0 auto 40px;
`;

export const PillButton = styled.button`
  padding: 12px 26px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  color: #ffffff;
  background-color: #6c63ff;
  box-shadow: 0 6px 16px rgba(108, 99, 255, 0.3);
  transition: transform 0.2s ease, background-color 0.3s ease,
    box-shadow 0.3s ease;
  &:hover {
    background-color: #534bff;
    transform: translateY(-2px);
  }
`;

export const HeroImageDiamond = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
  border-radius: 15px;
  margin: 10px 0;
  //   border: 4px solid #030217ff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

export const FeatureGrid = styled.div`
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
`;

export const FeatureCard = styled.div`
  background-color: #383757;
  padding: 10px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px);
  }
`;

export const SpecializationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const SpecializationCard = styled.div`
  background-color: #383757;
  padding: 40px 30px;
  border-radius: 15px;
  text-align: left;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px);
  }
  h3 {
    font-size: 1.6rem;
    margin-bottom: 15px;
    color: #6c63ff;
  }
  p {
    font-size: 1rem;
    color: #c7c7c7;
    margin-bottom: 20px;
    line-height: 1.6;
  }
  button {
    margin-top: auto;
  }
`;
export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: #383757;
  padding: 20px;
  border-radius: 12px;
  color: #fff;
  text-align: center;
  min-width: 280px;
  animation: bounceIn 0.4s ease;

  h3 {
    margin-top: 0;
  }

  button {
    margin-top: 10px;
    padding: 6px 12px;
    border: none;
    border-radius: 8px;
    background: #ff5a5f;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #e14b4f;
    }
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    60% {
      transform: scale(1.05);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
`;
