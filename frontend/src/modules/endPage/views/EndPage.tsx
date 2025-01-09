import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import SummaryPage from "../../summary/views/summaryPage";

const ThankYouPage = ({ summary }: any) => {
  const [scoreDetails, setScoreDetails] = useState(null);

  useEffect(() => {
    const score = localStorage?.getItem("scoreDetails");
    if (score != null) {
      console.log(score, "score");
      setScoreDetails(scoreDetails);
    }
    // return () => {
    //   localStorage.removeItem("scoreDetails");
    // };
  }, []);
  console.log(scoreDetails, "scoreDetails");

  return (
    <Card className="w-full p-6">
      <CardContent>
        <Typography
          variant="h4"
          component="h1"
          className="text-center text-gray-800 font-bold"
        >
          Thank you for taking the assessment!
        </Typography>
        {scoreDetails == null && (
          <Box
            className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50"
            component={motion.div}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Typography variant="body2" className="text-gray-500 text-center">
              No summary available.
            </Typography>
          </Box>
        )}
        <Box>
          <SummaryPage />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ThankYouPage;
