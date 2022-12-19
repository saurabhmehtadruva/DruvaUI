import React from "react";

import Popper from "@mui/material/Popper";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import { Box, InputLabel } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import "./FilterComponent.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function FilterComponent(props) {
  const IPport = ["192.168.1.90", "192.18.198.20"];
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [arrowRef, setArrowRef] = React.useState(null);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleClose = (e) => {
    var container = document.getElementsByClassName("oui-port-menuItem")[0];
    if (!container) {
      props.onClose();
    }
  };

  return (
    <div className="filter-popOver-div">
      <Popper
        sx={{
          border: (theme) =>
            theme.palette.mode === "light"
              ? "1px solid rgba(0, 0, 0, 0.2)"
              : "1px solid rgba(81, 81, 81, 1)",
        }}
        placement="bottom-end"
        modifiers={[
          {
            name: "arrow",
            enabled: true,
            options: {
              element: arrowRef,
            },
          },
        ]}
        id={props.id}
        open={props.open}
        anchorEl={props.anchorEl}
        onClose={props.onClose}
        className="filter-popOver"
      >
        <Box
          component="span"
          className="arrow"
          ref={setArrowRef}
          sx={{
            "&::before": {
              border: "none",
              backgroundColor: (theme) =>
                theme.palette.mode === "light" ? "#fff" : "#121212",
              borderLeft: (theme) =>
                theme.palette.mode === "light"
                  ? "1px solid rgba(0, 0, 0, 0.2)"
                  : "1px solid rgba(81, 81, 81, 1)",
              borderTop: (theme) =>
                theme.palette.mode === "light"
                  ? "1px solid rgba(0, 0, 0, 0.2)"
                  : "1px solid rgba(81, 81, 81, 1)",
            },
          }}
        />
        <ClickAwayListener onClickAway={handleClose}>
          <Box sx={{ bgcolor: "background.paper" }}>
            <h3
              className="filter-popover-header"
              style={{ fontSize: ".875rem" }}
            >
              Filters
            </h3>
            <div className="filter-popover-body">
              <FormControl style={{ margin: "10px 0" }}>
                <FormLabel id="filter-label" className="mb-2">
                  Hypervisor
                </FormLabel>

                <Select
                  className="mb-3"
                  style={{ width: "100%" }}
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Select</em>;
                    }

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {IPport.map((port) => (
                    <MenuItem
                      className="oui-port-menuItem"
                      key={port}
                      value={port}
                      style={getStyles(port, personName, theme)}
                    >
                      {port}
                    </MenuItem>
                  ))}
                </Select>

                <FormLabel id="demo-row-radio-buttons-group-label">
                  Status
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="configured"
                    control={<Radio />}
                    label="Configured"
                  />
                  <FormControlLabel
                    value="notConfigured"
                    control={<Radio />}
                    label="Not Configured"
                  />
                </RadioGroup>
              </FormControl>

              <div className="col-md-12 d-flex justify-content-end">
                <Button
                  variant="contained"
                  size="small"
                  style={{ maxHeight: "32px", maxWidth: "62px" }}
                >
                  Reset
                </Button>
                <Button
                  className="mx-2"
                  style={{ maxHeight: "32px", maxWidth: "62px" }}
                  size="small"
                  variant="outlined"
                  onClick={props.onClose}
                >
                  Apply
                </Button>
              </div>
            </div>
          </Box>
        </ClickAwayListener>
        {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
      </Popper>
    </div>
  );
}

export default FilterComponent;
