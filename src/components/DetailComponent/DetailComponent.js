import React, { useRef, useEffect } from "react";

import { useParams } from "react-router-dom";
import { FormHelperText, Button, Menu, MenuItem } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SummaryDetailComponent from "../SummaryDetailComponent/SummaryDetailComponent";
import BackupDetailComponent from "../BackupDetailComponent/BackupDetailComponent";
import Typography from "@mui/material/Typography";
import ArrowClockWiseSVG from "../../images/ArrowClockwise.svg";

function DetailComponent() {
  const tabsActions = useRef();

  const ele = useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [transitioned, setTransitioned] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const params = useParams();
  const [tabIndexValue, setTabIndexValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setTabIndexValue(newValue);
  };

  useEffect(() => {
    ele.current = document.getElementsByClassName("oui-tabs")[0];
    if (ele.current) reSizeObserver.observe(ele.current);
  });

  let reSizeObserver = new ResizeObserver(() => {
    if (tabsActions) {
      tabsActions.current.updateIndicator();
    }
  });

  return (
    <div style={{ flexGrow: 1 }}>
      <Box sx={{ flexDirection: 'row' }} className="d-flex mt-3">
      <Box sx={{ flexGrow: 1, justifyContent: 'flex-start' }} className="mb-2 ps-4">
          <div>
            <FormHelperText>Configured VMs</FormHelperText>
          </div>
          <Typography
                sx={{ textAlign: "start", fontWeight: "500", fontSize: "24px" }}
                component="div"
                className="d-flex"
              >
                {params.detailID}
              </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, }} className="mb-2">
        <Tabs
          action={tabsActions}
          variant="standard"
          value={tabIndexValue}
          onChange={handleChange}
          centered
          className="oui-tabs mt-3"
        >
          <Tab label="Summary" />
          <Tab label="Backups" />
        </Tabs>
        </Box>
        <div className="col-sm-4 justify-content-end mt-2 px-0 d-flex h-25 pe-4">
          <Button variant="contained" size="small" startIcon={<img alt="ArrowClockWiseSVG" src={ArrowClockWiseSVG}/>}>
            Backup Now
          </Button>
          <Menu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              Edit
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Duplicate
            </MenuItem>
          </Menu>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            className="oui-moreButton"
            disableRipple
          >
            <MoreVertIcon />
          </IconButton>
        </div>
      </Box>
      <Box
        sx={{ padding: 3, maxHeight: "calc(100% - 90px)", overflow: "overlay", paddingTop: 0 }}
      >
        {tabIndexValue === 0 && (
          <Box>
            <SummaryDetailComponent />
          </Box>
        )}
        {tabIndexValue === 1 && (
          <Box>
            <BackupDetailComponent />
          </Box>
        )}
      </Box>
    </div>
  );
}
export default DetailComponent;
