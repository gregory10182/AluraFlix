import apiVideos from "../services/videoService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FormTitle } from "../componentes/Registro/FormComponents";
import ReactPlayer from "react-player";
import { styled } from "styled-components";

const StyledVideoPlayer = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1rem;

  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;

const StyledVideoDesc = styled.p`
  width: 100%;
  padding: 0 1rem;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: var(--color-gray-light);

  @media only screen and (min-width: 1024px) {
    padding: 0;
  }
`;

const StyledVideoTitle = styled(FormTitle)`
  padding: 0 2rem;

  @media only screen and (min-width: 1024px) {
    padding: 0;
  }
`;

function Video() {
  const { id, color } = useParams();

  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    apiVideos
      .getOne(id)
      .then((res) => {
        setVideoData(res);
      })
      .catch((err) => err);
  }, [id]);

  return (
    <StyledVideoPlayer>
      <StyledVideoTitle>{videoData.nombre}</StyledVideoTitle>
      <ReactPlayer
        url={videoData.URL}
        controls
        width={"100%"}
        height={"80%"}
        style={{
          border: `0.35rem solid ${color}`,
        }}
      />
      <StyledVideoDesc>{videoData.desc}</StyledVideoDesc>
    </StyledVideoPlayer>
  );
}

export default Video;
