import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #2c2b3e;
  color: #ffffff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  background-color: #383757;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #6c63ff;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #232239;
  color: #ffffff;

  &:focus {
    outline: none;
    border-color: #534bff;
  }
`;

const Button = styled.button`
  background-color: #6c63ff;
  color: white;
  padding: 12px;
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

const Link = styled.a`
  color: #6c63ff;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  return (
   <Container>
          <Card>
              <Title>Login</Title>
              <Form>
                  <Input type="email" placeholder="Email" />
                  <Input type="password" placeholder="Password" />
                  <Button type="submit">Login</Button>
              </Form>
              <p>
                  Don't have an account? <Link href="/register">Register</Link>
              </p>
          </Card>
      </Container>
  );
}

function Register() {
  return (
    <Container>
      <Card>
        <Title>Register</Title>
        <Form>
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Button type="submit">Register</Button>
        </Form>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </Card>
 
    </Container>
  );
}

export { Login, Register };
