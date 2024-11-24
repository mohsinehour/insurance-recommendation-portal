import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import DropdownSelect from "../../components/DropdownSelect";
import ProgressBar from "../../components/ProgressBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HealthProfilePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    medicalConditions: "",
    regularMedications: "",
    hospitalVisits: "",
    preferredHospitals: "",
    medicalHistory: "",
    specifyCondition: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    const newErrors = {};

    // Basic form validation
    if (!formData.medicalConditions) newErrors.medicalConditions = "Field left empty";
    if (!formData.regularMedications) newErrors.regularMedications = "Field left empty";
    if (!formData.hospitalVisits) newErrors.hospitalVisits = "Field left empty";
    if (!formData.preferredHospitals) newErrors.preferredHospitals = "Field left empty";
    if (!formData.medicalHistory) newErrors.medicalHistory = "Field left empty";
    if (
      formData.medicalConditions === "Other" &&
      !formData.specifyCondition.trim()
    ) {
      newErrors.specifyCondition = "Please specify your condition";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/insurance-preferences");
    }
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
      <ProgressBar progress={50} />

      {/* Title */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", fontSize: "34px", color: "#000" }}
      >
        Health Profile
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
        {/* MedicalConditions Dropdown */}
        <DropdownSelect
          label="Existing Medical Conditions"
          options={[
            "None",
            "Diabetes",
            "Hypertension",
            "Asthma",
            "Heart Condition",
            "Other",
          ]}
          value={formData.medicalConditions}
          onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
          error={errors.medicalConditions}
        />

        {/* Show the input box when "Other" is selected */}
        {formData.medicalConditions === "Other" && (
          <InputField
            label="Please Specify"
            placeholder="Describe your condition"
            value={formData.specifyCondition}
            onChange={(e) =>
              handleInputChange("specifyCondition", e.target.value)
            }
            error={errors.specifyCondition}
          />
        )}

        {/* Regular Medications Dropdown */}
        <DropdownSelect
          label="Regular Medications"
          options={["None", "1-2 medications", "3+ medications"]}
          value={formData.regularMedications}
          onChange={(e) =>
            handleInputChange("regularMedications", e.target.value)
          }
          error={errors.regularMedications}
        />

        {/* Hospital Visits Dropdown */}
        <DropdownSelect
          label="Frequency of Hospital Visits"
          options={[
            "Rarely (1-2 times/year)",
            "Occasionally (3-6 times/year)",
            "Frequently (monthly)",
            "Regular checkups only",
          ]}
          value={formData.hospitalVisits}
          onChange={(e) => handleInputChange("hospitalVisits", e.target.value)}
          error={errors.hospitalVisits}
        />

        {/* Preferred Hospitals Input */}
        <InputField
          label="Preferred Hospitals/Clinics"
          value={formData.preferredHospitals}
          onChange={(e) =>
            handleInputChange("preferredHospitals", e.target.value)
          }
          error={errors.preferredHospitals}
        />

        {/* Family Medical History Input */}
        <InputField
          label="Family Medical History"
          value={formData.medicalHistory}
          onChange={(e) => handleInputChange("medicalHistory", e.target.value)}
          error={errors.medicalHistory}
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

export default HealthProfilePage;
