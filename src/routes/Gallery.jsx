import React, { useState } from "react";

import Topheader from "../components/Topheader";
import ModalImage from "react-modal-image";
export default function Gallery() {
  const [nav, setNav] = useState(1);
  const navigation = (number) => {
    setNav(number);
  };
  return (
    <>
      <Topheader />
      <section className="mainGalleryContainer">
        <h1>Gallery</h1>
        <div className="galContainerBox">
          <div className="firstGalarySec">
            <ul>
              <li
                style={
                  nav === 1
                    ? {
                        color: "#368547",
                        borderLeft: ".2rem solid #368547",
                        paddingLeft: ".3rem",
                      }
                    : { color: "#101010", padding: "0", border: "none" }
                }
                onClick={() => {
                  navigation(1);
                }}
                className="oneGal"
              >
                Iftar Distribution
              </li>
              <li
                style={
                  nav === 2
                    ? {
                        color: "#368547",
                        borderLeft: ".2rem solid #368547",
                        paddingLeft: ".3rem",
                      }
                    : { color: "#101010", padding: "0", border: "none" }
                }
                onClick={() => {
                  navigation(2);
                }}
                className="twoGal"
              >
                Orphan
              </li>
              <li
                style={
                  nav === 3
                    ? {
                        color: "#368547",
                        borderLeft: ".2rem solid #368547",
                        paddingLeft: ".3rem",
                      }
                    : { color: "#101010", padding: "0", border: "none" }
                }
                onClick={() => {
                  navigation(3);
                }}
                className="threeGal"
              >
                Qurbani
              </li>
              <li
                style={
                  nav === 4
                    ? {
                        color: "#368547",
                        borderLeft: ".2rem solid #368547",
                        paddingLeft: ".3rem",
                      }
                    : { color: "#101010", padding: "0", border: "none" }
                }
                onClick={() => {
                  navigation(4);
                }}
                className="fourGal"
              >
                Food Distribution
              </li>
              <li
                style={
                  nav === 5
                    ? {
                        color: "#368547",
                        borderLeft: ".2rem solid #368547",
                        paddingLeft: ".3rem",
                      }
                    : { color: "#101010", padding: "0", border: "none" }
                }
                onClick={() => {
                  navigation(5);
                }}
                className="fiveGal"
              >
                Tube well Distribution
              </li>
              <li
                style={
                  nav === 6
                    ? {
                        color: "#368547",
                        borderLeft: ".2rem solid #368547",
                        paddingLeft: ".3rem",
                      }
                    : { color: "#101010", padding: "0", border: "none" }
                }
                onClick={() => {
                  navigation(6);
                }}
                className="sixGal"
              >
                Relief distribution
              </li>
              <li
                style={
                  nav === 7
                    ? {
                        color: "#368547",
                        borderLeft: ".2rem solid #368547",
                        paddingLeft: ".3rem",
                      }
                    : { color: "#101010", padding: "0", border: "none" }
                }
                onClick={() => {
                  navigation(7);
                }}
                className="sevenGal"
              >
                Van Distribution
              </li>
              <li
                style={
                  nav === 8
                    ? {
                        color: "#368547",
                        borderLeft: ".2rem solid #368547",
                        paddingLeft: ".3rem",
                      }
                    : { color: "#101010", padding: "0", border: "none" }
                }
                onClick={() => {
                  navigation(8);
                }}
                className="eightGal"
              >
                Winter Clothing
              </li>
            </ul>
          </div>
          <div className="secondGallerySec">
            <div className="galleryBox">
              {nav === 1 ? (
                <div className="box">
                  <ModalImage
                    small={"/images/gallery/one/img1.png"}
                    large={"/images/gallery/one/img1.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/one/img2.png"}
                    large={"/images/gallery/one/img2.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/one/img3.png"}
                    large={"/images/gallery/one/img3.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/one/img4.png"}
                    large={"/images/gallery/one/img4.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/one/img5.png"}
                    large={"/images/gallery/one/img5.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/one/img6.png"}
                    large={"/images/gallery/one/img6.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/one/img7.png"}
                    large={"/images/gallery/one/img7.png"}
                    alt="Image preview"
                  />
                </div>
              ) : nav === 2 ? (
                <div className="box">
                  <ModalImage
                    small={"/images/gallery/two/img1.png"}
                    large={"/images/gallery/two/img1.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/two/img2.png"}
                    large={"/images/gallery/two/img2.png"}
                    alt="Image preview"
                  />
                </div>
              ) : nav === 3 ? (
                <div className="box">
                  <ModalImage
                    small={"/images/gallery/three/img1.png"}
                    large={"/images/gallery/three/img1.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/three/img2.png"}
                    large={"/images/gallery/three/img2.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/three/img3.png"}
                    large={"/images/gallery/three/img3.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/three/img4.png"}
                    large={"/images/gallery/three/img4.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/three/img5.png"}
                    large={"/images/gallery/three/img5.png"}
                    alt="Image preview"
                  />
                </div>
              ) : nav === 4 ? (
                <div className="box">
                  <ModalImage
                    small={"/images/gallery/four/img1.png"}
                    large={"/images/gallery/four/img1.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/four/img2.png"}
                    large={"/images/gallery/four/img2.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/four/img3.png"}
                    large={"/images/gallery/four/img3.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/four/img4.png"}
                    large={"/images/gallery/four/img4.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/four/img5.png"}
                    large={"/images/gallery/four/img5.png"}
                    alt="Image preview"
                  />
                </div>
              ) : nav === 5 ? (
                <div className="box">
                  <ModalImage
                    small={"/images/gallery/five/img1.png"}
                    large={"/images/gallery/five/img1.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/five/img2.png"}
                    large={"/images/gallery/five/img2.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/five/img3.png"}
                    large={"/images/gallery/five/img3.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/five/img4.png"}
                    large={"/images/gallery/five/img4.png"}
                    alt="Image preview"
                  />
                </div>
              ) : nav === 6 ? (
                <div className="box">
                  <ModalImage
                    small={"/images/gallery/six/img1.png"}
                    large={"/images/gallery/six/img1.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/six/img2.png"}
                    large={"/images/gallery/six/img2.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/six/img3.png"}
                    large={"/images/gallery/six/img3.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/six/img4.png"}
                    large={"/images/gallery/six/img4.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/six/img5.png"}
                    large={"/images/gallery/six/img5.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/six/img6.png"}
                    large={"/images/gallery/six/img6.png"}
                    alt="Image preview"
                  />
                </div>
              ) : nav === 7 ? (
                <div className="box">
                  <ModalImage
                    small={"/images/gallery/seven/img1.png"}
                    large={"/images/gallery/seven/img1.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/seven/img2.png"}
                    large={"/images/gallery/seven/img2.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/seven/img3.png"}
                    large={"/images/gallery/seven/img3.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/seven/img4.png"}
                    large={"/images/gallery/seven/img4.png"}
                    alt="Image preview"
                  />
                </div>
              ) : (
                <div className="box">
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
                  <ModalImage
                    small={"/images/gallery/eight/img9.png"}
                    large={"/images/gallery/eight/img9.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/eight/img10.png"}
                    large={"/images/gallery/eight/img10.png"}
                    alt="Image preview"
                  />
                  <ModalImage
                    small={"/images/gallery/eight/img11.png"}
                    large={"/images/gallery/eight/img11.png"}
                    alt="Image preview"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
