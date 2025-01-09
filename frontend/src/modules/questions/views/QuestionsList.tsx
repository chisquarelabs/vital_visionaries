import { useState } from "react";
import { TabSet } from "../components/TabSet";
import { AssessmentUrl } from "../constants/constants";
import { Toaster } from "../../../components/utils/Toaster";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const QuestionsList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async (formData: any) => {
    try {
      setLoading(true);
      const res = await fetch(AssessmentUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        return "errror";
      }
      const data = await res.json();
      console.log(data, "data");
      setLoading(false);
      return "success";
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
      return "errror";
    }
  };

  return (
    <>
      <div className="mt-2">
        <TabSet handleSave={handleSave} />
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={loading}
          onClick={() => setLoading(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Toaster
          isOpen={error !== ""}
          message={error || "Authorization error"}
          error={error !== ""}
        />
      </div>
    </>
  );
};

export default QuestionsList;
