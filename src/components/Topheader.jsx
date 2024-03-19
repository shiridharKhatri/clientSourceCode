import React, { useRef } from "react";
import { IoPerson, IoMail, IoMenu } from "react-icons/io5";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
export default function Topheader() {
  const navItem = useRef(null);
  const openMenu = () => {
    navItem.current.style.left = "0";
  };
  const closeMenu = () => {
    navItem.current.style.left = "-45rem";
  };
  return (
    <>
      <section className="mainTopHeader">
        <div className="firstSec">
          <div className="socialIcons">
            <ul>
              <li style={{ background: "#0165E1" }}>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li style={{ background: "#ff0000" }}>
                <a href="">
                  <FaYoutube />
                </a>
              </li>
              <li style={{ background: "#EA4335" }}>
                <a href="">
                  <IoMail />
                </a>
              </li>
              <li style={{ background: "#34A853" }}>
                <a href="">
                  <FaPhoneAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="secondSec">
          <div className="logo">
            <img src="/images/logoTwo.png" alt="logo" id="logoTwo" />
            <img src="/images/logo.png" alt="logo" id="logo" />
          </div>
          <div className="topButton">
            <button>Account</button>
            <button>Donate</button>
          </div>
        </div>
      </section>
      <nav>
        <div id="hiddenMenu">
          <h1 onClick={openMenu}>
            <IoMenu />
          </h1>
        </div>
        <ul ref={navItem}>
          <h4 onClick={closeMenu} id="hiddenCross">
            <RxCross2 />
          </h4>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/project`}>Project</Link>
          </li>
          <li>
            <Link to={`/donor`}>Donor&lifetime member</Link>
          </li>
          <li>
            <Link to={`/gallery`}>Gallery</Link>
          </li>
          <li>
            <Link to={`/video`}>Videos</Link>
          </li>
          <li>
            <Link to={`/volreg`}>volunteer registration</Link>
          </li>
          <li>
            <Link to={`/news`}>News</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
