import { useState, useEffect } from "react";
import styled from "styled-components";

const Cubes = () => {
  const [numCubes, setNumCubes] = useState();
  const [cubeSize, setCubeSize] = useState();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setNumCubes(7);
        setCubeSize({ height: "13vw", width: "13vw" });
      } else if (width < 769) {
        setNumCubes(9);
        setCubeSize({ height: "10.3vw", width: "10.3vw" });
      } else if (width < 992) {
        setNumCubes(11);
        setCubeSize({ height: "8.5vw", width: "8.5vw" });
      } else if (width < 1024) {
        setNumCubes(14);
        setCubeSize({ height: "6.65vw", width: "6.65vw" });
      } else if (width < 1280) {
        setNumCubes(17);
        setCubeSize({ height: "5.5vw", width: "5.5vw" });
      } else {
        setNumCubes(20);
        setCubeSize({ height: "4.65vw", width: "4.65vw" });
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
  margin: 1.3px;
  transition: transform 0.05s ease-in-out;

  &:hover {
    transform: scale(1.6);
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    margin: 1.5px;
    border-radius: 8px;
  }
`;
