import React from "react";
import styled from "styled-components";
import Cubes from "../Leistungen/Cubes";

export default function CubeContainer() {
  return (
    <>
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
        <Cubes />
      </CubeWrapper>
      <CubeWrapperMobile>
        {" "}
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
        <Cubes />
        <Cubes />
        <Cubes />
        <Cubes />
        <Cubes />
      </CubeWrapperMobile>
    </>
  );
}

const CubeWrapper = styled.div`
  position: absolute;
  top: 400px;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 0;

  @media (max-width: 900px) {
    top: 720px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const CubeWrapperMobile = styled.div`
  position: absolute;
  top: 2300px;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 0;

  @media (min-width: 479px) {
    display: none;
  }
  @media (max-width: 480px) {
    top: 100px;
  }
`;
