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
          <StyledCube />
        </CubeContainer>
        <CubeContainer>
          <StyledCube />
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
          <StyledCube />
        </CubeContainer>
        <CubeContainer>
          <StyledCube />
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
  top: 240px;
  left: 0px;

  @media (max-width: 900px) {
    top: 200px;
  }

  @media (max-width: 590px) {
    left: 15px;
  }

  @media (max-width: 480px) {
    top: 200px;
  }
`;
const CubeContainer = styled.div`
  display: flex;
`;

const StyledCube = styled.div`
  background-color: rgba(102, 102, 102, 0.15);
  width: 80px;
  height: 80px;
  border-radius: 15%;
  margin: 0.08rem;
  transition: transform 0.05s ease-in-out;

  @media (max-width: 590px) {
    width: 13vw;
    height: 13vw;
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
