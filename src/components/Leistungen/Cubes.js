import { useState, useEffect } from "react";
import styled from "styled-components";

const Cubes = () => {
  const [numCubes, setNumCubes] = useState();
  const [cubeSize, setCubeSize] = useState();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 590) {
        setNumCubes(16);
        setCubeSize({ height: "13vw", width: "13vw" });
      } else {
        setNumCubes(30);
        setCubeSize({ height: "80px", width: "80px" });
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
  background-color: rgba(0, 167, 155, 0.3);
  border-radius: 15%;
  margin: 0.08rem;
  transition: transform 0.05s ease-in-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.6);
      opacity: 0.9;
    }
  }

  @media (max-width: 480px) {
    opacity: 0.7;
  }
`;
