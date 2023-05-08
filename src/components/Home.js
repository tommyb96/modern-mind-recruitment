import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Cubes from "./Cubes";
import logo from "../svg/Home/logo.svg";

const Home = () => {
  const sloganRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }, {});

    observer.observe(sloganRef.current);

    return () => {
      observer.unobserve(sloganRef.current);
    };
  }, []);

  return (
    <>
      <HomeContainer id="home">
        <Logo src={logo} alt="Logo" />

        <CubeWrapper>
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
        </CubeWrapper>
        <SloganWrapper ref={sloganRef} isVisible={isVisible}>
          <h1>
            your <span>future</span>
            <br />
            &nbsp; &nbsp;is our focus
          </h1>
          <div>
            Ihr Berater für internationale <br />
            Fachkräfte
          </div>
        </SloganWrapper>
      </HomeContainer>
    </>
  );
};
export default Home;

const HomeContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient(
    to right,
    rgb(0, 167, 155, 0.6),
    rgb(92, 92, 255)
  );
`;

const Logo = styled.img`
  position: absolute;
  width: 150px;
  margin: 25px;

  @media (max-width: 1280px) {
    width: 120px;
    margin: 30px;
  }
`;

const CubeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 1vw;
  margin-top: 70px;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const SloganWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 200px;
  top: 320px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  h1 {
    font-family: "Comfortaa", cursive;
    text-shadow: 1px 0 rgb(0, 0, 0);
    font-size: 100px;
    margin: 0;
    line-height: 95px;
  }

  span {
    font-family: "Righteous", cursive;
    text-shadow: 0px 0 rgb(0, 0, 255);
    color: rgb(0, 0, 255);
    font-size: 100px;
    transition: all 0.1s ease-in-out;

    &:hover {
      color: rgba(0, 167, 155);
      cursor: pointer;
    }
  }

  div {
    color: rgb(0, 0, 255, 0.5);
    display: inline-block;
    font-family: system-ui;
    font-weight: 300;
    font-size: 38px;
    margin-left: 100px;
  }

  @media (max-width: 1280px) {
    right: 100px;
    h1 {
      font-size: 80px;
      line-height: 85px;
    }
    span {
      font-size: 80px;
    }
    div {
      font-size: 30px;
    }
  }
  @media (max-width: 768px) {
    top: 250px;
    right: 50px;
    h1 {
      font-size: 55px;
      line-height: 60px;
    }
    span {
      font-size: 55px;
    }
    div {
      margin-left: 70px;
      font-size: 25px;
    }
  }
  @media (max-width: 480px) {
    right: 30px;
    h1 {
      font-size: 45px;
      line-height: 50px;
    }
    span {
      font-size: 45px;
    }
    div {
      margin-left: 60px;
      font-size: 20px;
    }
  }
`;
