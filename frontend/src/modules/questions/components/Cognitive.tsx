import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { ButtonForm } from "../../../components/formElements/FormElements";

export const Cognitive = ({ onSave = () => {}, init }: any) => {
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
      question: "Do you have any memory problems?",
    },
    {
      name: "2",
      question: "Do you experience short term memory problems?",
      highlight: true,
    },
    {
      name: "3",
      question:
        "Have you ever experienced any long term memory problems, such as difficulty to remember past events?",
    },
    {
      name: "4",
      question: "Is there a gradual progression in your memory problems?",
    },
    {
      name: "5",
      question: "Do you frequently use calendars / diaries as memory aids?",
    },
    { name: "6", question: "Do you find difficulty in focusing on anything?" },
    { name: "7", question: "Have you experienced any speech difficulties?" },
    {
      name: "8",
      question: "Do you find  any difficulty in expressing yourself?",
    },
    { name: "9", question: "Do you experience any word finding problems?" },
    {
      name: "10",
      question:
        "Do you find yourself repeating the same thing in conversations?",
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 8, lg: 8 }}>
        <Grid container spacing={2}>
          {questions?.map((item: any, index: number) => {
            return (
              <Grid key={index} size={{ xs: 12, md: 12, lg: 812}}>
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
              label="Finish"
              onClick={() => onSave(formData)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
