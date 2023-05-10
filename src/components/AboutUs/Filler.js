import styled from "styled-components";
import React from "react";
import video from "../../assets/video.mp4";

export default function Filler() {
  return (
    <>
      <StyledContainer>
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div>
          Lasst uns gemeinsam die <span>Zukunft</span> unserer Wirtschaft
          gestalten!{" "}
        </div>
      </StyledContainer>
    </>
  );
}
const StyledContainer = styled.div`
  overflow: hidden;
  video {
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
    z-index: -1;
  }

  div {
    /* position: absolute; */
    margin: 50px 30px 0 30px;
    max-width: 550px;
    font-family: system-ui;
    font-weight: 500;
    font-size: 50px;
    text-transform: uppercase;
  }
  span {
    color: rgb(0, 0, 255);
  }

  @media (max-width: 1024px) {
    video {
      height: 450px;
    }
  }
  @media (max-width: 480px) {
    div {
      font-size: 40px;
    }
  }
`;
