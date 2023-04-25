import styled from "styled-components";

const Cubes = () => {
  const cubes = Array.from({ length: 25 }, (_, i) => i);

  return (
    <CubeContainer>
      {cubes.map((cube) => (
        <StyledCube key={cube} />
      ))}
    </CubeContainer>
  );
};

export default Cubes;

const CubeContainer = styled.div`
  display: flex;
  top: 3vw;
  flex-wrap: nowrap;
`;

const StyledCube = styled.div`
  background-color: rgba(0, 167, 155, 0.25);
  height: 3.7vw;
  width: 3.7vw;
  border-radius: 8px;

  margin: 0.07vw;
  transition: transform 0.05s ease-in-out;

  &:hover {
    transform: scale(1.6);
    opacity: 0.9;
  }
`;
