import React from "react";
import styled from "styled-components";
import PomPom from "./PomPom";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1528;
`;

const Spinner = styled.div`
  border: 4px solid #c2b7f0;
  border-top: 4px solid transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <PomPom />
    </LoadingContainer>
  );
};

export default Loading;
