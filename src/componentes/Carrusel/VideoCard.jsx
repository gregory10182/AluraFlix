import "./Carrusel.css";

function VideoCard({ color, imgUrl }) {
  const border = {
    border: `0.2rem solid var(${color})`,
  };

  // const getYoutubeThumbnail = (url) => {
  //   const position = url.indexOf("v=");
  //   if (position !== -1) {
  //     const id = url.substring(position + 2);
  //     const thumbnail = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  //     setThumbnail(thumbnail);
  //   } else {
  //     setThumbnail("/src/assets/Logo.png");
  //   }
  // };

  return (
    <div style={border} className="videoCard">
      <img className="videoMiniature" src={imgUrl} alt="a" />
    </div>
  );
}

export default VideoCard;
