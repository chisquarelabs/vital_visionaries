import { useState } from "react";
import { Demographic } from "./Demographic";
import "../style/style.css";
import { Social } from "./Social";
import { Medical } from "./Medical";
import { Behavioral } from "./Behavioral";
import { Cognitive } from "./Cognitive";
import { Functional } from "./Functional";

export const TabSet = () => {
  const [active, setActive] = useState(0);
  const [demographic, setDemographic] = useState({
    name: "",
    patient_id: "",
    ethnicity: "",
    dob: "",
    sex: "",
  });
  const [social, setSocial] = useState({
    qualification: "",
    occupation: "",
    disibilities: "",
    smoker: "",
    alcoholic: "",
  });
  const [medical, setMedical] = useState({
    cardiac_problems: "",
    head_injuries: "",
    renals_conditions: "",
    liver_conditions: "",
    thyroid: "",
    hospitalization: "",
    diabetic: "",
    cancer: "",
    stroke: "",
    epilepsy: "",
  });

  const [behaviorals, setBehaviorals] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
  });

  const [cognition, setCognition] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
  });

  const [functional, setFunctional] = useState({
    personal: { 1: "", 2: "", 3: "" },
    social: { 1: "", 2: "", 3: "" },
    hobbies: { 1: "", 2: "" },
    activities: { 1: "", 2: "", 3: "" },
  });

  const handleSubmit = () => {
    let score = 0

    function updateScore(response: any) {
      if (response === 'Yes') return 1;
      if (response === 'No') return -1;
      return 0;
    }

    function updateScoreInverted(response: any) {
      if (response === 'Yes') return -1;
      if (response === 'No') return 1;
      return 0;
    }
    
    score += updateScore(functional.personal[1]);
    score += updateScore(functional.personal[2]);
    score += updateScore(functional.personal[3]);
    
    score += updateScore(functional.social[1]);
    score += updateScore(functional.social[2]);
    score += updateScore(functional.social[3]);
    
    score += updateScore(functional.hobbies[1]);
    score += updateScore(functional.hobbies[2]);
    
    score += updateScore(functional.activities[1]);
    score += updateScore(functional.activities[2]);
    score += updateScore(functional.activities[3]);

    score += updateScoreInverted(behaviorals[1]);
    score += updateScoreInverted(behaviorals[2]);
    score += updateScoreInverted(behaviorals[3]);
    score += updateScoreInverted(behaviorals[4]);
    score += updateScoreInverted(behaviorals[5]);
    score += updateScoreInverted(behaviorals[6]);
    score += updateScoreInverted(behaviorals[7]);
    score += updateScoreInverted(behaviorals[8]);
    score += updateScoreInverted(behaviorals[9]);
    score += updateScoreInverted(behaviorals[10]);
 
    score += updateScoreInverted(cognition[1]);
    score += updateScoreInverted(cognition[2]);
    score += updateScoreInverted(cognition[3]);
    score += updateScoreInverted(cognition[4]);
    score += updateScoreInverted(cognition[5]);
    score += updateScoreInverted(cognition[6]);
    score += updateScoreInverted(cognition[7]);
    score += updateScoreInverted(cognition[8]);
    score += updateScoreInverted(cognition[9]);
    score += updateScoreInverted(cognition[10]);
    

    const formaData = {
      demographic: demographic,
      social: social,
      medical: medical,
      behaviorals: behaviorals,
      cognition: cognition,
      functional,
      score
    };
    console.log("score", score)
    console.log(formaData, "formaData");
  };

  const saveDemographic = (data: any) => {
    setDemographic(data)
    console.log(data, "saveDemographic");
    setActive((prev) => prev + 1);
  };

  const saveSocial = (data: any) => {
    setSocial(data)
    console.log(data, "saveSocial");
    if (data?.disibilities !== "No") {
      console.log("early exit");
    }
    if (data?.smoker !== "No") {
      console.log("early exit");
    }
    if (data?.alcoholic !== "No") {
      console.log("early exit");
    }
    setActive((prev) => prev + 1);
  };

  const saveMedical = (data: any) => {
    setMedical(data)
    console.log(data, "saveMedical");
    setActive((prev) => prev + 1);
  };

  const saveBehavioral = (data: any) => {
    setBehaviorals(data)
    console.log(data, "saveBehavioral");
    setActive((prev) => prev + 1);
  };

  const saveCognitions = (data: any) => {
    setCognition(data)
    console.log(data, "saveCognitions summary page");
    handleSubmit();
  };

  const saveFunctional = (data: any) => {
    setFunctional(data)
    console.log(data, "saveFunctional");
    setActive((prev) => prev + 1);
  };

  console.log(active, "active");

  const TAB_DATA = [
    {
      label: "Demographic",
      type: "form",
      component: <Demographic init={demographic} onSave={saveDemographic} />,
    },
    {
      label: "Social",
      type: "form",
      component: <Social init={social} onSave={saveSocial} />,
    },
    {
      label: "Medical",
      type: "form",
      component: <Medical init={medical} onSave={saveMedical} />,
    },
    {
      label: "Functional",
      type: "form",
      component: <Functional init={functional} onSave={saveFunctional} />,
    },
    {
      label: "Behavioral",
      type: "form",
      component: <Behavioral init={behaviorals} onSave={saveBehavioral} />,
    },
    {
      label: "Cognition",
      type: "form",
      component: <Cognitive init={cognition} onSave={saveCognitions} />,
    },
  ];

  const clickHandler = (e: any) => {
    e.preventDefault(); // Prevent scrolling
    setActive(parseInt(e.currentTarget.attributes.tabIndex.value));
  };

  return (
    <section className="tabs">
      <menu>
        <ul>
          {TAB_DATA.map((item: any, i: number) => {
            const myStyle = {
              zIndex: active === i ? TAB_DATA.length : TAB_DATA.length - i - 1,
            };

            return (
              <li
                className={active === i ? "tab active" : "tab"}
                key={item?.label}
                tabIndex={i}
                onClick={clickHandler}
                style={myStyle}
              >
                <a href={"#" + item?.label}>{item?.label}</a>
              </li>
            );
          })}
        </ul>
      </menu>
      <div>
        {TAB_DATA.map((item: any, i: number) => {
          return (
            <div
              key={item.label}
              style={{ zIndex: TAB_DATA.length }}
              className={active === i ? "active" : ""}
            >
              <h2 id={item?.label}>{item?.label}</h2>
              <hr />
              {item?.type === "form" && item?.component}
              {item?.type === "text" && <p>{item?.text}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};
