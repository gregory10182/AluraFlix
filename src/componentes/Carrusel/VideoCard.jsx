import "./Carrusel.css";
import { useEffect, useState } from "react";

function VideoCard({ color, url }) {
  const border = {
    border: `0.2rem solid var(${color})`,
  };

  const [thumbnail, setThumbnail] = useState("");

  const getYoutubeThumbnail = (url) => {
    const position = url.indexOf("v=");
    if (position !== -1) {
      const id = url.substring(position + 2);
      const thumbnail = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
      setThumbnail(thumbnail);
    } else {
      setThumbnail("/src/assets/Logo.png");
    }
  };

  useEffect(() => {
    getYoutubeThumbnail(url);
  }, [url]);

  return (
    <div style={border} className="videoCard">
      <img className="videoMiniature" src={thumbnail} alt="a" />
    </div>
  );
}

export default VideoCard;
