import React, { useState } from "react";
import styled from "styled-components";
import { ExpandMore } from "@mui/icons-material";
import { useAuthContext } from "@asgardeo/auth-react";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  background-color: #1a1528;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 50px;
    margin-right: 10px;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #c2b7f0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
`;

const NavItem = styled(Link)`
  font-weight: bold;
  color: white;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #c2b7f0;
  }
`;

const Dropdown = styled.div`
  position: relative;

  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #1a1528;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    display: ${({ open }) => (open ? "block" : "none")};
    min-width: 150px;
    z-index: 10;
  }

  .dropdown-item {
    padding: 10px;
    color: white;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: #c2b7f0;
      color: #1a1528;
    }
  }
`;

const ContactButton = styled.button`
  border: 2px solid #c2b7f0;
  color: #c2b7f0;
  background: transparent;
  border-radius: 20px;
  padding: 8px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c2b7f0;
    color: #1a1528;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #c2b7f0;
`;

const Navbar = () => {
  const [learnOpen, setLearnOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { state, signIn, signOut } = useAuthContext();

  const handleLogin = async () => {
    try {
      await signIn();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <NavbarContainer>
      <Logo to="/">
        <img src="/logo.png" alt="EAD Logo" />
        <span>EAD</span>
      </Logo>

      <NavLinks>
        <NavItem to="/about">ABOUT</NavItem>

        <Dropdown open={learnOpen} onMouseEnter={() => setLearnOpen(true)} onMouseLeave={() => setLearnOpen(false)}>
          <NavItem to="#">
            LEARN <ExpandMore fontSize="small" />
          </NavItem>
          <div className="dropdown-content">
            <NavItem to="/courses" className="dropdown-item">Courses</NavItem>
            <NavItem to="/tutorials" className="dropdown-item">Tutorials</NavItem>
          </div>
        </Dropdown>

        <Dropdown open={servicesOpen} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
          <NavItem to="#">
            SERVICES <ExpandMore fontSize="small" />
          </NavItem>
          <div className="dropdown-content">
            <NavItem to="/consulting" className="dropdown-item">Consulting</NavItem>
            <NavItem to="/development" className="dropdown-item">Development</NavItem>
          </div>
        </Dropdown>

        <NavItem to="/events">EVENTS</NavItem>
      </NavLinks>

      {state.isAuthenticated ? (
        <UserProfile>
          <span>{state.username || state.email}</span>
          <ContactButton onClick={() => signOut()}>LOG OUT</ContactButton>
        </UserProfile>
      ) : (
        <ContactButton onClick={handleLogin}>SIGN IN/UP</ContactButton>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
