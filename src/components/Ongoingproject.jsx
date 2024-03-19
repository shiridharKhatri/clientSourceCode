import React from "react";
import { Link } from "react-router-dom";

export default function Ongoingproject() {
  let ongoingProject = [
    {
      image: "/images/ongoing/ima1.png",
      title: "smart tailoring and fashion design training",
      content:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.",
    },
    {
      image: "/images/ongoing/ima2.png",
      title: "web development course-2023",
      content:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.",
    },
    {
      image: "/images/ongoing/ima3.png",
      title: "small business managment course",
      content:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.",
    },
  ];

  return (
    <section className="ongoingProject">
      <h1>Ongoing project</h1>
      <div className="mainCard">
        {ongoingProject.map((e, index) => {
          return (
            <div key={index} className="card">
              <img src={e.image} alt={e.title} />
              <div className="desc">
                <h3>{e.title}</h3>
                <p>{e.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="moreBtn">
        <Link to={`/project`}>
          <button className="more">More</button>
        </Link>
      </div>
    </section>
  );
}
