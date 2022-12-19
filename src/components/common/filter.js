import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from '@mui/material/CardActions';

const filter = (props) => {
  const { anchorEl, id, handleClose, filterData } = props;
  const open = Boolean(anchorEl);
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Card>
        <CardContent>
        <Typography variant="filterHeader">Filters</Typography>
          {filterData.map((obj) => (
            <Box className="d-flex mt-2" sx={{flexDirection: 'column'}}>
              <Typography variant="filter" className="mb-2">{obj.header}</Typography>
              <Box>
                {obj.values.map((val) => (
                  <Button variant={obj.header === "Status" ? val : "filterBtn"} sx={{marginRight: 0.5}}>{val}</Button>
                ))}
              </Box>
            </Box>
          ))}
        </CardContent>
        <CardActions>
            <Box className="d-flex w-100 mt-2" sx={{justifyContent: 'flex-end'}}>
            <Button className="me-2" size="small" variant="outlined" >
            Reset
            </Button>
        <Button className="me-2" variant="contained" size="small">
        Apply
            </Button>
            </Box>
    </CardActions>
      </Card>
    </Popover>
  );
};

export default filter;
