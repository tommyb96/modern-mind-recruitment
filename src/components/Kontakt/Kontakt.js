import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import emailjs from "@emailjs/browser";
import waves from "../../assets/svg/AboutUs/about_us_waves.png";
import tom from "../../assets/svg/Kontakt/kontakt-tom.png";
import telefon from "../../assets/svg/Kontakt/kontakt-telefon.svg";
import mail from "../../assets/svg/Kontakt/kontakt-mail.svg";
import woman from "../../assets/svg/Kontakt/kontakt-woman.svg";
import men from "../../assets/svg/Kontakt/kontakt-men.svg";

import Impressum from "../../pages/Impressum";
import Datenschutzerklärung from "../../pages/Datenschutzerklärung";

const Kontakt = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/.test(email);
  };

  useEffect(() => {
    const hasErrors =
      name.length <= 5 || !validateEmail(email) || message.length <= 10;

    setError(hasErrors);
  }, [name, email, message]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (name.length === 5 || message.length === 10 || !validateEmail(email)) {
      setError(true);
    }

    if (name && message) {
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

  const handleIntersection = (entry, target) => {
    setIsVisible((prevState) => {
      if (entry.isIntersecting) {
        if (!prevState[target]) {
          console.log(`[${target}] isVisible is changing to true`);
        }
        return {
          ...prevState,
          [target]: true,
        };
      } else {
        if (prevState[target]) {
          console.log(`[${target}] isVisible is changing to false`);
        }
        return {
          ...prevState,
          [target]: false,
        };
      }
    });
  };

  const sections = [
    {
      id: "heading",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-heading",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "tom",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-tom",
      ref: useRef(null),
      isVisible: false,
    },
  ];

  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
      rootMargin: "0px 0px -20px 0px",
    };

    const observers = sections.map((section) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => handleIntersection(entry, section.id));
      }, observerOptions);
      observer.observe(section.ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <Waves src={waves} alt="waves" id="kontakt"></Waves>
      <GreenWrapper>
        <Table>
          <tr>
            <Heading
              ref={sections[0].ref}
              isVisible={isVisible[sections[0].id]}
            >
              kontakt
            </Heading>
            <TomWrapper colSpan={3} rowSpan={2}>
              <Tom
                ref={sections[2].ref}
                isVisible={isVisible[sections[2].id]}
                src={tom}
                alt="tom"
              ></Tom>
              <StyledDiv>Ihr Ansprechpartner</StyledDiv>
              <StyledName>Tom Behrisch</StyledName>
              <StyledPosition>Geschäftsführer</StyledPosition>
              <StyledTelefon>
                {" "}
                <Telefon src={telefon} alt="telefon icon" />
                <StyledLinkTelefon
                  style={{
                    textDecoration: "none",

                    color: "white",
                    opacity: "0.8",
                  }}
                  href="tel:+4915202112164"
                >
                  +49 152 0211 21 64
                </StyledLinkTelefon>
              </StyledTelefon>
              <StyledMail>
                {" "}
                <Mail src={mail} alt="mail icon" />{" "}
                <StyledLinkMail
                  style={{
                    textDecoration: "none",
                    color: "white",
                    opacity: "0.8",
                  }}
                  href="mailto:info@modernmindrecruitment.com"
                >
                  info@modernmindrecruitment.com
                </StyledLinkMail>
              </StyledMail>
            </TomWrapper>
          </tr>
          <tr>
            <LeftDiv rowSpan={6}>
              Sind Sie in der aktuellen Personalbeschaffung auf der Suche nach
              qualifizierten Fachkräften aus Nicht-EU-Ländern, um Ihre offenen
              Stellen zu besetzen und Ihr Unternehmen auf das nächste Level zu
              heben? Wir laden Sie herzlich dazu ein, von unserem Angebot für
              ein kostenloses Erstgespräch Gebrauch zu machen. In diesem
              Gespräch haben Sie die Gelegenheit, Ihre spezifischen
              Anforderungen und Bedürfnisse im Detail zu besprechen. <br />{" "}
              <br />{" "}
              <Link to="https://calendly.com/modern-mind-recruitment/45min?month=2023-09">
                <Button>Erstgespräch vereinbaren </Button>
              </Link>{" "}
              <br /> <br />
              Alternativ dazu steht Ihnen unser Kontaktformular zur Verfügung,
              über das Sie uns eine detaillierte Anfrage senden können. Unsere
              Motivation ist hoch, und wir freuen uns darauf, mit Ihnen
              gemeinsam daran zu arbeiten, die idealen Fachkräfte für Ihr
              Unternehmen zu finden. Ihr Erfolg hat für uns hohe Priorität, und
              wir sind entschlossen, Sie bestmöglich auf diesem Weg zu
              unterstützen und einen Beitrag zu Ihrem Unternehmen zu leisten.
            </LeftDiv>
          </tr>
        </Table>
        <HiddenTable>
          <tr>
            <Heading
              ref={sections[1].ref}
              isVisible={isVisible[sections[1].id]}
              colSpan={2}
            >
              kontakt
            </Heading>
          </tr>
          <tr>
            <LeftDiv colSpan={2}>
              {" "}
              Sind Sie in der aktuellen Personalbeschaffung auf der Suche nach
              qualifizierten Fachkräften aus Nicht-EU-Ländern, um Ihre offenen
              Stellen zu besetzen und Ihr Unternehmen auf das nächste Level zu
              heben? Wir laden Sie herzlich dazu ein, von unserem Angebot für
              ein kostenloses Erstgespräch Gebrauch zu machen. In diesem
              Gespräch haben Sie die Gelegenheit, Ihre spezifischen
              Anforderungen und Bedürfnisse im Detail zu besprechen.
            </LeftDiv>
          </tr>
          <tr>
            <LeftDiv colSpan={2}>
              <Link to="https://calendly.com/modern-mind-recruitment/45min?month=2023-09">
                <Button>Erstgespräch vereinbaren </Button>
              </Link>
            </LeftDiv>
          </tr>
          <tr>
            <LeftDiv colSpan={2}>
              Alternativ dazu steht Ihnen unser Kontaktformular zur Verfügung,
              über das Sie uns eine detaillierte Anfrage senden können. Unsere
              Motivation ist hoch, und wir freuen uns darauf, mit Ihnen
              gemeinsam daran zu arbeiten, die idealen Fachkräfte für Ihr
              Unternehmen zu finden. Ihr Erfolg hat für uns hohe Priorität, und
              wir sind entschlossen, Sie bestmöglich auf diesem Weg zu
              unterstützen und einen Beitrag zu Ihrem Unternehmen zu leisten.
            </LeftDiv>
          </tr>
          <tr>
            <BoldDiv colSpan={2}>Ihr Ansprechpartner</BoldDiv>
          </tr>
          <tr>
            <Name colSpan={2}>Tom Behrisch</Name>
          </tr>
          <tr>
            <Position colSpan={2}>Geschäftsführer</Position>
          </tr>
          <tr>
            <StyledLink>
              {" "}
              <Telefon src={telefon} alt="telefon icon" />
              <StyledLinkTelefon
                style={{
                  textDecoration: "none",
                  color: "white",
                  opacity: "0.8",
                }}
                href="tel:+4915202112164"
              >
                +49 152 0211 21 64
              </StyledLinkTelefon>
            </StyledLink>
          </tr>
          <tr>
            <StyledLink>
              <Mail src={mail} alt="mail icon" />
              <StyledLinkMail
                style={{
                  textDecoration: "none",
                  color: "white",
                  opacity: "0.8",
                }}
                href="mailto:info@modernmindrecruitment.com"
              >
                info@modernmindrecruitment.com
              </StyledLinkMail>
            </StyledLink>
          </tr>{" "}
          <tr>
            {" "}
            <TomWrapper colSpan={2}>
              <Tom
                ref={sections[3].ref}
                isVisible={isVisible[sections[3].id]}
                src={tom}
                alt="tom"
              ></Tom>
            </TomWrapper>
          </tr>
        </HiddenTable>
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
        <Woman src={woman} alt="woman" />
        <Men src={men} alt="men" />
        <Nav>
          <Link to="/Impressum" element={<Impressum />}>
            Impressum
          </Link>
          <Link to="/Datenschutzerklärung" element={<Datenschutzerklärung />}>
            Datenschutzerklärung
          </Link>
        </Nav>
        <CopyRight>
          © 2023 modern mind recruitment. Alle Rechte vorbehalten.
        </CopyRight>
      </GreenWrapper>
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

const GreenWrapper = styled.div`
  background-color: rgba(0, 167, 155);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  position: relative;
`;

const Table = styled.table`
  position: relative;
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
  margin-top: 15px;

  @media (max-width: 1400px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Heading = styled.th`
  font-family: Comfortaa;
  font-size: 53px;
  text-transform: uppercase;
  text-shadow: 1px 0 rgb(0, 0, 0);
  text-align: start;
  padding-bottom: 40px;
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "-15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    padding-left: 40px;
  }

  @media (max-width: 900px) {
    padding-left: 120px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-bottom: 30px;
    padding-left: 30px;
    font-size: 33px;
    transform: translateY(${(props) => (props.isVisible ? 0 : "-10px")});
  }
