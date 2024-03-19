import React from "react";

export default function Cards() {
  let cards = [
    {
      image: "/images/card/one.png",
      title: "As-Sunnah Foundation Masjid Complex",
      content:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.",
    },
    {
      image: "/images/card/two.png",
      title: "As-Sunnah Skill Development Institute",
      content:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.",
    },
    {
      image: "/images/card/three.png",
      title: "zakat fund",
      content:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.",
    },
    {
      image: "/images/card/four.png",
      title: "general fund",
      content:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.",
    },
    {
      image: "/images/card/five.png",
      title: "Monthly donation fund",
      content:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.",
    },
    {
      image: "/images/card/six.png",
      title: "orphan fund",
      content:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.",
    },
  ];
  return (
    <section className="cardSection">
      <h1>Together Let’s make a change</h1>
      <div className="mainCardSec">
        {cards.map((e, index) => {
          return (
            <div key={index} className="cards">
              <img src={e.image} alt={e.title} />
              <h3>{e.title}</h3>
              <p>{e.content}</p>
              <button>Donate</button>
            </div>
          );
        })}
      </div>
      <div className="moreBtn">
        <button className="more">More</button>
      </div>
    </section>
  );
}
