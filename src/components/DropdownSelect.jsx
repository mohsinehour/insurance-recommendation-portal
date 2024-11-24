import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const DropdownSelect = ({ label, options, value = "", onChange, error }) => {
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
        select
        value={value || ""}
        onChange={onChange}
        error={!!error}
        helperText={error}
        variant="outlined"
        sx={{
          "& .MuiInputBase-root": { borderRadius: "8px" },
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default DropdownSelect;
