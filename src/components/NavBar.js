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
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    &:hover {
      a {
        cursor: pointer;
        filter: blur(1px);
      }
    }
  }

  li {
    padding: 30px;
    flex-wrap: nowrap;
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
  }
`;

export default NavBar;
