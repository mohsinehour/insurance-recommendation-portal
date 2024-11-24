import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CustomButton = ({ text, onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px", // Space between text and icon
        backgroundColor: "#FBAE24",
        color: "#fff",
        padding: "10px 20px",
        fontWeight: "normal",
        fontSize: "20px",
        borderRadius: "20px",
        fontFamily: "Poppins, sans-serif",
        textTransform: "none",
        width: "90%",
        "&:hover": {
          backgroundColor: "#FBA50B",
        },
      }}
    >
      {text}
      <ArrowForwardIcon />
    </Button>
  );
};

export default CustomButton;
