import { useState, useEffect } from "react";
import styled from "styled-components";

const Cubes = () => {
  const [numCubes, setNumCubes] = useState();
  const [cubeSize, setCubeSize] = useState();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // if (width < 480) {
      //   setNumCubes(10);
      //   setCubeSize({ height: "13.3vw", width: "13.3vw" });
      // } else if (width < 769) {
      //   setNumCubes(12);
      //   setCubeSize({ height: "10.3vw", width: "10.3vw" });
      // } else if (width < 1025) {
      //   setNumCubes(14);
      //   setCubeSize({ height: "8.5vw", width: "8.5vw" });
      // }
      if (width < 590) {
        setNumCubes(16);
        setCubeSize({ height: "60px", width: "60px" });
      } else if (width < 1300) {
        setNumCubes(20);
        setCubeSize({ height: "80px", width: "80px" });
      } else {
        setNumCubes(30);
        setCubeSize({ height: "90px", width: "90px" });
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
  margin: 0.3rem;
  transition: transform 0.05s ease-in-out;

  &:hover {
    transform: scale(1.6);
    opacity: 0.9;
  }

  /* @media (min-width: 768px) {
    margin: 1.8px;
    border-radius: 10px;
  }
  @media (min-width: 1024px) {
    margin: 1.3px;
    border-radius: 0.8vw;
  } */
`;
