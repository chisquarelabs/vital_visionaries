import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  ButtonForm,
  SelectBox,
} from "../../../components/formElements/FormElements";

export const Social = ({ onSave = () => {}, init }: any) => {
  const [formData, setFormData] = useState(init);

  useEffect(() => {
    setFormData(init);
    return () => {};
  }, [init]);

  const handleChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  const Qualification = [
    { label: "Entry Level", value: "entry_level" },
    { label: "Level 1-3", value: "level1" },
    { label: "Level 4-5", value: "level2" },
    { label: "Level 6-8", value: "level3" },
  ];

  const Occupation = [
    { label: "Employed", value: "Employed" },
    { label: "Unemployed", value: "Unemployed" },
    { label: "Retired", value: "Retired" },
    { label: "Others", value: "Others" },
  ];

  const Disibilities = [
    { label: "IDD", value: "IDD" },
    { label: "Down Syndrome", value: "Down Syndrome" },
    { label: "Cerebral Palsy", value: "Cerebral Palsy" },
    { label: "Multiple", value: "Multiple" },
    { label: "No", value: "No" },
  ];

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 8, lg: 8 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8, lg: 8 }}>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: ".5rem",
                height: "100%",
              }}
            >
              <SelectBox
                name="qualification"
                onChange={handleChange}
                value={formData["qualification"]}
                label="Qualification"
                options={Qualification}
              />
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 8, lg: 8 }}>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: ".5rem",
                height: "100%",
              }}
            >
              <SelectBox
                name="occupation"
                onChange={handleChange}
                value={formData["occupation"]}
                label="Occupation"
                options={Occupation}
              />
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 8, lg: 8 }}>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: ".5rem",
                height: "100%",
              }}
            >
              <SelectBox
                name="disibilities"
                onChange={handleChange}
                value={formData["disibilities"]}
                label="Learning Disabilities"
                options={Disibilities}
              />
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 8, lg: 8 }}>
            <div className="flex justify-between">
              <div className="flex ml-2">
                <p>Are you smoker?</p>
              </div>
              <div className="flex items-center mr-4 ml-4">
                <div className="flex items-center mr-4 ml-4">
                  <input
                    id="Yes"
                    type="radio"
                    value={formData["smoker"]}
                    name="smoker"
                    checked={formData["smoker"] === "Yes"}
                    onChange={(e: any) => handleChange("smoker", e.target.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-300 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Yes
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="No"
                    type="radio"
                    value={formData["smoker"]}
                    name="smoker"
                    checked={formData["smoker"] === "No"}
                    onChange={(e: any) => handleChange("smoker", e.target.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-300 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    No
                  </label>
                </div>
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 8, lg: 8 }}>
            <div className="flex justify-between">
              <div className="flex ml-2">
                <p>Are you alcoholic?</p>
              </div>
              <div className="flex items-center mr-4 ml-4">
                <div className="flex items-center mr-4 ml-4">
                  <input
                    id="Yes"
                    type="radio"
                    value={formData["alcoholic"]}
                    name="alcoholic"
                    checked={formData["alcoholic"] === "Yes"}
                    onChange={(e: any) =>
                      handleChange("alcoholic", e.target.id)
                    }
                    className="w-4 h-4 text-blue-600 bg-gray-300 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Yes
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="No"
                    type="radio"
                    value={formData["alcoholic"]}
                    name="alcoholic"
                    checked={formData["alcoholic"] === "No"}
                    onChange={(e: any) =>
                      handleChange("alcoholic", e.target.id)
                    }
                    className="w-4 h-4 text-blue-600 bg-gray-300 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    No
                  </label>
                </div>
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}></Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <ButtonForm
              className="mr-1"
              label="Next"
              onClick={() => onSave(formData)}
            />
            {/* <div className="flex justify-center w-full">
            <div className="mt-8 mr-1" onClick={() => onSave(formData)}>
              <a
                href="#_"
                className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#0a1d40] border-2 border-[#0a1d40] rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-[#0a1d40] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Next Question</span>
              </a>
            </div>
            </div> */}

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
