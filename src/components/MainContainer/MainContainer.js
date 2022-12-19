import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./MainContainer.css";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";
import ConfigGridComponent from "../GridComponent/ConfigGridComponent";
import SearchIcon from "@mui/icons-material/Search";
import SearchSVG from "../../images/search.svg";
import { useTheme } from "@mui/material/styles";
import Filters from "../common/filter";
import Collapse from "@mui/material/Collapse";
import Popover from "@mui/material/Popover";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from '@mui/material/CardActions';
import FilterOption from "../common/filterOption";
import Badge from '@mui/material/Badge';

function MainContainer() {
  const [show, setShow] = React.useState(false);
  const [switchClass, setSwitchClass] = React.useState(false);
  const [tfValue, setTfValue] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [filterOpen, setFilterOpen] = React.useState(null);
  const [ip, setIp] = React.useState([]);
  const [jobStatus, setJobStatus] = React.useState([]);
  const [jobBackup, setJobBackup] = React.useState("");
  const [appAware, setappAware] = React.useState("");
  const [serverIP, setserverIP] = React.useState([]);
  const [jStatus, setJStatus] = React.useState([]);
  const [jBackup, setJBackup] = React.useState("");

  useEffect(() => {}, []);

  const searchData = [
    { label: "SQL_gov_3" },
    { label: "win2k8r" },
    { label: "sql_1_win2k" },
    { label: "ha_Client" },
    { label: "CentOS" },
    { label: "ADConnector" },
    { label: "Hl_Client" },
    { label: "Hr_NAS" },
    { label: "EW_Backup" },
  ];
  const theme = useTheme();
  const handleSearch = (v) => {
    setSearchValue(v);
  };

  const handleClose = () => {
    setSearchValue("");
    setTfValue("");
  };

  const handleFilterClose = () => {
    setFilterOpen(null);
  };

  const handleFilterClick = (event) => {
    setFilterOpen(event.currentTarget);
  };

  const filterData = [
    {
      header: "Hypervisor",
      values: ["192.168.1.90", "192.18.198.20"],
    },
    {
      header: "Status",
      values: ["Success", "Error", "Successful With Errors"],
    },
    {
      header: "Backup",
      values: ["Enabled", "Disabled"],
      Selection: "Boolean",
    },
  ];

  const hypervisorFilterOptions = [{label: "172.16.20.178"}, {label: "172.16.20.179"}];

  const jobStatusFilterOptions = [{
    label: "Success",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM6.5 11.75L2.75 8L3.8075 6.9425L6.5 9.6275L12.1925 3.935L13.25 5L6.5 11.75Z" fill="#28A745"/>
    </svg>
  },
  {
    label: "Successful With Errors",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM6.5 11.75L2.75 8L3.8075 6.9425L6.5 9.6275L12.1925 3.935L13.25 5L6.5 11.75Z" fill="#FFC107"/>
    </svg>
  },
  {
    label: "Failed",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0.5C3.8525 0.5 0.5 3.8525 0.5 8C0.5 12.1475 3.8525 15.5 8 15.5C12.1475 15.5 15.5 12.1475 15.5 8C15.5 3.8525 12.1475 0.5 8 0.5ZM11.75 10.6925L10.6925 11.75L8 9.0575L5.3075 11.75L4.25 10.6925L6.9425 8L4.25 5.3075L5.3075 4.25L8 6.9425L10.6925 4.25L11.75 5.3075L9.0575 8L11.75 10.6925Z" fill="#DC3545"/>
    </svg>,
  },
  {
    label: "Never Backed Up",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8.75 11.75H7.25V10.25H8.75V11.75ZM8.75 8.75H7.25V4.25H8.75V8.75Z" fill="white"/>
    <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8.75 11.75H7.25V10.25H8.75V11.75ZM8.75 8.75H7.25V4.25H8.75V8.75Z" fill="#6591F5"/>
    </svg>,
  },
    {
    label: "Backup window expired",
    icon: 
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8.75 11.75H7.25V10.25H8.75V11.75ZM8.75 8.75H7.25V4.25H8.75V8.75Z" fill="white"/>
<path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8.75 11.75H7.25V10.25H8.75V11.75ZM8.75 8.75H7.25V4.25H8.75V8.75Z" fill="#6591F5"/>
</svg>
  }];

  const jobBackupFilterOptions = [{label: "Enable"}, {label: "Disable"}];

  const appAwareFilterOptions = [{label: "Enable"}, {label: "Disable"}];

  const open = Boolean(filterOpen);

  const onIpFilterClick = jobtype => {
    if (ip.includes(jobtype)) {
        setIp(ip.filter(item => item !== jobtype));
    } else {
        setIp(prevState => [...prevState, jobtype]);
    }
};

const onJobStatusFilterClick = jobtype => {
  if (jobStatus.includes(jobtype)) {
      setJobStatus(jobStatus.filter(item => item !== jobtype));
  } else {
    setJobStatus(prevState => [...prevState, jobtype]);
  }
};

const onJobBackupFilterClick = type => {
  if (jobBackup.includes(type)) {
    setJobBackup("");
  } else {
    setJobBackup(type);
  }
};

const onAppAwareFilterClick = type => {
  if (appAware.includes(type)) {
    setappAware("");
  } else {
    setappAware(type);
  }
}

const handleFilterApply = () => {
  setserverIP(ip && ip.length ? ip : "-1");
  setJStatus(jobStatus && jobStatus.length ? jobStatus : "-1");
  setJBackup(jobBackup ? jobBackup : '-1');
  handleFilterClose();
};

const resetFilters = () => {
  setserverIP([]);
  setIp([]);
  setJStatus([]);
  setJobStatus([]);
  setJobBackup("");
  setJBackup("");
  setappAware("");
  handleFilterClose();
};

  const onFocusSearch = () => {
    setShow(true);
    setSwitchClass(true);
  };

  const onBlurSearch = () => {
    if (searchValue === undefined || searchValue === "") {
      setShow((prev) => !prev);
      setTimeout(() => {
        setSwitchClass(false);
      }, 100);
    }
  };

  const filterCount = (serverIP.length > 0 && serverIP !== "-1" ? 1 : 0) + (jStatus.length > 0 && jStatus !== "-1" ? 1 : 0) + (jBackup === "" || jBackup === "-1" ? 0 : 1);

  return (
    <div style={{ width: "100%", padding: "0 24px" }}>
      <Box
        component="main"
        sx={{ flexDirection: "row" }}
        className="d-flex mt-3"
      >
        <Box sx={{ flexGrow: 1, justifyContent: "flex-start" }}>
          <Typography
            variant="header2"
            noWrap
            sx={{
              display: { xs: "none", md: "flex" },
            }}
            className="oui-page-header"
          >
            Configured VMs
          </Typography>
        </Box>
      </Box>
      <Box component="main" className="w-100">
        <Box
          sx={{ justifyContent: "flex-end" }}
          className="d-flex align-items-center mb-2"
        >
          <Box>
            <Autocomplete
              freeSolo
              disableClearable
              id="free-solo-2-demo"
              options={searchData}
              sx={{ width: show ? 250 : 96 }}
              className={switchClass ? "slide" : "initial"}
              onChange={(value) => handleSearch(value.target.innerText)}
              value={tfValue}
              renderInput={(params) => (
                <TextField
                  autoFocus = {show}
                  variant="outlined"
                  onBlur={() => onBlurSearch()}
                  className="oui-searchBox"
                  onChange={(e) => setTfValue(e.target.value)}
                  {...params}
                  value={tfValue}
                  InputProps={{
                    ...params.InputProps,
                    placeholder: "Search",
                    endAdornment: (
                      <Box>
                        {searchValue && (
                          <IconButton
                            sx={{
                              paddingRight: 0,
                              height: "36px",
                              width: "36px",
                            }}
                            disableRipple
                            onClick={handleClose}
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="9.06738"
                                cy="9"
                                r="8.31738"
                                fill="white"
                              />
                              <circle
                                cx="9.06738"
                                cy="9"
                                r="8.31738"
                                fill="#F6F6F6"
                              />
                              <circle
                                cx="9.06738"
                                cy="9"
                                r="8.31738"
                                stroke="white"
                                stroke-width="0.5"
                              />
                              <circle
                                cx="9.06738"
                                cy="9"
                                r="8.31738"
                                stroke="#E4E4E4"
                                stroke-width="0.5"
                              />
                              <path
                                d="M12.5566 5.5109C12.9242 5.87846 12.9242 6.47439 12.5566 6.84195L10.3986 9.00001L12.5566 11.1581C12.9242 11.5256 12.9242 12.1216 12.5566 12.4891C12.1891 12.8567 11.5931 12.8567 11.2256 12.4891L9.06751 10.3311L6.90946 12.4891C6.5419 12.8567 5.94596 12.8567 5.5784 12.4891C5.21084 12.1216 5.21084 11.5256 5.5784 11.1581L7.73646 9.00001L5.5784 6.84195C5.21084 6.47439 5.21084 5.87846 5.5784 5.5109C5.94596 5.14334 6.5419 5.14334 6.90946 5.5109L9.06751 7.66896L11.2256 5.5109C11.5931 5.14334 12.1891 5.14334 12.5566 5.5109Z"
                                fill="#EAA6AC"
                              />
                            </svg>
                          </IconButton>
                        )}
                        <IconButton
                          sx={{
                            height: "36px",
                            width: "36px",
                          }}
                          className={switchClass ? "oui-SearchIcon" : ""}
                          onClick={onFocusSearch}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.00039 11.3C3.00039 10.1 2.30039 8.5 2.30039 6.8C2.30039 3 5.30039 0 9.10039 0C12.9004 0 15.9004 3 15.9004 6.8C15.9004 10.5 12.8004 13.6 9.10039 13.6C7.50039 13.6 6.00039 13 4.80039 12.1L1.00039 15.8C0.900388 15.9 0.700389 16 0.600389 16C0.500388 16 0.300388 15.9 0.200388 15.8C0.000388145 15.6 0.000388145 15.2 0.200388 15L4.00039 11.3ZM9.10039 12.4C12.2004 12.4 14.7004 9.9 14.7004 6.8C14.7004 3.7 12.2004 1.2 9.10039 1.2C6.00039 1.2 3.50039 3.7 3.50039 6.8C3.50039 9.9 6.00039 12.4 9.10039 12.4Z"
                              fill={
                                theme.palette.mode === "light"
                                  ? "#343A40"
                                  : "white"
                              }
                            />
                          </svg>
                        </IconButton>
                      </Box>
                    ),
                  }}
                />
              )}
            />
            <Collapse in={show} orientation="horizontal"></Collapse>
          </Box>
          {/* {!show && (
          <Box className="d-flex align-items-center ps-2 mb-2">
            <IconButton
              disableRipple
              className="oui-searchButton"
              onClick={() => setShow((prev) => !prev)}
              sx={{ height: "36px", width: "36px" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.00039 11.3C3.00039 10.1 2.30039 8.5 2.30039 6.8C2.30039 3 5.30039 0 9.10039 0C12.9004 0 15.9004 3 15.9004 6.8C15.9004 10.5 12.8004 13.6 9.10039 13.6C7.50039 13.6 6.00039 13 4.80039 12.1L1.00039 15.8C0.900388 15.9 0.700389 16 0.600389 16C0.500388 16 0.300388 15.9 0.200388 15.8C0.000388145 15.6 0.000388145 15.2 0.200388 15L4.00039 11.3ZM9.10039 12.4C12.2004 12.4 14.7004 9.9 14.7004 6.8C14.7004 3.7 12.2004 1.2 9.10039 1.2C6.00039 1.2 3.50039 3.7 3.50039 6.8C3.50039 9.9 6.00039 12.4 9.10039 12.4Z"
                  fill={theme.palette.mode === "light" ? "#343A40" : "white"}
                />
              </svg>
            </IconButton>
          </Box>
          )} */}

          <Box>
          <Badge color="primary" badgeContent={filterCount} overlap="circular">
          <IconButton
              aria-label="filter"
              id="filter-button"
              disableRipple
              className="oui-moreButton"
              onClick={(e) => handleFilterClick(e)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 13.5C12.6642 13.5 13 13.8358 13 14.25C13 14.6642 12.6642 15 12.25 15H7.75C7.33579 15 7 14.6642 7 14.25C7 13.8358 7.33579 13.5 7.75 13.5H12.25ZM14.25 9.25C14.6642 9.25 15 9.58579 15 10C15 10.4142 14.6642 10.75 14.25 10.75H5.75C5.33579 10.75 5 10.4142 5 10C5 9.58579 5.33579 9.25 5.75 9.25H14.25ZM16.25 5C16.6642 5 17 5.33579 17 5.75C17 6.16421 16.6642 6.5 16.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75C3 5.33579 3.33579 5 3.75 5H16.25Z"
                  fill="white"
                />
                <path
                  d="M12.25 13.5C12.6642 13.5 13 13.8358 13 14.25C13 14.6642 12.6642 15 12.25 15H7.75C7.33579 15 7 14.6642 7 14.25C7 13.8358 7.33579 13.5 7.75 13.5H12.25ZM14.25 9.25C14.6642 9.25 15 9.58579 15 10C15 10.4142 14.6642 10.75 14.25 10.75H5.75C5.33579 10.75 5 10.4142 5 10C5 9.58579 5.33579 9.25 5.75 9.25H14.25ZM16.25 5C16.6642 5 17 5.33579 17 5.75C17 6.16421 16.6642 6.5 16.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75C3 5.33579 3.33579 5 3.75 5H16.25Z"
                  fill={theme.palette.mode === "light" ? "#1D1A1A" : "white"}
                />
              </svg>
            </IconButton>
            </Badge>
            
            {/* <Filters
              id="filter"
              anchorEl={filterOpen}
              handleClose={handleFilterClose}
              filterData={filterData}
            /> */}
             <Popover
      id="filter"
      open={open}
      anchorEl={filterOpen}
      onClose={handleFilterClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Card sx={{width: 460}}>
        <CardContent>
        <Typography variant="filterHeader">Filters</Typography>
          {/* {filterData.map((obj) => (
            <Box className="d-flex mt-2" sx={{flexDirection: 'column'}}>
              <Typography variant="filter" className="mb-2">{obj.header}</Typography>
              <Box>
                {obj.values.map((val) => (
                  <Button variant={obj.header === "Status" ? val : "filterBtn"} sx={{marginRight: 0.5}}>{val}</Button>
                ))}
              </Box>
            </Box>
          ))} */}
          <Box className="d-flex mt-2" sx={{flexDirection: 'column'}}>
          <Typography variant="filter" className="mb-1">Hypervisor</Typography>
          <Box>
          <FilterOption
            multiSelect
            options={hypervisorFilterOptions}
            activeOption={ip}
            onFilterOptionClick={onIpFilterClick}
            />
          </Box>
          <Typography variant="filter" className="mb-1 mt-3">Last Job Status</Typography>
          <Box>
          <FilterOption
            multiSelect
            options={jobStatusFilterOptions}
            activeOption={jobStatus}
            onFilterOptionClick={onJobStatusFilterClick}
            />
          </Box>
          <Typography variant="filter" className="mb-1 mt-3">Backup</Typography>
          <Box>
          <FilterOption
            options={jobBackupFilterOptions}
            activeOption={jobBackup}
            onFilterOptionClick={onJobBackupFilterClick}
            />
          </Box>
          <Typography variant="filter" className="mb-1 mt-3">App-aware Backups</Typography>
          <Box>
          <FilterOption
            options={appAwareFilterOptions}
            activeOption={appAware}
            onFilterOptionClick={onAppAwareFilterClick}
            />
          </Box>
          </Box>
        </CardContent>
        <CardActions>
            <Box className="d-flex w-100 mt-2 mb-2" sx={{justifyContent: 'flex-end'}}>
            <Button className="me-2" size="small" variant="outlined" startIcon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.397052 0.553789L0.46967 0.46967C0.735936 0.203403 1.1526 0.179197 1.44621 0.397052L1.53033 0.46967L6 4.939L10.4697 0.46967C10.7626 0.176777 11.2374 0.176777 11.5303 0.46967C11.8232 0.762563 11.8232 1.23744 11.5303 1.53033L7.061 6L11.5303 10.4697C11.7966 10.7359 11.8208 11.1526 11.6029 11.4462L11.5303 11.5303C11.2641 11.7966 10.8474 11.8208 10.5538 11.6029L10.4697 11.5303L6 7.061L1.53033 11.5303C1.23744 11.8232 0.762563 11.8232 0.46967 11.5303C0.176777 11.2374 0.176777 10.7626 0.46967 10.4697L4.939 6L0.46967 1.53033C0.203403 1.26406 0.179197 0.8474 0.397052 0.553789L0.46967 0.46967L0.397052 0.553789Z" fill="white"></path><path d="M0.397052 0.553789L0.46967 0.46967C0.735936 0.203403 1.1526 0.179197 1.44621 0.397052L1.53033 0.46967L6 4.939L10.4697 0.46967C10.7626 0.176777 11.2374 0.176777 11.5303 0.46967C11.8232 0.762563 11.8232 1.23744 11.5303 1.53033L7.061 6L11.5303 10.4697C11.7966 10.7359 11.8208 11.1526 11.6029 11.4462L11.5303 11.5303C11.2641 11.7966 10.8474 11.8208 10.5538 11.6029L10.4697 11.5303L6 7.061L1.53033 11.5303C1.23744 11.8232 0.762563 11.8232 0.46967 11.5303C0.176777 11.2374 0.176777 10.7626 0.46967 10.4697L4.939 6L0.46967 1.53033C0.203403 1.26406 0.179197 0.8474 0.397052 0.553789L0.46967 0.46967L0.397052 0.553789Z" fill={theme.palette.mode === "light" ? "#1D1A1A" :"#D7D7D7"}></path></svg>
            } onClick={resetFilters}>
            Reset
            </Button>
        <Button className="me-2" variant="contained" size="small" startIcon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 4.5C7.5 4.22386 7.27614 4 7 4C6.72386 4 6.5 4.22386 6.5 4.5V6.5H4.5C4.22386 6.5 4 6.72386 4 7C4 7.27614 4.22386 7.5 4.5 7.5H6.5V9.5C6.5 9.77614 6.72386 10 7 10C7.27614 10 7.5 9.77614 7.5 9.5V7.5H9.5C9.77614 7.5 10 7.27614 10 7C10 6.72386 9.77614 6.5 9.5 6.5H7.5V4.5ZM2.5 0C1.11929 0 0 1.11929 0 2.5V11.5C0 12.8807 1.11929 14 2.5 14H11.5C12.8807 14 14 12.8807 14 11.5V2.5C14 1.11929 12.8807 0 11.5 0H2.5ZM1 2.5C1 1.67157 1.67157 1 2.5 1H11.5C12.3284 1 13 1.67157 13 2.5V11.5C13 12.3284 12.3284 13 11.5 13H2.5C1.67157 13 1 12.3284 1 11.5V2.5ZM5.50027 15.9998C4.54662 15.9998 3.68205 15.6184 3.05078 14.9998H12.5003C13.881 14.9998 15.0003 13.8805 15.0003 12.4998V3.05029C15.6189 3.68156 16.0003 4.54613 16.0003 5.49978V12.4998C16.0003 14.4328 14.4333 15.9998 12.5003 15.9998H5.50027Z" fill="#383535"/>
          </svg>
        } onClick={handleFilterApply}>
        Apply
            </Button>
            </Box>
    </CardActions>
      </Card>
    </Popover>
          </Box>
        </Box>
        <div style={{ height: " calc(100vh - 181px)" }}>
          <ConfigGridComponent searchValue={searchValue} serverIP={serverIP} jStatus={jStatus} jBackup={jBackup} />
        </div>
      </Box>
    </div>
  );
}

export default MainContainer;
