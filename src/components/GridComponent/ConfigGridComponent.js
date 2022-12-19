import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "./checkBox";
import "./GridComponent.css";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
const ConfigGridComponent = (props) => {
  const navigate = useNavigate();
  let dataRows = [
    {
      id: "e5ec2d86-f16e-52f8-98f7-fd25fcf48ba0",
      bp: "SQL_gov_3",
      version: "172.16.20.178",
      time: "00test",
      server: "Dallas",
      pool: "Enable",
      phoenix: "Disable",
      vcenter: "310 days ago",
      status: "Error"
    },
    {
      id: "13bd2472-012c-5220-bb3c-5a8d7292e066",
      bp: "win2k8r",
      version: "172.16.20.178",
      time: "00test",
      server: "asd",
      pool: "Enable",
      phoenix: "Disable",
      vcenter: "310 days ago",
      status: "Error"
    },
    {
      id: "d1567bf5-465a-543c-8f3a-9e1f2b0b88f7",
      bp: "sql_1_win2k",
      version: "172.16.20.178",
      time: "Archer VM",
      server: "Corp",
      pool: "Enable",
      phoenix: "Disable",
      vcenter: "310 days ago",
      status: "Error"
    },
    {
      id: "24cff67b-f3a0-5faa-bd4f-70319a7c7c4b",
      bp: "ha_Client",
      version: "172.16.20.178",
      time: "Archer VM",
      server: "Corp",
      pool: "Enable",
      phoenix: "Disable",
      vcenter: "310 days ago",
      status: "Error"
    },
    {
      id: "99e5b6b2-85c3-561d-b3a0-705ef2f8b91c",
      bp: "CentOS",
      version: "172.16.20.178",
      time: "00test",
      server: "Corp",
      pool: "Enable",
      phoenix: "Disable",
      vcenter: "310 days ago",
      status: "Error"
    },
    {
      id: "9aa9859b-aaf1-5c1f-bcf8-bd9ea3d6538c",
      bp: "ADConnector",
      version: "172.16.20.178",
      time: "00test",
      server: "Corp",
      pool: "Enable",
      phoenix: "Disable",
      vcenter: "310 days ago",
      status: "Error"
    },
    {
      id: "1bb9d24e-55db-52d3-b38e-bf71204ee1d0",
      bp: "Hl_Client",
      version: "172.16.20.178",
      time: "Archer VM",
      server: "Corp",
      pool: "Enable",
      phoenix: "Disable",
      vcenter: "310 days ago",
      status: "Error"
    },
    {
      id: "0148cf1a-8cb9-5dd0-851a-75bafd939900",
      bp: "Hr_NAS",
      version: "172.16.20.178",
      time: "00test",
      server: "Corp",
      pool: "Enable",
      phoenix: "Disable",
      vcenter: "310 days ago",
      status: "Error"
    },
    {
      id: "76220b40-79db-51de-8711-81b4f55f1a3f",
      bp: "EW_Backup",
      version: "172.16.20.178",
      time: "Archer VM",
      server: "Corp",
      pool: "Enable",
      phoenix: "Disable",
      vcenter: "310 days ago",
      status: "Error"
    },
  ];
  const [selection, setSelection] = React.useState([]);
  const [rows, setRows] = React.useState(dataRows);

  const columns = [
    {
      field: "id",
      hide: true,
      flex: 1,
      minWidth: 110,
    },
    {
      field: "bp",
      headerName: "Virtual Machine",
      flex: 0,
      minWidth: 150,
      renderCell: (cellValues) => {
        return (
          <Link
            underline="none"
            className="pointer"
            onClick={() => navigate(`/detail/${cellValues.formattedValue}`)}
          >
            {cellValues.formattedValue}
          </Link>
        );
      },
    },
    {
      field: "version",
      headerName: "Hypervisor",
      minWidth: 140,
      editable: true,
      flex: 0,
    },
    {
      field: "time",
      headerName: "Administrative",
      renderCell: (cellValues) => {
        return (
          <Link href="#" underline="none">
            {cellValues.formattedValue}
          </Link>
        );
      },
      minWidth: 160,
      editable: true,
      flex: 0,
    },
    {
      field: "server",
      headerName: "Backup Policy",
      minWidth: 120,
      editable: false,
      renderCell: (cellValues) => {
        return (
          <Link href="#" underline="none">
            {cellValues.formattedValue}
          </Link>
        );
      },
      flex: 0,
    },
    {
      field: "pool",
      headerName: "Backup Enable",
      minWidth: 160,
      renderCell: (cellValues) => {
        return (
          <Box>
            <span className="oui-enableGrid">{cellValues.formattedValue}</span>
          </Box>
        );
      },
      editable: false,
      flex: 0,
    },
    {
      field: "phoenix",
      headerName: "DR Configured",
      minWidth: 180,
      renderCell: (cellValues) => {
        return (
          <Box>
            <span className="oui-disableGrid">{cellValues.formattedValue}</span>
          </Box>
        );
      },
      editable: false,
      flex: 0,
    },
    {
      field: "vcenter",
      headerName: "Last Backup Status",
      renderCell: (cellValues) => {
        return (
          <Box>
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2851_21557)">
                <path
                  d="M8.14258 0C12.5609 0 16.1426 3.58172 16.1426 8C16.1426 12.4183 12.5609 16 8.14258 16C3.7243 16 0.142578 12.4183 0.142578 8C0.142578 3.58172 3.7243 0 8.14258 0ZM5.95201 5.11372C5.75714 4.97872 5.48772 4.99801 5.31415 5.17157L5.2563 5.24082C5.1213 5.43569 5.14058 5.70511 5.31415 5.87868L7.43547 8L5.31415 10.1213L5.2563 10.1906C5.1213 10.3854 5.14058 10.6549 5.31415 10.8284L5.3834 10.8863C5.57827 11.0213 5.84769 11.002 6.02126 10.8284L8.14258 8.70711L10.2639 10.8284L10.3331 10.8863C10.528 11.0213 10.7974 11.002 10.971 10.8284L11.0289 10.7592C11.1639 10.5643 11.1446 10.2949 10.971 10.1213L8.84968 8L10.971 5.87868L11.0289 5.80943C11.1639 5.61456 11.1446 5.34514 10.971 5.17157L10.9018 5.11372C10.7069 4.97872 10.4375 4.99801 10.2639 5.17157L8.14258 7.29289L6.02126 5.17157L5.95201 5.11372Z"
                  fill={theme.palette.mode === "light" ? "#DC3545" : "#DF6773"}
                />
              </g>
              <defs>
                <clipPath id="clip0_2851_21557">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.142578)"
                  />
                </clipPath>
              </defs>
            </svg>
            <Link href="#" underline="none">
              <span className="ps-2">{cellValues.formattedValue}</span>
            </Link>
          </Box>
        );
      },
      minWidth: 180,
      editable: false,
      flex: 0,
    },
  ];

  React.useEffect(() => {
    requestFilter(props.searchValue,props.serverIP,props.jStatus,props.jBackup);
  }, [props.searchValue, props.serverIP, props.jStatus, props.jBackup]);

