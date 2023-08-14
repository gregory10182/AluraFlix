import "./Carrusel.css";

function VideoCard({ color }) {
  const border = {
    border: `0.2rem solid var(${color})`,
  };

  return (
    <div style={border} className="videoCard">
      <img
        className="videoMiniature"
        src="src\assets\frontend video.jpeg"
        alt=""
      />
    </div>
  );
}

export default VideoCard;
