import React from "react";
import Topheader from "../components/Topheader";

export default function Volreg() {
  return (
    <>
      <Topheader />
      <section className="volreg">
        <h1>volunterr registration</h1>
        <div className="formSection">
          <form action="">
            <div className="inputFields">
              <div className="personalInfo">
                <h2>Personal information</h2>
                <label htmlFor="name">
                  Name:<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Shahadat Hussain"
                />
                <div className="probashi">
                  <label htmlFor="probashi">Probashi:</label>
                  <input
                    type="checkbox"
                    id="probashi"
                    className="probashi"
                    name="probashi"
                   
                  />
                </div>
                <label htmlFor="phoneNumber1">
                  Phone Number:<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="phoneNumber1"
                  name="phoneNumber1"
                  placeholder="01xxxxxxxxx"
                />

                <label htmlFor="phoneNumber2">
                  Phone Number:<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="phoneNumber2"
                  name="phoneNumber2"
                  placeholder="01xxxxxxxxx"
                />

                <label htmlFor="email">
                  Email:<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="sahedat@email.com"
                />

                <label htmlFor="facebookId">
                  Facebook ID Link<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="facebookId"
                  name="facebookId"
                  placeholder="https://www.facebook.com/facebook"
                />

                <label htmlFor="nidNumber">
                  NID Number:<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="nidNumber"
                  name="nidNumber"
                  placeholder="198936636636366"
                />

                <label htmlFor="education">Education Information</label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  placeholder="JSC, SSC, BSC, Other"
                />

                <label htmlFor="occupation">
                  Occupation:<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  placeholder="Selected Occupation"
                />

                <label htmlFor="volunteer">Volunteer for:</label>
                <input
                  type="text"
                  id="volunteer"
                  name="volunteer"
                  placeholder="Teaching, Cooking, Rescuing"
                />
              </div>
              <div className="address">
                <div className="permanentAddress mainAddBox">
                  <h2>Permanent address</h2>
                  <label htmlFor="districtThana">
                    District/Thana:<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" id="districtThana" name="districtThana" />

                  <label htmlFor="address">
                    Address:<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" id="address" name="address" />
                </div>

                <div className="tempAddress mainAddBox">
                  <h2>Parents address</h2>
                  <label htmlFor="districtThana">
                    District/Thana:<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" id="districtThana" name="districtThana" />

                  <label htmlFor="address">
                    Address:<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" id="address" name="address" />
                </div>
              </div>
            </div>
            <h3 style={{ color: "#ff0000" }}>
              * Marked fields is mandatory, others are optional
            </h3>
            <button>Send Application</button>
          </form>
        </div>
      </section>
    </>
  );
}
