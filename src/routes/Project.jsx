import React, { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import Topheader from "../components/Topheader";
export default function Project() {
  const [navigationState, setNavidation] = useState(1);
  const navigation = (number) => {
    setNavidation(number);
  };
  return (
    <>
    <Topheader/>
 
    <section className="projectContainer">
      <h1>Projects</h1>
      <div className="projectFlexContainer">
        <div className="firstContainer">
          <ul>
            <li
              style={
                navigationState === 1
                  ? {
                      color: "#368547",
                      paddingLeft: ".4rem",
                      borderLeft: ".2rem solid #368547",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigation(1);
              }}
            >
              Self-reliance Project with Zakat Funds
            </li>
            <li
              style={
                navigationState === 2
                  ? {
                      color: "#368547",
                      paddingLeft: ".4rem",
                      borderLeft: ".2rem solid #368547",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigation(2);
              }}
            >
              Qurbani (Sacrificing animals) for all
            </li>
            <li
              style={
                navigationState === 3
                  ? {
                      color: "#368547",
                      paddingLeft: ".4rem",
                      borderLeft: ".2rem solid #368547",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigation(3);
              }}
            >
              Distribution of relief to flood victims
            </li>
            <li
              style={
                navigationState === 4
                  ? {
                      color: "#368547",
                      paddingLeft: ".4rem",
                      borderLeft: ".2rem solid #368547",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigation(4);
              }}
            >
              Raising and educating orphans
            </li>
            <li
              style={
                navigationState === 5
                  ? {
                      color: "#368547",
                      paddingLeft: ".4rem",
                      borderLeft: ".2rem solid #368547",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigation(5);
              }}
            >
              Sadaqah (Charity) Jariyah
            </li>
            <li
              style={
                navigationState === 6
                  ? {
                      color: "#368547",
                      paddingLeft: ".4rem",
                      borderLeft: ".2rem solid #368547",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigation(6);
              }}
            >
              Distribution of winter clothes
            </li>
            <li
              style={
                navigationState === 7
                  ? {
                      color: "#368547",
                      paddingLeft: ".4rem",
                      borderLeft: ".2rem solid #368547",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigation(7);
              }}
            >
              Tree planting program
            </li>
            <li
              style={
                navigationState === 8
                  ? {
                      color: "#368547",
                      paddingLeft: ".4rem",
                      borderLeft: ".2rem solid #368547",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigation(8);
              }}
            >
              Iftar and Ramadan food distribution
            </li>
            <li
              style={
                navigationState === 9
                  ? {
                      color: "#368547",
                      paddingLeft: ".4rem",
                      borderLeft: ".2rem solid #368547",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigation(9);
              }}
            >
              Weekly Dars
            </li>
            <li
              style={
                navigationState === 10
                  ? {
                      color: "#368547",
                      paddingLeft: ".4rem",
                      borderLeft: ".2rem solid #368547",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigation(10);
              }}
            >
              Distribution of books and leaflets
            </li>
            <li
              style={
                navigationState === 11
                  ? {
                      color: "#368547",
                      paddingLeft: ".4rem",
                      borderLeft: ".2rem solid #368547",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigation(11);
              }}
            >
              Majlisus Sunnah
            </li>
            <li
              style={
                navigationState === 12
                  ? {
                      color: "#368547",
                      paddingLeft: ".4rem",
                      borderLeft: ".2rem solid #368547",
                    }
                  : { color: "#101010", padding: "0", border: "none" }
              }
              onClick={() => {
                navigation(12);
              }}
            >
              Spreading Islam
            </li>
          </ul>
        </div>
        <div className="secondContainer">
          {navigationState === 1 ? (
            <div className="items">
              <h2>Self-reliance Project with Zakat Funds</h2>
              <p>
                Through the Self-Reliance Project, the As-Sunnah Foundation
                provides much-needed technical training and materials to the
                poor. The purpose of this project is to make unemployed and
                unskilled men and women self-reliant by providing financial
                assistance and necessary materials through technical training
                (separately) to enhance their skills.
              </p>
              <p>
                The importance of earning halal food is immense. In the Holy
                Qur’an, Allah says, ‘After the prayer is over, disperse in the
                land and seek the bounty of Allah; And remember Allah much,
                perhaps you may be successful. '(Surah Jumu'ah: verse 10)
              </p>
              <p>
                The Prophet (peace and blessings of Allaah be upon him) said,
                ‘No one ever eats better food than the food he has earned.’
                (Saheeh Bukhari, 2072)
              </p>
              <p>
                They are given technical training to help the poor in their
                search for halal food. In addition to acquiring skills through
                training, at the same time they are taught the basic tenets and
                rules of Islam through famous Islamic scholars so that they can
                acquire basic knowledge of the religion and become principled
                and faithful citizens. So that they can be financially
                self-sufficient, as well as the true servants of Allah and
                simultaneously live their life abiding by the rules and ethics
                of Islam.
              </p>
              <p>
                We think that providing training, money and materials is not
                enough for many to become self-sufficient. To this end, we
                regularly supervise, follow up, and provide necessary advice to
                those trained, financially supported and material-assisted
                people by the Foundation. In this way we play a role in creating
                a skilled and ethically developed working population.
              </p>
              <h2>
                The following programs have been implemented under the
                Self-reliance Project:
              </h2>
              <p>
                Distribution of rickshaws, vans, cows, goats, grocery items,
                fishing nets, boats, etc., to economically disadvantaged
                individuals in 64 districts, benefiting 3,077 people. In 2023,
                2,000 rickshaws have already been distributed.
              </p>
            </div>
          ) : navigationState === 2 ? (
            <div className="items">
              <h2>Qurbani (Sacrificing animals) for all</h2>
              <p>
                Qurbani for all is part of the regular humanitarian activities
                of the As-Sunnah Foundation. Since its inception, the Foundation
                has been conducting sacrificial activities on behalf of pious
                rich people among the poor.
              </p>
              <p>
                Most of the sacrifices are usually city-centric. But more poor
                people live in villages. It is doubtful whether the number of
                cows sacrificed in a multi-storey building in the city is the
                same as in a few villages. Through the Sacrifice for All
                project, the As-Sunnah Foundation delivers a portion of the
                sacrifices of the urban rich to the underprivileged poor in
                remote areas.
              </p>
              <p>
                Foundation volunteers assist the Foundation in implementing
                projects at the field level.
              </p>
              <p>
                Note that the meat is distributed among the poor by sacrificing
                one goat in full and one-seventh of a cow in full.
              </p>
              <p>
                So far, under this project, 1,167 cows and goats have been
                sacrificed and the meat distributed among the destitute in
                various regions of the country.
              </p>
              <p>
                Additionally, frozen meat is collected from Dhaka and
                distributed to the needy people living in the farthest corners
                of the country through the use of refrigerated vehicles.
              </p>
            </div>
          ) : navigationState === 3 ? (
            <div className="items">
              <h2>Distribution of relief to flood victims</h2>
              <p>
                Every year, during the monsoon season, approximately 26,000
                square kilometers of Bangladesh's land area is submerged due to
                flooding. At this time, the people living in the northern
                regions of the country are particularly vulnerable and suffer
                greatly. In response to this, the As-Sunnah Foundation has been
                actively engaged in providing relief and support to the affected
                and vulnerable communities in the flood-affected districts.
              </p>
              <p>
                The importance and virtue of standing by the side of a
                distressed and needy person are significant. Abu Huraira (may
                Allah be pleased with him) narrated that the Messenger of Allah
                (peace be upon him) said, 'Whoever relieves the hardship of a
                believer in this world, Allah will relieve his hardship on the
                Day of Resurrection. Whoever helps ease someone in difficulty,
                Allah will make it easy for him in this world and in the
                Hereafter. Allah helps the servant as long as he helps his
                brother.' (Sunan Tirmidhi, Hadith-2945)
              </p>
              <p>
                In this context, opportunities are created to stand by the side
                of the needy and distressed, and by acting upon the above
                Hadith, one can extend their assistance to others.
              </p>
              <p>
                The support provided includes essential supplies such as rice,
                lentils, oil, potatoes, clothes, candles, matches, gas stoves,
                water purification tablets, and other necessary equipment.
              </p>
              <p>
                As part of this project, in addition to distributing 1,032
                metric tons of food supplies in the fearful floods of 2022, the
                foundation also distributed milk and fodder for the cattle, as
                well as 105 cows for distribution among the flood-affected
                people during Eid-ul-Adha. Moreover, 959 families were assisted
                in building homes, and 996 affected farmers received financial
                support of BDT 5,000 each.
              </p>
            </div>
          ) : navigationState === 4 ? (
            <div className="items">
              <h2>Raising and educating orphans</h2>
              <p>
                The As-Sunnah Foundation takes responsibility for the care and
                education of orphans. Their well-being and access to quality
                education are ensured by the foundation, much like caring for
                one's own children. The foundation, on behalf of sponsors, makes
                arrangements to provide orphans with shelter, medical care, and
                proper education.
              </p>
              <p>
                Taking care of orphans is considered a highly rewarding act in
                Islam, and Prophet Muhammad (peace be upon him) said, 'I and the
                person who looks after an orphan and provides for him will be in
                Paradise like this,' indicating with his two fingers, the index
                and middle fingers. (Sunan Abu Dawood: Hadith-5150)
              </p>
            </div>
          ) : navigationState === 5 ? (
            <div className="items">
              <h2>Sadaqah (Charity) Jariyah</h2>
              <p>
                Sadaqah Jariyah means that the benefits of charity are not just
                one-time; Rather it continues for a long time. The benefits of a
                charity that is earned only once are rewarded only once. On the
                other hand, Allah, the Almighty, continues to reward for the
                benefits of the charity which last for a long time.
              </p>
              <p>
                Narrated from Abu Hurairah (may Allah be pleased with him), the
                Prophet (peace and blessings of Allah be upon him) said, ‘When a
                person dies, all his deeds cease except the three kinds of
                deeds. 1. Sadaqah Jariyah; 2. Knowledge that benefits others; 3.
                A pious child who keeps on praying for him. (Sahih Muslim:
                Hadith-1831)
              </p>
              <p>
                The As-Sunnah Foundation's Sadaqah Jariyah projects include
                construction of mosques and madrasas, digging of tube wells,
                distribution of religious books and construction of houses for
                the homeless.
              </p>
              <p>
                The responsibility for one of these projects can be taken
                solely. Again, if anyone wants, he can donate any amount to the
                Sadaqah Jariyah sector. That money will be spent by the
                authorities on the projects of Sadaqa Jariyah that deems
                important and necessary.
              </p>
              <p>
                Under this project, 1.5 decimal land has been purchased and
                houses built in Thakurgaon for 10 revert Muslim families.
              </p>
            </div>
          ) : navigationState === 6 ? (
            <div className="items">
              <h2>Distribution of winter clothes</h2>
              <p>
                One of the teachings of Islam is human service. Every year, the
                As-Sunnah Foundation organizes a ‘Winter Clothing Distribution
                and Dawah Program’ to bring a little warmth to the helpless
                shivering cold-stricken people of remote areas.
              </p>
              <p>
                The Prophet (peace and blessings of Allaah be upon him) said,
                ‘Allaah, the Most Merciful, has mercy on the merciful. Be kind
                to the people of the earth, the inhabitants of the heavens will
                be kind to you. '(Sunan Abu Dawood: Hadith-4941; Sunan Tirmidhi,
                Hadith-1924)
              </p>
              <p>
                Through this initiative, the As-Sunnah Foundation has
                distributed a total of 30,905 sets of winter clothing
                nationwide. During each distribution event, expert scholars and
                preachers engage in important discussions on faith, prayer,
                fasting, morality, and the significance of steadfastness, along
                with the distribution of informative books and leaflets.
              </p>
            </div>
          ) : navigationState === 7 ? (
            <div className="items">
              <h2>Tree planting program</h2>
              <p>
                The nature of the weather is changing. The country is burning
                with the intensity of heat. We are witnessing the consequences
                of our own hands, including climate change and deforestation. To
                avoid this, you need to plant a lot of trees. Realizing this
                need, the As-Sunnah Foundation plans to plant fruit trees across
                the country every year. Arrangements were made to procure and
                plant fruit tree saplings in the remote areas of the country by
                collecting money from the common people. Through this, the
                common man is given the opportunity to participate in the
                charity and the poor are given the opportunity of year-round
                income.
              </p>
              <p>
                The importance and virtue of planting trees is immense. This is
                a good deed. If one plants fruit or forest trees for the benefit
                of man or animals and expects rewards through it, then it is a
                good sadaqah Jariah; The stream of reward may continue even
                after the death of the person. The Prophet (peace and blessings
                of Allaah be upon him) said, 'If a Muslim plants a tree or
                produces a grain and a person or a bird or an animal eats from
                it, it is a sadaqah for that person.' (Saheeh Bukhari:
                Hadith-2320, Sahih Muslim: Hadith-1553)
              </p>
              <p>
                The As-Sunnah Foundation usually seeks to plant improved
                varieties of fruit trees. So that besides protecting the
                environment, it can also be a source of income for the poor
                people. The trees planted in the first year are:
              </p>
              <ul>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>{" "}
                  Mango (Amrapali)
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>{" "}
                  Lychee (China-3)
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>{" "}
                  Seedless lemon
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>{" "}
                  Some Coconut Seedlings (Experimental)
                </li>
                <li>
                  <span>
                    <FaRegDotCircle />
                  </span>{" "}
                  Some date palm seedlings (experimental)
                </li>
              </ul>
              <p>
                As part of the ongoing efforts to address environmental
                concerns, the As-Sunnah Foundation has planted 115,792 trees so
                far. This project will continue annually, with an aim to further
                expand tree planting in the future, by the grace of Allah.
              </p>
            </div>
          ) : navigationState === 8 ? (
            <div className="items">
              <h2>Iftar and Ramadan food distribution</h2>
              <p>
                Iftar and Ramadan food distribution is one of the regular
                programs of As-Sunnah Foundation. In order to enable the needy
                fasting people in the remote areas of the country to observe
                fasting and worship without any hindrance during the month of
                Ramadan, an initiative was taken to distribute Iftar items among
                them.
              </p>
              <p>
                Providing Iftar is a very important act. The Prophet (peace and
                blessings of Allaah be upon him) said: Whoever breaks the fast
                of a fasting person will be given the same reward as the fasting
                person. It will not reduce the reward of the fasting person at
                all. (Sunan Tirmidhi: Hadith-807; Sunan Ibn Majah: Hadith-1746)
              </p>
              <p>
                The As-Sunnah Foundation has distributed iftar provisions among
                120,585 fasting individuals across the country.
              </p>
              <p>
                Among the Iftar items were gram flour, puffed rice, powdered
                milk, chira, dates, oil, sugar, semai, psyllium husk etc.
              </p>
            </div>
          ) : navigationState === 9 ? (
            <div className="items">
              <h2>Weekly Dars</h2>
              <p>
                Under the Dawah program of As-Sunnah Foundation, weekly Dars is
                held on Iman-Aqeedah, Quran, Hadith, Tafsir, History, Deeni
                Masala-Masael including various contemporary issues. For now, a
                wise scholar of Vumipalli Jame Masjid Siddhirganj, Narayanganj,
                renowned media personality and Chairman of As-Sunnah Foundation
                Sheikh Ahmadullah is conducting Dars. There are plans for its
                inauguration in various mosques and institutions across the
                country in phases.
              </p>
            </div>
          ) : navigationState === 10 ? (
            <div className="items">
              <h2>Distribution of books and leaflets</h2>
              <p>
                The Foundation distributes various Islamic books and leaflets,
                including the Holy Quran free of charge on behalf of the
                Foundation as a way for Muslims to gain knowledge about faith,
                prayer and the rules of Islam. Under this project, more than one
                million copies of multiple booklets published by the
                Foundation's Publications Department have already been
                distributed.
              </p>
            </div>
          ) : navigationState === 11 ? (
            <div className="items">
              <h2>Majlisus Sunnah</h2>
              <p>
                The As-Sunnah Foundation organizes a session called 'Majlisus
                Sunnah' every month to promote pure Islamic teachings, awareness
                and life-oriented religiosity, ideals, ethics and religious
                awareness among the common people based on the Qur'an and Sahih
                Sunnah. This exceptional event takes place at a convenient time
                every English month. This session will be made district-wise in
                phases In sha Allah.
              </p>
            </div>
          ) : (
            <div className="items">
              <h2>Spreading Islam</h2>
              <p>
                Innumerable prophets and messengers have been sent to the world
                with the noble responsibility of spreading Islam. It was the
                duty of the Prophets and Messengers to guide those who do not
                believe in Allah, or those who have perverted beliefs, to the
                right path and to the path chosen by Allah. All the Prophets, as
                the absolute benefactors of His Ummah, enjoined their monotheism
                and pure worship and forbade polytheism, disbelief and
                wickedness. Allah Ta’ala says, “O Messenger! Convey everything
                revealed to you from your Lord. If you do not, then you have not
                delivered His message. Allah will ˹certainly˺ protect you from
                the people. Indeed, Allah does not guide the people who
                disbelieve.” (Al Ma’Idah verse-67)
              </p>
              <p>
                Since the stream of prophecy has ceased; Therefore, this
                responsibility of propagating Islam has been entrusted to this
                Ummah. The consequences of laxity in accomplishing this
                responsibility of propagating the religion of Islam are clear to
                us today. In the name of Islam, treacherous and selfish sects
                are creating various malpractices and separation among the
                Muslim community.
              </p>
              <p>
                One of the three basic functions of the As-Sunnah Foundation is
                to spread Dawah or Islam. It has been working in various ways to
                spread the true image of Islam in the light of the Holy Quran
                and Sahih Sunnah all over the world. Basically, the main goal
                and objective of the foundation is the multi-faceted service and
                spread of Islam. The weekly Dars, the monthly Majlisus Sunnah
                and various da'wah initiatives from its own studio are part of
                the Foundation's activities to spread Islam.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
