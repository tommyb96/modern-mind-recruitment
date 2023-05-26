import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/svg/Home/logo.svg";

const CubeSpin = keyframes`
  0% {
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
`;

const CubeContainer = styled.div`
  position: fixed;
  bottom: 35px;
  right: 50px;
  width: 70px;
  height: 70px;
  z-index: 1000;
  transform-style: preserve-3d;
  animation: ${CubeSpin} 4s linear infinite;
  transition: all 0.3s ease-out;

  @media (hover: hover) {
    &:hover {
      animation-duration: 1.7s;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const CubeSide = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: rgba(102, 102, 102, 0.2);
`;

const CubeFront = styled(CubeSide)`
  transform: translateZ(35px);
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    display: block;
    width: 80%;
    height: 80%;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 1;
  }
`;

const CubeBack = styled(CubeSide)`
  transform: rotateY(180deg) translateZ(35px);
`;

const CubeTop = styled(CubeSide)`
  transform: rotateX(90deg) translateZ(35px);
`;

const CubeBottom = styled(CubeSide)`
  transform: rotateX(-90deg) translateZ(35px);
`;

const CubeRight = styled(CubeSide)`
  transform: rotateY(90deg) translateZ(35px);
`;

const CubeLeft = styled(CubeSide)`
  transform: rotateY(-90deg) translateZ(35px);
`;

const Cube = () => {
  return (
    <CubeContainer>
      <CubeFront />
      <CubeBack />
      <CubeTop />
      <CubeBottom />
      <CubeRight />
      <CubeLeft />
    </CubeContainer>
  );
};

export default Cube;
