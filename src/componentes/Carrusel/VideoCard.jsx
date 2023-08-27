import { styled } from "styled-components";

const StyledVideoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 5rem;
  border: 0.2rem solid ${({ bordercolor }) => bordercolor};
`;

const VideoMiniature = styled.img`
  width: 100%;
  object-fit: cover;
`;

function VideoCard({ color, imgUrl }) {
  return (
    <StyledVideoCard
      bordercolor={color.includes("--") ? `var(${color})` : `${color}`}
    >
      <VideoMiniature src={imgUrl} alt="a" />
    </StyledVideoCard>
  );
}

export default VideoCard;
