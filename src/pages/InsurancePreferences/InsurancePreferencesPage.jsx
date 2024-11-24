import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import DropdownSelect from "../../components/DropdownSelect";
import ProgressBar from "../../components/ProgressBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const InsurancePreferencesPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      monthlyPremium: "",
      priority: "",
      coverageNeeds: "",
      paymentFrequency: "",
      internationalCoverage: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleInputChange = (field, value) => {
      setFormData({ ...formData, [field]: value });
    };
  
    const handleNext = () => {
      const newErrors = {};
  
      // Basic form validation
      if (!formData.monthlyPremium) newErrors.monthlyPremium = "Field left empty";
      if (!formData.priority) newErrors.priority = "Field left empty";
      if (!formData.coverageNeeds) newErrors.coverageNeeds = "Field left empty";
      if (!formData.paymentFrequency) newErrors.paymentFrequency = "Field left empty";
      if (!formData.internationalCoverage) newErrors.internationalCoverage = "Field left empty";
  
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
        navigate("/additional-factors");
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
        <ProgressBar progress={75} />
      
        {/* Title */}
        <Typography
          variant="h5"
          sx={{ fontWeight: "600", fontSize: "34px", color: "#000" }}
        >
          Insurance Preferences
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
          {/* Preferred Monthly Premium Range Input */}
          <InputField
            label="Preferred Monthly Premium Range"
            value={formData.monthlyPremium}
            onChange={(e) => handleInputChange("monthlyPremium", e.target.value)}
            error={errors.monthlyPremium}
          />
      
          {/* Priority Dropdown */}
          <DropdownSelect
            label="Priority"
            options={["Low cost", "Maximum coverage", "Balance of both"]}
            value={formData.priority}
            onChange={(e) => handleInputChange("priority", e.target.value)}
            error={errors.priority}
          />
      
          {/* Specific Coverage Needs Dropdown */}
          <DropdownSelect
            label="Specific Coverage Needs"
            options={["Basic outpatient", "Full outpatient + inpatient", "Comprehensive (including dental/optical)", "Maternity coverage", "Emergency only"]}
            value={formData.coverageNeeds}
            onChange={(e) => handleInputChange("coverageNeeds", e.target.value)}
            error={errors.coverageNeeds}
          />
      
          {/* Preferred Payment Frequency Dropdown */}
          <DropdownSelect
            label="Preferred Payment Frequency"
            options={["Monthly", "Quarterly", "Semi-annually", "Annually"]}
            value={formData.paymentFrequency}
            onChange={(e) => handleInputChange("paymentFrequency", e.target.value)}
            error={errors.paymentFrequency}
          />
      
          {/* International Coverage Needs Input */}
          <InputField
            label="International Coverage Needs"
            value={formData.internationalCoverage}
            onChange={(e) => handleInputChange("internationalCoverage", e.target.value)}
            error={errors.internationalCoverage}
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

export default InsurancePreferencesPage;
