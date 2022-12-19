import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddSVG from "../../images/Add.svg";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./VCenterListContainer.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function RegisterSetupDialog() {
  useEffect(() => {}, []);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const openDialog = () => setOpen(true);

  return (
    <>
      <Button
        variant="contained"
        className="m-0"
        sx={{height: "36px"}}
        onClick={openDialog}
        startIcon={<img alt="AddSVG" src={AddSVG} />}
      >
        Register New VMware Setup
      </Button>
      <Dialog
        maxWidth="xl"
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        className="oui-dialog"
      >
        <DialogTitle sx={{ display: "flex" }}>
          <Box
            className="d-flex"
            sx={{ justifyContent: "flex-start", alignItems: "center" }}
          >
            <svg
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.49951 0C3.98269 0 4.37438 0.399673 4.37438 0.892695C4.37438 1.38572 4.77406 1.78539 5.26708 1.78539H6.98119C7.47422 1.78539 7.87389 1.38572 7.87389 0.892695C7.87389 0.399673 8.26558 0 8.74876 0C9.23195 0 9.62364 0.399673 9.62364 0.892695C9.62364 1.38572 10.0233 1.78539 10.5163 1.78539H12.2305C12.7235 1.78539 13.1231 1.38572 13.1231 0.892695C13.1231 0.399673 13.5148 0 13.998 0C14.4812 0 14.8729 0.399673 14.8729 0.892695C14.8729 1.38572 15.2843 1.77057 15.7481 1.93789C16.7673 2.30562 17.4975 3.29754 17.4975 4.46347V8.41037C17.4975 8.74646 17.2618 9.02669 16.9414 9.1279C16.4073 9.29656 15.7478 8.9479 15.7478 8.38781V4.46347C15.7478 3.97045 15.3561 3.57078 14.8729 3.57078H2.62463C2.14145 3.57078 1.74975 3.97045 1.74975 4.46347V22.3174C1.74975 22.8104 2.14145 23.2101 2.62463 23.2101H5.32681C5.32889 23.2101 5.33042 23.212 5.32992 23.214C5.12327 24.0575 4.50426 24.9954 3.63586 24.9954H2.62463C1.17509 24.9954 0 23.7964 0 22.3174V4.46347C0 3.29754 0.730205 2.30562 1.74944 1.93789C2.2132 1.77057 2.62463 1.38572 2.62463 0.892695C2.62463 0.399673 3.01632 0 3.49951 0ZM12.2483 12.4977C12.5311 12.4977 12.5733 12.8423 12.3753 13.0443L11.5828 13.8529C11.3131 14.1281 10.9441 14.2831 10.5588 14.2831H5.24926C4.76608 14.2831 4.37438 13.8834 4.37438 13.3904C4.37438 12.8974 4.76608 12.4977 5.24926 12.4977H12.2483ZM6.67827 19.0947C6.86701 18.7888 7.00337 18.3947 6.75832 18.1316C6.59893 17.9606 6.37374 17.8539 6.12414 17.8539H5.24926C4.76608 17.8539 4.37438 18.2536 4.37438 18.7466C4.37438 19.2396 4.76608 19.6393 5.24926 19.6393H6.12414C6.30298 19.6393 6.44222 19.5043 6.52943 19.3481C6.57722 19.2626 6.62684 19.1781 6.67827 19.0947ZM5.24926 7.14156C4.76608 7.14156 4.37438 7.54123 4.37438 8.03425C4.37438 8.52727 4.76608 8.92695 5.24926 8.92695H12.2483C12.7315 8.92695 13.1231 8.52727 13.1231 8.03425C13.1231 7.54123 12.7315 7.14156 12.2483 7.14156H5.24926ZM16.3383 11.5247C17.4047 10.4366 19.1337 10.4366 20.2002 11.5247C21.2666 12.6129 21.2666 14.3771 20.2002 15.4653L12.6966 23.1217C12.0738 23.7572 11.2935 24.208 10.4391 24.4259L8.31983 24.9665C7.53886 25.1657 6.83145 24.4439 7.02669 23.6471L7.5565 21.4847C7.77011 20.6128 8.21192 19.8166 8.83469 19.1812L16.3383 11.5247Z"
                fill="#212121"
              />
            </svg>
            <Typography
              variant="h4"
              noWrap
              sx={{
                marginLeft: "8px",
              }}
            >
              Register New VMware Setup
            </Typography>
          </Box>
          <Box
            className="d-flex mt-3"
            sx={{ justifyContent: "center", width: "calc(100% - 240px)" }}
          >
            <IconButton
              aria-label="filter"
              disableRipple
              onClick={handleClose}
              className="oui-moreButton"
              sx={{
                position: "absolute",
                right: 12,
                top: 8,
              }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers sx={{ background: "#ffffff" }}>
          <div style={{ width: "600px" }}>
            <Typography variant="body1" gutterBottom>
              To register your VMware setup, deploy the Druva backup proxy.
              Check the{" "}
              <Link href="#" underline="none">
                {" "}
                prerequisites
              </Link>{" "}
              .
            </Typography>
            <Card className="mb-3 mt-2 card-style">
              <CardContent>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    display: { xs: "none", md: "flex", paddingTop: "8px" },
                  }}
                  className="oui-page-header"
                >
                  1. Deploy Backup Proxy
                </Typography>
                <Box
                  className="mb-1"
                  sx={{
                    background: "#F6F6F6",
                    borderRadius: "12px",
                    padding: "16px",
                  }}
                >
                  <Typography variant="body1" gutterBottom>
                    Deploy the first backup proxy using the Druva Proxy
                    Deployer.
                  </Typography>
                  <Box className="d-flex align-items-center mb-2 mt-1">
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.9549 7.96347L13.3942 8.65089C13.8968 9.45512 14.2864 10.3247 14.5519 11.2351C14.8205 12.1822 14.9305 13.1672 14.8776 14.1502C14.7795 15.4829 14.5957 16.8079 14.3271 18.117C14.6708 17.9335 14.9913 17.7836 15.3014 17.6002C15.9744 17.2035 16.6071 16.7422 17.1905 16.2228C17.7361 15.7032 18.231 15.133 18.6687 14.5197C19.1597 13.8066 19.5754 13.0445 19.9091 12.2456C20.1939 11.6104 20.4407 10.9589 20.6482 10.2945C20.6715 10.2221 20.6921 10.1342 20.7128 10.0593C18.4017 8.58948 15.6967 7.86093 12.96 7.97123L12.9549 7.96347ZM3.45257 14.5249C3.44748 14.5574 3.44748 14.5906 3.45257 14.6231C3.58178 14.9229 3.69807 15.233 3.83762 15.5224C4.17518 16.2059 4.58868 16.8491 5.07031 17.4399C5.47095 17.9332 5.91555 18.389 6.39862 18.8018L6.73199 19.0603C7.43159 19.5516 8.17873 19.9715 8.9622 20.3136C9.49283 20.5514 10.0286 20.7693 10.5696 20.9674C10.9977 21.1333 11.4341 21.2764 11.8772 21.3964C11.9324 21.3129 11.9833 21.2267 12.0297 21.138L12.5 20.1973C12.8284 19.5456 13.1049 18.869 13.327 18.1739C13.5314 17.5089 13.6784 16.8276 13.7663 16.1375C13.8309 15.724 13.8852 15.1038 13.8955 14.8298C13.9266 14.3595 13.8955 13.8866 13.8955 13.4137V13.2043C9.53074 14.8453 6.34952 15.1968 3.42931 14.5559L3.45257 14.5249ZM0.0206785 12.243L0.599549 12.5557C1.06988 12.7909 1.55314 13.0364 2.03639 13.2509C2.33285 13.3856 2.63653 13.5038 2.94605 13.6049C3.87818 13.9081 4.85247 14.0616 5.83267 14.0597C6.1221 14.0597 6.41154 14.0391 6.71131 14.0184C7.18308 13.9845 7.65248 13.9232 8.11715 13.8349L7.90007 13.4498C7.78119 13.1914 7.6649 12.933 7.54603 12.6901C7.32943 12.2242 7.14466 11.7441 6.99299 11.2532C6.82678 10.7391 6.68876 10.2163 6.57952 9.68717C6.4839 9.22717 6.45289 8.75426 6.39862 8.29426C6.37664 7.95866 6.37664 7.62199 6.39862 7.2864C6.39862 6.95562 6.4193 6.62225 6.45031 6.29146C6.48132 5.96068 6.47356 5.92708 6.49424 5.73843C6.5485 5.32495 6.62345 4.92439 6.68805 4.51608C6.75266 4.10777 6.80435 3.96563 6.85862 3.70204C6.85862 3.63743 6.87929 3.57283 6.88963 3.49788C6.38953 3.76819 5.90625 4.06851 5.44244 4.3972C4.87582 4.79423 4.34177 5.23581 3.84537 5.71776C3.45427 6.08771 3.0825 6.47759 2.73156 6.88584C2.21987 7.51285 1.78117 8.19604 1.42393 8.92223C1.17842 9.40549 0.953592 9.89908 0.728762 10.3927C0.452496 11.0002 0.20922 11.6222 0 12.2559L0.0206785 12.243ZM9.51782 0.665538C10.2362 0.900705 10.9443 1.14621 11.6291 1.44081C12.508 1.80546 13.3514 2.2501 14.1488 2.76912C14.5874 3.07501 14.9967 3.42107 15.3712 3.80282C16.0036 4.44058 16.5548 5.15408 17.0122 5.92708C17.3532 6.50393 17.6437 7.10918 17.8805 7.73606C14.4035 6.76636 10.6856 7.18904 7.51502 8.91448C7.43498 8.34699 7.39869 7.77418 7.40648 7.20112C7.4194 6.78764 7.42973 6.38449 7.46074 5.97877C7.49176 5.57304 7.53569 5.14147 7.61064 4.72282C7.72334 4.11025 7.89646 3.51035 8.12749 2.93193C8.31869 2.45176 8.53609 1.98244 8.77872 1.5261C8.94152 1.21598 9.13276 0.916211 9.29557 0.603516L9.49973 0.657785L9.51782 0.665538Z"
                        fill="#FF8A35"
                      />
                    </svg>
                    <Typography variant="header1" sx={{ marginLeft: "8px" }}>
                      Druva Proxy Deployer
                    </Typography>
                  </Box>
                  <Typography variant="body1" gutterBottom>
                    Backup Proxy Version : 1.0.0::r239594
                  </Typography>
                  <Box className="d-flex align-items-baseline mt-2">
                    <Button className="m-0" variant="outlined">
                      Download
                    </Button>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{ marginLeft: "8px" }}
                    >
                      ~80.67 MB
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1">
                  Alternatively, you can deploy the backup proxy{" "}
                  <Link href="#" underline="none">
                    using an OVF template
                  </Link>{" "}
                  available{" "}
                  <Link href="#" underline="none">
                    here
                  </Link>
                  .
                </Typography>
              </CardContent>
            </Card>
            <Card className="mb-3 mt-4 card-style">
              <CardContent>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    display: { xs: "none", md: "flex", paddingTop: "8px" },
                  }}
                  className="oui-page-header"
                >
                  2. Activate Backup Proxy
                </Typography>
                <Box className="d-flex">
                  <Box sx={{ flexGrow: 1 }} className="justify-content-start">
                    <Typography variant="body1">Activation Token</Typography>
                  </Box>
                  <Box sx={{ flexGrow: 0 }} className="justify-content-end">
                    <Typography variant="body1">
                      <Link href="#" underline="none">
                        Generate New Token
                      </Link>
                    </Typography>
                  </Box>
                </Box>
                <Box className="d-flex align-items-center mt-2 mb-2">
                  <Box sx={{ flexGrow: 1, marginRight: "8px" }} className="justify-content-start">
                    <FormControl fullWidth>
                      <Select
                        value={10}
                        small
                        sx={{height: "36px"}}
                      >
                        <MenuItem value={10}>Default Activation Token</MenuItem>
                        <MenuItem value={20}>Druva Token</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ flexGrow: 0 }} className="justify-content-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                      color="currentColor"
                      class="orion-icons-svg-base orion-icons-svg-clickable qa-icon-copy-activation-token"
                      name="copyToken"
                    >
                      <path
                        fill="#6C757D"
                        fill-rule="evenodd"
                        d="M9.164 0a.6.6 0 010 1.2H2.86a.664.664 0 00-.66.664v10.12a.6.6 0 11-1.2 0V1.864C1 .836 1.832.002 2.86 0h6.304zM4.94 2.6h6.62l2.648 2.668v9.296c0 .732-.592 1.326-1.324 1.328H4.94a1.328 1.328 0 01-1.324-1.328V3.928c0-.732.592-1.326 1.324-1.328zm7.572 2.656h-.952v-.944l.952.944zm.372 9.424a.132.132 0 00.124-.128V6.468H10.36V3.812H4.94a.132.132 0 00-.124.128v10.612a.132.132 0 00.124.128h7.944z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Box>
                </Box>
                <Typography variant="body1">
                  Copy the token. You need to provide it during deployment.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
        <DialogActions>
          <Box className="d-flex w-100 justify-content-end">
              <Button variant="outlined" onClick={handleClose}>Cancel</Button>
              <Button variant="contained" onClick={handleClose}>Done</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RegisterSetupDialog;
