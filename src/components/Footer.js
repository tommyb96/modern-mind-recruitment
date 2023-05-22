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
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  background-color: rgb(92, 92, 255);
  height: 250px;
  overflow: hidden;
`;

const Nav = styled.div`
  align-self: center;
  padding-top: 50px;
  margin: auto;
  z-index: 1;
`;

const Form = styled.img`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
`;
