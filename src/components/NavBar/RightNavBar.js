import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const navLinks = [
  { id: 1, to: "#home", label: "Home" },
  { id: 2, to: "#über-uns", label: "Über uns" },
  { id: 3, to: "#leistungen", label: "Leistungen" },
  { id: 4, to: "#workshop", label: "Workshop" },
  { id: 5, to: "#kontakt", label: "Kontakt" },
];

export default function RightNavBar({ open, setOpen }) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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

  const handleCloseMenu = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  return (
    <NavContainer
      open={open}
      // scrollBackground={scrollBackground}
      onClick={handleCloseMenu}
    >
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

  @media (max-width: 768px), (hover: none), (pointer: coarse) {
    opacity: 1;
    ul {
      flex-flow: column nowrap;
      background-color: rgba(255, 255, 255, 0.8);
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
