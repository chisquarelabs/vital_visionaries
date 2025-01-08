import { useState } from "react";
import "../style/style.css";

export const TabSet = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  return (
    <div className="page">
      {/* Tabs */}
      <div className="pcss3t pcss3t-effect-scale pcss3t-theme-1">
        <input
          type="radio"
          name="pcss3t"
          checked={selectedTab === "tab1"}
          id="tab1"
          className="tab-content-first"
          onChange={() => setSelectedTab("tab1")}
        />
        <label htmlFor="tab1">
          <i className="icon-bolt"></i>Tesla
        </label>

        <input
          type="radio"
          name="pcss3t"
          id="tab2"
          className="tab-content-2"
          checked={selectedTab === "tab2"}
          onChange={() => setSelectedTab("tab2")}
        />
        <label htmlFor="tab2">
          <i className="icon-picture"></i>da Vinci
        </label>

        <input
          type="radio"
          name="pcss3t"
          id="tab3"
          className="tab-content-3"
          checked={selectedTab === "tab3"}
          onChange={() => setSelectedTab("tab3")}
        />
        <label htmlFor="tab3">
          <i className="icon-cogs"></i>Einstein
        </label>

        <input
          type="radio"
          name="pcss3t"
          id="tab5"
          className="tab-content-last"
          checked={selectedTab === "tab5"}
          onChange={() => setSelectedTab("tab5")}
        />
        <label htmlFor="tab5">
          <i className="icon-globe"></i>Newton
        </label>

        <ul>
          {/* Tesla Tab Content */}
          {selectedTab === "tab1" && (
            <li className="tab-content tab-content-first typography">
              <h1>Nikola Tesla</h1>
              <p>
                Serbian-American inventor, electrical engineer, mechanical
                engineer, physicist, and futurist best known for his
                contributions to the design of the modern alternating current
                (AC) electrical supply system.
              </p>
              <p>
                Tesla started working in the telephony and electrical fields
                before emigrating to the United States in 1884 to work for
                Thomas Edison...
              </p>
              <p className="text-right">
                <em>
                  Find out more about Nikola Tesla from{" "}
                  <a
                    href="http://en.wikipedia.org/wiki/Nikola_Tesla"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikipedia
                  </a>
                  .
                </em>
              </p>
            </li>
          )}

          {/* Leonardo da Vinci Tab Content */}
          {selectedTab === "tab2" && (
            <li className="tab-content tab-content-2 typography">
              <h1>Leonardo da Vinci</h1>
              <p>
                Italian Renaissance polymath: painter, sculptor, architect,
                musician, mathematician, engineer, inventor, anatomist...
              </p>
              <p className="text-right">
                <em>
                  Find out more about Leonardo da Vinci from{" "}
                  <a
                    href="http://en.wikipedia.org/wiki/Leonardo_da_Vinci"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikipedia
                  </a>
                  .
                </em>
              </p>
            </li>
          )}

          {/* Albert Einstein Tab Content */}
          {selectedTab === "tab3" && (
            <li className="tab-content tab-content-3 typography">
              <h1>Albert Einstein</h1>
              <p>
                German-born theoretical physicist who developed the general
                theory of relativity...
              </p>
              <p className="text-right">
                <em>
                  Find out more about Albert Einstein from{" "}
                  <a
                    href="http://en.wikipedia.org/wiki/Albert_Einstein"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikipedia
                  </a>
                  .
                </em>
              </p>
            </li>
          )}

          {/* Isaac Newton Tab Content */}
          {selectedTab === "tab5" && (
            <li className="tab-content tab-content-last typography">
              <h1>Isaac Newton</h1>
              <p>
                English physicist and mathematician who is widely regarded as
                one of the most influential scientists of all time...
              </p>
              <p className="text-right">
                <em>
                  Find out more about Isaac Newton from{" "}
                  <a
                    href="http://en.wikipedia.org/wiki/Isaac_Newton"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikipedia
                  </a>
                  .
                </em>
              </p>
            </li>
          )}
        </ul>
      </div>
      {/* /tabs */}
    </div>
  );
};
