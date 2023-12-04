import styled from "styled-components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import logo from "../assets/svg/Home/logo.svg";
import wave from "../assets/svg/Kontakt/kontakt_waves.png";
import GlobalStyle from "../Styles";

export default function Datenschutzerklärung() {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrollen zur Oberseite der Seite
  }, [location.pathname]);

  return (
    <>
      <div>
        <GlobalStyle />
        <BigWrapper>
          <Logo src={logo} alt="logo"></Logo>
          <BackButton onClick={goBack}>
            <FaArrowLeft />
            Zurück
          </BackButton>
          <Wrapper>
            <Heading>
              <h1>Datenschutzerklärung</h1>
            </Heading>
            <TextWrapper>
              <TextContainer>
                <h1>1. Datenschutz auf einen Blick</h1>
                <h2>Allgemeine Hinweise</h2>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen. Personenbezogene Daten sind alle
                  Daten, mit denen Sie persönlich identifiziert werden können.
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
                  unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
                <h2>Datenerfassung auf dieser Website</h2>
                <h3>
                  Wer ist verantwortlich für die Datenerfassung auf dieser
                  Website?
                </h3>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                  „Hinweis zur Verantwortlichen Stelle“ in dieser
                  Datenschutzerklärung entnehmen.
                </p>
                <h3>Wie erfassen wir Ihre Daten?</h3>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                  diese mitteilen. Hierbei kann es sich z. B. um Daten handeln,
                  die Sie in ein Kontaktformular eingeben.
                </p>
                <p>
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung
                  beim Besuch der Website durch unsere IT- Systeme erfasst. Das
                  sind vor allem technische Daten (z. B. Internetbrowser,
                  Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                  dieser Daten erfolgt automatisch, sobald Sie diese Website
                  betreten.
                </p>
                <h3>Wofür nutzen wir Ihre Daten?</h3>
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie
                  Bereitstellung der Website zu gewährleisten. Andere Daten
                  können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
                <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                  Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                  Recht, die Berichtigung oder Löschung dieser Daten zu
                  verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                  erteilt haben, können Sie diese Einwilligung jederzeit für die
                  Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                  bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                  ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
                <p>
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                  Sie sich jederzeit an uns wenden.
                </p>
                <h2>Analyse-Tools und Tools von Drittanbietern</h2>
                <p>
                  Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
                  ausgewertet werden. Das geschieht vor allem mit sogenannten
                  Analyseprogrammen.
                </p>
                <p>
                  Detaillierte Informationen zu diesen Analyseprogrammen finden
                  Sie in der folgenden Datenschutzerklärung.
                </p>
              </TextContainer>
              <TextContainer>
                <h1>2. Hosting</h1>
                <p>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <h2>Externes Hosting</h2>
                <p>
                  Diese Website wird extern gehostet. Die personenbezogenen
                  Daten, die auf dieser Website erfasst werden, werden auf den
                  Servern des Hosters / der Hoster gespeichert. Hierbei kann es
                  sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und
                  Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                  Websitezugriffe und sonstige Daten, die über eine Website
                  generiert werden, handeln.
                </p>
                <p>
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
                  gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
                  Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
                  schnellen und effizienten Bereitstellung unseres
                  Online-Angebots durch einen professionellen Anbieter (Art. 6
                  Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung
                  abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
                  Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                  TTDSG, soweit die Einwilligung die Speicherung von Cookies
                  oder den Zugriff auf Informationen im Endgerät des Nutzers (z.
                  B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
                  Einwilligung ist jederzeit widerrufbar.
                </p>
                <p>
                  Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
                  verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
                  erforderlich ist und unsere Weisungen in Bezug auf diese Daten
                  befolgen.
                </p>
                <p>Wir setzen folgende(n) Hoster ein:</p>
                <p>Vercel Inc. 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              </TextContainer>
              <TextContainer>
                <h1>3. Allgemeine Hinweise und Pflichtinformationen</h1>
                <h2>Datenschutz</h2>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                  persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend den
                  gesetzlichen Datenschutzvorschriften sowie dieser
                  Datenschutzerklärung.
                </p>
                <p>
                  Wenn Sie diese Website benutzen, werden verschiedene
                  personenbezogene Daten erhoben. Personenbezogene Daten sind
                  Daten, mit denen Sie persönlich identifiziert werden können.
                  Die vorliegende Datenschutzerklärung erläutert, welche Daten
                  wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
                  und zu welchem Zweck das geschieht.
                </p>
                <p>
                  Wir weisen darauf hin, dass die Datenübertragung im Internet
                  (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
                  aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                  Zugriff durch Dritte ist nicht möglich.
                </p>
                <h2>Hinweis zur verantwortlichen Stelle</h2>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf
                  dieser Website ist:
                </p>
                <div>Modern Mind Recruitment</div>
                <div>Königsbrückerlandstraße 58</div>
                <div>01109 Dresden</div>
                <br />
                <div>Telefon: 015202112164</div>
                <div>E-Mail: info@modernmindrecruitment.com</div>
                <p>
                  Verantwortliche Stelle ist die natürliche oder juristische
                  Person, die allein oder gemeinsam mit anderen über die Zwecke
                  und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
                  Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
                <h2>Speicherdauer</h2>
                <p>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                  Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                  Daten bei uns, bis der Zweck für die Datenverarbeitung
                  entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend
                  machen oder eine Einwilligung zur Datenverarbeitung
                  widerrufen, werden Ihre Daten gelöscht, sofern wir keine
                  anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                  personenbezogenen Daten haben (z. B. steuer- oder
                  handelsrechtliche Aufbewahrungsfristen); im letztgenannten
                  Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>
                <h2>
                  Allgemeine Hinweise zu den Rechtsgrundlagen der
                  Datenverarbeitung auf dieser Website
                </h2>
                <p>
                  Sofern Sie in die Datenverarbeitung eingewilligt haben,
                  verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
                  Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO,
                  sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                  verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung
                  in die Übertragung personenbezogener Daten in Drittstaaten
                  erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
                  49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von
                  Cookies oder in den Zugriff auf Informationen in Ihr Endgerät
                  (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt
                  die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1
                  TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre
                  Daten zur Vertragserfüllung oder zur Durchführung
                  vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
                  Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
                  Weiteren verarbeiten wir Ihre Daten, sofern diese zur
                  Erfüllung einer rechtlichen Verpflichtung erforderlich sind
                  auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                  Datenverarbeitung kann ferner auf Grundlage unseres
                  berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
                  erfolgen. Über die jeweils im Einzelfall einschlägigen
                  Rechtsgrundlagen wird in den folgenden Absätzen dieser
                  Datenschutzerklärung informiert.
                </p>
                <h2>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
                <p>
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                  ausdrücklichen Einwilligung möglich. Sie können eine bereits
                  erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                  der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                  Widerruf unberührt.
                </p>
                <h2>
                  Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
                  sowie gegen Direktwerbung (Art. 21 DSGVO)
                </h2>
                <p>
                  WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1
                  LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT,
                  AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN,
                  GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
                  WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE
                  BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
                  RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN
                  SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH
                  EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN
                  NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE
                  SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE
                  INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
                  VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER
                  VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21
                  ABS. 1 DSGVO). WERDEN IHRE PERSONENBEZOGENEN DATEN
                  VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS
                  RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
                  BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER
                  WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT
                  ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                  WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
                  ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG
                  VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                </p>
                <h2>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
                <p>
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen
                  ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere
                  in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                  Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                  Das Beschwerderecht besteht unbeschadet anderweitiger
                  verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                </p>
                <h2>Recht auf Datenübertragbarkeit</h2>
                <p>
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                  Einwilligung oder in Erfüllung eines Vertrags automatisiert
                  verarbeiten, an sich oder an einen Dritten in einem gängigen,
                  maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                  direkte Übertragung der Daten an einen anderen
                  Verantwortlichen verlangen, erfolgt dies nur, soweit es
                  technisch machbar ist.
                </p>
                <h2>Auskunft, Berichtigung und Löschung</h2>
                <p>
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                  jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                  gespeicherten personenbezogenen Daten, deren Herkunft und
                  Empfänger und den Zweck der Datenverarbeitung und ggf. ein
                  Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
                  sowie zu weiteren Fragen zum Thema personenbezogene Daten
                  können Sie sich jederzeit an uns wenden.
                </p>
                <h2>Recht auf Einschränkung der Verarbeitung</h2>
                <p>
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen. Hierzu können Sie sich
                  jederzeit an uns wenden. Das Recht auf Einschränkung der
                  Verarbeitung besteht in folgenden Fällen:
                </p>
                <ul>
                  <li>
                    Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                    personenbezogenen Daten bestreiten, benötigen wir in der
                    Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung
                    haben Sie das Recht, die Einschränkung der Verarbeitung
                    Ihrer personenbezogenen Daten zu verlangen.
                  </li>
                  <li>
                    Wenn die Verarbeitung Ihrer personenbezogenen Daten
                    unrechtmäßig geschah/geschieht, können Sie statt der
                    Löschung die Einschränkung der Datenverarbeitung verlangen.
                  </li>
                  <li>
                    Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen,
                    Sie sie jedoch zur Ausübung, Verteidigung oder
                    Geltendmachung von Rechtsansprüchen benötigen, haben Sie das
                    Recht, statt der Löschung die Einschränkung der Verarbeitung
                    Ihrer personenbezogenen Daten zu verlangen.
                  </li>
                  <li>
                    Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                    eingelegt haben, muss eine Abwägung zwischen Ihren und
                    unseren Interessen vorgenommen werden. Solange noch nicht
                    feststeht, wessen Interessen überwiegen, haben Sie das
                    Recht, die Einschränkung der Verarbeitung Ihrer
                    personenbezogenen Daten zu verlangen.
                  </li>
                </ul>
                <p>
                  Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                  eingeschränkt haben, dürfen diese Daten – von ihrer
                  Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
                  Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen oder zum Schutz der Rechte einer anderen
                  natürlichen oder juristischen Person oder aus Gründen eines
                  wichtigen öffentlichen Interesses der Europäischen Union oder
                  eines Mitgliedstaats verarbeitet werden.
                </p>
                <h2>SSL- bzw. TLS-Verschlüsselung</h2>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                  Übertragung vertraulicher Inhalte, wie zum Beispiel
                  Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
                  senden, eine SSL- bzw. TLS- Verschlüsselung. Eine
                  verschlüsselte Verbindung erkennen Sie daran, dass die
                  Adresszeile des Browsers von „http://“ auf „https://“ wechselt
                  und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
                <p>
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können
                  die Daten, die Sie an uns übermitteln, nicht von Dritten
                  mitgelesen werden.
                </p>
              </TextContainer>
              <TextContainer>
                <h1>4. Datenerfassung auf dieser Website</h1>
                <h2>Kontaktformular</h2>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                  werden Ihre Angaben aus dem Anfrageformular inklusive der von
                  Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                  Anfrage und für den Fall von Anschlussfragen bei uns
                  gespeichert. Diese Daten geben wir nicht ohne Ihre
                  Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                  Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                  eines Vertrags zusammenhängt oder zur Durchführung
                  vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                  Fällen beruht die Verarbeitung auf unserem berechtigten
                  Interesse an der effektiven Bearbeitung der an uns gerichteten
                  Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
                  abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p>
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                  bei uns, bis Sie uns zur Löschung auffordern, Ihre
                  Einwilligung zur Speicherung widerrufen oder der Zweck für die
                  Datenspeicherung entfällt (z. B. nach abgeschlossener
                  Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen
                  – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
                <h2>Anfrage per E-Mail, Telefon oder Telefax</h2>
                <p>
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren,
                  wird Ihre Anfrage inklusive aller daraus hervorgehenden
                  personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                  Bearbeitung Ihres Anliegens bei uns gespeichert und
                  verarbeitet. Diese Daten geben wir nicht ohne Ihre
                  Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                  Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                  eines Vertrags zusammenhängt oder zur Durchführung
                  vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                  Fällen beruht die Verarbeitung auf unserem berechtigten
                  Interesse an der effektiven Bearbeitung der an uns gerichteten
                  Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
                  abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p>
                  Die von Ihnen an uns per Kontaktanfragen übersandten Daten
                  verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
                  Einwilligung zur Speicherung widerrufen oder der Zweck für die
                  Datenspeicherung entfällt (z. B. nach abgeschlossener
                  Bearbeitung Ihres Anliegens). Zwingende gesetzliche
                  Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen –
                  bleiben unberührt.
                </p>
              </TextContainer>
              <TextContainer>
                <h1>5. Plugins und Tools</h1>
                <h2>Google Fonts (lokales Hosting)</h2>
                <p>
                  Diese Seite nutzt zur einheitlichen Darstellung von
                  Schriftarten so genannte Google Fonts, die von Google
                  bereitgestellt werden. Die Google Fonts sind lokal
                  installiert. Eine Verbindung zu Servern von Google findet
                  dabei nicht statt.
                </p>
                <p>
                  Weitere Informationen zu Google Fonts finden Sie unter
                  https://developers.google.com/fonts/faq und in der
                  Datenschutzerklärung von Google:{" "}
                  <a href="https://policies.google.com/privacy?hl=de">
                    https://policies.google.com/privacy?hl=de.
                  </a>
                </p>
                <p>
                  Quelle:{" "}
                  <a href="https://www.e-recht24.de">
                    https://www.e-recht24.de
                  </a>
                </p>
              </TextContainer>
            </TextWrapper>
          </Wrapper>
          <Wave src={wave} alt="wave"></Wave>
        </BigWrapper>
      </div>
    </>
  );
}

const BigWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const BackButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 20px 0 0 20px;
  color: rgb(0, 0, 0, 0.4);

  @media (hover: hover) {
    &:hover {
      color: rgb(255, 165, 0);
    }
  }

  svg {
    margin-right: 5px;
  }

  @media (max-width: 900px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;
const Wrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1300px;
  margin: auto;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 100px;

  @media (max-width: 480px) {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 70px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;

  h1 {
    text-transform: uppercase;
    font-size: 30px;
    align-self: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-shadow: 0.5px 0 rgb(0, 0, 0);
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 28px;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 23px;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
    h1 {
      font-size: 19px;
    }
  }
`;

const Logo = styled.img`
  position: absolute;
  right: 0;
  top: -20px;
  width: 100px;
  margin: 40px;

  @media (max-width: 700px) {
    width: 65px;
  }

  @media (max-width: 480px) {
    width: 45px;
    margin: 20px 20px 40px 20px;
    top: 0px;
  }
`;

const TextWrapper = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 0 0 100px 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;

  h1 {
    font-size: 25px;
    margin: 0 0 25px 0;
    font-family: Comfortaa;
    text-shadow: 0.5px 0 rgb(0, 0, 0);
  }

  h2 {
    font-size: 20px;
    margin: 0 0 20px 0;
    font-family: Comfortaa;
    text-shadow: 0.5px 0 rgb(0, 0, 0);
  }

  h3 {
    font-size: 19px;
    margin: 0 0 20px 0;
    font-family: Comfortaa;
    text-shadow: 0.5px 0 rgb(0, 0, 0);
  }

  p {
    margin: 0 0 20px 0;
  }

  ul {
    li {
      margin: 0 0 20px 0;
    }
  }

  @media (max-width: 900px) {
    padding: 0 0 70px 0;
    h1 {
      font-size: 23px;
    }
  }

  @media (max-width: 700px) {
    padding: 0 0 70px 0;

    h1 {
      font-size: 21px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 0 30px 0;
    font-size: 16px;

    h1 {
      font-size: 18px;
    }

    h2 {
      font-size: 16px;
    }

    h3 {
      font-size: 15px;
    }

    ul {
      padding-left: 10px;
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