`;

const LeftDiv = styled.td`
  color: black;
  width: 50%;
  padding-right: 100px;
  text-align: start;
  color: rgb(255, 255, 255, 0.8);

  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-bottom: 30px;
    padding-left: 120px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
    padding-bottom: 30px;
  }
`;

const Button = styled.button`
  padding: 15px 20px;
  background-color: rgb (255, 255, 255);
  color: black;
  border: none;
  margin: 15px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;

  @media (hover: hover) {
    &:hover {
      background-color: orange;
      color: white;
    }
  }

  @media (max-width: 900px) {
    margin: 0;
  }
`;

const TomWrapper = styled.td`
  text-align: start;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

const Tom = styled.img`
  width: 310px;
  margin-left: 50px;
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "15px")});
  transition: opacity 0.5s ease-in-out, transform 0.7s ease-in-out;

  @media (max-width: 900px) {
    margin-top: 40px;
    margin-left: 120px;
    transform: translateX(${(props) => (props.isVisible ? 0 : "-15px")});
  }

  @media (max-width: 700px) {
    margin-left: 70px;
  }
  @media (max-width: 480px) {
    width: 280px;
    margin-left: 0px;
    transform: translateX(${(props) => (props.isVisible ? 0 : "-5px")});
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;

const StyledDiv = styled.div`
  font-weight: bold;
  font-size: 33px;
  color: white;
  padding-left: 70px;
  padding-top: 30px;
  padding-bottom: 20px;

  @media (max-width: 1400px) {
    padding-right: 40px;
    padding-left: 40px;
  }
