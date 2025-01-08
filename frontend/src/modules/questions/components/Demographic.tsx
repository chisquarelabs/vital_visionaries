import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  ButtonForm,
  DatePicker,
  InputBox,
  SelectBox,
} from "../../../components/formElements/FormElements";

export const Demographic = ({ onSave = () => {}, init }: any) => {
  const [formData, setFormData] = useState(init);

  useEffect(() => {
    setFormData(init);
    return () => {};
  }, [init]);

  const options = [
    { label: "Asian", value: "Asian" },
    { label: "Black", value: "Black" },
    { label: "Mixed", value: "Mixed" },
    { label: "White", value: "White" },
    { label: "Others", value: "Others" },
  ];
  const sexOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "LGBTQ", value: "others" },
  ];

  const handleChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8, lg: 8 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8, lg: 8 }}>
              <div style={{ border: "1px solid #ccc", borderRadius: ".5rem" }}>
                <InputBox
                  name="name"
                  onChange={handleChange}
                  value={formData["name"]}
                  placeholder="Patient Name"
                />
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 8, lg: 8 }}>
              <div style={{ border: "1px solid #ccc", borderRadius: ".5rem" }}>
                <InputBox
                  name="patient_id"
                  onChange={handleChange}
                  value={formData["patient_id"]}
                  placeholder="Patient ID"
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
                  name="ethnicity"
                  onChange={handleChange}
                  value={formData["ethnicity"]}
                  label="Ethnicity"
                  options={options}
                />
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 3, lg: 3 }}></Grid>
            <Grid size={{ xs: 12, md: 4, lg: 4 }}>
              <div style={{ border: "1px solid #ccc", borderRadius: ".5rem" }}>
                <DatePicker
                  name="dob"
                  onChange={handleChange}
                  value={formData["dob"]}
                  label="DOB"
                />
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 4, lg: 4 }}>
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: ".5rem",
                  height: "100%",
                }}
              >
                <SelectBox
                  name="sex"
                  onChange={handleChange}
                  value={formData["sex"]}
                  label="Sex"
                  options={sexOptions}
                />
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
    </>
  );
};
