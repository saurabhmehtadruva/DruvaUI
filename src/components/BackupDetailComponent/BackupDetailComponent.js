import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FormHelperText } from "@mui/material";

function BackupDetailComponent() {
  return (
    <div>
      <Card className="mb-3">
        <CardContent>
          <div className=" d-flex w-100 mb-2">
            <Box
              sx={{ textAlign: "start" }}
              component="div"
              className="col-sm-4 justify-content-start mb-2 px-0"
            >
              <div className=" d-flex">0</div>
              <div>
                <FormHelperText>Total snapshots</FormHelperText>
              </div>
            </Box>
            <Box
              sx={{ textAlign: "start" }}
              component="div"
              className="col-sm-4 justify-content-center mb-2 px-0"
            >
              <div className=" d-flex">NA</div>
              <div>
                <FormHelperText>Last Recovery Point</FormHelperText>
              </div>
            </Box>
            <Box
              sx={{ textAlign: "start" }}
              component="div"
              className="col-sm-4 justify-content-center mb-2 px-0"
            >
              <div className=" d-flex">NA</div>
              <div>
                <FormHelperText>Oldest Recovery Point</FormHelperText>
              </div>
            </Box>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default BackupDetailComponent;
