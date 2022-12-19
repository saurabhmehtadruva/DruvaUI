import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckboxIcon from "../../images/CheckboxIcon.svg";
import CheckedIcon from "../../images/CheckedIcon.svg";
import { useTheme } from "@mui/material/styles";

// a wrapper class for material ui checkbox
// Since you are just using the mui checkbox, simply pass all the props through to restore functionality.
function CheckboxWrapper(props) {
  const theme = useTheme();
  return (
    <Checkbox disableRipple
      icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill={theme.palette.mode === "light" ? "white" : "#2A2727"}/>
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke={theme.palette.mode === "light" ? "white" : "#2A2727"}/>
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke={theme.palette.mode === "light" ? "#A2A1A1" : "#615F5F"}/>
      </svg>}
      checkedIcon={
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white"/>
<rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#FFAC70"/>
<rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="white"/>
<rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#FFAC70"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3557 4.27575L6.64402 8.93585L4.62468 6.93886C4.25299 6.57073 3.65047 6.57073 3.27877 6.93886C2.90708 7.30606 2.90708 7.90252 3.27877 8.27018L5.97107 10.9333C6.15715 11.1169 6.40082 11.2092 6.64402 11.2092C6.88769 11.2092 7.13136 11.1169 7.31745 10.9333L12.7016 5.60707C13.0733 5.2394 13.0733 4.64342 12.7016 4.27575C12.3299 3.90808 11.7273 3.90808 11.3557 4.27575Z" fill={theme.palette.mode === "light"? "white": "#2A2727"}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3557 4.27575L6.64402 8.93585L4.62468 6.93886C4.25299 6.57073 3.65047 6.57073 3.27877 6.93886C2.90708 7.30606 2.90708 7.90252 3.27877 8.27018L5.97107 10.9333C6.15715 11.1169 6.40082 11.2092 6.64402 11.2092C6.88769 11.2092 7.13136 11.1169 7.31745 10.9333L12.7016 5.60707C13.0733 5.2394 13.0733 4.64342 12.7016 4.27575C12.3299 3.90808 11.7273 3.90808 11.3557 4.27575Z" fill={theme.palette.mode === "light"? "white": "#2A2727"}/>
</svg>
      }
      {...props}
    />
  );
}

export default CheckboxWrapper;
