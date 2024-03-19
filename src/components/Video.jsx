import React from "react";
import { Link } from "react-router-dom";

export default function Video() {
  return (
    <section className="latestVideos">
      <h1>Videos</h1>
      <div className="mainVideoSection">
        <div className="card">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wKV4pZrep6E?si=oKozGxOT-e67fPsI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="card">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wKV4pZrep6E?si=oKozGxOT-e67fPsI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="card">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wKV4pZrep6E?si=oKozGxOT-e67fPsI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="moreBtn">
      <Link to={`/video`}>
          <button className="more">More</button>
        </Link>
      
      </div>
    </section>
  );
}
