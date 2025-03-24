import React, { useState } from "react";
import styled from "styled-components";
import { ExpandMore } from "@mui/icons-material";

const NavbarContainer = styled.nav`
  background-color: #1a1528;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
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

const NavItem = styled.div`
  font-weight: bold;
  color: white;
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

const Navbar = () => {
  const [learnOpen, setLearnOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <NavbarContainer>
      {/* Logo */}
      <Logo>
        <img src="/logo.png" alt="EAD Logo" />
        <span>EAD</span>
      </Logo>

      {/* Navigation Links */}
      <NavLinks>
        <NavItem>ABOUT</NavItem>

        <Dropdown open={learnOpen} onMouseEnter={() => setLearnOpen(true)} onMouseLeave={() => setLearnOpen(false)}>
          <NavItem>
            LEARN <ExpandMore fontSize="small" />
          </NavItem>
          <div className="dropdown-content">
            <div className="dropdown-item">Courses</div>
            <div className="dropdown-item">Tutorials</div>
          </div>
        </Dropdown>

        <Dropdown open={servicesOpen} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
          <NavItem>
            SERVICES <ExpandMore fontSize="small" />
          </NavItem>
          <div className="dropdown-content">
            <div className="dropdown-item">Consulting</div>
            <div className="dropdown-item">Development</div>
          </div>
        </Dropdown>

        <NavItem>EVENTS</NavItem>
      </NavLinks>

      {/* Contact Button */}
      <ContactButton>CONTACT US</ContactButton>
    </NavbarContainer>
  );
};

export default Navbar;
