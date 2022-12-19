import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import Frame from "../../images/Frame1000002379.svg";
import VMwareExpSvg from "../../images/Group1000002530.svg";
import "./InAppSidebar.css";
import {useNavigate} from "react-router-dom";

// The Toolbar is a flex container, allowing flex item properites to be used to lay out the children. Override or extend the styles applied to the component.
const drawerWidth = 270;
const InAppSidebar = (props) => {
  const navigate = useNavigate();

  //const index = window.location.pathname === '/backup-proxy' ? 2 : (window.location.pathname === '/backup-policies' ? 3 : 1 );
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [state, setState] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });
  const [selectedNav, setSelectedNav] = React.useState(3);
  const [vcenterHost, setVcenterHost] = React.useState("192.162.1.58");
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: !state[anchor] });
  };

  const handleListItemClick = (event, index) => {
    setSelectedNav(index);
    if(index === 2) {
      navigate("/backup-proxy");
    } else if(index === 1) {
      navigate("/configVM");
    } else if(index === 3) {
      navigate("/vclist");
    } else if(index === 4) {
      navigate("/backup-policies");
    }
  };

  const handleChangeSelect = (event) => {
    setVcenterHost(event.target.value);
  };

  useEffect(() => {
    const ele = document.getElementsByClassName("oui-headerbar");
    if (state["left"] && matches) {
      ele[0].style.width = "calc(100% + 210px)";
    } else {
      ele[0].style.width = null;
    }
  }, [state["left"], matches]);
  return (
    <div className="filter">
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          width: state["left"] ? drawerWidth : "64px",
          [`& .MuiDrawer-paper`]: {
            width: state["left"] ? drawerWidth : "64px",
            boxSizing: "border-box",
            top: { xs: "57px", sm: "64px", md: "64px", lg: "64px" },
            zIndex: 1,
            borderRight: "none",
          },
        }}
      >
        <IconButton
          sx={{
            left: !state["left"] ? "12px" : "234px",

            position: "absolute",
            bottom: "75px",
          }}
          size="small"
          color="primary"
          aria-label="toggle"
          onClick={toggleDrawer("left", true)}
          className={state["left"] ? "oui-collapse" : "oui-expanded"}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8C14 8.41422 13.6642 8.75 13.25 8.75L4.46302 8.75L7.75009 11.6911C8.05878 11.9673 8.08512 12.4414 7.80893 12.7501C7.53273 13.0588 7.05859 13.0851 6.7499 12.8089L1.9999 8.55893C1.84089 8.41665 1.75 8.21338 1.75 8C1.75 7.78663 1.84089 7.58335 1.9999 7.44107L6.7499 3.19108C7.05859 2.91488 7.53273 2.94122 7.80893 3.24991C8.08512 3.5586 8.05878 4.03274 7.75009 4.30894L4.46302 7.25L13.25 7.25C13.6642 7.25 14 7.58579 14 8Z" fill="white"/>
          <path d="M14 8C14 8.41422 13.6642 8.75 13.25 8.75L4.46302 8.75L7.75009 11.6911C8.05878 11.9673 8.08512 12.4414 7.80893 12.7501C7.53273 13.0588 7.05859 13.0851 6.7499 12.8089L1.9999 8.55893C1.84089 8.41665 1.75 8.21338 1.75 8C1.75 7.78663 1.84089 7.58335 1.9999 7.44107L6.7499 3.19108C7.05859 2.91488 7.53273 2.94122 7.80893 3.24991C8.08512 3.5586 8.05878 4.03274 7.75009 4.30894L4.46302 7.25L13.25 7.25C13.6642 7.25 14 7.58579 14 8Z" fill={theme.palette.mode === 'light' ? "#2A2727" : "#D7D7D7"}/>
          </svg>
        </IconButton>
        <Box sx={{ paddingTop: "20px !important" }}>
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              height: state["left"] ? "80px" : "40px",
            }}
            className="site-container mb-3"
          >
            {" "}
            <div className="">
              <img src={state["left"] ? VMwareExpSvg : Frame} alt="Frame" />
            </div>
            <Typography
              variant="h6"
              noWrap
              sx={{
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "120%",
                letterSpacing: "-0.02em",
                display: state["left"] ? "flex" : "none",
              }}
            >
              VMware
            </Typography>
          </Box>
          <FormControl
            sx={{ width: "calc(100% - 40px)", display: state["left"] ? "inline-flex" : "none" }}
            className="mt-4 mb-2"
          >
            <InputLabel id="vmwareLabel">vCenter/ ESXI Host</InputLabel>
            <Select
              labelId="vmwareLabel"
              id="vmwareId"
              value={vcenterHost}
              label="vCenter/ ESXI Host"
              onChange={handleChangeSelect}
              className="oui-sideNavSelect"
            >
              <MenuItem value="192.162.1.58">
                192.162.1.58
              </MenuItem>
              <MenuItem value="192.16.165.9">192.16.165.9</MenuItem>
              <MenuItem value="192.20.16.95">192.20.16.95</MenuItem>
            </Select>
          </FormControl>
          <List className="py-0">
            <ListItem
              key="All_Virtual_Machines"
              disablePadding
              sx={{ display: "block" }}
              selected={selectedNav === 0}
            >
              <ListItemButton
                sx={{
                  minHeight: 24,
                  justifyContent: state["left"] ? "initial" : "center",
                  px: 2.5, py: state["left"] ? 0.5 : 2
                }}
                component="a"
                href="#"
                disableRipple
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginRight: state["left"] ? 1 : 0,
                    justifyContent: "center",
                    width: "16px",
                    height: "16px"
                  }}
                >
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9 4.16708V7.96708H8.1V4.16708H11.9Z" stroke={theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"} stroke-width="1.2"/>
                  <path d="M7.9 8.16708V11.9671H4.1V8.16708H7.9Z" stroke={theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"} stroke-width="1.2"/>
                  <path d="M8.74041 16.1672H2.80928C1.25812 16.1672 0 14.9051 0 13.3579V7.42676C0 5.8756 1.26203 4.61748 2.80928 4.61748H4.4464V2.97645C4.4464 1.42529 5.70842 0.167175 7.25568 0.167175H13.1868C14.738 0.167175 15.9961 1.4292 15.9961 2.97645V8.90759C15.9961 10.4588 14.7341 11.7169 13.1868 11.7169H11.5497V13.354C11.5497 14.9051 10.2877 16.1633 8.74041 16.1633V16.1672ZM2.80928 5.78964C1.90672 5.78964 1.17216 6.5242 1.17216 7.42676V13.3579C1.17216 14.2605 1.90672 14.995 2.80928 14.995H8.74041C9.64298 14.995 10.3775 14.2605 10.3775 13.3579V11.1347C10.3775 10.8104 10.6393 10.5486 10.9636 10.5486H13.1868C14.0894 10.5486 14.8239 9.81406 14.8239 8.9115V2.97645C14.8239 2.07389 14.0894 1.33934 13.1868 1.33934H7.25568C6.35311 1.33934 5.61856 2.07389 5.61856 2.97645V5.19965C5.61856 5.52395 5.35678 5.78573 5.03248 5.78573H2.80928V5.78964Z" fill="white"/>
                  <path d="M8.74041 16.1672H2.80928C1.25812 16.1672 0 14.9051 0 13.3579V7.42676C0 5.8756 1.26203 4.61748 2.80928 4.61748H4.4464V2.97645C4.4464 1.42529 5.70842 0.167175 7.25568 0.167175H13.1868C14.738 0.167175 15.9961 1.4292 15.9961 2.97645V8.90759C15.9961 10.4588 14.7341 11.7169 13.1868 11.7169H11.5497V13.354C11.5497 14.9051 10.2877 16.1633 8.74041 16.1633V16.1672ZM2.80928 5.78964C1.90672 5.78964 1.17216 6.5242 1.17216 7.42676V13.3579C1.17216 14.2605 1.90672 14.995 2.80928 14.995H8.74041C9.64298 14.995 10.3775 14.2605 10.3775 13.3579V11.1347C10.3775 10.8104 10.6393 10.5486 10.9636 10.5486H13.1868C14.0894 10.5486 14.8239 9.81406 14.8239 8.9115V2.97645C14.8239 2.07389 14.0894 1.33934 13.1868 1.33934H7.25568C6.35311 1.33934 5.61856 2.07389 5.61856 2.97645V5.19965C5.61856 5.52395 5.35678 5.78573 5.03248 5.78573H2.80928V5.78964Z" fill={theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="All Virtual Machines"
                  sx={{ display: state["left"] ? "inherit" : "none" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              key="Configured_VMs"
              disablePadding
              sx={{ display: "block" }}
              selected={selectedNav === 1}
            >
              <ListItemButton
                sx={{
                  minHeight: 24,
                  justifyContent: state["left"] ? "initial" : "center",
                  px: 2.5, py: state["left"] ? 0.5 : 2
                }}
                disableRipple
                onClick={(e) => handleListItemClick(e,1)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginRight: state["left"] ? 1 : 0,
                    justifyContent: "center",
                    width: "16px",
                    height: "16px"
                  }}
                >
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.87235 0.851263C7.95107 0.805813 8.04806 0.805813 8.12679 0.851263L8.45179 0.288347L8.12679 0.851263L14.2717 4.39904C14.3504 4.4445 14.3989 4.52849 14.3989 4.61939V11.715C14.3989 11.8059 14.3504 11.8899 14.2717 11.9353L8.12679 15.4831L8.45179 16.046L8.12678 15.4831C8.04806 15.5285 7.95108 15.5285 7.87235 15.4831L7.54735 16.046L7.87235 15.4831L1.72741 11.9353C1.64869 11.8899 1.6002 11.8059 1.6002 11.715V4.61939C1.6002 4.52849 1.64869 4.4445 1.72741 4.39905L7.87235 0.851263L7.5521 0.296573L7.87235 0.851263Z" stroke="white" stroke-width="1.3"/>
                  <path d="M7.87235 0.851263C7.95107 0.805813 8.04806 0.805813 8.12679 0.851263L8.45179 0.288347L8.12679 0.851263L14.2717 4.39904C14.3504 4.4445 14.3989 4.52849 14.3989 4.61939V11.715C14.3989 11.8059 14.3504 11.8899 14.2717 11.9353L8.12679 15.4831L8.45179 16.046L8.12678 15.4831C8.04806 15.5285 7.95108 15.5285 7.87235 15.4831L7.54735 16.046L7.87235 15.4831L1.72741 11.9353C1.64869 11.8899 1.6002 11.8059 1.6002 11.715V4.61939C1.6002 4.52849 1.64869 4.4445 1.72741 4.39905L7.87235 0.851263L7.5521 0.296573L7.87235 0.851263Z" stroke={selectedNav === 1 ? "#EC873E" : theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"} stroke-width="1.3"/>
                  <circle cx="7.99846" cy="8.16722" r="2.06331" stroke="white" stroke-width="1.3"/>
                  <circle cx="7.99846" cy="8.16722" r="2.06331" stroke={selectedNav === 1 ? "#EC873E" : theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"} stroke-width="1.3"/>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Configured VMs"
                  sx={{ display: state["left"] ? "inherit" : "none" }}
                  className="oui-selectNav"
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              key="Instant_Restored_VMs"
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 24,
                  justifyContent: state["left"] ? "initial" : "center",
                  px: 2.5, py: state["left"] ? 0.5 : 2
                }}
                component="a"
                href="#"
                disableRipple
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginRight: state["left"] ? 1 : 0,
                    justifyContent: "center",
                    width: "16px",
                    height: "16px"
                  }}
                >
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.49835 9.38678H0.670898L2.86698 1.29267L7.57286 1.16718L5.56502 7.25345H9.32972L2.86698 15.9123L4.49835 9.38678Z" stroke="white" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.49835 9.38678H0.670898L2.86698 1.29267L7.57286 1.16718L5.56502 7.25345H9.32972L2.86698 15.9123L4.49835 9.38678Z" stroke={theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"} stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Instant Restored VMs"
                  sx={{ display: state["left"] ? "inherit" : "none" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              key="Backup_Proxies"
              disablePadding
              sx={{ display: "block" }}
              selected={selectedNav === 2}
            >
              <ListItemButton
                sx={{
                  minHeight: 24,
                  justifyContent: state["left"] ? "initial" : "center",
                  px: 2.5, py: state["left"] ? 0.5 : 2
                }}
                component="a"
                disableRipple
                onClick={(e) => handleListItemClick(e,2)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginRight: state["left"] ? 1 : 0,
                    justifyContent: "center",
                    width: "16px",
                    height: "16px"
                  }}
                >
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 10.5C5.5 8.01472 7.51472 6 10 6C11.0717 6 12.0555 6.37406 12.8288 7H11.75C11.3358 7 11 7.33579 11 7.75C11 8.16421 11.3358 8.5 11.75 8.5H14.25C14.6642 8.5 15 8.16421 15 7.75V5.25C15 4.83579 14.6642 4.5 14.25 4.5C13.8358 4.5 13.5 4.83579 13.5 5.25V5.62618C12.5151 4.91784 11.3062 4.5 10 4.5C6.68629 4.5 4 7.18629 4 10.5C4 13.8137 6.68629 16.5 10 16.5C13.3137 16.5 16 13.8137 16 10.5C16 10.0858 15.6642 9.75 15.25 9.75C14.8358 9.75 14.5 10.0858 14.5 10.5C14.5 12.9853 12.4853 15 10 15C7.51472 15 5.5 12.9853 5.5 10.5Z" fill="white"/>
                <path d="M5.5 10.5C5.5 8.01472 7.51472 6 10 6C11.0717 6 12.0555 6.37406 12.8288 7H11.75C11.3358 7 11 7.33579 11 7.75C11 8.16421 11.3358 8.5 11.75 8.5H14.25C14.6642 8.5 15 8.16421 15 7.75V5.25C15 4.83579 14.6642 4.5 14.25 4.5C13.8358 4.5 13.5 4.83579 13.5 5.25V5.62618C12.5151 4.91784 11.3062 4.5 10 4.5C6.68629 4.5 4 7.18629 4 10.5C4 13.8137 6.68629 16.5 10 16.5C13.3137 16.5 16 13.8137 16 10.5C16 10.0858 15.6642 9.75 15.25 9.75C14.8358 9.75 14.5 10.0858 14.5 10.5C14.5 12.9853 12.4853 15 10 15C7.51472 15 5.5 12.9853 5.5 10.5Z" fill={selectedNav === 2 ? "#EC873E" :theme.palette.mode === 'light' ? "#1D1A1A" : "#D7D7D7"}/>
                </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Backup Proxies"
                  sx={{ display: state["left"] ? "inherit" : "none" }}
                  className="oui-selectNav"
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              key="Auto_Configuration"
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 24,
                  justifyContent: state["left"] ? "initial" : "center",
                  px: 2.5, py: state["left"] ? 0.5 : 2
                }}
                component="a"
                href="#"
                disableRipple
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginRight: state["left"] ? 1 : 0,
                    justifyContent: "center",
                    width: "16px",
                    height: "16px"
                  }}
                >
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.87235 1.59635C7.95107 1.5509 8.04806 1.5509 8.12679 1.59635L8.45179 1.03343L8.12679 1.59635L14.2717 5.14413C14.3504 5.18958 14.3989 5.27358 14.3989 5.36448V12.46C14.3989 12.5509 14.3504 12.6349 14.2717 12.6804L8.12679 16.2282L8.45179 16.7911L8.12678 16.2282C8.04806 16.2736 7.95108 16.2736 7.87235 16.2282L7.54735 16.7911L7.87235 16.2282L1.72741 12.6804C1.64869 12.6349 1.6002 12.5509 1.6002 12.46V5.36448C1.6002 5.27358 1.64869 5.18958 1.72741 5.14413L7.87235 1.59635L7.5521 1.04166L7.87235 1.59635Z" stroke="white" stroke-width="1.3"/>
                  <path d="M7.87235 1.59635C7.95107 1.5509 8.04806 1.5509 8.12679 1.59635L8.45179 1.03343L8.12679 1.59635L14.2717 5.14413C14.3504 5.18958 14.3989 5.27358 14.3989 5.36448V12.46C14.3989 12.5509 14.3504 12.6349 14.2717 12.6804L8.12679 16.2282L8.45179 16.7911L8.12678 16.2282C8.04806 16.2736 7.95108 16.2736 7.87235 16.2282L7.54735 16.7911L7.87235 16.2282L1.72741 12.6804C1.64869 12.6349 1.6002 12.5509 1.6002 12.46V5.36448C1.6002 5.27358 1.64869 5.18958 1.72741 5.14413L7.87235 1.59635L7.5521 1.04166L7.87235 1.59635Z" stroke={theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"} stroke-width="1.3"/>
                  <path d="M9.93489 8.45528C10.1664 8.59033 10.1664 8.92486 9.93488 9.05992L6.91952 10.8189C6.68619 10.955 6.39316 10.7867 6.39316 10.5166L6.39316 6.99864C6.39316 6.72851 6.68619 6.5602 6.91952 6.69631L9.93489 8.45528Z" stroke="white" stroke-width="1.3"/>
                  <path d="M9.93489 8.45528C10.1664 8.59033 10.1664 8.92486 9.93488 9.05992L6.91952 10.8189C6.68619 10.955 6.39316 10.7867 6.39316 10.5166L6.39316 6.99864C6.39316 6.72851 6.68619 6.5602 6.91952 6.69631L9.93489 8.45528Z" stroke={theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"} stroke-width="1.3"/>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Auto Configuration"
                  sx={{ display: state["left"] ? "inherit" : "none" }}
                />
              </ListItemButton>
            </ListItem>
            <Divider
              variant="middle"
              component="li"
              className="my-2 mx-3"
            />
            <ListItem
              key="All_Vcenters"
              disablePadding
              sx={{ display: "block" }}
              selected={selectedNav === 3}
            >
              <ListItemButton
                sx={{
                  minHeight: 24,
                  justifyContent: state["left"] ? "initial" : "center",
                  px: 2.5, py: state["left"] ? 0.5 : 2
                }}
                component="a"
                onClick={(e) => handleListItemClick(e,3)}
                disableRipple
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginRight: state["left"] ? 1 : 0,
                    justifyContent: "center",
                    width: "16px",
                    height: "16px"
                  }}
                >
                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.02985 9.54911H1.19403V2.10632H8.67662V2.94214H9.87065V1.70831C9.87065 1.2705 9.51244 0.912292 9.07463 0.912292H0.79602C0.358209 0.912292 0 1.2705 0 1.70831V9.94712C0 10.3849 0.358209 10.7431 0.79602 10.7431H2.02985V9.54911Z" fill="white"/>
                  <path d="M2.02985 9.54911H1.19403V2.10632H8.67662V2.94214H9.87065V1.70831C9.87065 1.2705 9.51244 0.912292 9.07463 0.912292H0.79602C0.358209 0.912292 0 1.2705 0 1.70831V9.94712C0 10.3849 0.358209 10.7431 0.79602 10.7431H2.02985V9.54911Z" fill={selectedNav === 3 ? "#EC873E" : theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                  <path d="M13.1294 12.0914C12.811 12.0914 12.5323 12.171 12.2935 12.2904L11.0199 11.0566C11.1393 10.8178 11.2189 10.5392 11.2189 10.2208C11.2189 9.90236 11.1393 9.62375 10.9801 9.34515L12.2139 8.11131C12.4925 8.23072 12.7712 8.35012 13.0896 8.35012C14.1244 8.35012 14.9602 7.5143 14.9602 6.47947C14.9602 5.44465 14.1244 4.60883 13.0896 4.60883C12.0547 4.60883 11.2189 5.44465 11.2189 6.47947C11.2189 6.75808 11.2985 7.03669 11.3781 7.27549L10.1443 8.50932C9.90548 8.38992 9.62688 8.35012 9.34827 8.35012C9.02986 8.35012 8.75125 8.42972 8.51245 8.54913L7.27862 7.31529C7.39802 7.07649 7.47762 6.79788 7.47762 6.47947C7.47762 5.44465 6.6418 4.60883 5.60698 4.60883C4.57215 4.60883 3.73633 5.44465 3.73633 6.47947C3.73633 7.5143 4.57215 8.35012 5.60698 8.35012C5.88558 8.35012 6.16419 8.27052 6.4428 8.15112L7.67663 9.38495C7.55722 9.62375 7.47762 9.90236 7.47762 10.2208C7.47762 10.4994 7.55722 10.778 7.63683 11.0168L6.403 12.2506C6.16419 12.1312 5.88558 12.0914 5.60698 12.0914C4.57215 12.0914 3.73633 12.9272 3.73633 13.9621C3.73633 14.9969 4.57215 15.8327 5.60698 15.8327C6.6418 15.8327 7.47762 14.9969 7.47762 13.9621C7.47762 13.6437 7.39802 13.365 7.23882 13.0864L8.47265 11.8526C8.75125 11.972 9.02986 12.0914 9.34827 12.0914C9.62688 12.0914 9.90548 12.0118 10.1841 11.8924L11.4179 13.1262C11.2985 13.365 11.2189 13.6437 11.2189 13.9621C11.2189 14.9969 12.0547 15.8327 13.0896 15.8327C14.1244 15.8327 14.9602 14.9969 14.9602 13.9621C15 12.9272 14.1642 12.0914 13.1294 12.0914ZM13.1294 5.80286C13.4876 5.80286 13.806 6.12126 13.806 6.47947C13.806 6.83768 13.4876 7.15609 13.1294 7.15609C12.7712 7.15609 12.4527 6.83768 12.4527 6.47947C12.4527 6.12126 12.7314 5.80286 13.1294 5.80286ZM4.93036 6.47947C4.93036 6.12126 5.24877 5.80286 5.60698 5.80286C5.96518 5.80286 6.28359 6.12126 6.28359 6.47947C6.28359 6.83768 5.96518 7.15609 5.60698 7.15609C5.24877 7.15609 4.93036 6.83768 4.93036 6.47947ZM5.60698 14.6387C5.24877 14.6387 4.93036 14.3203 4.93036 13.9621C4.93036 13.6039 5.24877 13.2854 5.60698 13.2854C5.96518 13.2854 6.28359 13.6039 6.28359 13.9621C6.28359 14.3203 6.00499 14.6387 5.60698 14.6387ZM8.71145 10.2208C8.71145 9.86256 9.02986 9.54415 9.38807 9.54415C9.74628 9.54415 10.0647 9.86256 10.0647 10.2208C10.0647 10.579 9.74628 10.8974 9.38807 10.8974C9.02986 10.8974 8.71145 10.579 8.71145 10.2208ZM13.1294 14.6387C12.7712 14.6387 12.4527 14.3203 12.4527 13.9621C12.4527 13.6039 12.7712 13.2854 13.1294 13.2854C13.4876 13.2854 13.806 13.6039 13.806 13.9621C13.806 14.3203 13.4876 14.6387 13.1294 14.6387Z" fill="white"/>
                  <path d="M13.1294 12.0914C12.811 12.0914 12.5323 12.171 12.2935 12.2904L11.0199 11.0566C11.1393 10.8178 11.2189 10.5392 11.2189 10.2208C11.2189 9.90236 11.1393 9.62375 10.9801 9.34515L12.2139 8.11131C12.4925 8.23072 12.7712 8.35012 13.0896 8.35012C14.1244 8.35012 14.9602 7.5143 14.9602 6.47947C14.9602 5.44465 14.1244 4.60883 13.0896 4.60883C12.0547 4.60883 11.2189 5.44465 11.2189 6.47947C11.2189 6.75808 11.2985 7.03669 11.3781 7.27549L10.1443 8.50932C9.90548 8.38992 9.62688 8.35012 9.34827 8.35012C9.02986 8.35012 8.75125 8.42972 8.51245 8.54913L7.27862 7.31529C7.39802 7.07649 7.47762 6.79788 7.47762 6.47947C7.47762 5.44465 6.6418 4.60883 5.60698 4.60883C4.57215 4.60883 3.73633 5.44465 3.73633 6.47947C3.73633 7.5143 4.57215 8.35012 5.60698 8.35012C5.88558 8.35012 6.16419 8.27052 6.4428 8.15112L7.67663 9.38495C7.55722 9.62375 7.47762 9.90236 7.47762 10.2208C7.47762 10.4994 7.55722 10.778 7.63683 11.0168L6.403 12.2506C6.16419 12.1312 5.88558 12.0914 5.60698 12.0914C4.57215 12.0914 3.73633 12.9272 3.73633 13.9621C3.73633 14.9969 4.57215 15.8327 5.60698 15.8327C6.6418 15.8327 7.47762 14.9969 7.47762 13.9621C7.47762 13.6437 7.39802 13.365 7.23882 13.0864L8.47265 11.8526C8.75125 11.972 9.02986 12.0914 9.34827 12.0914C9.62688 12.0914 9.90548 12.0118 10.1841 11.8924L11.4179 13.1262C11.2985 13.365 11.2189 13.6437 11.2189 13.9621C11.2189 14.9969 12.0547 15.8327 13.0896 15.8327C14.1244 15.8327 14.9602 14.9969 14.9602 13.9621C15 12.9272 14.1642 12.0914 13.1294 12.0914ZM13.1294 5.80286C13.4876 5.80286 13.806 6.12126 13.806 6.47947C13.806 6.83768 13.4876 7.15609 13.1294 7.15609C12.7712 7.15609 12.4527 6.83768 12.4527 6.47947C12.4527 6.12126 12.7314 5.80286 13.1294 5.80286ZM4.93036 6.47947C4.93036 6.12126 5.24877 5.80286 5.60698 5.80286C5.96518 5.80286 6.28359 6.12126 6.28359 6.47947C6.28359 6.83768 5.96518 7.15609 5.60698 7.15609C5.24877 7.15609 4.93036 6.83768 4.93036 6.47947ZM5.60698 14.6387C5.24877 14.6387 4.93036 14.3203 4.93036 13.9621C4.93036 13.6039 5.24877 13.2854 5.60698 13.2854C5.96518 13.2854 6.28359 13.6039 6.28359 13.9621C6.28359 14.3203 6.00499 14.6387 5.60698 14.6387ZM8.71145 10.2208C8.71145 9.86256 9.02986 9.54415 9.38807 9.54415C9.74628 9.54415 10.0647 9.86256 10.0647 10.2208C10.0647 10.579 9.74628 10.8974 9.38807 10.8974C9.02986 10.8974 8.71145 10.579 8.71145 10.2208ZM13.1294 14.6387C12.7712 14.6387 12.4527 14.3203 12.4527 13.9621C12.4527 13.6039 12.7712 13.2854 13.1294 13.2854C13.4876 13.2854 13.806 13.6039 13.806 13.9621C13.806 14.3203 13.4876 14.6387 13.1294 14.6387Z" fill={selectedNav === 3 ? "#EC873E" : theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="All Vcenters/ESXi hosts"
                  sx={{ display: state["left"] ? "inherit" : "none" }}
                  className="oui-selectNav"
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              key="Backup_Policies"
              disablePadding
              sx={{ display: "block" }}
              selected={selectedNav === 4}
            >
              <ListItemButton
                sx={{
                  minHeight: 24,
                  justifyContent: state["left"] ? "initial" : "center",
                  px: 2.5, py: state["left"] ? 0.5 : 2
                }}
                component="a"
                onClick={(e) => handleListItemClick(e,4)}
                disableRipple
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginRight: state["left"] ? 1 : 0,
                    justifyContent: "center",
                    width: "16px",
                    height: "16px"
                  }}
                >
                <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.12 2.03267L11.6 4.51267V15.2327C11.6 15.4327 11.4 15.6327 11.2 15.6327H1.6C1.4 15.6327 1.2 15.4327 1.2 15.2327V2.43267C1.2 2.23267 1.4 2.03267 1.6 2.03267H9.12ZM9.6 0.832672H1.6C0.72 0.832672 0 1.55267 0 2.43267V15.2327C0 16.1127 0.72 16.8327 1.6 16.8327H11.2C12.08 16.8327 12.8 16.1127 12.8 15.2327V4.03267L9.6 0.832672Z" fill="white"/>
                <path d="M9.12 2.03267L11.6 4.51267V15.2327C11.6 15.4327 11.4 15.6327 11.2 15.6327H1.6C1.4 15.6327 1.2 15.4327 1.2 15.2327V2.43267C1.2 2.23267 1.4 2.03267 1.6 2.03267H9.12ZM9.6 0.832672H1.6C0.72 0.832672 0 1.55267 0 2.43267V15.2327C0 16.1127 0.72 16.8327 1.6 16.8327H11.2C12.08 16.8327 12.8 16.1127 12.8 15.2327V4.03267L9.6 0.832672Z" fill={selectedNav === 4 ? "#EC873E" : theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                <path d="M8.4 2.03267V4.03267V5.23267H9.6H11.6V15.2327C11.6 15.4327 11.4 15.6327 11.2 15.6327H1.6C1.4 15.6327 1.2 15.4327 1.2 15.2327V2.43267C1.2 2.23267 1.4 2.03267 1.6 2.03267H8.4ZM9.6 0.832672H1.6C0.72 0.832672 0 1.55267 0 2.43267V15.2327C0 16.1127 0.72 16.8327 1.6 16.8327H11.2C12.08 16.8327 12.8 16.1127 12.8 15.2327V4.03267H9.6V0.832672Z" fill="white"/>
                <path d="M8.4 2.03267V4.03267V5.23267H9.6H11.6V15.2327C11.6 15.4327 11.4 15.6327 11.2 15.6327H1.6C1.4 15.6327 1.2 15.4327 1.2 15.2327V2.43267C1.2 2.23267 1.4 2.03267 1.6 2.03267H8.4ZM9.6 0.832672H1.6C0.72 0.832672 0 1.55267 0 2.43267V15.2327C0 16.1127 0.72 16.8327 1.6 16.8327H11.2C12.08 16.8327 12.8 16.1127 12.8 15.2327V4.03267H9.6V0.832672Z" fill={selectedNav === 4 ? "#EC873E" : theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                <path d="M9.12 2.03267L11.6 4.51267V15.2327C11.6 15.4327 11.4 15.6327 11.2 15.6327H1.6C1.4 15.6327 1.2 15.4327 1.2 15.2327V2.43267C1.2 2.23267 1.4 2.03267 1.6 2.03267H9.12ZM9.6 0.832672H1.6C0.72 0.832672 0 1.55267 0 2.43267V15.2327C0 16.1127 0.72 16.8327 1.6 16.8327H11.2C12.08 16.8327 12.8 16.1127 12.8 15.2327V4.03267L9.6 0.832672Z" fill="white"/>
                <path d="M9.12 2.03267L11.6 4.51267V15.2327C11.6 15.4327 11.4 15.6327 11.2 15.6327H1.6C1.4 15.6327 1.2 15.4327 1.2 15.2327V2.43267C1.2 2.23267 1.4 2.03267 1.6 2.03267H9.12ZM9.6 0.832672H1.6C0.72 0.832672 0 1.55267 0 2.43267V15.2327C0 16.1127 0.72 16.8327 1.6 16.8327H11.2C12.08 16.8327 12.8 16.1127 12.8 15.2327V4.03267L9.6 0.832672Z" fill={selectedNav === 4 ? "#EC873E" : theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                <path d="M8.4 2.03267V4.03267V5.23267H9.6H11.6V15.2327C11.6 15.4327 11.4 15.6327 11.2 15.6327H1.6C1.4 15.6327 1.2 15.4327 1.2 15.2327V2.43267C1.2 2.23267 1.4 2.03267 1.6 2.03267H8.4ZM9.6 0.832672H1.6C0.72 0.832672 0 1.55267 0 2.43267V15.2327C0 16.1127 0.72 16.8327 1.6 16.8327H11.2C12.08 16.8327 12.8 16.1127 12.8 15.2327V4.03267H9.6V0.832672Z" fill="white"/>
                <path d="M8.4 2.03267V4.03267V5.23267H9.6H11.6V15.2327C11.6 15.4327 11.4 15.6327 11.2 15.6327H1.6C1.4 15.6327 1.2 15.4327 1.2 15.2327V2.43267C1.2 2.23267 1.4 2.03267 1.6 2.03267H8.4ZM9.6 0.832672H1.6C0.72 0.832672 0 1.55267 0 2.43267V15.2327C0 16.1127 0.72 16.8327 1.6 16.8327H11.2C12.08 16.8327 12.8 16.1127 12.8 15.2327V4.03267H9.6V0.832672Z" fill={selectedNav === 4 ? "#EC873E" : theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                <path d="M9.40039 9.43257H3.00039C2.68039 9.43257 2.40039 9.15257 2.40039 8.83257C2.40039 8.51257 2.68039 8.23257 3.00039 8.23257H9.40039C9.72039 8.23257 10.0004 8.51257 10.0004 8.83257C10.0004 9.15257 9.72039 9.43257 9.40039 9.43257Z" fill="white"/>
                <path d="M9.40039 9.43257H3.00039C2.68039 9.43257 2.40039 9.15257 2.40039 8.83257C2.40039 8.51257 2.68039 8.23257 3.00039 8.23257H9.40039C9.72039 8.23257 10.0004 8.51257 10.0004 8.83257C10.0004 9.15257 9.72039 9.43257 9.40039 9.43257Z" fill={selectedNav === 4 ? "#EC873E" : theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                <path d="M9.40039 12.6328H3.00039C2.68039 12.6328 2.40039 12.3528 2.40039 12.0328C2.40039 11.7128 2.68039 11.4328 3.00039 11.4328H9.40039C9.72039 11.4328 10.0004 11.7128 10.0004 12.0328C10.0004 12.3528 9.72039 12.6328 9.40039 12.6328Z" fill="white"/>
                <path d="M9.40039 12.6328H3.00039C2.68039 12.6328 2.40039 12.3528 2.40039 12.0328C2.40039 11.7128 2.68039 11.4328 3.00039 11.4328H9.40039C9.72039 11.4328 10.0004 11.7128 10.0004 12.0328C10.0004 12.3528 9.72039 12.6328 9.40039 12.6328Z" fill={selectedNav === 4 ? "#EC873E" : theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Backup Policies"
                  sx={{ display: state["left"] ? "inherit" : "none" }}
                  className="oui-selectNav"
                />
              </ListItemButton>
            </ListItem>
            <ListItem key="All_Jobs" disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 24,
                  justifyContent: state["left"] ? "initial" : "center",
                  px: 2.5, py: state["left"] ? 0.5 : 2
                }}
                component="a"
                href="#"
                disableRipple
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    marginRight: state["left"] ? 1 : 0,
                    justifyContent: "center",
                    width: "16px",
                    height: "16px"
                  }}
                >
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0005 14.7098H0.9995C0.447776 14.7098 0 14.262 0 13.7103V4.63265C0 4.08093 0.447776 3.63315 0.9995 3.63315H15.0005C15.5522 3.63315 16 4.08093 16 4.63265V13.7143C16 14.262 15.5522 14.7098 15.0005 14.7098ZM1.1994 13.5104H14.8006V4.83255H1.1994V13.5104Z" fill="white"/>
                  <path d="M15.0005 14.7098H0.9995C0.447776 14.7098 0 14.262 0 13.7103V4.63265C0 4.08093 0.447776 3.63315 0.9995 3.63315H15.0005C15.5522 3.63315 16 4.08093 16 4.63265V13.7143C16 14.262 15.5522 14.7098 15.0005 14.7098ZM1.1994 13.5104H14.8006V4.83255H1.1994V13.5104Z" fill={theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                  <path d="M11.7944 5.33267C11.4625 5.33267 11.1947 5.06481 11.1947 4.73297V2.26795C11.1947 2.13602 11.0907 2.03207 10.9588 2.03207H5.04173C4.91379 2.03207 4.80585 2.13602 4.80585 2.26795V4.73297C4.80585 5.06481 4.53798 5.33267 4.20615 5.33267C3.87431 5.33267 3.60645 5.06481 3.60645 4.73297V2.26795C3.60645 1.47635 4.25012 0.832672 5.04173 0.832672H10.9588C11.7504 0.832672 12.3941 1.47635 12.3941 2.26795V4.73297C12.3941 5.06081 12.1262 5.33267 11.7944 5.33267Z" fill="white"/>
                  <path d="M11.7944 5.33267C11.4625 5.33267 11.1947 5.06481 11.1947 4.73297V2.26795C11.1947 2.13602 11.0907 2.03207 10.9588 2.03207H5.04173C4.91379 2.03207 4.80585 2.13602 4.80585 2.26795V4.73297C4.80585 5.06481 4.53798 5.33267 4.20615 5.33267C3.87431 5.33267 3.60645 5.06481 3.60645 4.73297V2.26795C3.60645 1.47635 4.25012 0.832672 5.04173 0.832672H10.9588C11.7504 0.832672 12.3941 1.47635 12.3941 2.26795V4.73297C12.3941 5.06081 12.1262 5.33267 11.7944 5.33267Z" fill={theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="All Jobs"
                  sx={{ display: state["left"] ? "inherit" : "none" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default InAppSidebar;
