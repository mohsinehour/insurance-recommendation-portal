import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import DropdownSelect from "../../components/DropdownSelect";
import ProgressBar from "../../components/ProgressBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PersonalInformationsPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      age: "",
      location: "",
      occupation: "",
      incomeRange: "",
      dependents: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleInputChange = (field, value) => {
      setFormData({ ...formData, [field]: value });
    };
  
    const handleNext = () => {
      const newErrors = {};
  
      // Basic form validation
      if (!formData.age) newErrors.age = "Field left empty";
      if (!formData.location) newErrors.location = "Field left empty";
      if (!formData.occupation) newErrors.occupation = "Field left empty";
      if (!formData.incomeRange) newErrors.incomeRange = "Field left empty";
      if (!formData.dependents) newErrors.dependents = "Field left empty";
  
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
        navigate("/health-profile");
      };
    };
  
    return (
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
          backgroundColor: "#ffffff",
          position: "relative",
        }}
      >
        {/* Progress Bar */}
        <ProgressBar progress={25} />
      
        {/* Title */}
        <Typography
          variant="h5"
          sx={{ fontWeight: "600", fontSize: "34px", color: "#000" }}
        >
          Personal Informations
        </Typography>
      
        {/* Form */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {/* Age Input */}
          <InputField
            label="Age"
            value={formData.age}
            onChange={(e) => handleInputChange("age", e.target.value)}
            error={errors.age}
          />
      
          {/* Location Input */}
          <InputField
            label="Location"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            error={errors.location}
          />
      
          {/* Occupation Input */}
          <InputField
            label="Occupation"
            value={formData.occupation}
            onChange={(e) => handleInputChange("occupation", e.target.value)}
            error={errors.occupation}
          />
      
          {/* Income Range Dropdown */}
          <DropdownSelect
            label="Monthly Income Range"
            options={["Below 100,000 RWF", "100,000 - 300,000 RWF", "300,000 - 500,000 RWF", "500,000 - 1,000,000 RWF", "Above 1,000,000 RWF"]}
            value={formData.incomeRange}
            onChange={(e) => handleInputChange("incomeRange", e.target.value)}
            error={errors.incomeRange}
          />
      
          {/* Number of Dependents Input */}
          <InputField
            label="Number Of Dependents"
            value={formData.dependents}
            onChange={(e) => handleInputChange("dependents", e.target.value)}
            error={errors.dependents}
          />
        </Box>
      
        {/* Next Button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "absolute",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
          }}
          onClick={handleNext}
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
  );
};

export default PersonalInformationsPage;
