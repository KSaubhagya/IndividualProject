import styled from "styled-components";

export const FeedbackContainer = styled.div`
  max-width: 600px;
  margin: 100px auto;
  padding: 40px;
  background-color: #2c2b3e;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: "Poppins", sans-serif;

  h2 {
    font-size: 2rem;
    color: #6c63ff;
    margin-bottom: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #e0e0e0;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  background-color: #383757;
  color: #ffffff;
  font-size: 1rem;
  outline: none;

  option {
    background: #2c2b3e;
    color: #ffffff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border-radius: 10px;
  border: none;
  background-color: #383757;
  color: #ffffff;
  font-size: 1rem;
  resize: none;
  outline: none;
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

export const Star = styled.span`
  font-size: 2rem;
  color: ${({ filled }) => (filled ? "#FFD700" : "#555")};
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: -10px;
`;

export const SubmitButton = styled.button`
  background-color: #6c63ff;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #534bff;
  }
`;
