import styled from "styled-components";
import persons from "../../assets/svg/AboutUs/about_us_3d_person.svg";

const Cubes = () => {
  return (
    <>
      <Wrapper>
        <CubeContainer>
          <StyledCube />
          <StyledCube />
          <StyledCube />
          <StyledCube />
        </CubeContainer>
        <CubeContainer>
          <StyledCube />
          <StyledCube />
          <StyledCube />
          <StyledCube />
        </CubeContainer>
        <CubeContainer>
          <StyledCube />
          <StyledCube />
          <StyledCube />
          <StyledCube />
        </CubeContainer>
        <CubeContainer>
          <StyledCube />
          <StyledCube />
          <StyledCube />
          <StyledCube />
        </CubeContainer>
        <Persons src={persons} alt="persons icon" />
      </Wrapper>
    </>
  );
};

export default Cubes;

const Wrapper = styled.div`
  position: absolute;
  z-index: 0;
  top: 165px;
  left: 0px;

  @media (max-width: 590px) {
    top: 105%;
    left: 15px;
  }
`;
const CubeContainer = styled.div`
  display: flex;
`;

const StyledCube = styled.div`
  background-color: rgba(102, 102, 102, 0.15);
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin: 1.3px;
  transition: transform 0.05s ease-in-out;

  @media (max-width: 590px) {
    width: 16vw;
    height: 16vw;
  }

  /* @media (max-width: 420px) {
    width: 65px;
    height: 65px;
  } */
`;

const Persons = styled.img`
  position: absolute;
  top: 23%;
  left: 5%;
  width: 370px;

  @media (max-width: 590px) {
    width: 60vw;
  }
`;
