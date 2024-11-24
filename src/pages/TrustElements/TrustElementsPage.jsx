import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomButton from "../../components/Button";

const TrustElementsPage = () => {
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
      {/* Image Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      >
        <img
          src="/assets/images/trust.webp"
          alt="Data protection"
          style={{
            width: "100%",
            maxWidth: "350px",
            borderRadius: "10px",
          }}
        />
      </Box>

      {/* Title Section */}
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: "600",
          fontSize: "34px",
          marginBottom: "16px",
          color: "#000",
        }}
      >
        Your data is protected <br /> & confidential
      </Typography>

      {/* Trust Info Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          marginBottom: "50px",
        }}
      >
        <Typography variant="body1" sx={{ color: "#000", fontSize: "24px" }}>
          Trusted by <Typography component="span" sx={{ fontWeight: "bold", color: "#FF9800", fontSize: "24px" }}>1000+</Typography> users
        </Typography>
        <Typography variant="body1" sx={{ color: "#000", fontSize: "24px" }}>
          <Typography component="span" sx={{ fontWeight: "bold", color: "#FF9800", fontSize: "24px" }}>8</Typography> leading insurance providers
        </Typography>
        <Typography variant="body1" sx={{ color: "#000", fontSize: "24px" }}>
          Data protected & confidential
        </Typography>
      </Box>

      {/* Button Section */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <CustomButton
          text="Start Matching"
          onClick={() => navigate("/personal-informations")}
        />
      </Box>
    </Box>
  );
};

export default TrustElementsPage;
