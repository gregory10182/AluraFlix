import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledVideoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 5rem;
  border: 0.2rem solid ${({ $bordercolor }) => $bordercolor};
`;

const VideoMiniature = styled.img`
  width: 100%;
  object-fit: cover;
`;

function VideoCard({ color, imgUrl, video }) {
  return (
    <Link to={`/video/${video}/${color.replace("#", "")}`}>
      <StyledVideoCard $bordercolor={color}>
        <VideoMiniature src={imgUrl} alt="a" />
      </StyledVideoCard>
    </Link>
  );
}

export default VideoCard;
