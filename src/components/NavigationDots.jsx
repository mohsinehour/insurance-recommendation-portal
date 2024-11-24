import React from "react";
import Box from "@mui/material/Box";

const NavigationDots = ({ activeIndex = 0 }) => {
  const dots = [0, 1, 2]; // Adjust number based on total pages
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      {dots.map((dot, index) => (
        <Box
          key={index}
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: activeIndex === index ? "#FF9800" : "#ddd",
          }}
        />
      ))}
    </Box>
  );
};

export default NavigationDots;
