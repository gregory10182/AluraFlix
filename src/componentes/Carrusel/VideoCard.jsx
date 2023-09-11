import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledVideoCard = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 5rem;
`;

const VideoMiniature = styled.img`
  width: 90%;
  object-fit: cover;
  border: 0.2rem solid ${({ $bordercolor }) => $bordercolor};
`;

function VideoCard({ color, imgUrl, video }) {
  return (
    <Link to={`/video/${video}/${color.replace("#", "")}`}>
      <StyledVideoCard>
        <VideoMiniature $bordercolor={color} src={imgUrl} alt="a" />
      </StyledVideoCard>
    </Link>
  );
}

export default VideoCard;
