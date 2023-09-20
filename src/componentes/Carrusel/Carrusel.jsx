import Slider from "react-slick";
import VideoCard from "./VideoCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiVideos from "../../services/videoService";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const CarruselSection = styled.div`
  width: 100vw;
  box-sizing: border-box;
  height: auto;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  row-gap: 0.5rem;
  flex-wrap: wrap;
`;

const StyledSlider = styled.div`
  justify-self: center;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  min-height: 0;

  & .slick-dots li button:before {
    color: var(--color-gray-light);
  }

  & .slick-dots .slick-active button:before {
    color: var(--color-gray-light);
  }

  & .slick-arrow {
    box-sizing: border-box;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CarruselHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  padding: 0 1rem;
  row-gap: 0.5rem;
`;

const SectionTitle = styled.h2`
  background-color: ${({ $bgcolor }) => $bgcolor};
  color: var(--color-gray-light);
  font-size: 1rem;
  font-weight: 400;
  padding: 0 0.5rem;
  min-width: 4.5rem;
  width: auto;
  height: 2.0625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
`;

const SectionDesc = styled.p`
  width: 100%;
  color: var(--color-gray-light);
  font-size: 0.75rem;
  font-weight: 300;
`;

function Carrusel({ sectionTitle, sectionDesc, sectionColor, setFCategory }) {
  const [videos, setVideos] = useState([]);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    infinite: videos.length >= 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    apiVideos.getCategoryVideos(sectionTitle).then((res) => {
      setVideos(res);
    });
  }, [sectionTitle]);

  useEffect(() => {
    if (videos.length > 0) {
      setFCategory({
        video: videos[0],
        color: sectionColor,
      });
    }
  }, [videos, setFCategory, sectionColor]);

  if (videos.length > 0) {
    return (
      <CarruselSection>
        <CarruselHeader>
          <SectionTitle $bgcolor={sectionColor}>{sectionTitle}</SectionTitle>
          <SectionDesc>{sectionDesc}</SectionDesc>
        </CarruselHeader>
        <StyledSlider>
          <Slider {...settings}>
            {videos.map((video, i) => {
              return (
                <VideoCard
                  key={i}
                  color={sectionColor}
                  imgUrl={video.imgUrl}
                  video={video.id}
                />
              );
            })}
          </Slider>
        </StyledSlider>
      </CarruselSection>
    );
  }
}

export default Carrusel;
