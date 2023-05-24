import { Link } from "react-router-dom";
import styled from "styled-components";

import Impressum from "../pages/Impressum";
import Datenschutzerklärung from "../pages/Datenschutzerklärung";

import form from "../assets/svg/Footer/footer_form.png";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Form src={form} alt="form background"></Form>
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
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgb(92, 92, 255);

  overflow: hidden;
`;

const Form = styled.img`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

const Nav = styled.div`
  display: flex;
  align-self: center;
  padding-top: 140px;
  margin: auto;
  z-index: 1;

  a {
    text-decoration: none;
    color: rgb(0, 0, 255);
    padding: 10px;
    font-weight: bold;

    &:hover {
      color: rgb(0, 0, 255, 0.5);
    }
  }
`;

const CopyRight = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;

  z-index: 1;
  color: rgb(0, 0, 255, 0.5);
`;
