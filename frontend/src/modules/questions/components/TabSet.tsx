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

  const saveDemographic = (data: any) => {
    console.log(data, "saveDemographic");
  };

  const saveSocial = (data: any) => {
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
  };

  const saveMedical = (data: any) => {
    console.log(data, "saveMedical");
  };

  const saveBehavioral = (data: any) => {
    console.log(data, "saveBehavioral");
  };

  const saveCognitions = (data: any) => {
    console.log(data, "saveCognitions");
  };

  const saveFunctional = (data: any) => {
    console.log(data, "saveFunctional");
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
