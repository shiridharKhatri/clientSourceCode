import React from "react";

export default function Project() {
  return (
    <section className="project">
      <h1>Projects</h1>
      <div className="projectCard">
        <div className="card" style={{background:"#45A2A2"}}>
          <h2>Self-reliance Project with Zakat Funds</h2>
          <p>
            If you feel the need for mass education and Morning Maktab in any
            part of Bangladesh, let us know and bring us into contact with the
            locals.
          </p>
          <button>Read more</button>
        </div>

        <div className="card"  style={{background:"#7E7CDC"}}>
          <h2>Iftar and Ramadan food distribution</h2>
          <p>
            The As-Sunnah Foundation organizesa session called 'Majlisus
            Sunnah'every month to promote pure Islamic teachings, awareness and
            life-oriented religiosity, ideals, ethics and religious awareness
            among the common people based on the Qur'an and Sahih Sunnah
          </p>
          <button>Read more</button>
        </div>

        <div className="card"  style={{background:"#45A2A2"}}>
          <h2>tree planting plan</h2>
          <p>
            The Foundation distributes various Islamic books and leaflets,
            including the Holy Quran free of charge on behalf of the Foundation
            as a way for Muslims to gain knowledge about faith, prayer and the
            rules of Islam.
          </p>
          <button>Read more</button>
        </div>
      </div>

      <div className="moreBtn">
        <button className="more">More</button>
      </div>
    </section>
  );
}