// React.useEffect(() => {
//     filterserverIP(props.serverIP);
//   }, [props.serverIP]);

//   React.useEffect(() => {
//     filterjStatus(props.jStatus);
//   }, [props.jStatus]);

  const requestFilter = (searchVal, serverIp, status, backup) => {
    if(searchVal !== "" || (serverIp !== "-1" && serverIp.length > 0) || (status !== "-1" && status.length > 0) || (backup !== -1 && backup !== "")) {
      const searchRows = requestSearch(searchVal);
      const ipRows = filterserverIP(serverIp);
      const statusRows = filterjStatus(status);
      const backupRows = filterbackup(backup);
      const mergeRow12 = arrayUnique(searchRows.concat(ipRows)); 
      const merge3 = arrayUnique(mergeRow12.concat(statusRows)); 
      const finalRows = arrayUnique(merge3.concat(backupRows)); 
      setRows(finalRows);
    } else {
      setRows(dataRows);
    }
  };

  const arrayUnique = (array) => {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

  const filterjStatus = (status) => {
      const filteredRows = dataRows.filter((row) => {
        return status.includes(row.status);
      });
      return (filteredRows);
  }

  const filterserverIP = (filterVal) => {
      const filteredRows = dataRows.filter((row) => {
        return filterVal.includes(row.version);
      });
      return (filteredRows);
  };

  const filterbackup = (val) => {
    if(val !== "") {
    const filteredRows = dataRows.filter((row) => {
      return row.pool.includes(val);
    });
    return (filteredRows);
  }
  return [];
};

  const requestSearch = (searchValue) => {
    if(searchValue !== "") {
      const filteredRows = dataRows.filter((row) => {
        return row.bp.includes(searchValue);
      });
      return filteredRows;
    }
      return [];
  };
  const theme = useTheme();
  const customToolBar = () => {
    return (
      <GridToolbarContainer>
        <Box className="d-flex align-items-center w-100 px-2">
          <Box sx={{ flexGrow: 1, height: "32px" }} className="d-flex">
            <Button className="me-2" variant="contained" size="small">
              Backup Now
            </Button>
            <Button
              className="me-2"
              size="small"
              variant="outlined"
              endIcon={
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2851_24264)">
                    <path
                      d="M4 6.8C3.8 6.8 3.6 6.72 3.44 6.56L0.24 3.36C-0.08 3.04 -0.08 2.56 0.24 2.24C0.56 1.92 1.04 1.92 1.36 2.24L4 4.88L6.64 2.24C6.96 1.92 7.44 1.92 7.76 2.24C8.08 2.56 8.08 3.04 7.76 3.36L4.56 6.56C4.4 6.72 4.2 6.8 4 6.8Z"
                      fill="white"
                    />
                    <path
                      d="M4 6.8C3.8 6.8 3.6 6.72 3.44 6.56L0.24 3.36C-0.08 3.04 -0.08 2.56 0.24 2.24C0.56 1.92 1.04 1.92 1.36 2.24L4 4.88L6.64 2.24C6.96 1.92 7.44 1.92 7.76 2.24C8.08 2.56 8.08 3.04 7.76 3.36L4.56 6.56C4.4 6.72 4.2 6.8 4 6.8Z"
                      fill={
                        theme.palette.mode === "light" ? "#383535" : "white"
                      }
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2851_24264">
                      <rect width="8" height="8" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            >
              Restore
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
            className="d-flex align-items-center"
          >
            {selection.length > 0 ? (
              <>
                <div>{selection.length} Selected</div>
                <div className="oui-gridSlash" />
              </>
            ) : (
              ""
            )}
            <span className="pe-2">VMs | </span>
            <span className="fw-bold pe-1">{rows.length}</span>
            <span className="pe-2"> of {rows.length}</span>
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.44991 9.80392C2.18252 9.21569 2.02973 8.58824 2.02973 7.96079C2.02973 5.60785 3.93963 3.64706 6.2697 3.64706C6.3461 3.64706 6.3843 3.64706 6.4607 3.64706V5.92157C6.4607 6.15687 6.61349 6.39216 6.80448 6.47059C6.88087 6.50981 6.95727 6.50981 7.03366 6.50981C7.18646 6.50981 7.33925 6.43138 7.45384 6.35295L10.0513 3.68628C10.1659 3.56863 10.2041 3.41177 10.2041 3.25491C10.2041 3.09804 10.1659 2.94118 10.0513 2.82353L7.41564 0.156866C7.26285 3.66196e-06 6.99547 -0.0784277 6.80448 0.0392193C6.57529 0.117651 6.4607 0.352945 6.4607 0.588239V2.47059C6.3843 2.47059 6.3461 2.47059 6.2697 2.47059C3.29026 2.47059 0.883789 4.94118 0.883789 7.96079C0.883789 8.78432 1.07478 9.60785 1.41856 10.3529C1.53315 10.549 1.72414 10.6667 1.91513 10.6667C1.99153 10.6667 2.06793 10.6667 2.18252 10.5882C2.44991 10.4314 2.6027 10.0784 2.44991 9.80392Z"
                fill="white"
              />
              <path
                d="M2.44991 9.80392C2.18252 9.21569 2.02973 8.58824 2.02973 7.96079C2.02973 5.60785 3.93963 3.64706 6.2697 3.64706C6.3461 3.64706 6.3843 3.64706 6.4607 3.64706V5.92157C6.4607 6.15687 6.61349 6.39216 6.80448 6.47059C6.88087 6.50981 6.95727 6.50981 7.03366 6.50981C7.18646 6.50981 7.33925 6.43138 7.45384 6.35295L10.0513 3.68628C10.1659 3.56863 10.2041 3.41177 10.2041 3.25491C10.2041 3.09804 10.1659 2.94118 10.0513 2.82353L7.41564 0.156866C7.26285 3.66196e-06 6.99547 -0.0784277 6.80448 0.0392193C6.57529 0.117651 6.4607 0.352945 6.4607 0.588239V2.47059C6.3843 2.47059 6.3461 2.47059 6.2697 2.47059C3.29026 2.47059 0.883789 4.94118 0.883789 7.96079C0.883789 8.78432 1.07478 9.60785 1.41856 10.3529C1.53315 10.549 1.72414 10.6667 1.91513 10.6667C1.99153 10.6667 2.06793 10.6667 2.18252 10.5882C2.44991 10.4314 2.6027 10.0784 2.44991 9.80392Z"
                fill={theme.palette.mode === "light" ? "#6C6A6A" : "white"}
              />
              <path
                d="M10.2804 5.37254C10.5478 5.2549 10.8915 5.37254 11.0443 5.64705C11.3881 6.39215 11.5791 7.21568 11.6173 8.03921C11.6173 11.0588 9.21082 13.5294 6.23138 13.5294H6.04039V15.4118C6.04039 15.6471 5.9258 15.8823 5.69661 15.9608C5.62021 16 5.54382 16 5.46742 16C5.31463 16 5.16184 15.9608 5.04724 15.8431L2.41158 13.1765C2.33519 13.0588 2.25879 12.902 2.25879 12.7451C2.25879 12.5882 2.29699 12.4314 2.41158 12.3137L5.04724 9.64705C5.20003 9.49019 5.42922 9.45098 5.65841 9.52941C5.8494 9.60784 6.00219 9.84313 6.00219 10.0784V12.3529H6.19318C8.52326 12.3529 10.4332 10.3922 10.4332 8.03921C10.4332 7.37254 10.2804 6.74509 10.013 6.15686C9.86019 5.88235 10.013 5.52941 10.2804 5.37254Z"
                fill="white"
              />
              <path
                d="M10.2804 5.37254C10.5478 5.2549 10.8915 5.37254 11.0443 5.64705C11.3881 6.39215 11.5791 7.21568 11.6173 8.03921C11.6173 11.0588 9.21082 13.5294 6.23138 13.5294H6.04039V15.4118C6.04039 15.6471 5.9258 15.8823 5.69661 15.9608C5.62021 16 5.54382 16 5.46742 16C5.31463 16 5.16184 15.9608 5.04724 15.8431L2.41158 13.1765C2.33519 13.0588 2.25879 12.902 2.25879 12.7451C2.25879 12.5882 2.29699 12.4314 2.41158 12.3137L5.04724 9.64705C5.20003 9.49019 5.42922 9.45098 5.65841 9.52941C5.8494 9.60784 6.00219 9.84313 6.00219 10.0784V12.3529H6.19318C8.52326 12.3529 10.4332 10.3922 10.4332 8.03921C10.4332 7.37254 10.2804 6.74509 10.013 6.15686C9.86019 5.88235 10.013 5.52941 10.2804 5.37254Z"
                fill={theme.palette.mode === "light" ? "#6C6A6A" : "white"}
              />
            </svg>
          </Box>
          {/* <GridToolbarFilterButton />
        
        <GridToolbarExport /> */}
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
};

export default ConfigGridComponent;
