import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { ColorModeContext } from "./ColorModeContext";

export const ToggleTheme = () => {
  const colorMode = React.useContext(ColorModeContext);
  const [darkMode, setDarkMode] = useState(false);
  const handleTheme = () => {
    setDarkMode((theme) => (theme ? false : true));
    colorMode.toggleColorMode();
  };
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={
            <Switch
              color="primary"
              checked={darkMode}
              onChange={handleTheme}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Dark Mode"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  );
};

export default ToggleTheme;
