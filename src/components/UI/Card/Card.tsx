import * as S from "./styles";
import InfoButton from "../../Elements/InfoButton";

interface CardProps {
  image: string;
  title: string;
  description: string;
  urlToCourse: string;
}

const Card = ({ image, title, description, urlToCourse }: CardProps) => {
  return (
    <S.StyledCard>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <InfoButton urlTo={urlToCourse} />
    </S.StyledCard>
  );
};

export default Card;
