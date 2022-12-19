import * as React from "react";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import Link from '@mui/material/Link';
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
import "./GridComponent.css";
export default function ToolbarGrid() {
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
      vcenter: "Connected"
    },
    {
      id: "13bd2472-012c-5220-bb3c-5a8d7292e066",
      bp: "DruvaProxy One",
      version: "4.8.15::r96907",
      time: "Jul 07, 2020 05:00:34",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected"
    },
    {
      id: "d1567bf5-465a-543c-8f3a-9e1f2b0b88f7",
      bp: "DruvaProxy 1",
      version: "4.8.15::r96907",
      time: "Jul 17, 2020 15:00:34",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected"
    },
    {
      id: "24cff67b-f3a0-5faa-bd4f-70319a7c7c4b",
      bp: "DruvaProxy2",
      version: "4.8.15::r96907",
      time: "Jul 16, 2020 17:09:48",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected"
    },
    {
      id: "99e5b6b2-85c3-561d-b3a0-705ef2f8b91c",
      bp: "DruvaProxyTwo",
      version: "4.8.15::r96907",
      time: "Jun 04, 2020 16:53:04",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected"
    },
    {
      id: "9aa9859b-aaf1-5c1f-bcf8-bd9ea3d6538c",
      bp: "DruvaProxy1",
      version: "4.8.15::r96907",
      time: "Jun 04, 2020 16:53:04",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected"
    },
    {
      id: "1bb9d24e-55db-52d3-b38e-bf71204ee1d0",
      bp: "DruvaProxyOne",
      version: "4.8.15::r96907",
      time: "Jun 01, 2020 11:52:27",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected"
    },
    {
      id: "0148cf1a-8cb9-5dd0-851a-75bafd939900",
      bp: "DruvaProxyOne Field",
      version: "4.8.15::r96907",
      time: "May 29, 2020 16:04:45",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected"
    },
    {
      id: "76220b40-79db-51de-8711-81b4f55f1a3f",
      bp: "DruvaProxyOne Field",
      version: "4.8.15::r96907",
      time: "Apr 30, 2020 16:34:04",
      server: "172.16.27.102",
      pool: "Default Proxy Pool",
      phoenix: "Disconnected",
      vcenter: "Connected"
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
            <img src={VersionSVG} alt="VersionSVG"/>
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
            <img src={DisconnectedSVG} alt="DisconnectedSVG"/>
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
            <img src={ConnectedSVG} alt="ConnectedSVG"/>
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
        <Box sx={{flexGrow: 1,height: "32px",}} className="d-flex me-5">
        <Button className="me-2" size="small" variant="outlined" startIcon={<img alt="UpgradeSVG" src={UpgradeSVG}/>}>
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
        <Box sx={{ flexDirection: 'row', flexGrow: 1}} className="d-flex ms-4">
        {selection.length > 0 ? <><div>{selection.length} Selected</div>
          <div className="oui-gridSlash"/></> : ""}
          <span className="pe-2">Proxies | </span>
          <span className="fw-bold pe-1">{rows.length}</span>
          <span className="pe-2"> of {rows.length}</span>
          <img src={RefreshSVG} alt="RefreshSVG" />
        </Box>
        {/* <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport /> */}
        <Box sx={{flexGrow: 1,justifyContent: 'flex-end'}} className="d-flex">
        <IconButton
            aria-label="filter"
            disableRipple
            className="oui-moreButton"
          >
            <img src={TableShapeSVG} alt="TableShapeSVG" />
          </IconButton>
        
        </Box>
        
        </Box>
      </GridToolbarContainer>
    );
  }
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
          BaseCheckbox: Checkbox
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
