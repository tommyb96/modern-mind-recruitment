import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import emailjs from "@emailjs/browser";
import waves from "../assets/svg/Kontakt/kontakt_waves.png";
import cubes from "../assets/svg/Kontakt/kontakt_cubes.svg";

const Kontakt = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/.test(email);
  };

  useEffect(() => {
    const hasErrors =
      name.length <= 5 ||
      !validateEmail(email) ||
      subject.length <= 3 ||
      message.length <= 10;

    setError(hasErrors);
  }, [name, email, subject, message]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      name.length === 5 ||
      subject.length === 3 ||
      message.length === 10 ||
      !validateEmail(email)
    ) {
      setError(true);
    }

    if (name && subject && message) {
      emailjs
        .sendForm(
          "service_9ie47qv",
          "template_n0uzten",
          form.current,
          "xGIeKddPHpBg0KSt6"
        )
        .then(
          (result) => {
            console.log(result.text);
            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
              window.location.reload(); // Reload the page
            }, 3500); // Set timeout to hide the success message after 3.5 seconds and then reload the page
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setError(false);
    }
  };

  return (
    <>
      <Waves src={waves} alt="waves" id="kontakt"></Waves>
      <StyledContainer>
        <Cubes src={cubes} alt="cubes" />

        <Wrapper>
          <StyledDivMobile>
            Kontaktieren Sie uns und sichern Sie sich jetzt Ihr{" "}
            <span>kostenloses</span> Erstgespräch.
          </StyledDivMobile>
          <Heading>
            KONTAKT
            <FormContainer ref={form} onSubmit={sendEmail}>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                name="name"
              />
              {error && name.length <= 5 ? (
                <ErrorMessage>bitte Namen eingeben</ErrorMessage>
              ) : (
                ""
              )}
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="E-Mail"
                name="email"
              />
              {error && !validateEmail(email) ? (
                <ErrorMessage>bitte vollständige Email eingeben</ErrorMessage>
              ) : (
                ""
              )}
              <input
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                placeholder="Betreff"
                name="subject"
              />
              {error && subject.length <= 3 ? (
                <ErrorMessage>bitte Betreff eingeben</ErrorMessage>
              ) : (
                ""
              )}
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                cols="30"
                rows="10"
              />
              {error && message.length <= 10 ? (
                <ErrorMessage>bitte Nachricht eingeben</ErrorMessage>
              ) : (
                ""
              )}
              <StyledButton
                type="submit"
                style={{ backgroundColor: error ? "" : "rgb(148,201,115)" }}
              >
                Senden
              </StyledButton>
            </FormContainer>
          </Heading>
        </Wrapper>
        <StyledDiv>
          Kontaktieren Sie uns und sichern Sie sich jetzt Ihr{" "}
          <span>kostenloses</span> Erstgespräch.
        </StyledDiv>
      </StyledContainer>
      {showSuccessMessage && (
        <SuccessMessageContainer>
          <SuccessMessage>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 54 54">
              <circle
                className="checkmark-circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark-check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
            <h2>Vielen Dank!</h2>
          </SuccessMessage>
        </SuccessMessageContainer>
      )}
    </>
  );
};

export default Kontakt;

const Waves = styled.img`
  width: 100vw;
`;

const StyledContainer = styled.div`
  background-color: rgb(92, 92, 255);
  display: flex;
  margin: 0;
  height: 900px;
  height: 1000px;
  overflow: hidden;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Cubes = styled.img`
  position: absolute;
  width: 380px;
  right: 0;
  margin: 40px;
  z-index: 0;
  opacity: 0.5;

  @media (max-width: 1200px) {
    width: 300px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 200px;

  @media (max-width: 1000px) {
    align-self: center;
    margin: 0;
  }
`;

const Heading = styled.h1`
  position: relative;
  font-family: Comfortaa;
  font-size: 55px;
  z-index: 10;
  align-self: center;
  margin-top: 50px;

  @media (max-width: 480px) {
    font-size: 39px;
    margin-top: 30px;
  }
`;

const FormContainer = styled.form`
  position: absolute;
  top: 0px;
  left: -113px;
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 30px;
  padding: 80px 40px 30px 40px;
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 60px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

  input {
    padding: 10px;
    margin-bottom: 15px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    width: 100%;
    align-self: center;
  }

  textarea {
    padding: 15px;
    margin-bottom: 15px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    width: 100%;
    align-self: center;
    resize: none;
  }

  @media (max-width: 1000px) {
    align-self: center;
  }

  @media (max-width: 550px) {
    width: 400px;
    left: -65px;
  }

  @media (max-width: 480px) {
    width: 335px;
    top: -10px;
    left: -70px;

    input {
      padding: 8px;
    }

    textarea {
      height: 180px;
    }
  }
`;

const StyledButton = styled.button`
  font-family: system-ui;
  font-weight: normal;
  padding: 15px 12px 15px 12px;
  margin-top: 15px;
  align-self: center;
  border: none;
  border-radius: 30px;
  font-size: 22px;
  width: 60%;
  background-color: rgb(0, 0, 255);
  color: white;

  @media (hover: hover) {
    &:hover {
      background-color: rgb(0, 0, 255, 0.3);
    }
  }
`;

const checkmarkAnimation = keyframes`
  0% {
    stroke-dashoffset: 48;
    transform: rotate(0deg);
  }
  50% {
    stroke-dashoffset: 0;
    transform: rotate(0deg);
  }
  100% {
    stroke-dashoffset: 0;
    transform: rotate(360deg);
  }
`;

const SuccessMessageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
  }

  svg {
    width: 110px;
    height: 100px;
    stroke: rgb(148, 201, 115);
    stroke-width: 4;
    stroke-dasharray: 45;
    stroke-dashoffset: 45;
    animation: ${checkmarkAnimation} 1.5s ease-in-out forwards;
    animation-fill-mode: forwards;
  }
`;

const ErrorMessage = styled.label`
  color: rgb(0255 255, 255);
  margin: 0 0 10px 10px;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const StyledDiv = styled.div`
  font-family: system-ui;
  color: white;
  font-weight: 500;
  font-size: 45px;
  max-width: 550px;
  margin: 350px 30px 20px 250px;
  span {
    font-family: Righteous;
    color: rgb(0, 167, 155);
  }

  @media (max-width: 1300px) {
    margin: 350px 30px 10px 200px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const StyledDivMobile = styled.div`
  font-family: system-ui;
  color: white;
  font-weight: 500;
  font-size: 34px;
  max-width: 600px;
  margin: 20px;
  margin-top: 80px;
  text-align: center;

  span {
    font-family: Righteous;
    color: rgb(0, 167, 155);
  }

  @media (min-width: 1001px) {
    display: none;
  }
  @media (max-width: 650px) {
    font-size: 30px;
  }
`;
