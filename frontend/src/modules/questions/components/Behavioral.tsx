import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { ButtonForm } from "../../../components/formElements/FormElements";

export const Behavioral = ({ onSave = () => {}, init }: any) => {
  const [formData, setFormData] = useState(init);

  useEffect(() => {
    setFormData(init);
    return () => {};
  }, [init]);

  const handleChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  const questions = [
    {
      name: "1",
      question: "Have you ever tried committing suicide?",
      highlight: true,
    },
    {
      name: "2",
      question: "Do you feel like killing yourself?",
      highlight: true,
    },
    {
      name: "3",
      question: "Do you run away from your home quiet often?",
      highlight: true,
    },
    { name: "4", question: "Have you been scammed anytime?" },
    { name: "5", question: "Is your sleep pattern alright?" },
    { name: "6", question: "Do you drag your feet when walking?" },
    { name: "7", question: "Is your sleep disturbed?" },
    { name: "8", question: "Are you in depression?" },
    { name: "9", question: "Do you feel anxious always?" },
    { name: "10", question: "Do you easily get irritated?" },
  ];

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 8, lg: 8 }}>
        <Grid container spacing={2}>
          {questions?.map((item: any, index: number) => {
            return (
              <Grid key={index} size={{ xs: 12, md: 12, lg: 12 }}>
                <div className="flex justify-between">
                  <div className="flex ml-2">
                    <p>{item?.question} </p>
                  </div>
                  <div className="flex items-center mr-4 ml-4">
                    <div className="flex items-center mr-4 ml-4">
                      <input
                        id="Yes"
                        type="radio"
                        value={formData[item?.name]}
                        name={item?.name}
                        checked={formData[item?.name] === "Yes"}
                        onChange={(e: any) =>
                          handleChange(item?.name, e.target.id)
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
                        value={formData[item?.name]}
                        name={item?.name}
                        checked={formData[item?.name] === "No"}
                        onChange={(e: any) =>
                          handleChange(item?.name, e.target.id)
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
            );
          })}

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
