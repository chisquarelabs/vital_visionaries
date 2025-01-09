import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Demographic } from "./Demographic";
import { Social } from "./Social";
import { Medical } from "./Medical";
import { Behavioral } from "./Behavioral";
import { Cognitive } from "./Cognitive";
import { Functional } from "./Functional";
import "../style/style.css";

export const TabSet = ({ handleSave }: any) => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const initialDemographic = {
    name: "",
    patient_id: "",
    ethnicity: "",
    dob: "",
    sex: "",
  };
  const initiaSocial = {
    qualification: "",
    occupation: "",
    disabilities: "",
    smoker: "",
    alcoholic: "",
  };
  const initialMedical = {
    hospitalization: "",
    diabetic: "",
    cancer: "",
    thyroid: "",
    stroke: "",
    cardiac: "",
    head_injuries: "",
    seizure: "",
    renals: "",
    liver: "",
  };
  const initialBehaviourals = {
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
  };
  const initialCognition = {
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
  };
  const initialFUnctional = {
    personal: { cloth_assistance: "", social_activities: "", converse: "" },
    social: { support_system: "", two_meals: "", neat_bedroom: "" },
    hobbies: { hobbies: "", hobby_engagement: "" },
    activities: { public_transport: "", shopping_alone: "", sports: "" },
  };

  const [demographic, setDemographic] = useState(initialDemographic);
  const [social, setSocial] = useState(initiaSocial);
  const [medical, setMedical] = useState(initialMedical);
  const [behaviorals, setBehaviorals] = useState(initialBehaviourals);
  const [cognition, setCognition] = useState(initialCognition);
  const [functional, setFunctional] = useState(initialFUnctional);

  const initializeData = () => {
    setFunctional(initialFUnctional);
    setCognition(initialCognition);
    setBehaviorals(initialBehaviourals);
    setMedical(initialMedical);
    setDemographic(initialDemographic);
    setSocial(initiaSocial);
  };

  //   api call
  const handleSubmit = (earlyExit: string) => {
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

    let score = 0;
    let personalScore = 0;
    let socialScore = 0;
    let hobbiesScore = 0;
    let activityScore = 0;
    let behavioralsScore = 0;
    let cognitionScore = 0;

    let formaData = {
      demographic: demographic,
      social: social,
      medical: medical,
      behaviorals: behaviorals,
      cognition: cognition,
      early_exit: "",
      functional,
      score,
    };

    if (earlyExit != null || earlyExit !== "") {
      formaData = { ...formaData, early_exit: earlyExit };
      const response = handleSave(formaData);
      if (response === "success") {
        initializeData();
        setActive(0);
        navigate("/done");
      }
    } else {
      personalScore += updateScore(functional.personal["cloth_assistance"]);
      personalScore += updateScore(functional.personal["social_activities"]);
      personalScore += updateScore(functional.personal["converse"]);

      socialScore += updateScore(functional.social["support_system"]);
      socialScore += updateScore(functional.social["two_meals"]);
      socialScore += updateScore(functional.social["neat_bedroom"]);

      hobbiesScore += updateScore(functional.hobbies["hobbies"]);
      hobbiesScore += updateScore(functional.hobbies["hobby_engagement"]);

      activityScore += updateScore(functional.activities["public_transport"]);
      activityScore += updateScore(functional.activities["shopping_alone"]);
      activityScore += updateScore(functional.activities["sports"]);

      behavioralsScore += updateScoreInverted(behaviorals.suicide_attempt);
      behavioralsScore += updateScoreInverted(behaviorals.suicidal_tendencies);
      behavioralsScore += updateScoreInverted(behaviorals.wandering);
      behavioralsScore += updateScoreInverted(behaviorals.scammed);
      behavioralsScore += updateScoreInverted(behaviorals.sleep_pattern);
      behavioralsScore += updateScoreInverted(behaviorals.drag_feet);
      behavioralsScore += updateScoreInverted(behaviorals.sleep_disturbed);
      behavioralsScore += updateScoreInverted(behaviorals.depression);
      behavioralsScore += updateScoreInverted(behaviorals.anxious);
      behavioralsScore += updateScoreInverted(behaviorals.irritated);

      cognitionScore += updateScoreInverted(cognition.memory_problems);
      cognitionScore += updateScoreInverted(cognition.short_term_memory);
      cognitionScore += updateScoreInverted(cognition.long_term_memory);
      cognitionScore += updateScoreInverted(cognition.memory_progression);
      cognitionScore += updateScoreInverted(cognition.memory_aids);
      cognitionScore += updateScoreInverted(cognition.focusing_difficulty);
      cognitionScore += updateScoreInverted(cognition.speech_difficulty);
      cognitionScore += updateScoreInverted(cognition.expressing_difficulty);
      cognitionScore += updateScoreInverted(cognition.word_finding);
      cognitionScore += updateScoreInverted(cognition.repeating);

      const totalScore =
        score +
        cognitionScore +
        behavioralsScore +
        activityScore +
        hobbiesScore +
        socialScore +
        personalScore;

      formaData = {
        ...formaData,
        score: totalScore,
      };

      const scoreDetails = {
        cognitionScore: cognitionScore,
        behavioralsScore: behavioralsScore,
        activityScore: activityScore,
        hobbiesScore: hobbiesScore,
        socialScore: socialScore,
        personalScore: personalScore,
        totalScore: totalScore,
      };
      localStorage.setItem("scoreDetails", JSON.stringify(scoreDetails));

      //   api call
      const response = handleSave(formaData);
      if (response === "success") {
        initializeData();
        setActive(0);
        navigate("/done");
      }
    }
  };

  const saveDemographic = (data: any) => {
    setDemographic(data);
    setActive((prev) => prev + 1);
  };

  const saveSocial = (data: any) => {
    setSocial(data);
    if (data?.disibilities !== "No") {
      handleSubmit("Learning Disabilities");
    }
    if (data?.smoker !== "No") {
      handleSubmit("Smoker");
    }
    if (data?.alcoholic !== "No") {
      handleSubmit("Alcoholic");
    }
    setActive((prev) => prev + 1);
  };

  const saveMedical = (data: any) => {
    setMedical(data);
    if (data?.head_injuries !== "No") {
      handleSubmit("Head Injuries");
    }
    if (data?.seizure !== "No") {
      handleSubmit("Seizure / Epilepsy / Fits");
    }
    if (data?.renals !== "No") {
      handleSubmit("Renals Conditions");
    }
    setActive((prev) => prev + 1);
  };

  const saveBehavioral = (data: any) => {
    setBehaviorals(data);
    setActive((prev) => prev + 1);
  };

  const saveCognitions = (data: any) => {
    setCognition(data);
    handleSubmit("");
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
