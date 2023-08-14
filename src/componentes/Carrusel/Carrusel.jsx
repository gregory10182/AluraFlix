import Slider from "react-slick";
import VideoCard from "./VideoCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carrusel({ sectionTitle, sectionDesc, sectionColor }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
  };

  const style = {
    backgroundColor: `var(${sectionColor})`,
  };

  return (
    <div className="carrusel">
      <div className="carruselHeader">
        <h2 style={style} className="sectionTitle">
          {sectionTitle}
        </h2>
        <p className="sectionDesc">{sectionDesc}</p>
      </div>

      <div className="slider">
        <Slider {...settings}>
          <VideoCard color={sectionColor} />
          <VideoCard color={sectionColor} />
          <VideoCard color={sectionColor} />
          <VideoCard color={sectionColor} />
        </Slider>
      </div>
    </div>
  );
}

export default Carrusel;
