import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UpgradeSVG from "../../images/upgrade.svg";
import ConnectedSVG from "../../images/connected.svg";
import DisconnectedSVG from "../../images/disconnected.svg";
import TableShapeSVG from "../../images/tableShape.svg";
import VersionSVG from "../../images/version.svg";
import RefreshSVG from "../../images/refresh.svg";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "./checkBox";
import { useTheme } from "@mui/material/styles";
import "./GridComponent.css";

export default function ToolbarGrid() {
  const theme = useTheme();
  const [selection, setSelection] = React.useState([]);
  const rows = [
    {
      id: "e5ec2d86-f16e-52f8-98f7-fd25fcf48ba0",
      bp: "DruvaProxy 3",
      version: "4.8.15::r96907",
      time: "May 20, 2020 05:40:34",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected",
    },
    {
      id: "13bd2472-012c-5220-bb3c-5a8d7292e066",
      bp: "DruvaProxy One",
      version: "4.8.15::r96907",
      time: "Jul 07, 2020 05:00:34",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected",
    },
    {
      id: "d1567bf5-465a-543c-8f3a-9e1f2b0b88f7",
      bp: "DruvaProxy 1",
      version: "4.8.15::r96907",
      time: "Jul 17, 2020 15:00:34",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected",
    },
    {
      id: "24cff67b-f3a0-5faa-bd4f-70319a7c7c4b",
      bp: "DruvaProxy2",
      version: "4.8.15::r96907",
      time: "Jul 16, 2020 17:09:48",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected",
    },
    {
      id: "99e5b6b2-85c3-561d-b3a0-705ef2f8b91c",
      bp: "DruvaProxyTwo",
      version: "4.8.15::r96907",
      time: "Jun 04, 2020 16:53:04",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected",
    },
    {
      id: "9aa9859b-aaf1-5c1f-bcf8-bd9ea3d6538c",
      bp: "DruvaProxy1",
      version: "4.8.15::r96907",
      time: "Jun 04, 2020 16:53:04",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected",
    },
    {
      id: "1bb9d24e-55db-52d3-b38e-bf71204ee1d0",
      bp: "DruvaProxyOne",
      version: "4.8.15::r96907",
      time: "Jun 01, 2020 11:52:27",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected",
    },
    {
      id: "0148cf1a-8cb9-5dd0-851a-75bafd939900",
      bp: "DruvaProxyOne Field",
      version: "4.8.15::r96907",
      time: "May 29, 2020 16:04:45",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected",
    },
    {
      id: "76220b40-79db-51de-8711-81b4f55f1a3f",
      bp: "DruvaProxyOne Field",
      version: "4.8.15::r96907",
      time: "Apr 30, 2020 16:34:04",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected",
    },
  ];
  const columns = [
    {
      field: "id",
      hide: true,
      flex: 1,
      minWidth: 110,
    },
    {
      field: "bp",
      headerName: "Backup Proxy",
      flex: 0,
      minWidth: 150,
      // renderCell: (cellValues) => {
      //   console.log(cellValues);
      //   return (
      //     <Link
      //       className="btn--flat"
      //       to={`/detail/${cellValues.formattedValue}`}
      //     >
      //       {cellValues.formattedValue}
      //     </Link>
      //   );
      // },
    },
    {
      field: "version",
      headerName: "Version",
      minWidth: 140,
      renderCell: (cellValues) => {
        return (
          <Box>
            <img src={VersionSVG} alt="VersionSVG" />
            <span className="ps-2">{cellValues.formattedValue}</span>
          </Box>
        );
      },
      editable: true,
      flex: 0,
    },
    {
      field: "time",
      headerName: "Activation Time",
      minWidth: 160,
      editable: true,
      flex: 0,
    },
    {
      field: "server",
      headerName: "ESXi Server",
      minWidth: 120,
      editable: false,
      flex: 0,
    },
    {
      field: "pool",
      headerName: "Backup Proxy Pool",
      minWidth: 160,
      renderCell: (cellValues) => {
        return (
          <Link href="#" underline="none">
            {cellValues.formattedValue}
          </Link>
        );
      },
      editable: false,
      flex: 0,
    },
    {
      field: "phoenix",
      headerName: "Status to Phoenix",
      minWidth: 180,
      renderCell: (cellValues) => {
        return (
          <Box>
            <img src={DisconnectedSVG} alt="DisconnectedSVG" />
            <span className="ps-2">{cellValues.formattedValue}</span>
          </Box>
        );
      },
      editable: false,
      flex: 0,
    },
    {
      field: "vcenter",
      headerName: "Status to VCenter",
      renderCell: (cellValues) => {
        return (
          <Box>
            <img src={ConnectedSVG} alt="ConnectedSVG" />
            <span className="ps-2">{cellValues.formattedValue}</span>
          </Box>
        );
      },
      minWidth: 180,
      editable: false,
      flex: 0,
    },
  ];
  const customToolBar = () => {
    return (
      <GridToolbarContainer>
        <Box className="d-flex align-items-center w-100 px-2">
          <Box sx={{ flexGrow: 1, height: "32px" }} className="d-flex me-5">
            <Button
              className="me-2"
              size="small"
              variant="outlined"
              startIcon={<img alt="UpgradeSVG" src={UpgradeSVG} />}
            >
              Upgrade
            </Button>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls="long-menu"
              aria-expanded="true"
              aria-haspopup="true"
              disableRipple
              className="oui-moreButton"
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Box
            sx={{ flexDirection: "row", flexGrow: 1 }}
            className="d-flex ms-4"
          >
            {selection.length > 0 ? (
              <>
                <div className="mr-1">{selection.length} Selected</div>
              </>
            ) : (
              ""
            )}
            <span className="pe-2" style={{marginLeft: "4px"}}>Proxies | </span>
            <span className="fw-bold pe-1">{rows.length}</span>
            <span className="pe-2"> of {rows.length}</span>
            <img src={RefreshSVG} alt="RefreshSVG" />
          </Box>
          <Box
            sx={{ flexGrow: 1, justifyContent: "flex-end" }}
            className="d-flex"
          >
            <GridToolbarDensitySelector
              variant="densityBtn"
              startIcon={
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.60996 8.33334C6.82027 8.33334 7.83723 9.18318 8.12559 10.3333L15.3504 10.3333C15.7091 10.3333 15.9998 10.6318 15.9998 11C15.9998 11.3273 15.7701 11.5995 15.4672 11.6559L15.3504 11.6667L8.12525 11.668C7.83645 12.8175 6.8198 13.6667 5.60996 13.6667C4.40013 13.6667 3.38348 12.8175 3.09468 11.668L1.0644 11.6667C0.70577 11.6667 0.415039 11.3682 0.415039 11C0.415039 10.6727 0.644752 10.4005 0.94768 10.3441L1.0644 10.3333L3.09434 10.3333C3.38269 9.18318 4.39966 8.33334 5.60996 8.33334ZM10.8049 0.333344C12.0152 0.333344 13.0322 1.18318 13.3205 2.33332L15.3504 2.33334C15.7091 2.33334 15.9998 2.63182 15.9998 3.00001C15.9998 3.32729 15.7701 3.59949 15.4672 3.65594L15.3504 3.66668L13.3202 3.66804C13.0314 4.8175 12.0147 5.66668 10.8049 5.66668C9.59505 5.66668 8.57841 4.8175 8.2896 3.66804L1.0644 3.66668C0.70577 3.66668 0.415039 3.3682 0.415039 3.00001C0.415039 2.67273 0.644752 2.40053 0.94768 2.34408L1.0644 2.33334L8.28927 2.33332C8.57762 1.18318 9.59459 0.333344 10.8049 0.333344Z"
                    fill={theme.palette.mode === "light" ? "#6C6A6A" : "white"}
                  />
                </svg>
              }
            />
          </Box>
        </Box>
      </GridToolbarContainer>
    );
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={rows.length}
        // rowsPerPageOptions={[rows.length]}
        autoPageSize
        hideFooter
        checkboxSelection
        //  disableSelectionOnClick
        components={{
          Toolbar: customToolBar,
          BaseCheckbox: Checkbox,
        }}
        selectionModel={selection}
        onSelectionModelChange={(newSelectionModel) => {
          setSelection(newSelectionModel);
        }}
        disableSelectionOnClick
      />
    </div>
  );
}
