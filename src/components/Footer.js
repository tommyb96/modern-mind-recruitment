import { Link } from "react-router-dom";
import styled from "styled-components";
import Impressum from "../pages/Impressum";
import Datenschutzerklärung from "../pages/Datenschutzerklärung";

const Footer = () => {
  return (
    <>
      <Wrapper>
        {/* <nav>
          <Link to="/Impressum" element={<Impressum />}>
            Impressum
          </Link>
          <Link to="/Datenschutzerklärung" element={<Datenschutzerklärung />}>
            Datenschutzerklärung
          </Link>
        </nav> */}
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: rgba(0, 167, 155, 0.25);
  height: 300px;
`;
