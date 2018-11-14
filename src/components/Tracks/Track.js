import React from "react";
import { Link } from "react-router-dom";

import "./Track.css";

const Track = props => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body card_styling">
          <h5>{props.track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="far fa-play-circle fa-lg icon_color" /> Track
            </strong>
            : {props.track.track_name} <br />
            <strong>
              <i className="fas fa-compact-disc fa-lg icon_color" /> Album
            </strong>
            : {props.track.album_name}
          </p>
          <Link
            to={`lyrics/track/${props.track.track_id}`}
            className="btn btn-primary btn-block"
          >
            View Lyrics! <i className="fas fa-chevron-right fa-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