`;

const StyledName = styled.div`
  color: white;
  opacity: 0.8;
  font-weight: bold;
  padding-left: 70px;

  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
  }
`;

const StyledPosition = styled.div`
  color: white;
  opacity: 0.8;
  padding-left: 70px;
  padding-bottom: 10px;

  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
  }
`;

const StyledTelefon = styled.div`
  padding-left: 70px;

  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
  }
`;

const StyledMail = styled.div`
  padding-left: 70px;

  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
  }
`;

const BoldDiv = styled.td`
  font-weight: bold;
  font-size: 33px;
  color: white;
  padding-top: 10px;
  padding-left: 120px;
  padding-bottom: 15px;

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    font-size: 26px;
  }
`;

const Name = styled.td`
  color: white;
  opacity: 0.8;
  font-weight: bold;
  padding-left: 120px;

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
  }
`;

const Position = styled.td`
  color: white;
  opacity: 0.8;
  padding-left: 120px;
  padding-bottom: 10px;

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
    padding-bottom: 10px;
  }
`;

const Telefon = styled.img`
  width: 24px;
  margin-right: 15px;
`;

const Mail = styled.img`
  width: 24px;
  margin-right: 15px;
`;

const StyledLink = styled.td`
  padding-left: 120px;
  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
  }
`;

const StyledLinkTelefon = styled.a`
  text-decoration: none;
`;

const StyledLinkMail = styled.a`
  text-decoration: none;
  margin-bottom: 70px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 100px;
  margin-bottom: 150px;
  padding: 40px 40px 30px 40px;
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

  @media (max-width: 900px) {
    margin-top: 60px;
  }

  @media (max-width: 600px) {
    width: 90%;
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    padding: 40px 20px 20px 20px;
    margin-bottom: 100px;
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
  background-color: rgb(255, 255, 255, 0.8);
  color: black;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: orange;
      color: white;
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
  padding: 50px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 24px;
    margin-top: 30px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    opacity: 0.8;
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
  color: rgb(255, 255, 255, 0.7);
  margin: 0 0 10px 10px;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const HiddenTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 20px;

  @media (min-width: 901px) {
    display: none;
  }
`;

const Nav = styled.div`
  display: flex;
  align-self: center;
  padding-top: 50px;
  margin: auto;
  z-index: 1;

  a {
    text-decoration: none;
    color: rgb(255, 255, 255, 0.8);
    padding: 10px;
    font-weight: bold;

    &:hover {
      color: rgb(255, 255, 255, 1);
    }
  }
`;

const Woman = styled.img`
  width: 450px;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: 1180px) {
    width: 37%;
  }

  @media (max-width: 900px) {
    width: 42%;
  }

  @media (max-width: 480px) {
    width: 48%;
  }
`;

const Men = styled.img`
  width: 470px;
  position: absolute;
  bottom: 0;
  right: -50px;
  transform: scaleX(-1);

  @media (max-width: 1180px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 50%;
  }
`;

const CopyRight = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 1;
  color: rgb(255, 255, 255, 0.5);
`;
