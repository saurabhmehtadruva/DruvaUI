import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const GeneralSettings = ({name, handleNameChange}) => {
  return (
    <Box className="d-block">
      <Typography variant="subtitle1" gutterBottom sx={{ marginTop: "8px" }}>
        Overview
      </Typography>
      <TextField
        label="Name"
        size="small"
        required
        value={name}
        onChange={handleNameChange}
        className="mt-4"
        sx={{ width: "500px" }}
      />
      <TextField
        label="Description"
        size="small"
        multiline
        rows={3}
        className="mt-4"
        sx={{ width: "500px" }}
      />
    </Box>
  );
};
export default GeneralSettings;
