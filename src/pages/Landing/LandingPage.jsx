import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationDots from "../../components/NavigationDots";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
        padding: "38px",
        backgroundColor: "#ffffff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Logo Section */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="/assets/images/logo.svg"
          alt="LifeLine Logo"
          style={{ width: "180px", marginTop: "50px", marginBottom: "10px" }}
        />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "400px",
          marginBottom: "20px", // Reduce white space
        }}
      >
        <img
          src="/assets/images/landing.webp"
          alt="Puzzle"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "300px",
            borderRadius: "10px",
            marginBottom: "20px" }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            marginBottom: "10px",
            color: "#000",
          }}
        >
          Find Your Perfect Insurance Match in Minutes
        </Typography>
        <Typography variant="body1" sx={{ color: "#000", fontSize: "24px" }}>
          Get personalized insurance recommendations based on your health needs
          and budget.
        </Typography>
      </Box>

      {/* Navigation & Next */}
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
          <NavigationDots activeIndex={0} />
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
          onClick={() => navigate("/key-benefits")}
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

export default LandingPage;
