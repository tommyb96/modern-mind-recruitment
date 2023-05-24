import styled from "styled-components";
import logo from "../assets/svg/Home/logo.svg";
import wave from "../assets/svg/Kontakt/kontakt_waves.png";
import GlobalStyle from "../Styles";

export default function Impressum() {
  return (
    <>
      <div>
        <GlobalStyle />
        <Wrapper>
          <Heading>
            <Logo src={logo} alt="logo"></Logo>
            <h1>impressum</h1>
          </Heading>{" "}
          <TextWrapper>
            <TextContainer>
              <p>
                Angaben gemäß Informationspflicht laut 8 5 Telemediengesetz
                (TMG).
              </p>
              <p>
                <span>modern mind recruitment GbR</span> <br />
                Königsbrückerlandstraße 58,
                <br />
                01199 Dresden
                <br />
                Deutschland
              </p>
              <p>
                <span>Tel.:</span> 015202112164
                <br />
                <span>E-Mail:</span> info@modernmindrecruitment.com
              </p>
              <p>
                <span>Aufsichtsbehörde</span>
                <br />
                Sächsische Datenschutz- und Transparenzbeauftragte
              </p>
              <p>
                <span>Webseite der Aufsichtsbehörde</span>
                <br /> www.datenschutz.sachsen.de
              </p>
              <p>
                <span>Anschrift der Aufsichtsbehörde</span>
                <br />
                Devrientstraße 5, 01067 Dresden
              </p>
              <p>
                <span>Berufsbezeichnung:</span> Unternehmensberater
              </p>
              <p>
                <span>Vertreten durch die Gesellschafter</span>
                <br />
                Anna Hoehl, Tom Behrisch
              </p>
            </TextContainer>
            <TextContainer>
              <h1>EU-Streitschlichtung</h1>
              <p>
                Gemäß Verordnung über Online-Streitbeilegung in
                Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über
                die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
                Verbraucher haben die Möglichkeit, Beschwerden an die Online
                Streitbeilegungsplattform der Europäischen Kommission unter
                https:/ec.europa.eu/consumers/odr/main/index.cfm?event=-
                main.home2.show&lIng=DE zu richten. Die dafür notwendigen
                Kontaktdaten finden Sie oberhalb in unserem Impressum.
              </p>
              <p>
                Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit
                oder verpflichtet sind, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </TextContainer>
            <TextContainer>
              <h1>Haftung für Inhalte dieser Website</h1>
              <p>
                Wir entwickeln die Inhalte dieser Website ständig weiter und
                bemühen uns korrekte und aktuelle Informationen bereitzustellen.
                Leider können wir keine Haftung für die Korrektheit aller
                Inhalte auf dieser Website übernehmen, speziell für jene, die
                seitens Dritter bereitgestellt wurden. Als Diensteanbieter sind
                wir nicht verpflichtet, die von Ihnen übermittelten oder
                gespeicherten Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Unsere Verpflichtungen zur Entfernung von Informationen oder zur
                Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen aufgrund von gerichtlichen oder behördlichen
                Anordnungen bleiben auch im Falle unserer
                Nichtverantwortlichkeit davon unberührt.
              </p>
              <p>
                Sollten Ihnen problematische oder rechtswidrige Inhalte
                auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir
                die rechtswidrigen Inhalte entfernen können. Sie finden die
                Kontaktdaten im Impressum.
              </p>
            </TextContainer>
            <TextContainer>
              <h1>Haftung für Links auf dieser Website</h1>
              <p>
                Unsere Website enthält Links zu anderen Websites für deren
                Inhalt wir nicht verantwortlich sind. Haftung für verlinkte
                Websites besteht für uns nicht, da wir keine Kenntnis
                rechtswidriger Tätigkeiten hatten und haben, uns solche
                Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir
                Links sofort entfernen würden, wenn uns Rechtswidrigkeiten
                bekannt werden.
              </p>
              <p>
                Wenn Ihnen rechtswidrige Links auf unserer Website auffallen,
                bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten
                im Impressum.
              </p>
            </TextContainer>
            <TextContainer>
              <h1>Urheberrechtshinweis</h1>
              <p>
                Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
                unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die
                Inhalte dieser Website verbreiten, vervielfältigen oder
                verwerten wie zum Beispiel auf anderen Websites erneut
                veröffentlichen. Falls notwendig, werden wir die unerlaubte
                Nutzung von Teilen der Inhalte unserer Seite rechtlich
                verfolgen.
              </p>
              <p>
                Sollten Sie auf dieser Webseite Inhalte finden, die das
                Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.
              </p>
              <TextContainer>
                <h1>Bildernachweis</h1>
                <p>
                  Die Bilder, Fotos und Grafiken auf dieser Webseite sind
                  urheberrechtlich geschützt. Die Bilderrechte liegen bei:
                </p>
                <p>stock.adobe.com</p>
                <p>Alle Texte sind urheberrechtlich geschützt.</p>
                <p>Quelle: Erstellt mit dem Impressum Generator von AdSimple</p>
              </TextContainer>
            </TextContainer>
          </TextWrapper>
          <Wave src={wave} alt="wave"></Wave>
        </Wrapper>
      </div>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;

  h1 {
    text-transform: uppercase;
    font-size: 30px;
    align-self: center;
    padding: 30px;
    font-family: Comfortaa;
    text-shadow: 0.5px 0 rgb(0, 0, 0);
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 28px;
      padding: 0;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 23px;
      padding: 0;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 19px;
    }
  }
`;

const Logo = styled.img`
  width: 100px;
  margin: 40px;

  @media (max-width: 700px) {
    width: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
    margin: 20px 20px 40px 20px;
  }
`;

const TextWrapper = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 0 100px 100px 100px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;

  h1 {
    font-size: 25px;
    margin: 0 0 25px 0;
    font-family: Comfortaa;
    text-shadow: 0.5px 0 rgb(0, 0, 0);
  }

  p {
    margin: 0 0 20px 0;
  }

  span {
    font-weight: bold;
  }
  @media (max-width: 900px) {
    padding: 0 80px 70px 80px;
    h1 {
      font-size: 23px;
    }
  }

  @media (max-width: 700px) {
    padding: 0 40px 70px 40px;

    h1 {
      font-size: 21px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 30px 30px 30px;
    font-size: 16px;

    h1 {
      font-size: 18px;
    }
  }
`;

const TextContainer = styled.div`
  margin: 0 0 50px 0;
`;

const Wave = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
