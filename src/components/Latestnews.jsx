import React from "react";
import { Link } from "react-router-dom";

export default function Latestnews() {
  let latestNews = [
    {
      image: "/images/news/im1.png",
      content: "সদস্য সম্মেলন ২০২৪ ও মসজিদ কমপ্লেক্সের ভিত্তিপ্রস্তর স্থাপন",
    },
    {
      image: "/images/news/im2.png",
      content:
        "The first batch of the Smart Tailoring and Fashion Design course has been completed through the transfer of funds.",
    },
    {
      image: "/images/news/im3.png",
      content: "Installation of Water treatment plant in Sarankhola, Bagerhat",
    },
  ];
  return (
    <section className="latestNews">
      <h1>Latest News</h1>
      <div className="mainCard">
        {latestNews.map((e, index) => {
          return (
            <div key={index} className="card">
              <img src={e.image} alt={e.content} />
              <p>{e.content}</p>
            </div>
          );
        })}
      </div>
      <div className="moreBtn">
      <Link to={`/news`}>
          <button className="more">More</button>
        </Link>
        
      </div>
    </section>
  );
}
