import React from "react";
import Topheader from "../components/Topheader";

export default function News() {
  let news = [
    {
      image: "/images/news/im1.png",
      title:
        "The first batch of the Smart Tailoring and Fashion Design course has been completed through the transfer of funds",
      description:
        "The Smart Tailoring and Fashion Designcourse conducted by As-Sunnah Skill Development Institute concluded its activities for the first batch. Within this project's scope, training was provided on tailoring, tie-dye, block -batik, hand embroidery, crafting, basic fashion design, and basic business developmen",
    },

    {
      image: "/images/news/im2.png",
      title:
        "The first batch of the Smart Tailoring and Fashion Design course has been completed through the transfer of funds",
      description:
        "The Smart Tailoring and Fashion Designcourse conducted by As-Sunnah Skill Development Institute concluded its activities for the first batch. Within this project's scope, training was provided on tailoring, tie-dye, block -batik, hand embroidery, crafting, basic fashion design, and basic business developmen",
    },

    {
      image: "/images/news/im3.png",
      title: "installation of water treatment plant in sarankhola,bagerthat",
      description:
        "The Smart Tailoring and Fashion Designcourse conducted by As-Sunnah Skill Development Institute concluded its activities for the first batch. Within this project's scope, training was provided on tailoring, tie-dye, block -batik, hand embroidery, crafting, basic fashion design, and basic business developmen",
    },

    {
      image: "/images/news/im4.png",
      title: "rice distribution project among helpless families 2023",
      description:
        "The Smart Tailoring and Fashion Designcourse conducted by As-Sunnah Skill Development Institute concluded its activities for the first batch. Within this project's scope, training was provided on tailoring, tie-dye, block -batik, hand embroidery, crafting, basic fashion design, and basic business developmen",
    },

    {
      image: "/images/news/im5.png",
      title: "meat distribution program among the poor",
      description:
        "The Smart Tailoring and Fashion Designcourse conducted by As-Sunnah Skill Development Institute concluded its activities for the first batch. Within this project's scope, training was provided on tailoring, tie-dye, block -batik, hand embroidery, crafting, basic fashion design, and basic business developmen",
    },

    {
      image: "/images/news/im6.png",
      title: "completion of one lakh tree paltion",
      description:
        "The Smart Tailoring and Fashion Designcourse conducted by As-Sunnah Skill Development Institute concluded its activities for the first batch. Within this project's scope, training was provided on tailoring, tie-dye, block -batik, hand embroidery, crafting, basic fashion design, and basic business developmen",
    },
  ];
  return (
    <><Topheader/>
    <section className="mainNewsContainer">
      <h1>News</h1>
      <div className="newsContainer">
        {news.map((e, index) => {
          return (
            <div key={index} className="cards">
              <h2>{e.title}</h2>
              <img src={e.image} alt={e.title} />
              <p>{e.description}</p>
            </div>
          );
        })}
      </div>
    </section>
    </>
  );
}
