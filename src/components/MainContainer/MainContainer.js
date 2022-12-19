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

function MainContainer() {
  const [show, setShow] = React.useState(false);
  const [switchClass, setSwitchClass] = React.useState(false);
  const [tfValue, setTfValue] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [filterOpen, setFilterOpen] = React.useState(null);

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
      values: ["Success", "Error"],
    },
    {
      header: "Backup",
      values: ["Enabled", "Disabled"],
      Selection: "Boolean",
    },
  ];

  const onFocusSearch = () => {
    setShow(true);
    setSwitchClass(true);
  };

  const onBlurSearch = () => {
    if (searchValue === undefined || searchValue === "") {
      setShow((prev) => !prev);
      setTimeout(() => {
        setSwitchClass(false);
      }, 400);
    }
  };

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
            <span>{show}</span>
            <Autocomplete
              freeSolo
              disableClearable
              id="free-solo-2-demo"
              options={searchData}
              sx={{ width: show ? 250 : 96 }}
              className={switchClass ? "" : "initial"}
              onFocus={() => setShow(true)}
              onChange={(value) => handleSearch(value.target.innerText)}
              value={tfValue}
              renderInput={(params) => (
                <TextField
                  autoFocus
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
                            paddingRight: 0,
                            height: "36px",
                            width: "36px",
                          }}
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

          <Box className="ps-2">
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
            <Filters
              id="filter"
              anchorEl={filterOpen}
              handleClose={handleFilterClose}
              filterData={filterData}
            />
          </Box>
        </Box>
        <div style={{ height: " calc(100vh - 181px)" }}>
          <ConfigGridComponent searchValue={searchValue} />
        </div>
      </Box>
    </div>
  );
}

export default MainContainer;
