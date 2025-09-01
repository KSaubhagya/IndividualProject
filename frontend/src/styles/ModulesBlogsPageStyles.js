import styled from "styled-components";
import { Link } from "react-router-dom";

export const BottomCtaBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 40px;
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

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  // background-color: #2c2b3e;
  color: #ffffff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const TopBanner = styled.div`
  max-width: 960px;
  width: 92%;
  margin: 24px auto 10px;
  padding: 18px 28px;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
`;

export const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #ffffff;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #bdbdbd;
  margin-bottom: 40px;
`;

export const ModuleGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled.div`
  background-color: #383757;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
    object-fit: cover;
  }
  p {
    font-size: 0.95rem;
    color: #c7c7c7;
    margin-bottom: 15px;
  }
  h4 {
    font-size: 1rem;
    color: #ffffff;
    margin-top: 10px;
  }
  small {
    font-size: 0.85rem;
    color: #aaa;
  }
`;
