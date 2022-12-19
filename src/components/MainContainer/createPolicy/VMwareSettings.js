import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import AntSwitch from "../../common/AntSwitch";
import Grid from "@material-ui/core/Grid";

const VMwareSettings = () => {
  return (
    <Box className="d-block">
      <Typography variant="subtitle1" gutterBottom sx={{ marginTop: "8px" }}>
        VMware Settings
      </Typography>
      <FormControlLabel
        value="end"
        className="m-0"
        control={
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
        }
        label={
          <Typography variant="body1" sx={{ fontWeight: 500, margin: "0 4px" }}>
            Auto Enable CBT
          </Typography>
        }
        labelPlacement="end"
      />
      <Typography variant="body1" gutterBottom className="mt-1">
        Enable Change Block Tracking (CBT) for incremental backup. Please ensure
        there are no user snapshots present on VM(s) for this setting.
      </Typography>
      <FormControlLabel
        value="end"
        className="m-0 pt-4"
        control={
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
        }
        label={
          <Typography variant="body1" sx={{ fontWeight: 500, margin: "0 4px" }}>
            Enable VMware tools quiescing
          </Typography>
        }
        labelPlacement="end"
      />
      <Typography variant="body1" gutterBottom className="mt-1">
        VMware tools quiesces applications using Microsoft VSS to ensure
        application consistency.
      </Typography>
    </Box>
  );
};
export default VMwareSettings;
