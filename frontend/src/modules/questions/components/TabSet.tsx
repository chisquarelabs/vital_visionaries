import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Demographic } from "./Demographic";
import { Social } from "./Social";
import { Medical } from "./Medical";
import { Behavioral } from "./Behavioral";
import { Cognitive } from "./Cognitive";
import { Functional } from "./Functional";
import "../style/style.css";

export const TabSet = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

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
    disabilities: "",
    smoker: "",
    alcoholic: "",
  });
  const [medical, setMedical] = useState({
    hospitalization: "",
    diabetic: "",
    cancer: "",
    thyroid: "",
    stroke: "",
    cardiac: "",
    head_injuries: "",
    epilepsy: "",
    renals: "",
    liver: "",
  });

  const [behaviorals, setBehaviorals] = useState({
    suicide_attempt: "",
    suicidal_tendencies: "",
    wandering: "",
    scammed: "",
    sleep_pattern: "",
    drag_feet: "",
    sleep_disturbed: "",
    depression: "",
    anxious: "",
    irritated: "",
  });

  const [cognition, setCognition] = useState({
    memory_problems: "",
    short_term_memory: "",
    long_term_memory: "",
    memory_progression: "",
    memory_aids: "",
    focusing_difficulty: "",
    speech_difficulty: "",
    expressing_difficulty: "",
    word_finding: "",
    repeating: "",
  });

  const [functional, setFunctional] = useState({
    personal: { cloth_assistance: "", social_activities: "", converse: "" },
    social: { support_system: "", two_meals: "", neat_bedroom: "" },
    hobbies: { hobbies: "", hobby_engagement: "" },
    activities: { public_transport: "", shopping_alone: "", sports: "" },
  });

  const initializeData = () => {};

  //   api call
  const handleSubmit = () => {
    let score = 0;

    function updateScore(response: any) {
      if (response === "Yes") return 1;
      if (response === "No") return -1;
      return 0;
    }

    function updateScoreInverted(response: any) {
      if (response === "Yes") return -1;
      if (response === "No") return 1;
      return 0;
    }

    score += updateScore(functional.personal["cloth_assistance"]);
    score += updateScore(functional.personal["social_activities"]);
    score += updateScore(functional.personal["converse"]);

    score += updateScore(functional.social["support_system"]);
    score += updateScore(functional.social["two_meals"]);
    score += updateScore(functional.social["neat_bedroom"]);

    score += updateScore(functional.hobbies["hobbies"]);
    score += updateScore(functional.hobbies["hobby_engagement"]);

    score += updateScore(functional.activities["public_transport"]);
    score += updateScore(functional.activities["shopping_alone"]);
    score += updateScore(functional.activities["sports"]);

    score += updateScoreInverted(behaviorals.suicide_attempt);
    score += updateScoreInverted(behaviorals.suicidal_tendencies);
    score += updateScoreInverted(behaviorals.wandering);
    score += updateScoreInverted(behaviorals.scammed);
    score += updateScoreInverted(behaviorals.sleep_pattern);
    score += updateScoreInverted(behaviorals.drag_feet);
    score += updateScoreInverted(behaviorals.sleep_disturbed);
    score += updateScoreInverted(behaviorals.depression);
    score += updateScoreInverted(behaviorals.anxious);
    score += updateScoreInverted(behaviorals.irritated);

    score += updateScoreInverted(cognition.memory_problems);
    score += updateScoreInverted(cognition.short_term_memory);
    score += updateScoreInverted(cognition.long_term_memory);
    score += updateScoreInverted(cognition.memory_progression);
    score += updateScoreInverted(cognition.memory_aids);
    score += updateScoreInverted(cognition.focusing_difficulty);
    score += updateScoreInverted(cognition.speech_difficulty);
    score += updateScoreInverted(cognition.expressing_difficulty);
    score += updateScoreInverted(cognition.word_finding);
    score += updateScoreInverted(cognition.repeating);

    const formaData = {
      demographic: demographic,
      social: social,
      medical: medical,
      behaviorals: behaviorals,
      cognition: cognition,
      functional,
      score,
    };
    console.log("score", score);
    console.log(formaData, "formaData");
  };

  const saveDemographic = (data: any) => {
    setDemographic(data);
    console.log(data, "saveDemographic");
    setActive((prev) => prev + 1);
  };

  const saveSocial = (data: any) => {
    setSocial(data);
    if (
      data?.disibilities !== "No" ||
      data?.smoker !== "No" ||
      data?.alcoholic !== "No"
    ) {
      initializeData();
      setActive(0);
      navigate("/done");
    }
  };

  const saveMedical = (data: any) => {
    setMedical(data);
    console.log(data, "saveMedical");
    setActive((prev) => prev + 1);
  };

  const saveBehavioral = (data: any) => {
    setBehaviorals(data);
    console.log(data, "saveBehavioral");
    setActive((prev) => prev + 1);
  };

  const saveCognitions = (data: any) => {
    setCognition(data);
    console.log(data, "saveCognitions summary page");
    handleSubmit();
  };

  const saveFunctional = (data: any) => {
    setFunctional(data);
    console.log(data, "saveFunctional");
    setActive((prev) => prev + 1);
  };

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
