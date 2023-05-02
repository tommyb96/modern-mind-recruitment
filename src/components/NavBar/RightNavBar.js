import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const navLinks = [
  { id: 1, to: "#home", label: "Home" },
  { id: 2, to: "#über-uns", label: "Über uns" },
  { id: 3, to: "#leistungen", label: "Leistungen" },
  { id: 4, to: "#workshop", label: "Workshop" },
  { id: 5, to: "#kontakt", label: "Kontakt" },
];

export default function RightNavBar({ open }) {
  const NavLinks = () => {
    return (
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link smooth to={link.to}>
              {link.label} <span></span>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <NavContainer open={open}>
      <NavLinks />
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 2;

  ul {
    display: flex;
    list-style: none;
    margin: 10px;
    padding: 0;
    margin-left: 150px;

    li {
      padding: 2.5vw;
      white-space: nowrap;

      a {
        position: relative;
        color: black;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;

        @media (max-width: 1024px) {
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-flow: column nowrap;
      background-color: rgba(0, 0, 0, 0.1);
      position: fixed;
      margin: 0;
      top: 0;
      right: 0;
      height: 100vh;
      width: 250px;
      padding-top: 3.5rem;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      transition: transform 0.7s ease-in-out;
    }
  }
`;
