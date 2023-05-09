import styled from "styled-components";

const Cubes = () => {
  return (
    <>
      `
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
      </Wrapper>
    </>
  );
};

export default Cubes;

const Wrapper = styled.div`
  position: absolute;
  z-index: 0;
  left: -110%;
  @media (max-width: 900px) {
    top: 2%;
    left: 15.5%;
  }
  @media (max-width: 590px) {
    left: 19%;
  }
`;
const CubeContainer = styled.div`
  display: flex;
`;

const StyledCube = styled.div`
  background-color: rgba(102, 102, 102, 0.3);
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin: 1.3px;
  transition: transform 0.05s ease-in-out;
  @media (max-width: 900px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 590px) {
    width: 65px;
    height: 65px;
  }
`;
