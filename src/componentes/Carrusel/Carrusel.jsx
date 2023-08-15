import Slider from "react-slick";
import VideoCard from "./VideoCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data/db.json";
import { useEffect, useState } from "react";

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

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const filtrados = data.Videos.filter(
      (video) => video.categoria === sectionTitle
    );
    setVideos(filtrados);
  }, [sectionTitle]);

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
          {videos.map((video, i) => {
            return <VideoCard key={i} color={sectionColor} url={video.URL} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Carrusel;
