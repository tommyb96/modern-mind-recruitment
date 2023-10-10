import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const navLinks = [
  { id: 1, to: "#home", label: "Home" },
  { id: 2, to: "#über-uns", label: "Über uns" },
  { id: 3, to: "#leistungen", label: "Leistungen" },
  { id: 4, to: "#vermittlung", label: "Vermittlung" },
  { id: 5, to: "#workshop", label: "Workshop" },
  { id: 6, to: "#beratung", label: "Beratung" },
  { id: 7, to: "#faq", label: "FAQ" },
  { id: 8, to: "#kontakt", label: "Kontakt" },
];

export default function RightNavBar({ open, setOpen }) {
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrollBackground(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = () => {
    setOpen(false);
  };
  const NavLinks = () => {
    return (
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink href={link.to} onClick={handleNavLinkClick}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <NavContainer
      open={open}
      onClick={handleNavLinkClick}
      scrollBackground={scrollBackground}
    >
      <NavLinks />
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  opacity: ${({ scrollBackground }) => (scrollBackground ? 0 : 1)};
  background-color: ${({ scrollBackground }) =>
    scrollBackground ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)"};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 5px 10px 5px 50px;

    li {
      padding: 0.9vw 1.5vw;
      white-space: nowrap;

      @media (max-width: 1024px) {
        padding: 0.9vw 1.3vw;
      }
    }
  }

  @media (max-width: 900px), (hover: none), (pointer: coarse) {
    opacity: 1;
    ul {
      flex-flow: column nowrap;
      background-color: rgba(255, 255, 255, 0.8);
      position: fixed;
      margin: 0;
      top: 0;
      right: 0;
      height: 100vh;
      width: 230px;
      padding-top: 6rem;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      transition: transform 0.7s ease-in-out;

      li {
        margin-top: 20px;
        margin-right: 30px;
        text-align: end;

        a {
        }
      }
    }
  }
`;

const NavLink = styled.a`
  position: relative;
  color: black;
  text-decoration: none;
  font-size: 18px;
  text-transform: uppercase;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      left: ${({ href }) => (href === "#home" ? "90px" : "0")};
      right: 0;
      margin: 0 auto;
      bottom: -12px;
      height: 5px;
      width: 35px;
      border-radius: 2px;
      background-color: black;
    }
  }

  &[href="#home"] {
    padding-left: 90px;
    font-weight: bold;
  }

  &[href="#kontakt"] {
    color: orange;
    font-weight: bold;
  }

  @media (max-width: 1400px) {
    font-size: 16px;

    &:hover {
      &::after {
        left: ${({ href }) => (href === "#home" ? "60px" : "0")};
      }
    }

    &[href="#home"] {
      padding-left: 60px;
    }
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
