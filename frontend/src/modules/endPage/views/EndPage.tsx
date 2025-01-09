import { Button, Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const ThankYouPage = ({ summary }: any) => {
  return (
    <Box
      className="mt-54 w-full flex flex-col items-center justify-center"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            className="text-center text-gray-800 font-bold"
          >
            Thank You for Taking the Test!
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-center text-gray-600 mt-2"
          >
            Here is your summary:
          </Typography>

          <Box
            className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50"
            component={motion.div}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {summary && summary.length > 0 ? (
              <ul className="list-disc list-inside">
                {summary.map((item, index) => (
                  <Typography
                    key={index}
                    component="li"
                    variant="body2"
                    className="text-gray-700"
                  >
                    {item}
                  </Typography>
                ))}
              </ul>
            ) : (
              <Typography variant="body2" className="text-gray-500">
                No summary available.
              </Typography>
            )}
          </Box>

          <button
            className="relative inline-block px-4 py-2 font-medium group mt-4"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
            Finish
            </span>
          </button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ThankYouPage;
