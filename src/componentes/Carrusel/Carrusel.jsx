import Slider from "react-slick";
import VideoCard from "./VideoCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiVideos from "../../services/videoService";
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

  const [videos, setVideos] = useState([]);

  const style = {
    backgroundColor: `${
      sectionColor.includes("--") ? `var(${sectionColor})` : `${sectionColor}`
    }`,
  };

  useEffect(() => {
    apiVideos.getCategoryVideos(sectionTitle).then((res) => {
      setVideos(res);
    });
  }, [sectionTitle]);

  if (videos.length > 0) {
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
              return (
                <VideoCard key={i} color={sectionColor} imgUrl={video.imgUrl} />
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Carrusel;
