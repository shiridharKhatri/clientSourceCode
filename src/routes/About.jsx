import React, { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import Topheader from "../components/Topheader";

export default function About() {
  const [nav, useNav] = useState(1);
  const navigate = (number) => {
    useNav(number);
  };
  return (
    <><Topheader/>
    <section className="aboutSection">
      <h1>About</h1>
      <div className="aboutContainer">
        <div className="firstContainer">
          <ul>
            <li
              style={
                nav === 1
                  ? {
                      color: "#368547",
                      paddingLeft: ".3rem",
                      borderLeft: ".2rem solid #368547",
                      fontWeight: "bold",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigate(1);
              }}
            >
              Introduction
            </li>
            <li
              style={
                nav === 2
                  ? {
                      color: "#368547",
                      paddingLeft: ".3rem",
                      borderLeft: ".2rem solid #368547",
                      fontWeight: "bold",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigate(2);
              }}
            >
              Principles and Norms
            </li>
            <li
              style={
                nav === 3
                  ? {
                      color: "#368547",
                      paddingLeft: ".3rem",
                      borderLeft: ".2rem solid #368547",
                      fontWeight: "bold",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigate(3);
              }}
            >
              Goals and Objectives
            </li>
            <li
              style={
                nav === 4
                  ? {
                      color: "#368547",
                      paddingLeft: ".3rem",
                      borderLeft: ".2rem solid #368547",
                      fontWeight: "bold",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigate(4);
              }}
            >
              Activities
            </li>
            <li
              style={
                nav === 5
                  ? {
                      color: "#368547",
                      paddingLeft: ".3rem",
                      borderLeft: ".2rem solid #368547",
                      fontWeight: "bold",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigate(5);
              }}
            >
              Sources of funds and income
            </li>
            <li
              style={
                nav === 6
                  ? {
                      color: "#368547",
                      paddingLeft: ".3rem",
                      borderLeft: ".2rem solid #368547",
                      fontWeight: "bold",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigate(6);
              }}
            >
              Expenditure policy
            </li>
            <li
              style={
                nav === 7
                  ? {
                      color: "#368547",
                      paddingLeft: ".3rem",
                      borderLeft: ".2rem solid #368547",
                      fontWeight: "bold",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigate(7);
              }}
            >
              Achievements
            </li>
          </ul>
        </div>
        <div className="secondContainer">
          {nav === 1 ? (
            <div className="box">
              <h2>As-Sunnah Foundation</h2>
              <p>
                The As-Sunnah Foundation is a non-political, non-profitable
                government-registered organization dedicated to education,
                da'wah and full human welfare. It was established in 2017 by
                Shaikh Ahmadullah. He is the chairman of the organization and
                manages it directly. As-Sunnah Foundation was registered in 2019
                from Joint Stock, Whose registration number is S-13111/2019.
                Since then, it has been working rigorously to serve the
                humanity, reform the society, developing the utmost morality,
                arrange various activities to build up a neat and clean
                mentality and ultimately to build up an ideal society following
                in the footsteps of the Prophet Muhammad, the teacher of
                humanity, the messenger of human liberation and peace and the
                ideal of human welfare. One of the goals of As-Sunnah Foundation
                is to build life and society based on the Quran and Sunnah and
                to propagate and spread authentic knowledge. It is our policy to
                adopt a moderate approach based on the Qur'an and Sunnah
                following the path of the righteous predecessors.
              </p>
            </div>
          ) : nav === 2 ? (
            <div className="box">
              <h2>Principles and Norms</h2>
              <ul>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  The Holy Quran and the Sunnah of the Messenger of Allah (peace
                  be upon him) are the main ideals of the As-Sunnah Foundation.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  It accepts the Qur'an and Sunnah in the light of the
                  interpretation of the Salafe Salihin.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  It nurtures the aqeedah and vision of Ahlus-Sunnah
                  wal-Jama’ah.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  It calls for shirk-free faith and bid‘at-free practices.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  It works for the unity and solidarity of the Ummah.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  It adopts moderation by avoiding extreme polarization as much
                  as possible on divisive issues.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  It refrains from taking political action and position and
                  works for the greater good of all irrespective of party
                  affiliation.
                </li>
              </ul>
            </div>
          ) : nav === 3 ? (
            <div className="box">
              <h2>Goals and Objectives</h2>
              <p>
                The goal of the As-Sunnah Foundation is to gain the satisfaction
                of the Almighty Allah by conducting da'wah activities to prevent
                evil deeds in the light of the lifestyle of the Prophet (peace
                be upon him).
              </p>
              <ul>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Institutional and sub-institutional Islamic and general
                  education and career-oriented technical training initiatives
                  across the country, especially in the comparatively neglected
                  sections of society
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Service to humanity
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Encouragement for good deeds are the prime objective of the
                  As-sunnah Foundation.
                </li>
              </ul>
            </div>
          ) : nav === 4 ? (
            <div className="box">
              <h2>Activities</h2>
              <p>
                The As-Sunnah Foundation mainly works in three sectors:
                education, service and da'wah.
              </p>
              <h2>Educational activities</h2>
              <ul>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Preparation of modern up-to-date textbooks and textbooks with
                  basic teachings of Quran and Sunnah and establishment of
                  madrasas to build wise scholars and dedicated souls.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Organizing competitions and prize distribution on education,
                  culture and various social and life-oriented subjects.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Higher Ilmi Research Center.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Arranging various term based Islamic education courses for
                  working men and women.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Establishment and management of schools, colleges,
                  universities and technical schools with the spirit of
                  As-Sunnah at the centre.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Establishment of Sabahi Maktab for the spreading of basic
                  education at the pre-primary level.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Provide literacy and other ancillary expenses to prevent
                  children from indigent families from dropping out of school.
                </li>
              </ul>
              <h2>Charitable activities</h2>
              <ul>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Provide financial assistance for handicrafts, machinery,
                  technical, farm management training as well as self-reliance
                  in eliminating unemployment and alleviating poverty.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Provide relief assistance to affected areas from time to time
                  and during natural disasters.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Distribution of Iftar items to the needy during the month of
                  Ramadan and organization of Da'wah.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Distribution of Fitra, clothes and Eid items on the occasion
                  of Eid among the needy.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Arranging sacrifices on behalf of the affluent and
                  distributing among the needy.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Distribution of earning materials like rickshaws, sewing
                  machines etc. among the needy.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Establishment of tube wells and reservoirs in areas deprived
                  of potable water.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Planting and maintenance of high yielding trees in the yard of
                  needy families and residential madrasas for the purpose of
                  environmental protection and self reliance.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Provide various trainings and assistance to make students self
                  reliant.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Teaching and upbringing of widows and taking care of them till
                  they become orphans.
                </li>
              </ul>
              <h2>Da'wah activities</h2>
              <ul>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Construction and management of ideal mosques to build a
                  peaceful and prosperous society.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Weekly, monthly, annual and occasional waz-mahfils, open
                  exchange of views and seminars are organized at mosques,
                  madrasas, district auditoriums, upazila parishad auditoriums,
                  grounds, etc. in different areas to highlight the correct
                  views of Islam.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Publication and dissemination of basic and authentic books
                  highlighting pure Islamic knowledge, beliefs, policies and
                  views.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Taking initiatives to eradicate shirk-bid ‘at, polarization
                  and extremism.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Contribute documentaries of thematic discussion programs and
                  disseminate through social media.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Writing, translating, publishing and disseminating books for
                  non-Muslims highlighting the superiority and beauty of Islam.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  To take various measures to eradicate religious and social
                  prejudices and to prevent subcultures.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Management of Family Counseling Department.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Establishment of open ‘call center’ for religious inquiries
                  and consultations.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Establishment of Muslim Youth Club.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Dawah training for Imams and Khatibs.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Construction of Islamic Cultural Center for Children and
                  Adolescents.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Establishment of library.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Shariah Solution Department.
                </li>
              </ul>
            </div>
          ) : nav === 5 ? (
            <div className="box">
              <h2>Sources of funds and income</h2>
              <ul>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  The journey begins with the property and funds purchased with
                  donations from the founding members of the Foundation.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  One-time and regular donations from members, supporters and
                  well-wishers.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Proceeds from any project of the Foundation.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Grants given by the public in a particular sector.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Zakat, Fitra payable to affluent Muslims.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Money recovered in special sectors including Iftar and
                  Qurbani.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Grants from government or private sources.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  5-10% administrative cost deducted from various projects for
                  managing various projects.
                </li>
              </ul>
            </div>
          ) : nav === 6 ? (
            <div className="box">
              <h2>Expenditure policy</h2>
              <ul>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Donations are spent in the sector for which the donors donate.
                  Money from one sector is not spent on another.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  One hundred percent of the money collected in the Zakat fund
                  is distributed among the rightful owners.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Detailed accounts of income and expenditure are maintained
                  after completion of each project.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  The income and expenditure accounts of the foundation are
                  audited by a chartered accountant once a year.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  All financial activities of As-Sunnah Foundation are monitored
                  under the supervision of a team consisting of accounting
                  experts.
                </li>
              </ul>
            </div>
          ) : (
            <div className="box">
              <h2>Education</h2>
              <p>
                The foundation has started a madrasa with a syllabus of general
                and religious education with the aim of producing ingenious
                Islamic scholars and up-to-date preachers. The structure of this
                madrasa has been developed in such a way that the necessary
                religious knowledge is acquired after reaching a certain level.
                After this, the student will be able to get admitted in the
                general educational institution as well, if he wants, he will be
                able to continue his higher studies in the madrasa. The
                foundation will also initiate the establishment of Islamic
                schools and colleges in phases, In-Sha-Allah.
              </p>
              <h2>Dawah</h2>
              <p>
                In just two years, by the grace of Almighty Allah, the As-Sunnah
                Foundation has been able to spread the message of online and
                offline da'wah and pure religious notions among the
                Bengali-speaking people. Thousands of HD videos on various
                religious topics have been uploaded on the foundation's verified
                YouTube channel and verified Facebook page. From which billions
                of people have benefited. Our verified Facebook page and YouTube
                channel host a series of weekly live question and answer
                sessions titled 'Shariah Solutions' to answer the religious
                questions of the common people. About 200 episodes of the
                hour-long program have been aired so far.
              </p>

              <p>
                More than 250,000 copies of a book called 'Rasoolullah
                (sallallaahu 'alayhi wa sallam)' s morning and evening du'aa
                'and zikr' and a pocket card called 'Masnoon du'aa' and zikr
                after five daily prayers' have been distributed. In addition,
                27,000 copies of 'Ramadan Planner' have been distributed.
              </p>
              <h2>Charity</h2>
              <p>
                An overview of the services the Foundation has performed since
                its inception:
              </p>
              <ul>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Sacrifice for all: On behalf of the affluent, 1,167 cows /
                  goats were sacrificed and meat was distributed among 16,193
                  distressed families.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  During the coronation period: 1003 Uber riders and 300 CNG
                  drivers have been given cash assistance of Rs. In Covid-19, 50
                  small traders who lost capital have been provided with a van
                  and cash of Rs 5,000 each and block-batik training and
                  distribution of necessary materials to 100 women is underway.
                  One month's food item has been distributed among 4,000
                  families.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Distribution of flood relief: Relief materials have been
                  distributed among more than 1500 flood-affected families in
                  various flood-hit districts of North Bengal and cash
                  assistance has been provided to 150 families and various
                  mosques and educational institutions affected by the floods.
                  Khail and husk have been distributed among the cattle owners
                  who have been starving during the floods. In Sujan Para Char
                  of Sariakandi Police Station in Bogra district, 30 houses and
                  18 toilets and 16 tube wells have been set up for the flood
                  victims.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Distribution of Iftar: Iftar items are distributed among
                  120,585 fasting people across the country.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Distribution of winter clothes: Winter clothes have been
                  distributed among 30,905 people across the country.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Distribution of food items: 12,500 kg of rice has been
                  distributed among 1250 destitute families in some
                  poverty-stricken districts.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Installation of tube wells: So far 112 tube wells have been
                  installed in remote areas across the country.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Orphans and Widows Sponsors: The As-Sunnah Foundation is
                  taking all the responsibility including feeding and educating
                  50 orphans through various sponsors.
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>
                  Tree Planting: For the protection of environment and
                  self-reliance of low-income people and as charitable
                  activities (Sadaqah Jariyah), 216,492 more productive trees
                  have been planted in the backyards of residential madrasas and
                  homes of needy people in remote areas.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
