import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import { News } from "./news";
import {settings} from "./settings";

const Carousel = () => {
 
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {News.map(({ id, image, link, title, description }) => {
          return (
            <CarouselItem
              key={id}
              image={image}
              link={link}
              title={title}
              description={description}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
