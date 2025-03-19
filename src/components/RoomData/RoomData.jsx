import { useState } from "react";
import "./RoomData.scss";

function RoomData({ roomdata }) {
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === roomdata.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? roomdata.pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="room-info">
      <div className="image-container">
        <button className="nav-btn left" onClick={prevImage}>
          &#8592;
        </button>
        <img
          className="image"
          src={backendurl + roomdata.pictures[currentImageIndex]}
          alt="Gallery"
        />
        <button className="nav-btn right" onClick={nextImage}>
          &#8594;
        </button>
        <p className="image__title">{roomdata.type_name}</p>
      </div>
      <h2 className="room-info__title">{roomdata.type_name}</h2>
    </div>
  );
}

export default RoomData;
