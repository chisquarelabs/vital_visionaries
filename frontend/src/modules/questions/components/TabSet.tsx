import { useState } from "react";
import "../style/style.css";

const TAB_DATA = [
  {
    label: "Demographic",
    type: "form",
    text: "Curabitur in augue erat. Vestibulum in fermentum ante, sit amet consectetur neque",
  },
  {
    label: "Social",
    type: "form",
    text: "Curabitur in augue erat. Vestibulum in fermentum ante, sit amet consectetur neque",
  },
  {
    label: "Medical",
    type: "form",
    text: "Curabitur in augue erat. Vestibulum in fermentum ante, sit amet consectetur neque",
  },
  {
    label: "Functional",
    type: "form",
    text: "Curabitur in augue erat. Vestibulum in fermentum ante, sit amet consectetur neque",
  },
  {
    label: "Behavioral",
    type: "form",
    text: "Curabitur in augue erat. Vestibulum in fermentum ante, sit amet consectetur neque",
  },
  {
    label: "Cognition",
    type: "form",
    text: "Curabitur in augue erat. Vestibulum in fermentum ante, sit amet consectetur neque",
  },
];

export const TabSet = () => {
  const [active, setActive] = useState(0);

  const clickHandler = (e: any) => {
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
              <p>{item?.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
