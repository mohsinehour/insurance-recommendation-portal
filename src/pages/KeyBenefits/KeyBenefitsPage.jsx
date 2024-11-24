import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationDots from "../../components/NavigationDots";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TargetIcon from "@mui/icons-material/CheckCircleOutline";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import PublicIcon from "@mui/icons-material/Public";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const KeyBenefits = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <TargetIcon style={{ fontSize: "36px", color: "#FF5722" }} />,
      title: "Tailored to Your Needs",
      description: "Compare plans that match your specific health requirements.",
    },
    {
      icon: <MoneyIcon style={{ fontSize: "36px", color: "#FFC107" }} />,
      title: "Budget-Friendly Options",
      description: "Find coverage that fits your financial comfort zone.",
    },
    {
      icon: <PublicIcon style={{ fontSize: "36px", color: "#4CAF50" }} />,
      title: "Cross-Country Coverage",
      description: "Access your insurance benefits anywhere in Africa.",
    },
    {
      icon: <FlashOnIcon style={{ fontSize: "36px", color: "#2196F3" }} />,
      title: "Quick & Easy Process",
      description: "5-minute survey for instant recommendations.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
        padding: "38px",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Page Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "600",
          fontSize: "34px",
          marginTop: "50px",
          color: "#000",
        }}
      >
        Key Benefits
      </Typography>

      {/* Benefits Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "50px",
        }}
      >
        {benefits.map((benefit, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            {benefit.icon}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  fontSize: "24px",
                  color: "#000",
                }}
              >
                {benefit.title}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "20px", color: "#000" }}>
                {benefit.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Navigation Dots & Next */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Centered Navigation Dots */}
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <NavigationDots activeIndex={1} />
        </Box>

        {/* "Next" Text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: "10px",
            right: "20px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/trust-elements")}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "normal",
              color: "#000",
              marginRight: "5px",
            }}
          >
            Next
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: "24px", color: "#000" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default KeyBenefits;
