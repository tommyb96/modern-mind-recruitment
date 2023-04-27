import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import emailjs from "@emailjs/browser";

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
            setTimeout(() => setShowSuccessMessage(false), 2000);
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
      <StyledContainer>
        <Wrapper id="kontakt">
          <h1>Kontakt</h1>

          <FormContainer ref={form} onSubmit={sendEmail}>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              name="name"
            />
            {error && name.length <= 5 ? (
              <ErrorMessage>Bitte Name eingeben</ErrorMessage>
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
              <ErrorMessage>Bitte vollständige Email eingeben</ErrorMessage>
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
              <ErrorMessage>Bitte Betreff eingeben</ErrorMessage>
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
              <ErrorMessage>Bitte Nachricht eingeben</ErrorMessage>
            ) : (
              ""
            )}
            <StyledButton
              type="submit"
              style={{ backgroundColor: error ? "" : "green" }}
            >
              Nachricht senden
            </StyledButton>
          </FormContainer>
        </Wrapper>
      </StyledContainer>
      {showSuccessMessage && (
        <SuccessMessageContainer>
          <SuccessMessage>Vielen Dank für Ihre Nachricht!</SuccessMessage>
        </SuccessMessageContainer>
      )}
    </>
  );
};

export default Kontakt;

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Wrapper = styled.div`
  position: absolute;
  justify-content: center;
  color: white;
  padding: 4em;
  max-width: 800px;
  margin: auto;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  input,
  textarea {
    margin-bottom: 10px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-family: inherit;
  }

  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  input[type="submit"]:hover {
    background-color: #3e8e41;
  }
`;

const StyledButton = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;

  &:hover {
    background-color: grey;
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
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const ErrorMessage = styled.label`
  color: red;
`;
