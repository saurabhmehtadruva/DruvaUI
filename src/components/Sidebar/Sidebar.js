import React from "react";
import IconButton from "@mui/material/IconButton";
import { Divider, Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from '@mui/material/Collapse';
import "./Sidebar.css";
import DruvaLogoSVG from "../../images/druvaLogo.svg";
import DismissSVG from "../../images/Dismiss.svg";
import { SvgDiagrams } from "../common/SvgDiagrams";
import { useTheme } from "@mui/material/styles";
function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const [selectedNav, setSelectedNav] = React.useState(0);
  const handleClick = (e, i) => {
    setOpen(!open);
    if(!open) {
      handleListItemClick(e, i);
    } else {
      handleListItemClick(e, 0);
    }
    
  };
  const handleListItemClick = (event, index) => {
    setSelectedNav(index);
  };
  const theme = useTheme();
  const list = (anchor) => (
    <Box
      className="oui-global-sidebar"
      sx={{ width: 300 }}
      role="presentation"
    >
      <Box sx={{ flexDirection: 'row', justifyContent: 'space-between'}} className="d-flex m-3 align-items-baseline">
        <img src={DruvaLogoSVG} alt="DruvaLogoSVG" style={{width: "75px"}} />
        <img src={DismissSVG} alt="DismissSVG" onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} />
      </Box>
      <List className="oui-side-nav-item pt-3">
        <ListItem key="Home" disablePadding>
          <ListItemButton
          onClick={toggleDrawer(anchor, false)}
          component="a"
          href="#">
            <ListItemIcon>
            <SvgDiagrams className="oui-svgIcon" name="home" />
            </ListItemIcon>
            <ListItemText primary="Home" className="oui-textSideBar" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Frequently Visited" disablePadding>
          <ListItemButton
          selected={selectedNav === 1}
          onClick={(e) => handleListItemClick(e, 1)}
          component="a"
          href="#">
            <ListItemIcon>
            <SvgDiagrams className="oui-svgIcon" name="visited" />
            </ListItemIcon>
            <ListItemText
              primary="Frequently Visited"
              className="oui-textSideBar"
            />
            <SvgDiagrams className="oui-svgIcon" name="chevron" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Data Protection" disablePadding>
          <ListItemButton
        className="oui-sideBarBtn">
            <ListItemIcon>
            <SvgDiagrams className="oui-svgIconData" name="dataP" />
            </ListItemIcon>
            <ListItemText primary="Data Protection" className="oui-textSideBarData" />
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 5.5, ml: 1 }} className="oui-sideBarBtn" selected={selectedNav === 7}
          onClick={(e) => handleListItemClick(e, 7)}>
                <ListItemText primary="Hybrid Workloads" className="oui-textSideBar" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 5.5, ml: 1 }}
              selected={selectedNav === 8}
              className="oui-sideBarBtn"
              onClick={(e) => handleListItemClick(e, 8)}>
                <ListItemText primary="Google Worksapce" className="oui-textSideBar" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItem key="Cyber Resilience" disablePadding>
          <ListItemButton selected={selectedNav === 3} onClick={(e) => handleListItemClick(e, 3)}>
            <ListItemIcon>
              <SvgDiagrams className="oui-svgIcon" name="cyber" />
            </ListItemIcon>
            <ListItemText
              primary="Cyber Resilience"
              className="oui-textSideBar"
            />
            <SvgDiagrams className="oui-svgIcon" name="chevrondown" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Data Governance" disablePadding>
          <ListItemButton selected={selectedNav === 4} onClick={(e) => handleListItemClick(e, 4)}>
            <ListItemIcon>
              <SvgDiagrams className="oui-svgIcon" name="dataG" />
            </ListItemIcon>
            <ListItemText
              primary="Data Governance"
              className="oui-textSideBar"
            />
            <SvgDiagrams className="oui-svgIcon" name="chevrondown" />
          </ListItemButton>
        </ListItem>
        <ListItem key="All Services" disablePadding>
          <ListItemButton
          selected={selectedNav === 5}
          onClick={(e) => handleListItemClick(e, 5)}
          component="a"
          href="#">
            <ListItemIcon>
              <SvgDiagrams className="oui-svgIcon" name="allServices" />
            </ListItemIcon>
            <ListItemText
              primary="All Services"
              className="oui-textSideBar"
            />
            <SvgDiagrams className="oui-svgIcon" name="chevron" />
          </ListItemButton>
        </ListItem>
        <Divider component="div" sx={{borderColor: "#383535"}} className="m-3" />
        <ListItem key="Administration" disablePadding>
          <ListItemButton
          selected={selectedNav === 6}
          onClick={(e) => handleListItemClick(e, 6)}
          component="a"
          href="#">
            <ListItemIcon>
              <SvgDiagrams className="oui-svgIcon" name="admin" />
            </ListItemIcon>
            <ListItemText
              primary="Administration"
              className="oui-textSideBar"
            />
            <SvgDiagrams className="oui-svgIcon" name="chevrondown" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    handleListItemClick(event, 0);
  };
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer("left", true)}
        className="oui-logoMenu"
        disableRipple
      >
        <SvgDiagrams className="oui-svglogo" name="logo" fill={theme.palette.mode === 'light' ? "" : "#D7D7D7"} />
        <SvgDiagrams className="oui-svgmenu" name="menu" stroke={theme.palette.mode === 'light' ? "" : "#D7D7D7"} />
      </IconButton>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}

export default Sidebar;
