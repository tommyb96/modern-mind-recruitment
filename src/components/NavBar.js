import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

class NavBar extends Component {
  state = {
    isOpen: false,
    hasScrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ hasScrolled: window.pageYOffset > 0 });
  };

  handleToggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen, hasScrolled } = this.state;

    return (
      <NavContainer hasScrolled={hasScrolled}>
        <ul className={`nav-links ${isOpen ? "show-nav" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link smooth to={link.to}>
                {link.label} <span></span>
              </Link>
            </li>
          ))}
        </ul>
      </NavContainer>
    );
  }
}

const navLinks = [
  { id: 1, to: "#home", label: "Home" },
  { id: 2, to: "#über-uns", label: "Über uns" },
  { id: 3, to: "#leistungen", label: "Leistungen" },
  { id: 4, to: "#workshop", label: "Workshop" },
  { id: 5, to: "#kontakt", label: "Kontakt" },
];

const NavContainer = styled.nav`
  background-color: ${({ hasScrolled }) =>
    hasScrolled ? "rgba(255, 255, 255, 0.8)" : "none"};
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

    &:hover {
      a {
        cursor: pointer;
        filter: blur(1px);
      }
    }
  }

  li {
    padding: 2.5vw;

    white-space: nowrap;

    a {
      position: relative;

      &:hover {
        cursor: pointer;
      }
    }
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;

    &:hover {
      filter: blur(0) !important;
    }
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`;

export default NavBar;
