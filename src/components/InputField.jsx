import React from "react";
import TextField from "@mui/material/TextField";

const InputField = ({ label, value = "", onChange, error }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label
        style={{
          display: "block",
          fontWeight: "500",
          fontSize: "16px",
          fontFamily: "Poppins, sans-serif",
          marginBottom: "5px",
        }}
      >
        {label}
      </label>
      <TextField
        fullWidth
        value={value || ""}
        onChange={onChange}
        error={!!error}
        helperText={error}
        variant="outlined"
        sx={{
          "& .MuiInputBase-root": { borderRadius: "8px" },
        }}
      />
    </div>
  );
};

export default InputField;
