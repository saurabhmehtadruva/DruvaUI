import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FormHelperText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import CardHeader from "@mui/material/CardHeader";
import BackupSVG from "../../images/BackupTrend.png";
import BackupTrends from "../../images/DataChangeRateTrend.png";
import DataChangeTrend from "../../images/BackupDataTrend.png";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CustomizedTooltips from "../TooltipComponent/TooltipComponent";
import DetailsSVG from "../../images/Details.svg";
import ConfigVMSVg from "../../images/Group1000002430.svg";
import TrendSVG from "../../images/trend.svg";
import "./SummaryDetailComponent.css";

function SummaryDetailComponent() {
  const navigate = useNavigate();
  const backupDataInfoText = () => (
    <div>
      <b>Source + Changes:</b> Amount of total backup data generated at source
      for all available snapshots. <br />
      <b>Current Source:</b> Size of data on source servers as of last backup.{" "}
      <br />
      <b>Storage:</b> Cloud Storage consumption post deduplication. <br />
      <b>Dedupe Savings:</b> Ratio of Source + Changes to Storage
    </div>
  );

  const getTooltip = () => {
    return (
      <div>
        <div>
          <strong>Data Growth: </strong>
          <span>
            Difference between the data sizes of the source data and the total
            source + changes data
          </span>
        </div>
        <div>
          <strong>Average Change Rate: </strong>
          <span>
            Avarage of the daily change rate for the backup set calculated since
            the time of the first backup
          </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Card className="mb-3">
        <CardHeader
          avatar={<img src={DetailsSVG} alt="DetailsSVG" />}
          title="Details"
        />
        <CardContent>
          <div className=" d-flex w-100 mb-2">
            <Box
              sx={{ textAlign: "start" }}
              component="div"
              className="col-sm-4 justify-content-start mb-2 px-0"
            >
              <div>
                <FormHelperText>Backup Enabled</FormHelperText>
              </div>

              <div className="d-flex oui-enabled px-1">Enabled</div>
              {/* <Alert icon={false} severity="success">
                Enabled
              </Alert> */}
            </Box>
            <Box
              sx={{ textAlign: "start" }}
              component="div"
              className="col-sm-4 justify-content-center mb-2 px-0"
            >
              <div>
                <FormHelperText>Host</FormHelperText>
              </div>

              <div className=" d-flex">192.168.1.190</div>
            </Box>
            <Box
              sx={{ textAlign: "start" }}
              component="div"
              className="col-sm-4 justify-content-center mb-2 px-0"
            >
              <div>
                <FormHelperText>#Snapshots</FormHelperText>
              </div>

              <div className=" d-flex">2(0 Hot, 2 Warn, 0 Cold)</div>
            </Box>
          </div>
          <div className=" d-flex w-100 mb-2">
            <Box
              sx={{ textAlign: "start" }}
              component="div"
              className="col-sm-4 justify-content-start mb-2 px-0"
            >
              <div>
                <FormHelperText>Administritative Group</FormHelperText>
              </div>

              <Box className=" d-flex">
                <Link className="pointer" onClick={() => navigate("/configVM")} underline="none">
                  {"ANZ File Servers"}
                </Link>
              </Box>
            </Box>
            <Box
              sx={{ textAlign: "start" }}
              component="div"
              className="col-sm-4 justify-content-center mb-2 px-0"
            >
              <div>
                <FormHelperText>DR Plan</FormHelperText>
              </div>

              <div className=" d-flex">Not Configured</div>
            </Box>
            <Box
              sx={{ textAlign: "start" }}
              component="div"
              className="col-sm-4 justify-content-center mb-2 px-0"
            >
              <div>
                <FormHelperText>CBT Status</FormHelperText>
              </div>
              <div className="d-flex oui-disabled px-1">Disabled</div>
            </Box>
          </div>
        </CardContent>
      </Card>
      <div className=" d-flex w-100 mb-3">
        <Box
          sx={{ textAlign: "start", paddingRight: "1rem" }}
          component="div"
          className="col-sm-6 "
        >
          <Card>
            <CardHeader
              avatar={<img src={ConfigVMSVg} alt="ConfigVMSVg" />}
              title="Backup Configuration"
            />
            <CardContent>
              <div className=" d-flex w-100 mb-3">
                <Box
                  sx={{ textAlign: "start" }}
                  component="div"
                  className="col-sm-6 justify-content-center mb-2 px-0"
                >
                  <div>
                    <FormHelperText>Backup policy</FormHelperText>
                  </div>

                  <div className=" d-flex">Standard policy</div>
                </Box>
                <Box
                  sx={{ textAlign: "start" }}
                  component="div"
                  className="col-sm-6 justify-content-center mb-2 px-0"
                >
                  <div>
                    <FormHelperText>Exclude desks</FormHelperText>
                  </div>

                  <div className=" d-flex">Standard policy</div>
                </Box>
              </div>
              <div className=" d-flex w-100 mb-3">
                <Box
                  sx={{ textAlign: "start" }}
                  component="div"
                  className="col-sm-6 justify-content-center mb-2 px-0"
                >
                  <div>
                    <FormHelperText>App Aware Processing</FormHelperText>
                  </div>
                  <div className="d-flex oui-disabled px-1">Disabled</div>
                </Box>
                <Box
                  sx={{ textAlign: "start" }}
                  component="div"
                  className="col-sm-6 justify-content-center mb-2 px-0"
                >
                  <div>
                    <FormHelperText>Storage</FormHelperText>
                  </div>

                  <div className=" d-flex">SE-Demo-West_us-west-1</div>
                </Box>
              </div>
              <div className=" d-flex w-100 mb-3">
                <Box
                  sx={{ textAlign: "start" }}
                  component="div"
                  className="col-sm-6 justify-content-center mb-2 px-0"
                >
                  <div>
                    <FormHelperText>Backup Proxy Pool</FormHelperText>
                  </div>
                  <Link href="/configVM" underline="none">
                    Default proxy pool{" "}
                  </Link>
                </Box>
              </div>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{ textAlign: "start" }}
          component="div"
          className="col-sm-6 d-flex"
        >
          <Card style={{ width: "100%" }}>
            <CardHeader
              avatar={<img src={TrendSVG} alt="TrendSVG" />}
              title="Backup Trend"
            />
            <CardContent className="py-0">
              <div className=" d-flex w-100 h-100  ">
                <Box
                  sx={{ textAlign: "start" }}
                  component="div"
                  className="col-sm-12 justify-content-center mt-2  px-0"
                >
                  <img src={BackupSVG} style={{ width: "100%" }}></img>
                </Box>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>

      <div className=" d-flex w-100 mb-2">
        <Box
          sx={{ textAlign: "start", paddingRight: "1rem" }}
          component="div"
          className="col-sm-6 d-flex"
        >
          <Card style={{ width: "100%" }}>
            <CardHeader
              avatar={<img src={TrendSVG} alt="TrendSVG1" />}
              title="Backup Data Trend"
              action={
                <CustomizedTooltips
                  tooltipTitle={backupDataInfoText()}
                  type="bootstrap"
                >
                  <IconButton className="w-100 justify-content-end">
                    <InfoOutlinedIcon />
                  </IconButton>
                </CustomizedTooltips>
              }
            />
            <CardContent>
              <div className=" d-flex w-100 h-100  ">
                <Box
                  sx={{ textAlign: "start" }}
                  component="div"
                  className="col-sm-12 justify-content-center  px-0"
                >
                  <Box sx={{ flexDirection: "row" }} className="d-flex">
                    <Box>
                      <Typography
                        className="ms-4 mb-2"
                        variant="h4"
                        noWrap
                        sx={{
                          mr: 2,
                          display: { xs: "none", md: "flex" },
                          textDecoration: "none",
                          marginRight: 0,
                          fontWeight: 600,
                        }}
                      >
                        430 GB
                      </Typography>
                      <Box
                        sx={{ flexDirection: "row" }}
                        className="d-flex align-items-center"
                      >
                        <div className="oui-blueDot ms-4" />
                        <Typography
                          variant="body2 ps-2"
                          noWrap
                          sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            textDecoration: "none",
                            marginRight: 0,
                            fontWeight: 400,
                          }}
                        >
                          Current Source
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        className="ms-4 mb-2"
                        variant="h4"
                        noWrap
                        sx={{
                          mr: 2,
                          display: { xs: "none", md: "flex" },
                          textDecoration: "none",
                          marginRight: 0,
                          fontWeight: 600,
                        }}
                      >
                        560 GB
                      </Typography>
                      <Box
                        sx={{ flexDirection: "row" }}
                        className="d-flex align-items-center"
                      >
                        <div className="oui-greenDot ms-4" />
                        <Typography
                          variant="body2 ps-2"
                          noWrap
                          sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            textDecoration: "none",
                            marginRight: 0,
                            fontWeight: 400,
                          }}
                        >
                          Source + Changes
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <img src={DataChangeTrend} style={{ width: "100%" }}></img>
                </Box>
              </div>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{ textAlign: "start" }}
          component="div"
          className="col-sm-6 d-flex"
        >
          <Card style={{ width: "100%" }}>
            <CardHeader
              avatar={<img src={TrendSVG} alt="TrendSVG2" />}
              title="Data Change Rate Trend"
              action={
                <CustomizedTooltips
                  tooltipTitle={getTooltip()}
                  type="bootstrap"
                >
                  <IconButton className="w-100 justify-content-end">
                    <InfoOutlinedIcon />
                  </IconButton>
                </CustomizedTooltips>
              }
            />
            <CardContent>
              <div className=" d-flex w-100 h-100  ">
                <Box
                  sx={{ textAlign: "start" }}
                  component="div"
                  className="col-sm-12 justify-content-center  px-0"
                >
                  <Box sx={{ flexDirection: "row" }} className="d-flex">
                    <Box>
                      <Typography
                        className="ms-4 mb-2"
                        variant="h4"
                        noWrap
                        sx={{
                          mr: 2,
                          display: { xs: "none", md: "flex" },
                          textDecoration: "none",
                          marginRight: 0,
                          fontWeight: 600,
                        }}
                      >
                        10.3 GB
                      </Typography>
                      <Box
                        sx={{ flexDirection: "row" }}
                        className="d-flex align-items-center"
                      >
                        <div className="oui-blueDot ms-4" />
                        <Typography
                          variant="body2 ps-2"
                          noWrap
                          sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            textDecoration: "none",
                            marginRight: 0,
                            fontWeight: 400,
                          }}
                        >
                          Data Growth
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        className="ms-4 mb-2"
                        variant="h4"
                        noWrap
                        sx={{
                          mr: 2,
                          display: { xs: "none", md: "flex" },
                          textDecoration: "none",
                          marginRight: 0,
                          fontWeight: 600,
                        }}
                      >
                        6.8 %
                      </Typography>
                      <Box
                        sx={{ flexDirection: "row" }}
                        className="d-flex align-items-center"
                      >
                        <Typography
                          variant="body2 ps-2 ms-3"
                          noWrap
                          sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            textDecoration: "none",
                            marginRight: 0,
                            fontWeight: 400,
                          }}
                        >
                          Avg. Change Rate
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <img src={BackupTrends} style={{ width: "100%" }}></img>
                </Box>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
}

export default SummaryDetailComponent;
