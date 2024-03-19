import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Foundation() {
  return (
    <section className="foundation">
      <div className="imageSec">
        <img src="/images/img1.png" alt="img1" />
      </div>
      <div className="desc">
        <h1>As-Sunnah Foundation</h1>
        <p>
          As-Sunnah Foundation is a non-profit, non-political, and entirely
          charitable organization dedicated to human welfare. Following the
          ideals and footsteps of the teacher of humanity, liberator of mankind,
          and role model of generosity Prophet Muhammad (Saw), this organization
          is engaged in social reform, inculcation of great morality,
          establishing employment, poverty alleviation, low cost or free health
          care, expansion of Islamic teachings and culture, conducting
          multidisciplinary education projects, continuous program in building a
          clean mindset, above all using oral, written and modern media to make
          people obey Allah and abide by His Messenger (Saw).
        </p>
        <div className="otherSec">
          <ul>
            <li>
              <span>
                <FaRegDotCircle />
              </span>{" "}
              <Link to={`/about`}>Education</Link>
            </li>
            <li>
              <span>
                <FaRegDotCircle />
              </span>{" "}
              <Link to={`/about`}>Charity</Link>
            </li>
            <li>
              <span>
                <FaRegDotCircle />
              </span>{" "}
              <Link to={`/about`}>Dawah</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
