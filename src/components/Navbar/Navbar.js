import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { Autocomplete, Divider } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Popover from "@mui/material/Popover";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Sidebar from "../Sidebar/Sidebar";
import ToggleTheme from "../common/ToggleTheme";
import "./Navbar.css";
import Link from '@mui/material/Link';
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import HybSVG from "../../images/hybridworkloads-grey-outline.svg";
import OrgSVG from "../../images/Shape.svg";
import SettingsSVG from "../../images/Settings.svg";
import AlertsSVG from "../../images/Alert.svg";
import FileServerSVG from "../../images/FileServer.svg";
import NASSVG from "../../images/NAS.svg";
import VMwareSVG from "../../images/VMware.svg";
import SQLSVG from "../../images/SQL.svg";
import HyperVSVG from "../../images/HyperV.svg";
import AHVSVG from "../../images/AHV.svg";
import OracleSVG from "../../images/Oracle.svg";
import RightArrowWrkSVG from "../../images/rightArrowWrk.svg";
import Stack from "@mui/material/Stack";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import { useTheme } from "@mui/material/styles";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [protectPopover, setProtectPopover] = React.useState(null);
  const [orgName, setOrgname] = React.useState("All Organizations");
  const open = Boolean(anchorEl);
  const openProtect = Boolean(protectPopover);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickProtect = (event) => {
    setProtectPopover(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseProtect = () => {
    setProtectPopover(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const theme = useTheme();

  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <AppBar position="static" color="headerBar" className="oui-headerbar" sx={{ boxShadow: "none",}}>
          <Container maxWidth="xl" style={{ margin: 0, maxWidth: "100%" }}>
            <Toolbar disableGutters>
              <Sidebar />
              <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                <div className="me-2">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2179_236959)">
                  <path d="M16.1031 6.88998H7.4631C7.30397 6.88998 7.15136 6.95319 7.03883 7.06571C6.92631 7.17823 6.8631 7.33085 6.8631 7.48998V11C6.85813 11.0465 6.85813 11.0934 6.8631 11.14C6.85814 11.1832 6.85814 11.2268 6.8631 11.27V14.76C6.86308 14.92 6.92597 15.0737 7.03821 15.1878C7.15046 15.3019 7.30305 15.3674 7.4631 15.37H16.1031C16.2649 15.37 16.42 15.3057 16.5344 15.1913C16.6488 15.0769 16.7131 14.9218 16.7131 14.76V7.48998C16.7131 7.41033 16.6973 7.33149 16.6665 7.25803C16.6357 7.18458 16.5906 7.11798 16.5338 7.06214C16.4771 7.00629 16.4097 6.9623 16.3358 6.93275C16.2618 6.90319 16.1827 6.88865 16.1031 6.88998ZM15.4931 14.13H8.0731V11.86H15.4931V14.13ZM15.4931 10.37H8.0731V8.09998H15.4931V10.37Z" fill={theme.palette.mode === 'light' ? "#6C757D" : "#D7D7D7"}/>
                  <path d="M14.333 13.58C14.4486 13.5741 14.56 13.5343 14.6532 13.4655C14.7463 13.3968 14.8172 13.3021 14.857 13.1934C14.8968 13.0846 14.9037 12.9665 14.8768 12.8539C14.8499 12.7413 14.7905 12.639 14.706 12.5599C14.6214 12.4808 14.5154 12.4283 14.4012 12.409C14.287 12.3897 14.1697 12.4044 14.0638 12.4514C13.958 12.4983 13.8682 12.5753 13.8058 12.6729C13.7435 12.7704 13.7112 12.8842 13.713 13C13.7128 13.0796 13.729 13.1585 13.7606 13.2316C13.7922 13.3047 13.8386 13.3705 13.8967 13.4249C13.9549 13.4793 14.0237 13.5212 14.0987 13.5479C14.1738 13.5746 14.2535 13.5855 14.333 13.58Z" fill={theme.palette.mode === 'light' ? "#6C757D" : "#D7D7D7"}/>
                  <path d="M14.3329 9.82C14.4456 9.81221 14.5535 9.77169 14.6435 9.70341C14.7335 9.63513 14.8016 9.54206 14.8394 9.43564C14.8772 9.32921 14.8832 9.21405 14.8565 9.1043C14.8298 8.99455 14.7716 8.89498 14.6891 8.81782C14.6066 8.74066 14.5034 8.68926 14.3921 8.66993C14.2808 8.6506 14.1663 8.66419 14.0627 8.70902C13.959 8.75386 13.8707 8.82799 13.8085 8.92231C13.7464 9.01663 13.7132 9.12705 13.7129 9.24C13.7127 9.31965 13.7289 9.39849 13.7605 9.4716C13.7922 9.54471 13.8385 9.61052 13.8967 9.66494C13.9548 9.71935 14.0236 9.7612 14.0986 9.78788C14.1737 9.81456 14.2534 9.82549 14.3329 9.82Z" fill={theme.palette.mode === 'light' ? "#6C757D" : "#D7D7D7"}/>
                  <path d="M5.40266 12H3.94266C3.41223 12.0199 2.89562 11.8282 2.50648 11.4672C2.11734 11.1062 1.88755 10.6054 1.86766 10.075C1.84777 9.54455 2.0394 9.02794 2.40041 8.6388C2.76142 8.24966 3.26223 8.01987 3.79266 7.99998C3.90824 7.99449 4.01976 7.9557 4.11379 7.88828C4.20783 7.82086 4.28036 7.72768 4.32266 7.61998C4.36004 7.51537 4.36862 7.40263 4.34751 7.29356C4.3264 7.18449 4.27637 7.0831 4.20266 6.99998C3.95469 6.71008 3.7948 6.35532 3.74186 5.97752C3.68892 5.59973 3.74513 5.21468 3.90385 4.86779C4.06258 4.5209 4.31721 4.22663 4.6377 4.01972C4.9582 3.8128 5.33118 3.70186 5.71266 3.69998C6.14729 3.69837 6.56988 3.84275 6.91266 4.10998C6.98136 4.16321 7.06049 4.2014 7.1449 4.22207C7.22932 4.24275 7.31713 4.24544 7.40266 4.22998C7.55305 4.20199 7.68812 4.12024 7.78266 3.99998C8.14922 3.39104 8.66674 2.88701 9.28514 2.53664C9.90354 2.18627 10.6019 2.00142 11.3127 1.99998C13.3827 1.99998 15.4727 2.99998 15.4727 4.99998C15.4727 5.16442 15.538 5.32212 15.6543 5.43839C15.7705 5.55466 15.9282 5.61998 16.0927 5.61998C16.2571 5.61998 16.4148 5.55466 16.5311 5.43839C16.6473 5.32212 16.7127 5.16442 16.7127 4.99998C16.7127 2.49998 14.4427 0.719982 11.3127 0.719982C10.4972 0.718279 9.69218 0.903 8.95905 1.26003C8.22593 1.61706 7.58412 2.13695 7.08266 2.77998C6.59033 2.54319 6.046 2.43514 5.50056 2.46594C4.95512 2.49674 4.4264 2.66539 3.96387 2.95609C3.50133 3.2468 3.12008 3.65008 2.85579 4.1282C2.5915 4.60633 2.4528 5.14367 2.45266 5.68998C2.44278 6.15655 2.53137 6.61996 2.71266 7.04998C2.015 7.32836 1.43617 7.84118 1.07576 8.50023C0.715362 9.15927 0.595922 9.92331 0.737994 10.6609C0.880066 11.3985 1.27477 12.0635 1.85419 12.5415C2.4336 13.0195 3.16151 13.2807 3.91266 13.28H5.40266C5.56709 13.28 5.72479 13.2147 5.84106 13.0984C5.95734 12.9821 6.02266 12.8244 6.02266 12.66C6.02814 12.5753 6.01616 12.4903 5.98746 12.4104C5.95876 12.3305 5.91396 12.2574 5.85584 12.1955C5.79771 12.1336 5.72749 12.0843 5.64954 12.0507C5.57159 12.0171 5.48756 11.9998 5.40266 12Z" fill={theme.palette.mode === 'light' ? "#6C757D" : "#D7D7D7"}/>
                  </g>
                  <defs>
                  <clipPath id="clip0_2179_236959">
                  <rect width="16" height="16" fill="white" transform="translate(0.712891)"/>
                  </clipPath>
                  </defs>
                  </svg>
                </div>
                <Typography
                  variant="dashBoard"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    textDecoration: "none",
                  }}
                >
                  Hybrid Workloads
                </Typography>
                <div className="mx-3 oui-slash" />
                <Button
                  aria-describedby="OpenOrg"
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={handleClick}
                  variant="navOutlined"
                  startIcon={<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.41684 8.97748C3.75404 8.97748 4.02739 8.70413 4.02739 8.36693C4.02739 8.02973 3.75404 7.75637 3.41684 7.75637C3.07964 7.75637 2.80628 8.02973 2.80628 8.36693C2.80628 8.70413 3.07964 8.97748 3.41684 8.97748ZM4.02739 10.1986C4.02739 10.5358 3.75404 10.8092 3.41684 10.8092C3.07964 10.8092 2.80628 10.5358 2.80628 10.1986C2.80628 9.8614 3.07964 9.58804 3.41684 9.58804C3.75404 9.58804 4.02739 9.8614 4.02739 10.1986ZM3.41684 7.14581C3.75404 7.14581 4.02739 6.87246 4.02739 6.53526C4.02739 6.19805 3.75404 5.9247 3.41684 5.9247C3.07964 5.9247 2.80628 6.19805 2.80628 6.53526C2.80628 6.87246 3.07964 7.14581 3.41684 7.14581ZM4.02739 4.70359C4.02739 5.04079 3.75404 5.31414 3.41684 5.31414C3.07964 5.31414 2.80628 5.04079 2.80628 4.70359C2.80628 4.36638 3.07964 4.09303 3.41684 4.09303C3.75404 4.09303 4.02739 4.36638 4.02739 4.70359ZM3.41684 3.48247C3.75404 3.48247 4.02739 3.20912 4.02739 2.87192C4.02739 2.53471 3.75404 2.26136 3.41684 2.26136C3.07964 2.26136 2.80628 2.53471 2.80628 2.87192C2.80628 3.20912 3.07964 3.48247 3.41684 3.48247ZM7.69074 1.80344V2.26136H10.5909C11.3496 2.26136 11.9646 2.87641 11.9646 3.63511V11.8776C11.9646 12.1305 11.7596 12.3355 11.5067 12.3355H9.67505V10.6565C9.67505 10.4879 9.53837 10.3512 9.36977 10.3512H7.84338C7.67477 10.3512 7.5381 10.4879 7.5381 10.6565V12.3355H1.43253C1.17963 12.3355 0.974609 12.1305 0.974609 11.8776V1.80344C0.974609 1.04474 1.58966 0.429688 2.34836 0.429688H6.31698C7.07569 0.429688 7.69074 1.04474 7.69074 1.80344ZM2.34836 1.34552C2.09546 1.34552 1.89044 1.55054 1.89044 1.80344V11.4197H5.24851V3.63511C5.24851 2.87641 5.86356 2.26136 6.62226 2.26136H6.7749V1.80344C6.7749 1.55054 6.56988 1.34552 6.31698 1.34552H2.34836ZM10.133 8.36693C10.133 8.02973 9.85961 7.75637 9.52241 7.75637C9.18521 7.75637 8.91185 8.02973 8.91185 8.36693C8.91185 8.70413 9.18521 8.97748 9.52241 8.97748C9.85961 8.97748 10.133 8.70413 10.133 8.36693ZM7.69074 8.97748C8.02794 8.97748 8.30129 8.70413 8.30129 8.36693C8.30129 8.02973 8.02794 7.75637 7.69074 7.75637C7.35354 7.75637 7.08018 8.02973 7.08018 8.36693C7.08018 8.70413 7.35354 8.97748 7.69074 8.97748ZM10.133 6.53526C10.133 6.19806 9.85961 5.9247 9.52241 5.9247C9.18521 5.9247 8.91185 6.19806 8.91185 6.53526C8.91185 6.87246 9.18521 7.14581 9.52241 7.14581C9.85961 7.14581 10.133 6.87246 10.133 6.53526ZM7.69074 7.14581C8.02794 7.14581 8.30129 6.87246 8.30129 6.53526C8.30129 6.19806 8.02794 5.9247 7.69074 5.9247C7.35354 5.9247 7.08018 6.19806 7.08018 6.53526C7.08018 6.87246 7.35354 7.14581 7.69074 7.14581ZM10.133 4.70359C10.133 4.36638 9.85961 4.09303 9.52241 4.09303C9.18521 4.09303 8.91185 4.36638 8.91185 4.70359C8.91185 5.04079 9.18521 5.31414 9.52241 5.31414C9.85961 5.31414 10.133 5.04079 10.133 4.70359ZM7.69074 5.31414C8.02794 5.31414 8.30129 5.04079 8.30129 4.70359C8.30129 4.36638 8.02794 4.09303 7.69074 4.09303C7.35354 4.09303 7.08018 4.36638 7.08018 4.70359C7.08018 5.04079 7.35354 5.31414 7.69074 5.31414Z" fill={theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                  </svg>}
                  disableRipple
                >
                  {orgName}
                </Button>
                <div className="ms-3 oui-slash" />
                <Popover
                  id="OpenOrg"
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "end",
                  }}
                >
                  <form
                    style={{ padding: "16px", textAlign: "center" }}
                    className="oui-headerNav-Search"
                  >
                    <Stack spacing={1} sx={{ width: 250 }} className="mb-2">
                      <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={[]}
                        renderInput={(params) => (
                          <TextField
                            className="oui-searchBox"
                            {...params}
                            InputProps={{
                              ...params.InputProps,
                              type: "search",
                              placeholder: "Search",
                              startAdornment: (
                                <IconButton sx={{ paddingRight: 0 }}>
                                  <SearchIcon fontSize="small" />
                                </IconButton>
                              ),
                            }}
                          />
                        )}
                      />
                    </Stack>
                    <List className="py-0">
                      <ListItemButton
                        onClick={(event) => {
                          setAnchorEl(null);
                          setOrgname(event.target.innerText);
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            justifyContent: "start",
                          }}
                          className="pe-2"
                        >
                          <img alt="hyb" src={OrgSVG} />
                        </ListItemIcon>
                        <ListItemText primary="ANZ DC" />
                        <img
                          src={RightArrowWrkSVG}
                          alt="RightArrowWrkSVG"
                          className="oui-hoverDisplay"
                        />
                      </ListItemButton>
                      <ListItemButton
                        onClick={(event) => {
                          setAnchorEl(null);
                          setOrgname(event.target.innerText);
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            justifyContent: "start",
                          }}
                          className="pe-2"
                        >
                          <img alt="hyb" src={OrgSVG} />
                        </ListItemIcon>
                        <ListItemText primary="Bangalore DC" />
                        <img
                          src={RightArrowWrkSVG}
                          alt="RightArrowWrkSVG"
                          className="oui-hoverDisplay"
                        />
                      </ListItemButton>
                      <ListItemButton
                        onClick={(event) => {
                          setAnchorEl(null);
                          setOrgname(event.target.innerText);
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            justifyContent: "start",
                          }}
                          className="pe-2"
                        >
                          <img alt="hyb" src={OrgSVG} />
                        </ListItemIcon>
                        <ListItemText primary="Boston DC" />
                        <img
                          src={RightArrowWrkSVG}
                          alt="RightArrowWrkSVG"
                          className="oui-hoverDisplay"
                        />
                      </ListItemButton>
                      <ListItemButton
                        onClick={(event) => {
                          setAnchorEl(null);
                          setOrgname(event.target.innerText);
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            justifyContent: "start",
                          }}
                          className="pe-2"
                        >
                          <img alt="hyb" src={OrgSVG} />
                        </ListItemIcon>
                        <ListItemText primary="Floria DC" />
                        <img
                          src={RightArrowWrkSVG}
                          alt="RightArrowWrkSVG"
                          className="oui-hoverDisplay"
                        />
                      </ListItemButton>
                      <Divider variant="middle" component="li" />
                      <ListItemButton
                        onClick={(event) => {
                          setAnchorEl(null);
                          setOrgname(event.target.innerText);
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            justifyContent: "start",
                          }}
                          className="pe-2"
                        >
                          <img alt="hyb" src={OrgSVG} />
                        </ListItemIcon>
                        <ListItemText primary="All Organizations" />
                        <img
                          src={RightArrowWrkSVG}
                          alt="RightArrowWrkSVG"
                          className="oui-hoverDisplay"
                        />
                      </ListItemButton>
                    </List>
                  </form>
                </Popover>
                <Button
                  aria-describedby="protect"
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={handleClickProtect}
                  variant="navMenu"
                  sx={{ fontWeight: 600, marginRight: 0 }}
                  disableRipple
                >
                  Protect
                </Button>
                <Popover
                  id="Openprotect"
                  open={openProtect}
                  anchorEl={protectPopover}
                  onClose={handleCloseProtect}
                  sx={{ boxShadow: "none" }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "end",
                  }}
                >
                  <Box
                    sx={{ padding: 2, flexDirection: "row", display: "flex" }}
                  >
                    <List
                      className="py-0"
                      sx={{ width: "100%",  }}
                      component="nav"
                      aria-labelledby="files"
                      subheader={
                        <ListSubheader
                          component="div"
                          id="files"
                          className="oui-SubHeaderWorkloadText"
                        >
                          Files
                        </ListSubheader>
                      }
                    >
                      <ListItemButton
                        sx={{ minWidth: 155, padding: "6px 16px" }}
                        className="oui-protectover"
                      >
                        <ListItemIcon>
                          <img src={FileServerSVG} alt="FileServerSVG" />
                        </ListItemIcon>
                        <ListItemText
                          primary="File Servers"
                          className="oui-WorkloadText"
                        />
                        <img
                          src={RightArrowWrkSVG}
                          alt="RightArrowWrkSVG"
                          className="oui-hoverDisplay"
                        />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ padding: "6px 16px" }}
                        className="oui-protectover"
                      >
                        <ListItemIcon>
                          <img src={NASSVG} alt="NASSVG" />
                        </ListItemIcon>
                        <ListItemText
                          primary="NAS"
                          className="oui-WorkloadText"
                        />
                        <img
                          src={RightArrowWrkSVG}
                          alt="RightArrowWrkSVG"
                          className="oui-hoverDisplay"
                        />
                      </ListItemButton>
                    </List>
                    <List
                      className="py-0"
                      sx={{ width: "100%",  }}
                      component="nav"
                      aria-labelledby="Virtual Machines"
                      subheader={
                        <ListSubheader
                          component="div"
                          id="Virtual Machines"
                          className="oui-SubHeaderWorkloadText"
                        >
                          Virtual Machines
                        </ListSubheader>
                      }
                    >
                      <ListItemButton
                        sx={{ padding: "6px 16px" }}
                        className="oui-protectover"
                      >
                        <ListItemIcon>
                          <img src={VMwareSVG} alt="VMwareSVG" />
                        </ListItemIcon>
                        <ListItemText
                          primary="VMware"
                          className="oui-WorkloadText"
                        />
                        <img
                          src={RightArrowWrkSVG}
                          alt="RightArrowWrkSVG"
                          className="oui-hoverDisplay"
                        />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ padding: "6px 16px" }}
                        className="oui-protectover"
                      >
                        <ListItemIcon>
                          <img src={HyperVSVG} alt="HyperVSVG" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Hyper-V"
                          className="oui-WorkloadText"
                        />
                        <img
                          src={RightArrowWrkSVG}
                          alt="RightArrowWrkSVG"
                          className="oui-hoverDisplay"
                        />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ minWidth: 160, padding: "6px 16px" }}
                        className="oui-protectover"
                      >
                        <ListItemIcon>
                          <img src={AHVSVG} alt="AHVSVG" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Nutanix AHV"
                          className="oui-WorkloadText"
                        />
                        <img
                          src={RightArrowWrkSVG}
                          alt="RightArrowWrkSVG"
                          className="oui-hoverDisplay"
                        />
                      </ListItemButton>
                    </List>
                    <List
                      className="py-0"
                      sx={{ width: "100%", }}
                      component="nav"
                      aria-labelledby="Databases"
                      subheader={
                        <ListSubheader
                          component="div"
                          id="Databases"
                          className="oui-SubHeaderWorkloadText"
                        >
                          Databases
                        </ListSubheader>
                      }
                    >
                      <ListItemButton
                        sx={{ minWidth: 170, padding: "6px 16px" }}
                        className="oui-protectover"
                      >
                        <ListItemIcon>
                          <img src={SQLSVG} alt="SQLSVG" />
                        </ListItemIcon>
                        <ListItemText
                          primary="MS-SQL Servers"
                          className="oui-WorkloadText"
                        />
                        <img
                          src={RightArrowWrkSVG}
                          alt="RightArrowWrkSVG"
                          className="oui-hoverDisplay"
                        />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ minWidth: 200, padding: "6px 16px" }}
                        className="oui-protectover"
                      >
                        <ListItemIcon>
                          <img src={OracleSVG} alt="OracleSVGbp" />
                        </ListItemIcon>
                        <Box sx={{ flexDirection: "row" }} className="d-flex">
                          <ListItemText
                            primary="Oracle"
                            className="oui-WorkloadText"
                            sx={{ maxWidth: 45 }}
                          />
                          <Box
                            className="oui-WorkloadSubText"
                            sx={{ paddingTop: "8px", paddingLeft: "4px" }}
                          >
                            (Backup Store)
                          </Box>
                          <Box
                            className="oui-hoverDisplay"
                            sx={{ paddingLeft: "13px", paddingTop: "4px" }}
                          >
                            <img
                              src={RightArrowWrkSVG}
                              alt="RightArrowWrkSVG"
                            />
                          </Box>
                        </Box>
                      </ListItemButton>
                      <ListItemButton
                        sx={{ minWidth: 200, padding: "6px 16px" }}
                        className="oui-protectover"
                      >
                        <ListItemIcon>
                          <img src={OracleSVG} alt="OracleSVGdc" />
                        </ListItemIcon>
                        <Box sx={{ flexDirection: "row" }} className="d-flex">
                          <ListItemText
                            primary="Oracle"
                            className="oui-WorkloadText"
                            sx={{ maxWidth: 45 }}
                          />
                          <Box
                            className="oui-WorkloadSubText"
                            sx={{ paddingTop: "8px", paddingLeft: "4px" }}
                          >
                            (Direct to Cloud)
                          </Box>
                          <Box
                            className="oui-hoverDisplay"
                            sx={{ paddingLeft: "6px", paddingTop: "4px" }}
                          >
                            <img
                              src={RightArrowWrkSVG}
                              alt="RightArrowWrkSVG"
                            />
                          </Box>
                        </Box>
                      </ListItemButton>
                    </List>
                  </Box>
                </Popover>
                <Typography
                  variant="appbar"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    textDecoration: "none",
                    marginRight: 0,
                  }}
                >
                  Disaster Recovery
                </Typography>
                <Button
                  aria-describedby="manage"
                  endIcon={<KeyboardArrowDownIcon />}
                  variant="navMenu"
                  sx={{ fontWeight: 400, fontSize: "14px", marginRight: 0 }}
                  disableRipple
                >
                  Manage
                </Button>
                <Typography
                  variant="appbar"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 3,
                    display: { xs: "none", md: "flex" },
                    textDecoration: "none",
                  }}
                >
                  Reports
                </Typography>
                <div className="me-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.91099 7.38266C2.28028 6.24053 2.88863 5.19213 3.69133 4.30364C3.82707 4.15339 4.04002 4.09984 4.23069 4.16802L6.14897 4.85392C6.66905 5.03977 7.24131 4.76883 7.42716 4.24875C7.44544 4.19762 7.45952 4.14507 7.46925 4.09173L7.83471 2.08573C7.87104 1.88627 8.02422 1.7285 8.22251 1.6863C8.8027 1.5628 9.39758 1.5 10.0003 1.5C10.6026 1.5 11.1971 1.56273 11.7769 1.68607C11.9752 1.72824 12.1284 1.88591 12.1648 2.08529L12.5313 4.09165C12.6303 4.63497 13.1511 4.9951 13.6944 4.89601C13.7479 4.88627 13.8004 4.87219 13.8515 4.85395L15.7698 4.16802C15.9605 4.09984 16.1734 4.15339 16.3092 4.30364C17.1119 5.19213 17.7202 6.24053 18.0895 7.38266C18.1518 7.57534 18.0918 7.78658 17.9374 7.91764L16.3825 9.23773C15.9615 9.5952 15.9101 10.2263 16.2675 10.6473C16.3027 10.6887 16.3411 10.7271 16.3825 10.7623L17.9374 12.0824C18.0918 12.2134 18.1518 12.4247 18.0895 12.6173C17.7202 13.7595 17.1119 14.8079 16.3092 15.6964C16.1734 15.8466 15.9605 15.9002 15.7698 15.832L13.8515 15.1461C13.3315 14.9602 12.7592 15.2312 12.5733 15.7512C12.5551 15.8024 12.541 15.8549 12.5312 15.9085L12.1648 17.9147C12.1284 18.1141 11.9752 18.2718 11.7769 18.3139C11.1971 18.4373 10.6026 18.5 10.0003 18.5C9.39758 18.5 8.8027 18.4372 8.22251 18.3137C8.02422 18.2715 7.87104 18.1137 7.83471 17.9143L7.46926 15.9084C7.37018 15.365 6.8494 15.0049 6.30608 15.104C6.25265 15.1137 6.20011 15.1278 6.14906 15.1461L4.23069 15.832C4.04002 15.9002 3.82707 15.8466 3.69133 15.6964C2.88863 14.8079 2.28028 13.7595 1.91099 12.6173C1.84869 12.4247 1.90876 12.2134 2.06313 12.0824L3.61798 10.7623C4.03897 10.4048 4.09046 9.77373 3.73299 9.35274C3.69784 9.31135 3.65937 9.27288 3.618 9.23775L2.06313 7.91764C1.90876 7.78658 1.84869 7.57534 1.91099 7.38266ZM2.97154 7.37709L4.26523 8.47546C4.34803 8.54576 4.42496 8.62269 4.49526 8.70548C5.2102 9.54746 5.10721 10.8096 4.26521 11.5246L2.97154 12.6229C3.26359 13.4051 3.68504 14.1322 4.21648 14.7751L5.81246 14.2044C5.91473 14.1679 6.01982 14.1397 6.12667 14.1202C7.21332 13.922 8.25487 14.6423 8.45305 15.729L8.75702 17.3975C9.16489 17.4655 9.58024 17.5 10.0003 17.5C10.42 17.5 10.8351 17.4656 11.2427 17.3976L11.5475 15.7289C11.567 15.6221 11.5951 15.517 11.6317 15.4147C12.0034 14.3746 13.1479 13.8327 14.1881 14.2044L15.784 14.7751C16.3155 14.1322 16.7369 13.4051 17.029 12.6229L15.7353 11.5245C15.6525 11.4542 15.5756 11.3773 15.5053 11.2945C14.7903 10.4525 14.8933 9.1904 15.7353 8.47544L17.029 7.37709C16.7369 6.59486 16.3155 5.86783 15.784 5.22494L14.1881 5.79559C14.0858 5.83214 13.9807 5.8603 13.8738 5.87979C12.7872 6.07796 11.7456 5.3577 11.5475 4.27119L11.2427 2.60235C10.8351 2.53443 10.42 2.5 10.0003 2.5C9.58024 2.5 9.16489 2.53448 8.75702 2.60249L8.45304 4.27105C8.43355 4.37791 8.40539 4.48299 8.36884 4.58527C7.99714 5.62542 6.8526 6.1673 5.81237 5.79556L4.21648 5.22494C3.68504 5.86783 3.26359 6.59486 2.97154 7.37709ZM7.50026 10C7.50026 8.61929 8.61954 7.5 10.0003 7.5C11.381 7.5 12.5003 8.61929 12.5003 10C12.5003 11.3807 11.381 12.5 10.0003 12.5C8.61954 12.5 7.50026 11.3807 7.50026 10ZM8.50026 10C8.50026 10.8284 9.17183 11.5 10.0003 11.5C10.8287 11.5 11.5003 10.8284 11.5003 10C11.5003 9.17157 10.8287 8.5 10.0003 8.5C9.17183 8.5 8.50026 9.17157 8.50026 10Z" fill={theme.palette.mode === 'light' ? "#212121" : "#D7D7D7"}/>
                  </svg>
                </div>
                <div className="mx-2">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5928 7.3524L16.5928 7.35144C16.35 4.30359 13.7321 1.95 10.5585 1.95C7.30661 1.95 4.63897 4.42076 4.51523 7.56627L4.51522 7.56627L4.5152 7.56728L4.5109 7.79185H4.51089L4.51089 7.79279L4.50981 11.391L3.59035 13.601L3.59022 13.601L3.58905 13.6045L3.54663 13.7325L3.54605 13.7323L3.54476 13.7401L3.52367 13.8675L3.5236 13.8675L3.5233 13.8703C3.47061 14.3548 3.72393 14.794 4.15614 14.9739L4.1561 14.974L4.15921 14.9751L4.28367 15.0175L4.28364 15.0176L4.28682 15.0185C4.37561 15.0424 4.46735 15.0546 4.5597 15.0546L8.01216 15.054L8.01616 15.1662L8.01613 15.1662L8.01623 15.1676C8.10257 16.4978 9.20879 17.55 10.5608 17.55C11.9125 17.55 13.0185 16.4983 13.1053 15.1686L13.1053 15.1686L13.1054 15.1669L13.1089 15.054L16.5621 15.0546V15.0547L16.5658 15.0544L16.7003 15.0444L16.7003 15.0449L16.7078 15.0432L16.8241 15.0164L16.8241 15.0165L16.8266 15.0158C17.2997 14.881 17.6121 14.476 17.6121 14.0046H17.6122L17.612 14.0013L17.6033 13.87L17.6036 13.87L17.6026 13.8646L17.5874 13.7784L17.5874 13.7784L17.5869 13.7763C17.5736 13.7165 17.5551 13.6578 17.5314 13.6009L17.4852 13.6202L17.5314 13.6009L16.6098 11.388L16.6108 7.80216L16.6108 7.80114L16.6063 7.57661L16.6063 7.57661L16.6062 7.57461L16.5928 7.3524ZM5.60984 11.5098L5.61081 11.51V11.5V7.80262L5.61469 7.59926L5.62781 7.38866C5.83576 4.95518 7.96039 3.05 10.5585 3.05C13.2303 3.05 15.4026 5.06525 15.5068 7.60984C15.5068 7.61001 15.5069 7.61018 15.5069 7.61035L15.5109 7.81241V7.81289L15.5108 11.5H15.5098L15.5118 11.5098L15.5502 11.702L15.5492 11.7022L15.5531 11.7114L16.4885 13.9565L4.63466 13.9546L5.56856 11.7114L5.56947 11.7118L5.57143 11.702L5.60984 11.5098ZM9.11764 15.1417L9.11308 15.054H12.0081L12.0041 15.1409C11.9333 15.8752 11.3147 16.4494 10.562 16.45L10.4199 16.4432C9.73188 16.3769 9.18432 15.8296 9.11764 15.1417Z" fill="white"/>
                  <path d="M16.5928 7.3524L16.5928 7.35144C16.35 4.30359 13.7321 1.95 10.5585 1.95C7.30661 1.95 4.63897 4.42076 4.51523 7.56627L4.51522 7.56627L4.5152 7.56728L4.5109 7.79185H4.51089L4.51089 7.79279L4.50981 11.391L3.59035 13.601L3.59022 13.601L3.58905 13.6045L3.54663 13.7325L3.54605 13.7323L3.54476 13.7401L3.52367 13.8675L3.5236 13.8675L3.5233 13.8703C3.47061 14.3548 3.72393 14.794 4.15614 14.9739L4.1561 14.974L4.15921 14.9751L4.28367 15.0175L4.28364 15.0176L4.28682 15.0185C4.37561 15.0424 4.46735 15.0546 4.5597 15.0546L8.01216 15.054L8.01616 15.1662L8.01613 15.1662L8.01623 15.1676C8.10257 16.4978 9.20879 17.55 10.5608 17.55C11.9125 17.55 13.0185 16.4983 13.1053 15.1686L13.1053 15.1686L13.1054 15.1669L13.1089 15.054L16.5621 15.0546V15.0547L16.5658 15.0544L16.7003 15.0444L16.7003 15.0449L16.7078 15.0432L16.8241 15.0164L16.8241 15.0165L16.8266 15.0158C17.2997 14.881 17.6121 14.476 17.6121 14.0046H17.6122L17.612 14.0013L17.6033 13.87L17.6036 13.87L17.6026 13.8646L17.5874 13.7784L17.5874 13.7784L17.5869 13.7763C17.5736 13.7165 17.5551 13.6578 17.5314 13.6009L17.4852 13.6202L17.5314 13.6009L16.6098 11.388L16.6108 7.80216L16.6108 7.80114L16.6063 7.57661L16.6063 7.57661L16.6062 7.57461L16.5928 7.3524ZM5.60984 11.5098L5.61081 11.51V11.5V7.80262L5.61469 7.59926L5.62781 7.38866C5.83576 4.95518 7.96039 3.05 10.5585 3.05C13.2303 3.05 15.4026 5.06525 15.5068 7.60984C15.5068 7.61001 15.5069 7.61018 15.5069 7.61035L15.5109 7.81241V7.81289L15.5108 11.5H15.5098L15.5118 11.5098L15.5502 11.702L15.5492 11.7022L15.5531 11.7114L16.4885 13.9565L4.63466 13.9546L5.56856 11.7114L5.56947 11.7118L5.57143 11.702L5.60984 11.5098ZM9.11764 15.1417L9.11308 15.054H12.0081L12.0041 15.1409C11.9333 15.8752 11.3147 16.4494 10.562 16.45L10.4199 16.4432C9.73188 16.3769 9.18432 15.8296 9.11764 15.1417Z" fill={theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"}/>
                  <path d="M16.5928 7.3524L16.5928 7.35144C16.35 4.30359 13.7321 1.95 10.5585 1.95C7.30661 1.95 4.63897 4.42076 4.51523 7.56627L4.51522 7.56627L4.5152 7.56728L4.5109 7.79185H4.51089L4.51089 7.79279L4.50981 11.391L3.59035 13.601L3.59022 13.601L3.58905 13.6045L3.54663 13.7325L3.54605 13.7323L3.54476 13.7401L3.52367 13.8675L3.5236 13.8675L3.5233 13.8703C3.47061 14.3548 3.72393 14.794 4.15614 14.9739L4.1561 14.974L4.15921 14.9751L4.28367 15.0175L4.28364 15.0176L4.28682 15.0185C4.37561 15.0424 4.46735 15.0546 4.5597 15.0546L8.01216 15.054L8.01616 15.1662L8.01613 15.1662L8.01623 15.1676C8.10257 16.4978 9.20879 17.55 10.5608 17.55C11.9125 17.55 13.0185 16.4983 13.1053 15.1686L13.1053 15.1686L13.1054 15.1669L13.1089 15.054L16.5621 15.0546V15.0547L16.5658 15.0544L16.7003 15.0444L16.7003 15.0449L16.7078 15.0432L16.8241 15.0164L16.8241 15.0165L16.8266 15.0158C17.2997 14.881 17.6121 14.476 17.6121 14.0046H17.6122L17.612 14.0013L17.6033 13.87L17.6036 13.87L17.6026 13.8646L17.5874 13.7784L17.5874 13.7784L17.5869 13.7763C17.5736 13.7165 17.5551 13.6578 17.5314 13.6009L17.4852 13.6202L17.5314 13.6009L16.6098 11.388L16.6108 7.80216L16.6108 7.80114L16.6063 7.57661L16.6063 7.57661L16.6062 7.57461L16.5928 7.3524ZM5.60984 11.5098L5.61081 11.51V11.5V7.80262L5.61469 7.59926L5.62781 7.38866C5.83576 4.95518 7.96039 3.05 10.5585 3.05C13.2303 3.05 15.4026 5.06525 15.5068 7.60984C15.5068 7.61001 15.5069 7.61018 15.5069 7.61035L15.5109 7.81241V7.81289L15.5108 11.5H15.5098L15.5118 11.5098L15.5502 11.702L15.5492 11.7022L15.5531 11.7114L16.4885 13.9565L4.63466 13.9546L5.56856 11.7114L5.56947 11.7118L5.57143 11.702L5.60984 11.5098ZM9.11764 15.1417L9.11308 15.054H12.0081L12.0041 15.1409C11.9333 15.8752 11.3147 16.4494 10.562 16.45L10.4199 16.4432C9.73188 16.3769 9.18432 15.8296 9.11764 15.1417Z" stroke="white" stroke-width="0.1"/>
                  <path d="M16.5928 7.3524L16.5928 7.35144C16.35 4.30359 13.7321 1.95 10.5585 1.95C7.30661 1.95 4.63897 4.42076 4.51523 7.56627L4.51522 7.56627L4.5152 7.56728L4.5109 7.79185H4.51089L4.51089 7.79279L4.50981 11.391L3.59035 13.601L3.59022 13.601L3.58905 13.6045L3.54663 13.7325L3.54605 13.7323L3.54476 13.7401L3.52367 13.8675L3.5236 13.8675L3.5233 13.8703C3.47061 14.3548 3.72393 14.794 4.15614 14.9739L4.1561 14.974L4.15921 14.9751L4.28367 15.0175L4.28364 15.0176L4.28682 15.0185C4.37561 15.0424 4.46735 15.0546 4.5597 15.0546L8.01216 15.054L8.01616 15.1662L8.01613 15.1662L8.01623 15.1676C8.10257 16.4978 9.20879 17.55 10.5608 17.55C11.9125 17.55 13.0185 16.4983 13.1053 15.1686L13.1053 15.1686L13.1054 15.1669L13.1089 15.054L16.5621 15.0546V15.0547L16.5658 15.0544L16.7003 15.0444L16.7003 15.0449L16.7078 15.0432L16.8241 15.0164L16.8241 15.0165L16.8266 15.0158C17.2997 14.881 17.6121 14.476 17.6121 14.0046H17.6122L17.612 14.0013L17.6033 13.87L17.6036 13.87L17.6026 13.8646L17.5874 13.7784L17.5874 13.7784L17.5869 13.7763C17.5736 13.7165 17.5551 13.6578 17.5314 13.6009L17.4852 13.6202L17.5314 13.6009L16.6098 11.388L16.6108 7.80216L16.6108 7.80114L16.6063 7.57661L16.6063 7.57661L16.6062 7.57461L16.5928 7.3524ZM5.60984 11.5098L5.61081 11.51V11.5V7.80262L5.61469 7.59926L5.62781 7.38866C5.83576 4.95518 7.96039 3.05 10.5585 3.05C13.2303 3.05 15.4026 5.06525 15.5068 7.60984C15.5068 7.61001 15.5069 7.61018 15.5069 7.61035L15.5109 7.81241V7.81289L15.5108 11.5H15.5098L15.5118 11.5098L15.5502 11.702L15.5492 11.7022L15.5531 11.7114L16.4885 13.9565L4.63466 13.9546L5.56856 11.7114L5.56947 11.7118L5.57143 11.702L5.60984 11.5098ZM9.11764 15.1417L9.11308 15.054H12.0081L12.0041 15.1409C11.9333 15.8752 11.3147 16.4494 10.562 16.45L10.4199 16.4432C9.73188 16.3769 9.18432 15.8296 9.11764 15.1417Z" stroke={theme.palette.mode === 'light' ? "#454242" : "#D7D7D7"} stroke-width="0.1"/>
                  </svg>
                </div>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <div className="oui-profile-container">
                      <h2 className="oui-profile-avatar">S</h2>
                      <div className="oui-user-details">
                        <span className="oui-profile-username oui-text-truncate">
                         <Link href="#op=administrator-details/id=23290/siteid=0" underline="none">Sairam Kidambi</Link>
                        </span>
                        <span className="oui-profile-email oui-text-truncate">
                          sairam.kidambi@druva.com
                        </span>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <ToggleTheme />
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
