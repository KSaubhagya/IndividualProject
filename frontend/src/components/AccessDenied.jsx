import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #383757;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.1rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #d1d1d1;
`;

const Button = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  background-color: #6c63ff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #5750d3;
  }
`;

const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Access Denied</Title>
      <Message>Admin privileges required.</Message>
      <Button onClick={() => navigate("/")}>Go Back to Home</Button>
    </Container>
  );
};

export default AccessDenied;
