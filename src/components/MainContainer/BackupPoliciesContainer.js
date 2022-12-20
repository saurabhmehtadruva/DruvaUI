import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import BackupPoliciesGrid from "../GridComponent/BackupPoliciesGrid";
import MuiAlert from "@mui/material/Alert";
import AddSVG from "../../images/Add.svg";
import "./MainContainer.css";
import BackupPolicyDialogContent from "./createPolicy/BackupPolicyDialogContent";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BackupProxyContainer = () => {
  const [open, setOpen] = React.useState(false);
  const [policyName, setPolicyName] = React.useState("");
  const [showSuccessToast, setShowSuccessToast] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const handleClickOpen = () => {
    setActiveStep(0);
    setOpen(true);
  };

  const handleClose = (name) => {
    setOpen(false);
    setTimeout(() => {
      console.log(name["altKey"]);
      if (name["altKey"] === undefined) {
        setPolicyName(name);
        setShowSuccessToast(true);
      }
    }, 200);
  };

  const handleToastClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSuccessToast(false);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === 3) {
      setOpen(false);
    } else {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div style={{ width: "100%", padding: "0 24px" }}>
      <Box
        component="main"
        sx={{ flexDirection: "row" }}
        className="d-flex mt-3 mb-4"
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
            Backup Policies
          </Typography>
        </Box>
        <Box
          sx={{ flexGrow: 1, justifyContent: "end" }}
          className="mt-1 mb-2 px-0 d-flex"
        >
          <Button
            variant="contained"
            size="small"
            className="m-0"
            onClick={handleClickOpen}
            startIcon={<img alt="AddSVG" src={AddSVG} />}
          >
            New Backup Policy
          </Button>
          <Snackbar
            open={showSuccessToast}
            autoHideDuration={3000}
            onClose={handleToastClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleToastClose}
              severity="success"
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.2197 6.96967L8.75 11.4393L6.78033 9.46967C6.48744 9.17678 6.01256 9.17678 5.71967 9.46967C5.42678 9.76256 5.42678 10.2374 5.71967 10.5303L8.21967 13.0303C8.51256 13.3232 8.98744 13.3232 9.28033 13.0303L14.2803 8.03033C14.5732 7.73744 14.5732 7.26256 14.2803 6.96967C13.9874 6.67678 13.5126 6.67678 13.2197 6.96967Z"
                    fill="#73C686"
                  />
                </svg>
              }
              sx={{ width: "100%" }}
            >
              <div style={{ textAlign: "start" }}>
                <Typography className="d-block" variant="h5" noWrap>
                  Success!
                </Typography>
                <Typography variant="body1">
                  Backup Policy {policyName} created successfully
                </Typography>
              </div>
            </Alert>
          </Snackbar>
          <BackupPolicyDialogContent
            open={open}
            policyName={policyName}
            activeStep={activeStep}
            handleClose={handleClose}
            handleReset={handleReset}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </Box>
      </Box>
      <Box component="main" className="w-100">
        <div style={{ height: " calc(100vh - 181px)" }}>
          <BackupPoliciesGrid newPolicy={policyName} />
        </div>
      </Box>
    </div>
  );
};

export default BackupProxyContainer;
