import * as React from "react";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TableShapeSVG from "../../images/tableShape.svg";
import VersionSVG from "../../images/version.svg";
import RefreshSVG from "../../images/refresh.svg";
import IconButton from "@mui/material/IconButton";
import Checkbox from "./checkBox";
import "./GridComponent.css";

export default function ToolbarGrid(props) {
  const [selection, setSelection] = React.useState([]);
  const rows = [
    {
      id: "e5ec2d86-f16e-52f8-98f7-fd25fcf48ba0",
      bp: "Policy 1",
      version: "Mon from 05:00 AM for 7 hours. Bandwidth: 10 Mbps",
      time: "60D, 24W, 12M, 3Y",
      server: "Enable",
      pool: 6,
    },
    {
      id: "13bd2472-012c-5220-bb3c-5a8d7292e066",
      bp: "Policy 2",
      version:
        "Wed from 06:00 AM for 7 hours. Bandwidth: 10 Mbps. Transaction Logs Backup: Every 10 mins.",
      time: "60D, 24W, 12M, 3Y",
      server: "Disable",
      pool: 3,
    },
    {
      id: "d1567bf5-465a-543c-8f3a-9e1f2b0b88f7",
      bp: "Policy 3",
      version: "Mon from 05:00 AM for 7 hours. Bandwidth: 10 Mbps",
      time: "60D, 24W, 12M, 3Y",
      server: "Disable",
      pool: 4,
    },
    {
      id: "24cff67b-f3a0-5faa-bd4f-70319a7c7c4b",
      bp: "Policy 4",
      version: "Mon from 05:00 AM for 7 hours. Bandwidth: 10 Mbps",
      time: "60D, 24W, 12M, 3Y",
      server: "Disable",
      pool: 1,
    },
    {
      id: "99e5b6b2-85c3-561d-b3a0-705ef2f8b91c",
      bp: "Policy 5",
      version: "Mon from 05:00 AM for 7 hours. Bandwidth: 10 Mbps",
      time: "60D, 24W, 12M, 3Y",
      server: "Disable",
      pool: 1,
    },
    {
      id: "9aa9859b-aaf1-5c1f-bcf8-bd9ea3d6538c",
      bp: "Policy 6",
      version:
        "Wed from 06:00 AM for 7 hours. Bandwidth: 10 Mbps. Transaction Logs Backup: Every 10 mins.",
      time: "60D, 24W, 12M, 3Y",
      server: "Disable",
      pool: 3,
    },
    {
      id: "1bb9d24e-55db-52d3-b38e-bf71204ee1d0",
      bp: "Policy 7",
      version: "Mon from 05:00 AM for 7 hours. Bandwidth: 10 Mbps",
      time: "60D, 24W, 12M, 3Y",
      server: "Disable",
      pool: 1,
    },
    {
      id: "0148cf1a-8cb9-5dd0-851a-75bafd939900",
      bp: "Policy 8",
      version:
        "Wed from 06:00 AM for 7 hours. Bandwidth: 10 Mbps. Transaction Logs Backup: Every 10 mins.",
      time: "60D, 24W, 12M, 3Y",
      server: "Disable",
      pool: 3,
    },
    {
      id: "76220b40-79db-51de-8711-81b4f55f1a3f",
      bp: "Policy 9",
      version:
        "Wed from 06:00 AM for 7 hours. Bandwidth: 10 Mbps. Transaction Logs Backup: Every 10 mins.",
      time: "60D, 24W, 12M, 3Y",
      server: "Disable",
      pool: 3,
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
      headerName: "Policy Name",
      flex: 0,
      minWidth: 180,
      renderCell: (cellValues) => {
        return (
          <Link href="#" underline="none">
            {cellValues.formattedValue}
          </Link>
        );
      },
    },
    {
      field: "version",
      headerName: "Backup Schedule",
      minWidth: 250,
      // renderCell: (cellValues) => {
      //   return (
      //     <Box>{cellValues.formattedValue}
      //     </Box>
      //   );
      // },
      editable: true,
      flex: 0,
    },
    {
      field: "time",
      headerName: "Retention",
      minWidth: 190,
      editable: true,
      flex: 0,
    },
    {
      field: "server",
      headerName: "LTR",
      minWidth: 170,
      editable: false,
      flex: 0,
      renderCell: (cellValues) => {
        return (
          <Box>
            <span
              className={
                cellValues.formattedValue === "Enable"
                  ? "oui-enableGrid"
                  : "oui-disableGrid"
              }
            >
              {cellValues.formattedValue}
            </span>
          </Box>
        );
      },
    },
    {
      field: "pool",
      headerName: "# VMs applied to",
      minWidth: 180,
      renderCell: (cellValues) => {
        return (
          <Link href="#" underline="none">
            {cellValues.formattedValue}
          </Link>
        );
      },
      editable: false,
      type: "number",
      flex: 0,
    },
  ];
  const [policies, setPolicies] = React.useState(rows);
  React.useEffect(() => {
    if (props.newPolicy) {
      let pol = rows;
      pol.unshift({
        id: "e5ec2d86-f16e-52f8-98f7-fd25fcf48sm1",
        bp: props.newPolicy,
        version: "Mon from 05:00 AM for 7 hours. Bandwidth: 100 Mbps",
        time: "60D, 24W, 12M, 3Y",
        server: "Enable",
        pool: 6,
      });
      setPolicies(pol);
    }
  }, [props.newPolicy]);
  const customToolBar = () => {
    return (
      <GridToolbarContainer>
        <Box className="d-flex align-items-center w-100 px-2">
          <Box sx={{ flexGrow: 1, height: "32px" }} className="d-flex me-5">
            <Button
              disabled={!selection.length > 0}
              className="me-2"
              size="small"
              variant="outlined"
            >
              Duplicate Policy
            </Button>
          </Box>
          <Box
            sx={{ flexDirection: "row", flexGrow: 1 }}
            className="d-flex ms-4"
          >
            {selection.length > 0 ? (
              <>
                <div>{selection.length} Selected</div>
              </>
            ) : (
              ""
            )}
            <span className="pl-2 ml-2" style={{ marginLeft: "4px" }}>
              Policies |{" "}
            </span>
            <span className="fw-bold pe-1" style={{ marginLeft: "4px" }}>
              {rows.length}
            </span>
            <span className="pe-2"> of {rows.length}</span>
            <img src={RefreshSVG} alt="RefreshSVG" />
          </Box>
          {/* <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport /> */}
          <Box
            sx={{ flexGrow: 1, justifyContent: "flex-end" }}
            className="d-flex"
          >
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
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={policies}
        columns={columns}
        pageSize={policies.length}
        // rowsPerPageOptions={[rows.length]}
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
        getRowHeight={() => "auto"}
        className="oui-policyGrid"
      />
    </div>
  );
}
