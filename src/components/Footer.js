import { Link } from "react-router-dom";
import Impressum from "../pages/Impressum";
import Datenschutzerklärung from "../pages/Datenschutzerklärung";

const Footer = () => {
  return (
    <>
      <nav>
        <Link to="/Impressum" element={<Impressum />}>
          Impressum
        </Link>
        <Link to="/Datenschutzerklärung" element={<Datenschutzerklärung />}>
          Datenschutzerklärung
        </Link>
      </nav>
    </>
  );
};

export default Footer;
