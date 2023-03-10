import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Grid from "@material-ui/core/Grid";
import RegisterSetupDialog from "./RegisterSetupDialog";
import "./VCenterListContainer.css";

import { useTheme } from "@mui/material/styles";

function VCenterListContainer() {
  const theme = useTheme();

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
            All vCenters/ESXi Hosts
          </Typography>
        </Box>
        <Box className="mt-2" sx={{ flexGrow: 0, justifyContent: "flex-end" }}>
          <RegisterSetupDialog />
        </Box>
      </Box>
      <Box component="main" className="w-100 d-flex">
        <Box
          sx={{ justifyContent: "flex-start", flexGrow: 1 }}
          className="d-flex align-items-center mb-2 mt-1"
        >
          <Typography
            variant="h5"
            noWrap
            className="oui-page-header"
          >
            3 vCenters
          </Typography>
          <div
            className="ml-1 mr-1"
            style={{
              borderLeft: theme.palette.mode === "light" ? "1px solid #1D1A1A": "1px solid #FFFFFF",
              opacity: "0.3",
              height: "14px",
              margin: "0 8px",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            className="oui-page-header"
          >
            3 Standalone ESXi hosts
          </Typography>
        </Box>
        <Box
          sx={{ justifyContent: "flex-end" }}
          className="d-flex align-items-center mb-2"
        >
          <Box className="ps-2">
            <IconButton
              aria-label="filter"
              id="filter-button"
              disableRipple
              className=" p-0"
            >
              <svg
                style={{
                  borderLeft: theme.palette.mode === "light" ? "1px solid #e4e4e4" : "1px solid #2A2727",
                  borderTop: theme.palette.mode === "light" ? "1px solid #e4e4e4" : "1px solid #2A2727",
                  borderBottom: theme.palette.mode === "light" ? "1px solid #e4e4e4" : "1px solid #2A2727",
                  opacity: "0.65",
                }}
                width="45"
                height="40"
                viewBox="0 0 45 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H44V40H0V0Z" fill={theme.palette.mode === "light" ? "#F9FAFB" : "#2A2727"} />
                <path
                  d="M18.75 21C19.9926 21 21 22.0074 21 23.25V26.75C21 27.9926 19.9926 29 18.75 29H15.25C14.0074 29 13 27.9926 13 26.75V23.25C13 22.0074 14.0074 21 15.25 21H18.75ZM28.75 21C29.9926 21 31 22.0074 31 23.25V26.75C31 27.9926 29.9926 29 28.75 29H25.25C24.0074 29 23 27.9926 23 26.75V23.25C23 22.0074 24.0074 21 25.25 21H28.75ZM18.75 22.5H15.25C14.8358 22.5 14.5 22.8358 14.5 23.25V26.75C14.5 27.1642 14.8358 27.5 15.25 27.5H18.75C19.1642 27.5 19.5 27.1642 19.5 26.75V23.25C19.5 22.8358 19.1642 22.5 18.75 22.5ZM28.75 22.5H25.25C24.8358 22.5 24.5 22.8358 24.5 23.25V26.75C24.5 27.1642 24.8358 27.5 25.25 27.5H28.75C29.1642 27.5 29.5 27.1642 29.5 26.75V23.25C29.5 22.8358 29.1642 22.5 28.75 22.5ZM18.75 11C19.9926 11 21 12.0074 21 13.25V16.75C21 17.9926 19.9926 19 18.75 19H15.25C14.0074 19 13 17.9926 13 16.75V13.25C13 12.0074 14.0074 11 15.25 11H18.75ZM28.75 11C29.9926 11 31 12.0074 31 13.25V16.75C31 17.9926 29.9926 19 28.75 19H25.25C24.0074 19 23 17.9926 23 16.75V13.25C23 12.0074 24.0074 11 25.25 11H28.75ZM18.75 12.5H15.25C14.8358 12.5 14.5 12.8358 14.5 13.25V16.75C14.5 17.1642 14.8358 17.5 15.25 17.5H18.75C19.1642 17.5 19.5 17.1642 19.5 16.75V13.25C19.5 12.8358 19.1642 12.5 18.75 12.5ZM28.75 12.5H25.25C24.8358 12.5 24.5 12.8358 24.5 13.25V16.75C24.5 17.1642 24.8358 17.5 25.25 17.5H28.75C29.1642 17.5 29.5 17.1642 29.5 16.75V13.25C29.5 12.8358 29.1642 12.5 28.75 12.5Z"
                  fill={theme.palette.mode === "light" ? "#212121" : "#F6F6F6"}
                />
                <path d="M43.5 0V40H44.5V0H43.5Z" fill={theme.palette.mode === "light" ? "#E4E4E4": "#2A2727"} />
              </svg>
            </IconButton>
            <IconButton
              aria-label="filter"
              id="filter-button"
              disableRipple
              className="p-0"
            >
              <svg
                style={{
                  borderTop: theme.palette.mode === "light" ? "1px solid #e4e4e4" : "1px solid #2A2727",
                  borderBottom: theme.palette.mode === "light" ? "1px solid #e4e4e4" : "1px solid #2A2727",
                }}
                width="44"
                height="40"
                viewBox="0 0 44 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H44V40H0V0Z" fill={theme.palette.mode === "light" ? "white" : "#1D1A1A"} />
                <path
                  d="M16.25 11C14.4551 11 13 12.4551 13 14.25V25.75C13 27.5449 14.4551 29 16.25 29H27.75C29.5449 29 31 27.5449 31 25.75V14.25C31 12.4551 29.5449 11 27.75 11H16.25ZM14.5 14.25C14.5 13.2835 15.2835 12.5 16.25 12.5H27.75C28.7165 12.5 29.5 13.2835 29.5 14.25V22H14.5V14.25ZM20 23.5H24V27.5H20V23.5ZM27.75 27.5H25.5V23.5H29.5V25.75C29.5 26.7165 28.7165 27.5 27.75 27.5ZM14.5 25.75V23.5H18.5V27.5H16.25C15.2835 27.5 14.5 26.7165 14.5 25.75Z"
                  fill={theme.palette.mode === "light" ? "#212121" : "#6C6A6A" }
                  fill-opacity="0.6"
                />
                <path d="M43.5 0V40H44.5V0H43.5Z" fill={theme.palette.mode === "light" ? "#D0D5DD" : "#2A2727"} />
              </svg>
            </IconButton>
          </Box>
        </Box>
      </Box>
      <List sx={{ width: "100%" }} className="listitem-card">
        <ListItem>
          <div className="w-100">
            <Box className="d-flex align-items-center w-100 mb-2">
              <Box
                sx={{ flexGrow: 1, marginRight: "8px" }}
                className="justify-content-start align-items-center d-flex"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="2" fill="white" />
                  <rect width="28" height="28" rx="2" fill={theme.palette.mode === "light" ? "#F6F6F6":"#383535"} />
                  <path
                    d="M11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10H16.5C16.7761 10 17 9.77614 17 9.5C17 9.22386 16.7761 9 16.5 9H11.5ZM11 16.5C11 16.2239 11.2239 16 11.5 16H16.5C16.7761 16 17 16.2239 17 16.5C17 16.7761 16.7761 17 16.5 17H11.5C11.2239 17 11 16.7761 11 16.5ZM11.5 18C11.2239 18 11 18.2239 11 18.5C11 18.7761 11.2239 19 11.5 19H16.5C16.7761 19 17 18.7761 17 18.5C17 18.2239 16.7761 18 16.5 18H11.5ZM9 8.5C9 7.11929 10.1193 6 11.5 6H16.5C17.8807 6 19 7.11929 19 8.5V19.5C19 20.8807 17.8807 22 16.5 22H11.5C10.1193 22 9 20.8807 9 19.5V8.5ZM11.5 7C10.6716 7 10 7.67157 10 8.5V19.5C10 20.3284 10.6716 21 11.5 21H16.5C17.3284 21 18 20.3284 18 19.5V8.5C18 7.67157 17.3284 7 16.5 7H11.5Z"
                    fill={theme.palette.mode === "light" ? "#505D66" : "#F6F6F6" }
                  />
                </svg>
                <Typography variant="h4" className="ps-2">
                  <Link href="#" underline="none">
                    172.16.20.165
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 0 }} className="justify-content-end">
                <IconButton
                  aria-label="filter"
                  id="filter-button"
                  disableRipple
                  className="oui-moreButton"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5835 6C9.89314 6 9.3335 5.44036 9.3335 4.75C9.3335 4.05964 9.89314 3.5 10.5835 3.5C11.2739 3.5 11.8335 4.05964 11.8335 4.75C11.8335 5.44036 11.2739 6 10.5835 6ZM10.5835 11.25C9.89314 11.25 9.3335 10.6904 9.3335 10C9.3335 9.30964 9.89314 8.75 10.5835 8.75C11.2739 8.75 11.8335 9.30964 11.8335 10C11.8335 10.6904 11.2739 11.25 10.5835 11.25ZM9.3335 15.25C9.3335 15.9404 9.89314 16.5 10.5835 16.5C11.2739 16.5 11.8335 15.9404 11.8335 15.25C11.8335 14.5596 11.2739 14 10.5835 14C9.89314 14 9.3335 14.5596 9.3335 15.25Z"
                      fill="white"
                    />
                    <path
                      d="M10.5835 6C9.89314 6 9.3335 5.44036 9.3335 4.75C9.3335 4.05964 9.89314 3.5 10.5835 3.5C11.2739 3.5 11.8335 4.05964 11.8335 4.75C11.8335 5.44036 11.2739 6 10.5835 6ZM10.5835 11.25C9.89314 11.25 9.3335 10.6904 9.3335 10C9.3335 9.30964 9.89314 8.75 10.5835 8.75C11.2739 8.75 11.8335 9.30964 11.8335 10C11.8335 10.6904 11.2739 11.25 10.5835 11.25ZM9.3335 15.25C9.3335 15.9404 9.89314 16.5 10.5835 16.5C11.2739 16.5 11.8335 15.9404 11.8335 15.25C11.8335 14.5596 11.2739 14 10.5835 14C9.89314 14 9.3335 14.5596 9.3335 15.25Z"
                      fill={theme.palette.mode === "light" ? "#383535" : "#E4E4E4" }
                    />
                  </svg>
                </IconButton>
              </Box>
            </Box>
            <Grid container spacing={4} className="mb-0">
              <Grid
                className="align-items-start"
                container
                item
                xs={3}
                direction="column"
              >
                <div style={{ margin: "0 28px" }}>
                  <Typography variant="h2" gutterBottom>
                    <Link href="#" underline="none">
                      19
                    </Link>
                    /28
                  </Typography>
                  <Typography variant="body3" gutterBottom>
                    Backup Enabled VMs
                  </Typography>
                  <svg
                    width="206"
                    height="17"
                    viewBox="0 0 206 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="206" height="17" rx="2" fill="white" />
                    <rect width="206" height="17" rx="2" fill="#E4E4E4" />
                    <rect width="82" height="17" rx="2" fill="white" />
                    <rect width="82" height="17" rx="2" fill="#8E6EF2" />
                  </svg>
                </div>
              </Grid>
              <Grid
                className="align-items-start"
                container
                item
                xs={3}
                direction="column"
              >
                <Box className="d-flex align-items-center">
                  <svg
                    width="88"
                    height="86"
                    viewBox="0 0 88 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.9922 0C67.7404 0 86.9922 19.2518 86.9922 43C86.9922 66.7482 67.7404 86 43.9922 86C20.2439 86 0.992188 66.7482 0.992188 43C0.992188 19.2518 20.2439 0 43.9922 0ZM43.9922 79.98C64.4157 79.98 80.9722 63.4235 80.9722 43C80.9722 22.5765 64.4157 6.02 43.9922 6.02C23.5687 6.02 7.01219 22.5765 7.01219 43C7.01219 63.4235 23.5687 79.98 43.9922 79.98Z"
                      fill="#E4E4E4"
                    />
                    <path
                      d="M43.9922 0C67.7404 0 86.9922 19.2518 86.9922 43C86.9922 66.7482 67.7404 86 43.9922 86C20.2439 86 0.992188 66.7482 0.992188 43C0.992188 19.2518 20.2439 0 43.9922 0ZM43.9922 79.98C64.4157 79.98 80.9722 63.4235 80.9722 43C80.9722 22.5765 64.4157 6.02 43.9922 6.02C23.5687 6.02 7.01219 22.5765 7.01219 43C7.01219 63.4235 23.5687 79.98 43.9922 79.98Z"
                      fill="white"
                    />
                    <path
                      d="M43.9922 0C67.7404 0 86.9922 19.2518 86.9922 43C86.9922 66.7482 67.7404 86 43.9922 86C20.2439 86 0.992188 66.7482 0.992188 43C0.992188 19.2518 20.2439 0 43.9922 0ZM43.9922 79.98C64.4157 79.98 80.9722 63.4235 80.9722 43C80.9722 22.5765 64.4157 6.02 43.9922 6.02C23.5687 6.02 7.01219 22.5765 7.01219 43C7.01219 63.4235 23.5687 79.98 43.9922 79.98Z"
                      fill="#8E6EF2"
                    />
                    <path
                      d="M43.9922 0C52.5589 0 60.9304 2.55886 68.0331 7.34845C75.1359 12.138 80.6461 18.94 83.8572 26.8822C87.0683 34.8243 87.8339 43.5446 86.0558 51.9248C84.2778 60.305 80.0371 67.963 73.8776 73.917C67.7181 79.871 59.9206 83.8494 51.4849 85.3422C43.0492 86.8349 34.36 85.7739 26.5313 82.2953C18.7027 78.8166 12.0915 73.0788 7.54562 65.8177C2.99973 58.5566 0.726328 50.1031 1.01694 41.5413L7.03347 41.7455C6.78355 49.1087 8.73867 56.3787 12.6481 62.6232C16.5576 68.8678 22.2432 73.8023 28.9758 76.7939C35.7085 79.7856 43.1813 80.698 50.4359 79.4143C57.6906 78.1305 64.3965 74.709 69.6936 69.5886C74.9908 64.4682 78.6378 57.8823 80.1669 50.6753C81.696 43.4684 81.0376 35.9689 78.2761 29.1387C75.5145 22.3084 70.7757 16.4587 64.6674 12.3397C58.559 8.22062 51.3596 6.02 43.9922 6.02V0Z"
                      fill="#EECB62"
                    />
                    <path
                      d="M43.9922 0C52.0463 0 59.9385 2.26201 66.7698 6.52837C73.6011 10.7947 79.0969 16.8939 82.6311 24.1312C86.1653 31.3684 87.5959 39.4528 86.7599 47.4634C85.9239 55.474 82.8549 63.0888 77.9025 69.4403L73.1551 65.7387C77.4141 60.2763 80.0535 53.7276 80.7724 46.8385C81.4914 39.9494 80.2611 32.9968 77.2217 26.7728C74.1822 20.5488 69.4559 15.3035 63.5809 11.6344C57.706 7.96533 50.9187 6.02 43.9922 6.02V0Z"
                      fill="#73C686"
                    />
                    <path
                      d="M43.9922 0C51.7297 0 59.3238 2.08778 65.9739 6.04322L62.8965 11.2172C57.1774 7.8155 50.6464 6.02 43.9922 6.02V0Z"
                      fill="#E96D78"
                    />
                  </svg>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ marginLeft: "12px" }}
                  >
                    Last Backup Status
                  </Typography>
                </Box>
              </Grid>
              <Grid
                className="align-items-start"
                container
                item
                xs={3}
                direction="column"
              >
                <Typography variant="h2">
                  <Link href="#" underline="none">
                    14
                  </Link>
                </Typography>
                <Typography variant="body3" gutterBottom>
                  Backup Proxies
                </Typography>
              </Grid>
              <Grid
                className="align-items-start"
                container
                item
                xs={3}
                direction="column"
              >
                <Typography variant="h2">
                  <Link href="#" underline="none">
                    02
                  </Link>
                </Typography>
                <Typography variant="body3" gutterBottom>
                  Backup Proxy Pools
                </Typography>
              </Grid>
            </Grid>
          </div>
        </ListItem>
        <ListItem sx={{}}>
          <div className="w-100">
            <Box className="d-flex align-items-center w-100 mb-2">
              <Box
                sx={{ flexGrow: 1, marginRight: "8px" }}
                className="justify-content-start align-items-center d-flex"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="2" fill="white" />
                  <rect width="28" height="28" rx="2" fill={theme.palette.mode === "light" ? "#F6F6F6":"#383535"} />
                  <path
                    d="M11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10H16.5C16.7761 10 17 9.77614 17 9.5C17 9.22386 16.7761 9 16.5 9H11.5ZM11 16.5C11 16.2239 11.2239 16 11.5 16H16.5C16.7761 16 17 16.2239 17 16.5C17 16.7761 16.7761 17 16.5 17H11.5C11.2239 17 11 16.7761 11 16.5ZM11.5 18C11.2239 18 11 18.2239 11 18.5C11 18.7761 11.2239 19 11.5 19H16.5C16.7761 19 17 18.7761 17 18.5C17 18.2239 16.7761 18 16.5 18H11.5ZM9 8.5C9 7.11929 10.1193 6 11.5 6H16.5C17.8807 6 19 7.11929 19 8.5V19.5C19 20.8807 17.8807 22 16.5 22H11.5C10.1193 22 9 20.8807 9 19.5V8.5ZM11.5 7C10.6716 7 10 7.67157 10 8.5V19.5C10 20.3284 10.6716 21 11.5 21H16.5C17.3284 21 18 20.3284 18 19.5V8.5C18 7.67157 17.3284 7 16.5 7H11.5Z"
                    fill={theme.palette.mode === "light" ? "#505D66" : "#F6F6F6" }
                  />
                </svg>
                <Typography variant="h4" className="ps-2">
                  <Link href="#" underline="none">
                    192.168.54.231
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 0 }} className="justify-content-end">
                <IconButton
                  aria-label="filter"
                  id="filter-button"
                  disableRipple
                  className="oui-moreButton"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5835 6C9.89314 6 9.3335 5.44036 9.3335 4.75C9.3335 4.05964 9.89314 3.5 10.5835 3.5C11.2739 3.5 11.8335 4.05964 11.8335 4.75C11.8335 5.44036 11.2739 6 10.5835 6ZM10.5835 11.25C9.89314 11.25 9.3335 10.6904 9.3335 10C9.3335 9.30964 9.89314 8.75 10.5835 8.75C11.2739 8.75 11.8335 9.30964 11.8335 10C11.8335 10.6904 11.2739 11.25 10.5835 11.25ZM9.3335 15.25C9.3335 15.9404 9.89314 16.5 10.5835 16.5C11.2739 16.5 11.8335 15.9404 11.8335 15.25C11.8335 14.5596 11.2739 14 10.5835 14C9.89314 14 9.3335 14.5596 9.3335 15.25Z"
                      fill="white"
                    />
                    <path
                      d="M10.5835 6C9.89314 6 9.3335 5.44036 9.3335 4.75C9.3335 4.05964 9.89314 3.5 10.5835 3.5C11.2739 3.5 11.8335 4.05964 11.8335 4.75C11.8335 5.44036 11.2739 6 10.5835 6ZM10.5835 11.25C9.89314 11.25 9.3335 10.6904 9.3335 10C9.3335 9.30964 9.89314 8.75 10.5835 8.75C11.2739 8.75 11.8335 9.30964 11.8335 10C11.8335 10.6904 11.2739 11.25 10.5835 11.25ZM9.3335 15.25C9.3335 15.9404 9.89314 16.5 10.5835 16.5C11.2739 16.5 11.8335 15.9404 11.8335 15.25C11.8335 14.5596 11.2739 14 10.5835 14C9.89314 14 9.3335 14.5596 9.3335 15.25Z"
                      fill={theme.palette.mode === "light" ? "#383535" : "#E4E4E4" }
                    />
                  </svg>
                </IconButton>
              </Box>
            </Box>
            <Grid container spacing={4} className="mb-0">
              <Grid
                className="align-items-start"
                container
                item
                xs={3}
                direction="column"
              >
                <div style={{ margin: "0 28px" }}>
                  <Typography variant="h2" gutterBottom>
                    <Link href="#" underline="none">
                      6
                    </Link>
                    /28
                  </Typography>
                  <Typography variant="body3" gutterBottom>
                    Backup Enabled VMs
                  </Typography>
                  <svg
                    width="206"
                    height="17"
                    viewBox="0 0 206 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="206" height="17" rx="2" fill="white" />
                    <rect width="206" height="17" rx="2" fill="#E4E4E4" />
                    <rect width="19" height="17" rx="2" fill="white" />
                    <rect width="19" height="17" rx="2" fill="#8E6EF2" />
                  </svg>
                </div>
              </Grid>
              <Grid
                className="align-items-start"
                container
                item
                xs={3}
                direction="column"
              >
                <Box className="d-flex align-items-center">
                  <svg
                    width="88"
                    height="86"
                    viewBox="0 0 88 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.9922 0C67.7404 0 86.9922 19.2518 86.9922 43C86.9922 66.7482 67.7404 86 43.9922 86C20.2439 86 0.992188 66.7482 0.992188 43C0.992188 19.2518 20.2439 0 43.9922 0ZM43.9922 79.98C64.4157 79.98 80.9722 63.4235 80.9722 43C80.9722 22.5765 64.4157 6.02 43.9922 6.02C23.5687 6.02 7.01219 22.5765 7.01219 43C7.01219 63.4235 23.5687 79.98 43.9922 79.98Z"
                      fill="#E4E4E4"
                    />
                    <path
                      d="M43.9922 0C34.9115 0 26.0639 2.87476 18.7174 8.21227L22.2559 13.0826C28.5738 8.49229 36.1828 6.02 43.9922 6.02V0Z"
                      fill="white"
                    />
                    <path
                      d="M43.9922 0C34.9115 0 26.0639 2.87476 18.7174 8.21227L22.2559 13.0826C28.5738 8.49229 36.1828 6.02 43.9922 6.02V0Z"
                      fill="#8E6EF2"
                    />
                    <path
                      d="M43.9922 0C54.2934 0 64.2522 3.69804 72.0569 10.4213C79.8615 17.1445 84.9932 26.4462 86.5183 36.6338C88.0434 46.8215 85.8606 57.2181 80.3669 65.9321C74.8732 74.6461 66.4339 81.0984 56.5843 84.115C46.7347 87.1315 36.1294 86.512 26.6981 82.369C17.2668 78.226 9.63618 70.8349 5.1946 61.5404C0.753016 52.246 -0.204355 41.6659 2.49668 31.7251C5.19771 21.7844 11.3776 13.1436 19.9121 7.3749L23.2833 12.3624C15.9437 17.3235 10.6289 24.7546 8.30605 33.3036C5.98316 41.8527 6.8065 50.9515 10.6263 58.9448C14.446 66.938 21.0084 73.2943 29.1193 76.8573C37.2302 80.4203 46.3507 80.9531 54.8214 78.3589C63.292 75.7646 70.5499 70.2156 75.2744 62.7216C79.999 55.2276 81.8762 46.2865 80.5647 37.5251C79.2531 28.7637 74.8398 20.7643 68.1278 14.9823C61.4158 9.20031 52.8512 6.02 43.9922 6.02V0Z"
                      fill="#EECB62"
                    />
                    <path
                      d="M43.9922 0C52.0463 0 59.9385 2.26201 66.7698 6.52837C73.6011 10.7947 79.0969 16.8939 82.6311 24.1312C86.1653 31.3684 87.5959 39.4528 86.7599 47.4634C85.9239 55.474 82.8549 63.0888 77.9025 69.4403L73.1551 65.7387C77.4141 60.2763 80.0535 53.7276 80.7724 46.8385C81.4914 39.9494 80.2611 32.9968 77.2217 26.7728C74.1822 20.5488 69.4559 15.3035 63.5809 11.6344C57.706 7.96533 50.9187 6.02 43.9922 6.02V0Z"
                      fill="#73C686"
                    />
                    <path
                      d="M43.9922 0C51.7297 0 59.3238 2.08778 65.9739 6.04322L62.8965 11.2172C57.1774 7.8155 50.6464 6.02 43.9922 6.02V0Z"
                      fill="#E96D78"
                    />
                  </svg>

                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ marginLeft: "12px" }}
                  >
                    Last Backup Status
                  </Typography>
                </Box>
              </Grid>
              <Grid
                className="align-items-start"
                container
                item
                xs={3}
                direction="column"
              >
                <Typography variant="h2">
                  <Link href="#" underline="none">
                    32
                  </Link>
                </Typography>
                <Typography variant="body3" gutterBottom>
                  Backup Proxies
                </Typography>
              </Grid>
              <Grid
                className="align-items-start"
                container
                item
                xs={3}
                direction="column"
              >
                <Typography variant="h2">
                  <Link href="#" underline="none">
                    41
                  </Link>
                </Typography>
                <Typography variant="body3" gutterBottom>
                  Backup Proxy Pools
                </Typography>
              </Grid>
            </Grid>
          </div>
        </ListItem>
        <ListItem>
          <div className="w-100">
            <Box className="d-flex align-items-center w-100 mb-2">
              <Box
                sx={{ flexGrow: 1, marginRight: "8px" }}
                className="justify-content-start align-items-center d-flex"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="2" fill="white" />
                  <rect width="28" height="28" rx="2" fill={theme.palette.mode === "light" ? "#F6F6F6":"#383535"} />
                  <path
                    d="M11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10H16.5C16.7761 10 17 9.77614 17 9.5C17 9.22386 16.7761 9 16.5 9H11.5ZM11 16.5C11 16.2239 11.2239 16 11.5 16H16.5C16.7761 16 17 16.2239 17 16.5C17 16.7761 16.7761 17 16.5 17H11.5C11.2239 17 11 16.7761 11 16.5ZM11.5 18C11.2239 18 11 18.2239 11 18.5C11 18.7761 11.2239 19 11.5 19H16.5C16.7761 19 17 18.7761 17 18.5C17 18.2239 16.7761 18 16.5 18H11.5ZM9 8.5C9 7.11929 10.1193 6 11.5 6H16.5C17.8807 6 19 7.11929 19 8.5V19.5C19 20.8807 17.8807 22 16.5 22H11.5C10.1193 22 9 20.8807 9 19.5V8.5ZM11.5 7C10.6716 7 10 7.67157 10 8.5V19.5C10 20.3284 10.6716 21 11.5 21H16.5C17.3284 21 18 20.3284 18 19.5V8.5C18 7.67157 17.3284 7 16.5 7H11.5Z"
                    fill={theme.palette.mode === "light" ? "#505D66" : "#F6F6F6" }
                  />
                </svg>
                <Typography variant="h4" className="ps-2">
                  <Link href="#" underline="none">
                    172.16.20.194
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 0 }} className="justify-content-end">
                <IconButton
                  aria-label="filter"
                  id="filter-button"
                  disableRipple
                  className="oui-moreButton"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5835 6C9.89314 6 9.3335 5.44036 9.3335 4.75C9.3335 4.05964 9.89314 3.5 10.5835 3.5C11.2739 3.5 11.8335 4.05964 11.8335 4.75C11.8335 5.44036 11.2739 6 10.5835 6ZM10.5835 11.25C9.89314 11.25 9.3335 10.6904 9.3335 10C9.3335 9.30964 9.89314 8.75 10.5835 8.75C11.2739 8.75 11.8335 9.30964 11.8335 10C11.8335 10.6904 11.2739 11.25 10.5835 11.25ZM9.3335 15.25C9.3335 15.9404 9.89314 16.5 10.5835 16.5C11.2739 16.5 11.8335 15.9404 11.8335 15.25C11.8335 14.5596 11.2739 14 10.5835 14C9.89314 14 9.3335 14.5596 9.3335 15.25Z"
                      fill="white"
                    />
                    <path
                      d="M10.5835 6C9.89314 6 9.3335 5.44036 9.3335 4.75C9.3335 4.05964 9.89314 3.5 10.5835 3.5C11.2739 3.5 11.8335 4.05964 11.8335 4.75C11.8335 5.44036 11.2739 6 10.5835 6ZM10.5835 11.25C9.89314 11.25 9.3335 10.6904 9.3335 10C9.3335 9.30964 9.89314 8.75 10.5835 8.75C11.2739 8.75 11.8335 9.30964 11.8335 10C11.8335 10.6904 11.2739 11.25 10.5835 11.25ZM9.3335 15.25C9.3335 15.9404 9.89314 16.5 10.5835 16.5C11.2739 16.5 11.8335 15.9404 11.8335 15.25C11.8335 14.5596 11.2739 14 10.5835 14C9.89314 14 9.3335 14.5596 9.3335 15.25Z"
                      fill={theme.palette.mode === "light" ? "#383535" : "#E4E4E4" }
                    />
                  </svg>
                </IconButton>
              </Box>
            </Box>
            <Grid container spacing={4} className="mb-0">
              <Grid
                className="align-items-start"
                container
                item
                xs={3}
                direction="column"
              >
                <div style={{ margin: "0 28px" }}>
                  <Typography variant="h2" gutterBottom>
                    <Link href="#" underline="none">
                      20
                    </Link>
                    /28
                  </Typography>
                  <Typography variant="body3" gutterBottom>
                    Backup Enabled VMs
                  </Typography>
                  <svg
                    width="206"
                    height="17"
                    viewBox="0 0 206 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="206" height="17" rx="2" fill="white" />
                    <rect width="206" height="17" rx="2" fill="#E4E4E4" />
                    <rect width="82" height="17" rx="2" fill="white" />
                    <rect width="82" height="17" rx="2" fill="#8E6EF2" />
                  </svg>
                </div>
              </Grid>
              <Grid
                className="align-items-start"
                container
                item
                xs={3}
                direction="column"
              >
                <Box className="d-flex align-items-center">
                  <svg
                    width="88"
                    height="86"
                    viewBox="0 0 88 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.9922 0C67.7404 0 86.9922 19.2518 86.9922 43C86.9922 66.7482 67.7404 86 43.9922 86C20.2439 86 0.992188 66.7482 0.992188 43C0.992188 19.2518 20.2439 0 43.9922 0ZM43.9922 79.98C64.4157 79.98 80.9722 63.4235 80.9722 43C80.9722 22.5765 64.4157 6.02 43.9922 6.02C23.5687 6.02 7.01219 22.5765 7.01219 43C7.01219 63.4235 23.5687 79.98 43.9922 79.98Z"
                      fill="#E4E4E4"
                    />
                    <path
                      d="M43.9922 0C67.7404 0 86.9922 19.2518 86.9922 43C86.9922 66.7482 67.7404 86 43.9922 86C20.2439 86 0.992188 66.7482 0.992188 43C0.992188 19.2518 20.2439 0 43.9922 0ZM43.9922 79.98C64.4157 79.98 80.9722 63.4235 80.9722 43C80.9722 22.5765 64.4157 6.02 43.9922 6.02C23.5687 6.02 7.01219 22.5765 7.01219 43C7.01219 63.4235 23.5687 79.98 43.9922 79.98Z"
                      fill="white"
                    />
                    <path
                      d="M43.9922 0C67.7404 0 86.9922 19.2518 86.9922 43C86.9922 66.7482 67.7404 86 43.9922 86C20.2439 86 0.992188 66.7482 0.992188 43C0.992188 19.2518 20.2439 0 43.9922 0ZM43.9922 79.98C64.4157 79.98 80.9722 63.4235 80.9722 43C80.9722 22.5765 64.4157 6.02 43.9922 6.02C23.5687 6.02 7.01219 22.5765 7.01219 43C7.01219 63.4235 23.5687 79.98 43.9922 79.98Z"
                      fill="#8E6EF2"
                    />
                    <path
                      d="M43.9922 0C52.5589 0 60.9304 2.55886 68.0331 7.34845C75.1359 12.138 80.6461 18.94 83.8572 26.8822C87.0683 34.8243 87.8339 43.5446 86.0558 51.9248C84.2778 60.305 80.0371 67.963 73.8776 73.917C67.7181 79.871 59.9206 83.8494 51.4849 85.3422C43.0492 86.8349 34.36 85.7739 26.5313 82.2953C18.7027 78.8166 12.0915 73.0788 7.54562 65.8177C2.99973 58.5566 0.726328 50.1031 1.01694 41.5413L7.03347 41.7455C6.78355 49.1087 8.73867 56.3787 12.6481 62.6232C16.5576 68.8678 22.2432 73.8023 28.9758 76.7939C35.7085 79.7856 43.1813 80.698 50.4359 79.4143C57.6906 78.1305 64.3965 74.709 69.6936 69.5886C74.9908 64.4682 78.6378 57.8823 80.1669 50.6753C81.696 43.4684 81.0376 35.9689 78.2761 29.1387C75.5145 22.3084 70.7757 16.4587 64.6674 12.3397C58.559 8.22062 51.3596 6.02 43.9922 6.02V0Z"
                      fill="#EECB62"
                    />
                    <path
                      d="M43.9922 0C52.0463 0 59.9385 2.26201 66.7698 6.52837C73.6011 10.7947 79.0969 16.8939 82.6311 24.1312C86.1653 31.3684 87.5959 39.4528 86.7599 47.4634C85.9239 55.474 82.8549 63.0888 77.9025 69.4403L73.1551 65.7387C77.4141 60.2763 80.0535 53.7276 80.7724 46.8385C81.4914 39.9494 80.2611 32.9968 77.2217 26.7728C74.1822 20.5488 69.4559 15.3035 63.5809 11.6344C57.706 7.96533 50.9187 6.02 43.9922 6.02V0Z"
                      fill="#73C686"
                    />
                    <path
                      d="M43.9922 0C51.7297 0 59.3238 2.08778 65.9739 6.04322L62.8965 11.2172C57.1774 7.8155 50.6464 6.02 43.9922 6.02V0Z"
                      fill="#E96D78"
                    />
                  </svg>
                  <Typography
                    variant="body3"
                    gutterBottom
                    sx={{ marginLeft: "12px" }}
                  >
                    Last Backup Status
                  </Typography>
                </Box>
              </Grid>
              <Grid
                className="align-items-start"
                container
                item
                xs={3}
                direction="column"
              >
                <Typography variant="h2">
                  <Link href="#" underline="none">
                    5
                  </Link>
                </Typography>
                <Typography variant="body3" gutterBottom>
                  Backup Proxies
                </Typography>
              </Grid>
              <Grid
                className="align-items-start"
                container
                item
                xs={3}
                direction="column"
              >
                <Typography variant="h2">
                  <Link href="#" underline="none">
                    04
                  </Link>
                </Typography>
                <Typography variant="body3" gutterBottom>
                  Backup Proxy Pools
                </Typography>
              </Grid>
            </Grid>
          </div>
        </ListItem>
      </List>
    </div>
  );
}

export default VCenterListContainer;
