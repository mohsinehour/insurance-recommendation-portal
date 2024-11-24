import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const ProgressBar = ({ progress }) => {
  return (
    <Box sx={{ width: "100%", margin: "10px 0" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        color="warning"
        sx={{ borderRadius: "5px", height: "10px" }}
      />
    </Box>
  );
};

export default ProgressBar;
