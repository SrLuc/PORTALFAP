//Styles
import * as S from "./styles";

//Components
import Carousel from "../../components/UI/Carousel/Carousel";

//Elements
import InfoTitle from "../../components/Elements/InfoTitle";
import BackgroundContainer from "../../components/Elements/BackgroundContainer";
import Container from "../../components/Elements/Container";

//Images
import softexOffice from "../../assets/images/escritoriosoftexpe.jpg";
import background from "../../assets/images/background.svg";

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
    </main>
  );
};

export default Home;
