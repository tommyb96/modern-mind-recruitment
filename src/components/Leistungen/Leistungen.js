import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import hand from "../../assets/svg/AboutUs/about-us-hand.png";

export default function Leistungen() {
  const contactButtonRef = useRef(); // Ref für den ContactButton

  // Funktion, um zur gewünschten Abschnitt zu scrollen
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const refs = {
    // circleEnd: useRef(null),
    // heading: useRef(null),
    // rightdivone: useRef(null),
    // rightdivtwo: useRef(null),
    // boldText: useRef(null),
    // leftDiv: useRef(null),
    // rightdivthree: useRef(null),
    // rightdivfour: useRef(null),
    // rightdivfive: useRef(null),
    // superbold: useRef(null),
    // leftdivtwo: useRef(null),
  };

  const [isVisible, setIsVisible] = useState({
    // circleEnd: false,
    // heading: false,
    // rightdivone: false,
    // rightdivtwo: false,
    // boldText: false,
    // leftDiv: false,
    // rightdivthree: false,
    // rightdivfour: false,
    // rightdivfive: false,
    // superbold: false,
    // leftdivtwo: false,
  });

  const handleIntersection = (entry, target) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [target]: entry.isIntersecting,
    }));
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
      rootMargin: "-30px 0px -30px 0px",
    };

    const observers = Object.keys(refs).map((key) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => handleIntersection(entry, key));
      }, observerOptions);
      observer.observe(refs[key].current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      {/* <Wrapper>
        <Line></Line>

        <InfoText></InfoText>
      </Wrapper> */}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  height: 100%;
  width: 3.5px;
  background-color: darkgray;
  z-index: 100;
  @media (max-width: 900px) {
    left: 10%;
  }

  @media (max-width: 700px) {
    left: 5%;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 400px;
  max-width: 1300px;
  font-size: 20px;

  @media (max-width: 900px) {
    max-width: 500px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
