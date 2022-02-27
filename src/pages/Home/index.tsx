import {
  BackgroundRed,
  Container,
  FullContainer,
  SectionBem,
  SectionForm,
  SectionSocialNetworks,
  SectionVideo,
} from "./styles";
import Logo from "../../assets/logo.svg";
import PlayVideo from "../../assets/playvideo.svg";
import InstagramLogo from "../../assets/instagram.svg";
import FacebookLogo from "../../assets/facebook.svg";
import TwitterLogo from "../../assets/Twitter.svg";
import LinkedinLogo from "../../assets/Linkedin.svg";
import Ornament from "../../assets/ornament.svg";

export const Home = () => {
  return (
    <Container>
      <FullContainer>
        <SectionBem>
          <img src={Ornament} alt="Ornamento" className="ornament" />
          <a
            href="https://www.bemol.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Logo} alt="Logo Bemol" className="logoBemol" />
          </a>
          <h1>
            Inscreva-se no <span className="spanBlue">Cadastro do Bem</span> e
            tenha um atendimento <span className="spanRed">personalizado</span>
          </h1>
          <SectionVideo
            href="https://www.youtube.com/watch?v=d5JGR-nahy4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={PlayVideo} alt="Play" />
            <p className="text2">Watch Video</p>
          </SectionVideo>
          <SectionSocialNetworks>
            <a
              href="https://www.instagram.com/bemolonline/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramLogo} alt="Instagram Logo" />
            </a>
            <a
              href="https://www.facebook.com/bemolonline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookLogo} alt="Facebook Logo" />
            </a>
            <a
              href="https://twitter.com/BemolOnline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterLogo} alt="Twitter Logo" />
            </a>
            <a
              href="https://www.linkedin.com/company/bemol/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinLogo} alt="Linkedin Logo" />
            </a>
          </SectionSocialNetworks>
        </SectionBem>
        <SectionForm>
          <h2>Formulário de cadastro</h2>
          <BackgroundRed />
        </SectionForm>
      </FullContainer>
    </Container>
  );
};
