import React from "react";
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
export default function Gallery() {
  return (
    <section className="mainGallery">
      <h1>Gallery</h1>
      <div className="mainCard">
        <ModalImage
          small={"/images/gallery/eight/img1.png"}
          large={"/images/gallery/eight/img1.png"}
          alt="Image preview"
        />
        <ModalImage
          small={"/images/gallery/eight/img2.png"}
          large={"/images/gallery/eight/img2.png"}
          alt="Image preview"
        />
        <ModalImage
          small={"/images/gallery/eight/img3.png"}
          large={"/images/gallery/eight/img3.png"}
          alt="Image preview"
        />
        <ModalImage
          small={"/images/gallery/eight/img4.png"}
          large={"/images/gallery/eight/img4.png"}
          alt="Image preview"
        />
        <ModalImage
          small={"/images/gallery/eight/img5.png"}
          large={"/images/gallery/eight/img5.png"}
          alt="Image preview"
        />
        <ModalImage
          small={"/images/gallery/eight/img6.png"}
          large={"/images/gallery/eight/img6.png"}
          alt="Image preview"
        />
        <ModalImage
          small={"/images/gallery/eight/img7.png"}
          large={"/images/gallery/eight/img7.png"}
          alt="Image preview"
        />
        <ModalImage
          small={"/images/gallery/eight/img8.png"}
          large={"/images/gallery/eight/img8.png"}
          alt="Image preview"
        />
      </div>
      <div className="moreBtn">
      <Link to={`/gallery`}>
          <button className="more">More</button>
        </Link>
        
      </div>
    </section>
  );
}
