import * as S from "./styles";
import { Link } from "react-router-dom";
import softexLogo from "../../../assets/images/softexLogo.png";
import ItemList from "../../Elements/ItemList";

const NavigationBar = ({}) => {
  return (
    <S.NavHeader>
      <ul>
        <li>
          <a href="/">
            <img src={softexLogo} alt="" />
          </a>
        </li>
        <ItemList>
          <Link to="/">FAP</Link>
        </ItemList>
        <ItemList>
          <Link to="/about">Sobre</Link>
        </ItemList>
        <ItemList>
          <Link to="/editions">Edições</Link>
        </ItemList>
        <ItemList>
          <Link to="/projects">Projetos</Link>
        </ItemList>
        <ItemList>
          <Link to="/events">Eventos</Link>
        </ItemList>
        <ItemList>
          <Link to="/contact">Contato</Link>
        </ItemList>
      </ul>
    </S.NavHeader>
  );
};

export default NavigationBar;
