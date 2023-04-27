import { useState, useEffect } from "react";
import styled from "styled-components";

const Cubes = () => {
  const [numCubes, setNumCubes] = useState();
  const [cubeSize, setCubeSize] = useState();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1200) {
        setNumCubes(17);
        setCubeSize({ height: "5.56vw", width: "5.56vw" });
      } else if (width < 992) {
        setNumCubes(12);
      } else {
        setNumCubes(20);
        setCubeSize({ height: "4.7vw", width: "4.7vw" });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const cubes = Array.from({ length: numCubes }, (_, i) => i);

  return (
    <CubeContainer>
      {cubes.map((cube) => (
        <StyledCube key={cube} style={cubeSize} />
      ))}
    </CubeContainer>
  );
};

export default Cubes;

const CubeContainer = styled.div`
  display: flex;
`;

const StyledCube = styled.div`
  background-color: rgba(0, 167, 155, 0.25);
  border-radius: 0.8vw;
  margin: 0.1vw;
  transition: transform 0.05s ease-in-out;

  &:hover {
    transform: scale(1.6);
    opacity: 0.9;
  }
`;
