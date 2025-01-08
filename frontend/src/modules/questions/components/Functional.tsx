import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { ButtonForm } from "../../../components/formElements/FormElements";

export const Functional = ({ onSave = () => {}, init }: any) => {
  const [formData, setFormData] = useState(init);

  useEffect(() => {
    setFormData(init);
    return () => {};
  }, [init]);

  const handleChange = (category: any, questionId: any, value: any) => {
    setFormData((prevState: any) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [questionId]: value,
      },
    }));
  };

  const questions = [
    {
      category: "personal",
      questions: [
        "Do you require assistance for putting on clothes?",
        "Do you take at least two meals everyday?",
        "Do you keep your bedroom neat & clean?",
      ],
    },
    {
      category: "social",
      questions: [
        "Do you have a support system on your own?",
        "Do you engage in social activities",
        "Are you able to respond to conversations properly?",
      ],
    },
    {
      category: "hobbies",
      questions: [
        "Do you have any active hobbies?",
        "Are you able to engage yourself in your hobbies?",
      ],
    },
    {
      category: "activities",
      questions: [
        "Are you able to drive or use public transport on your own?",
        "Are you able to go for shopping alone?",
        "Do you play any regular sports?",
      ],
    },
  ];

  return (
    <Grid container spacing={2}>
      {questions.map((questionGroup, groupIndex) => {
        const { category, questions: questionItems } = questionGroup;
        return (
          <Grid key={groupIndex} size={{ xs: 12, md: 8, lg: 8 }}>
            <h5 className="text-start font-semibold mb-2">* {category}</h5>
            {questionItems.map((question, questionIndex) => (
              <Grid key={questionIndex} container spacing={2}>
                <Grid key={groupIndex} size={{ xs: 12, md: 12, lg: 12 }}>
                  <div className="flex justify-between">
                    <div className="flex ml-2">
                      <p>{question}</p>
                    </div>
                    <div className="flex items-center mr-4 ml-4">
                      <div className="flex items-center mr-4 ml-4">
                        <input
                          id={`Yes-${category}-${questionIndex}`}
                          type="radio"
                          value="Yes"
                          name={`${category}-${questionIndex}`}
                          checked={
                            formData[category][questionIndex + 1] === "Yes"
                          }
                          onChange={(e: any) =>
                            handleChange(category, questionIndex + 1, "Yes")
                          }
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id={`No-${category}-${questionIndex}`}
                          type="radio"
                          value="No"
                          name={`${category}-${questionIndex}`}
                          checked={
                            formData[category][questionIndex + 1] === "No"
                          }
                          onChange={(e) =>
                            handleChange(category, questionIndex + 1, "No")
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
              </Grid>
            ))}
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
  );
};
