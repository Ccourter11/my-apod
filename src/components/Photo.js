import React from "react";
import ReactPlayer from "react-player";

function Photo({ photo }) {
  const media_type = photo.media_type;

  return (
    <div>
      <h1>{photo.title}</h1>

      {media_type === "image" && (
        <div>
          <img src={photo.url} alt={photo.title} />
        </div>
      )}
      {media_type === "video" && (
        <div className="player-wrapper">
          <ReactPlayer url={photo.url} width="100%" height="100%" />
        </div>
      )}

      <p>{photo.explanation}</p>
    </div>
  );
}

export default Photo;