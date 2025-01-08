import Grid from "@mui/material/Grid2";
import {
  ButtonForm,
  SelectBox,
} from "../../../components/formElements/FormElements";
import { useEffect, useState } from "react";

export const Medical = ({ onSave = () => {}, init }: any) => {
  const [formData, setFormData] = useState(init);

  const Thyroid = [
    { label: "Hyperthyroidism", value: "Hyperthyroidism" },
    { label: "Hypothyroidism", value: "Hypothyroidism" },
    { label: "No", value: "No" },
  ];

  const Liver = [
    { label: "Fatty Liver", value: "Fatty Liver" },
    { label: "Liver Cirrhosis", value: "Liver Cirrhosis" },
    { label: "Hepatitis B or C", value: "Hepatitis B or C" },
  ];

  const Cardiac = [
    { label: "Heart Attack", value: "Heart Attack" },
    { label: "Angina", value: "Angina" },
    { label: "Heart Failure", value: "Heart Failure" },
    { label: "No", value: "No" },
  ];

  const HeadInjuries = [
    { label: "Traumatic Brain Injury", value: "Traumatic Brain Injury" },
    { label: "Head Trauma", value: "Head Trauma" },
    { label: "Consussions", value: "Consussions" },
    { label: "No", value: "No" },
  ];

  const renalConditions = [
    { label: "Urinary Incontinence", value: "Urinary Incontinence" },
    { label: "CKD", value: "CKD" },
    { label: "Nephrectomy", value: "Nephrectomy" },
    { label: "No", value: "No" },
  ];
  useEffect(() => {
    setFormData(init);
    return () => {};
  }, [init]);

  const handleChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

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
                name="thyroid"
                onChange={handleChange}
                value={formData["thyroid"]}
                label="Thyroid"
                options={Thyroid}
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
                name="liver_conditions"
                onChange={handleChange}
                value={formData["liver_conditions"]}
                label="Liver Conditions"
                options={Liver}
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
                name="cardiac_problems"
                onChange={handleChange}
                value={formData["cardiac_problems"]}
                label="Cardiac Problems"
                options={Cardiac}
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
                name="head_injuries"
                onChange={handleChange}
                value={formData["head_injuries"]}
                label="Head Injuries"
                options={HeadInjuries}
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
                name="renals_conditions"
                onChange={handleChange}
                value={formData["renals_conditions"]}
                label="Renal Conditions"
                options={renalConditions}
              />
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 8, lg: 8 }}>
            <div className="flex justify-between">
              <div className="flex ml-2">
                <p>Are you Diabetic?</p>
              </div>
              <div className="flex items-center mr-4 ml-4">
                <div className="flex items-center mr-4 ml-4">
                  <input
                    id="Yes"
                    type="radio"
                    value={formData["diabetic"]}
                    name="diabetic"
                    checked={formData["diabetic"] === "Yes"}
                    onChange={(e: any) => handleChange("diabetic", e.target.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Yes
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="No"
                    type="radio"
                    value={formData["diabetic"]}
                    name="diabetic"
                    checked={formData["diabetic"] === "No"}
                    onChange={(e: any) => handleChange("diabetic", e.target.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                <p>Are you hospitalized?</p>
              </div>
              <div className="flex items-center mr-4 ml-4">
                <div className="flex items-center mr-4 ml-4">
                  <input
                    id="Yes"
                    type="radio"
                    value={formData["hospitalization"]}
                    name="hospitalization"
                    checked={formData["hospitalization"] === "Yes"}
                    onChange={(e: any) =>
                      handleChange("hospitalization", e.target.id)
                    }
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Yes
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="No"
                    type="radio"
                    value={formData["hospitalization"]}
                    name="hospitalization"
                    checked={formData["hospitalization"] === "No"}
                    onChange={(e: any) =>
                      handleChange("hospitalization", e.target.id)
                    }
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                <p>Do you have cancer?</p>
              </div>
              <div className="flex items-center mr-4 ml-4">
                <div className="flex items-center mr-4 ml-4">
                  <input
                    id="Yes"
                    type="radio"
                    value={formData["cancer"]}
                    name="cancer"
                    checked={formData["cancer"] === "Yes"}
                    onChange={(e: any) => handleChange("cancer", e.target.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Yes
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="No"
                    type="radio"
                    value={formData["cancer"]}
                    name="cancer"
                    checked={formData["cancer"] === "No"}
                    onChange={(e: any) => handleChange("cancer", e.target.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                <p> stroke ?</p>
              </div>
              <div className="flex items-center mr-4 ml-4">
                <div className="flex items-center mr-4 ml-4">
                  <input
                    id="Yes"
                    type="radio"
                    value={formData["stroke"]}
                    name="stroke"
                    checked={formData["stroke"] === "Yes"}
                    onChange={(e: any) => handleChange("stroke", e.target.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Yes
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="No"
                    type="radio"
                    value={formData["stroke"]}
                    name="stroke"
                    checked={formData["stroke"] === "No"}
                    onChange={(e: any) => handleChange("stroke", e.target.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                <p> Seizure / Epilepsy / Fits?</p>
              </div>
              <div className="flex items-center mr-4 ml-4">
                <div className="flex items-center mr-4 ml-4">
                  <input
                    id="Yes"
                    type="radio"
                    value={formData["epilepsy"]}
                    name="epilepsy"
                    checked={formData["epilepsy"] === "Yes"}
                    onChange={(e: any) => handleChange("epilepsy", e.target.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Yes
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="No"
                    type="radio"
                    value={formData["epilepsy"]}
                    name="epilepsy"
                    checked={formData["epilepsy"] === "No"}
                    onChange={(e: any) => handleChange("epilepsy", e.target.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
