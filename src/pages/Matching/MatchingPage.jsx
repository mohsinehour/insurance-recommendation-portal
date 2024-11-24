import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const MatchingPage = () => {
  const recommendations = [
    {
      logo: "/assets/images/RSSB.png", // Replace with the actual logo URL or path
      name: "RSSB",
      description: "Premium Health Plan",
      price: "25,000 RWF/month",
      details: "Full family coverage",
      link: "https://www.rssb.rw/scheme/medical-scheme",
    },
    {
      logo: "/assets/images/Prime.png", // Replace with the actual logo URL or path
      name: "Prime",
      description: "Premium Health Plan",
      price: "18,000 RWF/month",
      details: "Individual coverage",
      link: "https://prime.rw/",
    },
    {
      logo: "/assets/images/EdenCare.png", // Replace with the actual logo URL or path
      name: "Eden Care",
      description: "Premium Health Plan",
      price: "22,000 RWF/month",
      details: "Family coverage",
      link: "https://www.edencaremedical.com/",
    },
  ];

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
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
          src="/assets/images/matching.webp"
          alt="Data protection"
          style={{
            width: "100%",
            maxWidth: "350px",
            borderRadius: "10px",
          }}
        />
      </Box>

      {/* Best Match Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          maxWidth: "400px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "600", fontSize: "20px", color: "#000", textAlign: "center" }}
        >
          Best Match
        </Typography>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Content Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Logo */}
            <img
              src="/assets/images/RSSB.png" // Replace with the actual path to your logo
              alt="RSSB Logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            {/* Text Content */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "600", fontSize: "18px", color: "#000" }}>
                RSSB
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#666" }}>
                Premium Health Plan
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "#000", marginTop: "10px" }}>
                Based on your needs: family coverage, dental care, and preferred hospitals.
              </Typography>
            </Box>
          </Box>

          {/* "Get Started" Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FBAE24",
              color: "#fff",
              padding: "10px 30px",
              fontSize: "12px",
              borderRadius: "20px",
              textTransform: "none",
              whiteSpace: "nowrap",
              "&:hover": { backgroundColor: "#FBA50B" },
            }}
            onClick={() => window.open("https://www.rssb.rw/scheme/medical-scheme", "_blank")}
          >
            Get Started →
          </Button>
        </Box>
      </Box>

      {/* Top Recommendations Section */}
      <Box sx={{ width: "100%", maxWidth: "450px" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            fontSize: "20px",
            color: "#000",
            marginBottom: "16px",
          }}
        >
          Top Recommendations
        </Typography>
        {recommendations.map((rec, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              marginBottom: "10px",
              backgroundColor: "#ffffff",
            }}
          >
            {/* Display the logo image */}
            <Box
              sx={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
              }}
            >
              <img
                src={rec.logo}
                alt={rec.name}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box sx={{ flex: "1" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
                {rec.name}
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "#000" }}>
                {rec.description}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginTop: "4px",
                }}
              >
                {rec.price}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#000",
                  marginTop: "4px",
                }}
              >
                {rec.details}
              </Typography>
            </Box>
            <Button
              variant="text"
              sx={{ textTransform: "none", fontSize: "14px", color: "#007bff" }}
              onClick={() => window.open(rec.link, "_blank")}
            >
              Visit →
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MatchingPage;
