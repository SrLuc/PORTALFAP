import * as S from "./styles";

interface CarouselItemProps {
  image?: string;
  link?: string;
  title?: string;
  description?: string;
}

const CarouselItem = ({
  image,
  link,
  title,
  description,
}: CarouselItemProps) => {
  return (
    <S.StyledCarouselItem>
      <img src={image} alt={title} />
      <h1>
        <a target="_blank" href={link}>
          {title}
        </a>
      </h1>
      <p>{description}</p>
    </S.StyledCarouselItem>
  );
};

export default CarouselItem;
