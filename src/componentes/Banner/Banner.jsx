import { styled } from "styled-components";
import Boton from "../Button/Boton";
import { Link } from "react-router-dom";

const SectionBanner = styled.section`
  width: 100vw;
  height: 16.1875rem;
  box-sizing: border-box;
  padding: 0.6rem;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-content: flex-end;
  row-gap: 1.18rem;
  font-family: "Roboto", sans-serif;
  background-image: url("/Banner.jpeg");
  box-shadow: inset 0 0 10rem 4rem #000;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: 1440px) {
    height: 52rem;
    padding: 5rem 3rem;
    box-shadow: inset 0 0 25rem 30rem #0012338f;
  }
`;

const SmallScreenTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.6875rem;
  font-weight: 300;
  color: var(--color-gray-light);

  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

const BigScreenData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  column-gap: 3rem;
`;

const Left = styled.div`
  display: none;

  @media only screen and (min-width: 1440px) {
    display: flex;
    min-width: 50%;
    row-gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

const VideoImage = styled.img`
  display: none;

  @media only screen and (min-width: 1440px) {
    display: block;
    width: 40.375rem;
    height: 20.84rem;
    border-radius: 0.25rem;
    border: 0.3rem solid ${({ color }) => color || "none"};
  }
`;

const VideoTitle = styled.h1`
  width: 100%;
  font-size: 2.875rem;
  color: var(--color-gray-light);
  text-align: left;
`;

const VideoDesc = styled.p`
  color: var(--color-gray-light);
  font-size: 1.125rem;
  font-weight: 300;
`;

const CourseName = styled.div`
  min-width: 17.5rem;
  width: auto;
  height: 5.75rem;
  padding: 0 1rem;
  margin-bottom: 2rem;
  background-color: ${({ color }) => color};
  color: var(--color-gray-light);
  font-size: 3.75rem;
  font-weight: 400;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Banner({ bannerData }) {
  const { video, color } = bannerData;

  return (
    <SectionBanner>
      <SmallScreenTitle>{video?.nombre}</SmallScreenTitle>

      <Link to={`/video/${video?.id}/${color}`}>
        <Boton text={"Ver"} type={"ver"} />
      </Link>
      {color !== "#000000" && (
        <BigScreenData>
          <Left>
            <CourseName color={color || ""}>{video?.categoria}</CourseName>
            <VideoTitle>{video?.nombre}</VideoTitle>
            <VideoDesc>{video?.desc}</VideoDesc>
          </Left>
          <Link to={`/video/${video?.id}/${color}`}>
            <VideoImage
              color={color || ""}
              src={video?.imgUrl}
              alt={video?.nombre}
            />
          </Link>
        </BigScreenData>
      )}
    </SectionBanner>
  );
}

export default Banner;
