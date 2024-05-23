//Styles
import * as S from "./styles";

//Components
import Carousel from "../../components/UI/Carousel/Carousel";
import Card from "../../components/UI/Card/Card";

//Elements
import InfoTitle from "../../components/Elements/InfoTitle";
import BackgroundContainer from "../../components/Elements/BackgroundContainer";
import Container from "../../components/Elements/Container";

//Images
import softexOffice from "../../assets/images/escritoriosoftexpe.jpg";
import background from "../../assets/images/background.svg";
import SoftexLogo from "../../assets/images/softexLogo.png";
import assespro from "../../assets/images/assespro.svg";
import cesar from "../../assets/images/CESAR.svg";
import fiepe from "../../assets/images/fiepe.svg";
import portoDigital from "../../assets/images/portoDigital.svg";
import sebrae from "../../assets/images/sebrae.svg";
import softex from "../../assets/images/SOFTEX.svg";

//icons
import ds from "../../assets/icons/discord.png";
import insta from "../../assets/icons/insta.png";
import linkedin from "../../assets/icons/linkedin.png";

//placeholders
import { cardLabels } from "../../components/UI/Card/Labels";

const Home = () => {
  return (
    <main>
      <BackgroundContainer background={background} />
      <S.InfoHomeContent>
        <div>
          <span>
            <p>
              Formação em
              <strong> Programação</strong>
            </p>
          </span>
          <p>
            O programa de Formação Acelerada em Programação visa{" "}
            <strong>
              formar 1.500 desenvolvedores em programação Front-end e Back-end
            </strong>
            , combinando conhecimentos teóricos e práticos. Os alunos deverão
            concluir um curso de 144 horas presenciais e 56 horas de atividades
            complementares, totalizando <strong>200 horas</strong> de formação.
          </p>
        </div>
        <img src={softexOffice} alt="ITBC" />
      </S.InfoHomeContent>
      <InfoTitle />
      <Container>
        <Carousel />
      </Container>
      <Container row="column" justify="space-around" wrap="wrap">
        {cardLabels.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.tile}
            description={card.description}
            urlToCourse={card.courseUrl}
          />
        ))}
      </Container>
      <S.FooterContent>
        <div>
          <img src={SoftexLogo} alt="Softrex Logo" />
          <p>R. da Guia, 135 - Recife, PE, 50030-210</p>
        </div>
        <section>
          <h5>Fale Conosco</h5>
          <span>
            <a href="">
              <img src={ds} alt="" />
            </a>
            <a href="">
              <img src={insta} alt="" />
            </a>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </span>
          <p>Politica de Privacidade</p>
          <p>+55 81 98888-4335</p>
          <a href="mailto:softex@gmail.com.br">softex@gmail.com.br</a>
        </section>
        <article>
          <img src={assespro} alt="" />
          <img src={cesar} alt="" />
          <img src={fiepe} alt="" />
          <img src={portoDigital} alt="" />
          <img src={sebrae} alt="" />
          <img src={softex} alt="" />
        </article>
      </S.FooterContent>
    </main>
  );
};

export default Home;
