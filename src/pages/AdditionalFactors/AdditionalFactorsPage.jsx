import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import DropdownSelect from "../../components/DropdownSelect";
import ProgressBar from "../../components/ProgressBar";
import CustomButton from "../../components/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AdditionalFactorsPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      currentInsurance: "",
      pastInsurance: "",
      maternityCoverage: "",
      servicesPriority: "",
      healthcareMode: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleInputChange = (field, value) => {
      setFormData({ ...formData, [field]: value });
    };
  
    const handleNext = () => {
      const newErrors = {};
  
      // Basic form validation
      if (!formData.currentInsurance) newErrors.currentInsurance = "Field left empty";
      if (!formData.pastInsurance) newErrors.pastInsurance = "Field left empty";
      if (!formData.maternityCoverage) newErrors.maternityCoverage = "Field left empty";
      if (!formData.servicesPriority) newErrors.servicesPriority = "Field left empty";
      if (!formData.healthcareMode) newErrors.healthcareMode = "Field left empty";
  
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
        navigate("/matching");
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
        <ProgressBar progress={100} />
      
        {/* Title */}
        <Typography
          variant="h5"
          sx={{ fontWeight: "600", fontSize: "34px", color: "#000" }}
        >
          Additional Factors
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
          {/* Current Insurance Dropdown */}
          <DropdownSelect
            label="Current Insurance"
            options={["None", "RSSB", "UAP", "Radiant", "Other"]}
            value={formData.currentInsurance}
            onChange={(e) => handleInputChange("currentInsurance", e.target.value)}
            error={errors.currentInsurance}
          />
      
          {/* Past Insurance Claims Experience Input */}
          <InputField
            label="Past Insurance Claims Experience"
            value={formData.pastInsurance}
            onChange={(e) => handleInputChange("pastInsurance", e.target.value)}
            error={errors.pastInsurance}
          />
      
          {/* Maternity Coverage Needs Input */}
          <InputField
            label="Maternity Coverage Needs"
            value={formData.maternityCoverage}
            onChange={(e) => handleInputChange("maternityCoverage", e.target.value)}
            error={errors.maternityCoverage}
          />
      
          {/* Emergency Services Priority Dropdown */}
          <DropdownSelect
            label="Emergency Services Priority"
            options={["High priority", "Standard coverage", "Not essential"]}
            value={formData.servicesPriority}
            onChange={(e) => handleInputChange("servicesPriority", e.target.value)}
            error={errors.servicesPriority}
          />
      
          {/* Preferred Mode of Healthcare Dropdown */}
          <DropdownSelect
            label="Preferred Mode of Healthcare"
            options={["Public facilities", "Private hospitals", "Both", "International hospitals"]}
            value={formData.healthcareMode}
            onChange={(e) => handleInputChange("healthcareMode", e.target.value)}
            error={errors.healthcareMode}
          />
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
          onClick={handleNext}
        />
      </Box>
      </Box>
  );
};

export default AdditionalFactorsPage;
