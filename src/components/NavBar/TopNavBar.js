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

export default function RightNavBar() {
  const NavLinks = () => {
    return (
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link smooth to={link.to}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <NavContainer>
      <NavLinks />
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255, 0.8);
  transition: 0.5s ease;
  opacity: 1;

  /* &:hover {
    opacity: 1;
  } */

  ul {
    display: flex;
    list-style: none;
    margin: 5px 10px 5px 150px;

    li {
      padding: 2.5vw;
      white-space: nowrap;

      a {
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

  @media (max-width: 768px) and (hover: none) and (pointer: coarse) {
    display: none;
  }
`;
