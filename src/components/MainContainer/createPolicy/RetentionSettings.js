import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@material-ui/core/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "../../GridComponent/checkBox";
import info from "../../../images/info.svg";
import AntSwitch from "../../common/AntSwitch";

const RetentionSettings = () => {
  return (
    <Box>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ marginTop: "8px" }}
          >
            Retention
          </Typography>
          <Typography variant="body1" gutterBottom>
            The{" "}
            <Link href="#" underline="none">
              retention period
            </Link>{" "}
            is the duration for which server data is retained on Druva Cloud.
          </Typography>
          <Grid container spacing={2}>
            <Grid container item xs={4} direction="column">
              <Box className="d-flex" sx={{ alignItems: "flex-end" }}>
                <TextField
                  label="Daily Snapshot for"
                  size="small"
                  className="mt-4"
                  sx={{ width: "250px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography variant="textdesc">Minutes</Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box className="d-flex" sx={{ alignItems: "flex-end" }}>
                <TextField
                  label="Weekly Snapshot for"
                  size="small"
                  className="mt-4"
                  sx={{ width: "250px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography variant="textdesc">Weeks</Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid container item xs={6} direction="column">
              <Box className="d-flex" sx={{ alignItems: "flex-end" }}>
                <TextField
                  label="Monthly Snapshot for"
                  size="small"
                  className="mt-4"
                  sx={{ width: "250px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography variant="textdesc">Months</Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box className="d-flex" sx={{ alignItems: "flex-end" }}>
                <TextField
                  label="Yearly Snapshot for"
                  size="small"
                  className="mt-4"
                  sx={{ width: "250px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography variant="textdesc">Years</Typography>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Box className="d-flex mt-2" sx={{ alignItems: "center" }}>
            <Checkbox checked sx={{ paddingLeft: "0px" }} />
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Ignore backup window for first backup
            </Typography>
            <IconButton
              aria-label="filter"
              disableRipple
              className="oui-moreButton"
            >
              <img src={info} alt="TableShapeSVG" />
            </IconButton>
          </Box>
          <Typography variant="subtitle1" sx={{ marginTop: "32px" }}>
            Data Lock
          </Typography>
          <Box className="d-flex mt-2" sx={{ alignItems: "center" }}>
            <Grid container spacing={2}>
              <Grid container item xs={4} direction="column">
                <Typography variant="body1" gutterBottom>
                  Prevents the snapshots from any accidental or mailicious
                  deletion.
                  <Link href="#" underline="none" sx={{ margin: "0 4px" }}>
                    Learn More
                  </Link>
                </Typography>
              </Grid>
              <Grid container item xs={4} direction="column">
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
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 500, margin: "0 4px" }}
                    >
                      Enable Data Lock
                    </Typography>
                  }
                  labelPlacement="end"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
  );
};
export default RetentionSettings;
