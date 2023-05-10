import styled from "styled-components";
import video from "../../assets/video.mp4";

export default function Filler() {
  return (
    <>
      <StyledContainer>
        <video autoPlay loop playsInline>
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

  video::-webkit-media-controls {
    display: none !important;
  }

  video::-webkit-media-controls-panel {
    display: none !important;

    -webkit-appearance: none;
  }

  video::-webkit-media-controls-play-button {
    display: none !important;

    -webkit-appearance: none;
  }

  video::-webkit-media-controls-start-playback-button {
    display: none !important;

    -webkit-appearance: none;
  }
  div {
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
      height: 500px;
    }
  }
  @media (max-width: 480px) {
    div {
      font-size: 40px;
    }
  }
`;
