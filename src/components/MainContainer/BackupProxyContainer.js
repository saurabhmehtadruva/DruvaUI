import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./MainContainer.css";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DataGridDemo from "../GridComponent/GridComponent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DeployProxySVG from "../../images/DeployProxy.svg";
import SearchSVG from "../../images/search.svg";

const BackupProxyContainer = () => {
  const [show, setShow] = React.useState(false);
  const tabsActions = useRef();
  const ele = useRef();
  const [tabIndexValue, setTabIndexValue] = React.useState(0);
  const searchData = [
    { label: "Arrow" },
    { label: "Braintech" },
    { label: "Fusetech Inc" },
    { label: "Pinnacle Soft" },
    { label: "Secure Inc" },
    { label: "SoftTech" },
  ];
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
    <div style={{ width: "100%", padding: "0 24px" }}>
      <Box
        component="main"
        sx={{ flexDirection: "row" }}
        className="d-flex mt-3 mb-4"
      >
        <Box sx={{ flexGrow: 1, justifyContent: "flex-start" }}>
          <Typography
            variant="header2"
            noWrap
            sx={{
              display: { xs: "none", md: "flex", color: "#383535" },
            }}
            className="oui-page-header"
          >
            Backup Proxies
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} className="mt-1">
          <Tabs
            action={tabsActions}
            variant="standard"
            value={tabIndexValue}
            onChange={handleChange}
            centered
            className="oui-tabs mb-3"
          >
            <Tab label="Backup Proxies" />
            <Tab label="Backup Proxy Pools" />
          </Tabs>
        </Box>
        <Box
          sx={{ flexGrow: 1, justifyContent: "end" }}
          className="mt-1 mb-2 px-0 d-flex"
        >
          <Button
            variant="contained"
            size="small"
            startIcon={<img alt="DeployProxySVG" src={DeployProxySVG} />}
          >
            Deploy Proxies
          </Button>
        </Box>
      </Box>
      <Box component="main" className="w-100">
        <Box sx={{ justifyContent: "flex-end" }} className="d-flex">
          {show ? (
            <Stack spacing={1} sx={{ width: 250 }} className="mb-2">
              <Autocomplete
                freeSolo
                className="oui-stackSearch"
                id="free-solo-2-demo"
                disableClearable
                options={searchData}
                renderInput={(params) => (
                  <TextField
                    autoFocus
                    onBlur={() => setShow((prev) => !prev)}
                    className="oui-searchBox"
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                      placeholder: "search",
                      endAdornment: (
                        <IconButton sx={{ paddingRight: 0 }} disableRipple>
                          <img src={SearchSVG} alt="SearchSVG" />
                        </IconButton>
                      ),
                    }}
                  />
                )}
              />
            </Stack>
          ) : (
            <Box className="d-flex align-items-center ps-2 mb-2">
              <IconButton
                disableRipple
                className="oui-searchButton"
                onClick={() => setShow((prev) => !prev)}
              >
                <img src={SearchSVG} alt="SearchSVG" />
              </IconButton>
            </Box>
          )}
        </Box>
        <div style={{ height: " calc(100vh - 181px)" }}>
          <DataGridDemo />
        </div>
      </Box>
    </div>
  );
};

export default BackupProxyContainer;
