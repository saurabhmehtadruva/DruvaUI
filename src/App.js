import "./App.css";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/Navbar";
import { ColorModeContext } from "./components/common/ColorModeContext";
import InAppSidebar from "./components/InAppSidebar";
import MainContainer from "./components/MainContainer/MainContainer";
import TypographyContainer from "./components/Typography/TypographyContainer";
import { CssBaseline } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Route, Routes } from "react-router-dom";
import DetailComponent from "./components/DetailComponent";
import BackupProxyContainer from "./components/MainContainer/BackupProxyContainer";
import BackupPoliciesContainer from "./components/MainContainer/BackupPoliciesContainer";
import VCenterListContainer from "./components/vCenterList/VCenterListContainer";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' ? {
            background: {
              default: "#F6F6F6",
            },
            primary: {
              main: "#FFAC70",
            },
            secondary: {
              main: "#615F5F",
            },
            text: {
              main: "#383535",
            },
            success: {
              main: "#F1F9F0",
            },
            headerBar: {
              main: "#FFFFFF",
            },
          } : {
            primary: {
              main: "#FF9549",
            },
            background: {
              default: "#1D1A1A",
            },
            text: {
              main: "#ffffff",
            },
            headerBar: {
              main: "#121212",
            },
          }),
        },
        spacing: 8,
        typography: {
          fontSize: 14,
          color: "#383535",
          fontFamily: [
            "IBM Plex Sans",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
          h1: {
            color: "#383535",
            fontSize: "30px",
            fontWeight: 500,
            lineHeight: "36px",
          },
          h2: {
            color: "#383535",
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "28px",
          },
          h3: {
            color: "#383535",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "24px",
          },
          h4: {
            color: "#383535",
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "19px",
          },
          h5: {
            color: "#383535",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "19px",
          },
          h6: {
            color: "#0075C4",
          },
          subtitle1: {
            fontWeight: 600,
            fontSize: "20px",
          },
          subtitle2: {
            fontWeight: 400,
            fontSize: "18px",
          },
          body1: {
            fontWeight: 400,
            fontSize: "14px",
          },
          body2: {
            fontWeight: 300,
            fontSize: "12px",
          },
          body3: {
            fontWeight: 400,
            color: "#878686",
            fontSize: "14px",
          },
          textdesc: {
            fontWeight: 400,
            fontSize: "16px",
            marginBottom: "0px",
            color: "#383535",
          },
        },
        components: {
          MuiCardContent: {
            styleOverrides: {
            root: {
              borderRadius: "12px",
            },
          }
          },
          MuiButton: {
            styleOverrides: {
              root: ({ theme }) => ({
                borderRadius: "36px",
                //color: "#1D1A1A",
                background: theme.palette.mode === 'light' ? "#FFAC70" : "#FF9549",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                margin: "0 16px 0 0",
                padding: "4px 20px",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "20px",
                textTransform: "none",
                ...(theme.palette.mode === 'light') ? {
                  '&:hover': {
                    background: "#FFB784",
                    boxShadow: "none",
                 },
                } : {
                  '&:hover': {
                    background: "#FFB784",
                    boxShadow: "none",
                 },
                }
              }),
            },
            variants: [
              {
                props: { variant: "outlined" },
                style: ({ theme }) => ({
                  borderRadius: "20px",
                  margin: "0 16px 0 0",
                 ...(theme.palette.mode === 'light') ? {
                  borderColor: "#615F5F",
                  '&:hover': {
                    background: "#F6F6F6",
                    borderColor: "#615F5F",
                 },
                  color: "#1D1A1A",backgroundColor: "#ffffff",} : {
                    backgroundColor: "#2A2727",
                    color: "#FFFFFF",
                    borderColor: "#6C6A6A",
                    '&:hover': {
                      background: "#2A2727",
                      borderColor: "#6C6A6A",
                   },
                  },
                }),
              },
              {
                props: { variant: "navOutlined" },
                style: ({ theme }) => ({
                  '& .MuiButton-endIcon': {
                    marginLeft: 0,
                  },
                  border: "1px solid",
                  borderRadius: "12px",
                  margin: "0px",
                  fontWeight: 400,
                  backgroundColor: "#ffffff",
                 ...(theme.palette.mode === 'light') ? {
                  borderColor: "#D7D7D7",
                  background: "#ffffff",
                  '&:hover': {
                    borderColor: "#FFAC70",
                    background: "#ffffff",
                 },
                  color: "#454242",} : {
                    color: "#D7D7D7",
                    background: "#2A2727",
                    '&:hover': {
                      borderColor: "#FF9549",
                      background: "#2A2727",
                   },
                },
                }),
              },
              {
                props: { variant: "navMenu" },
                style: ({ theme }) => ({
                  '& .MuiButton-endIcon': {
                    marginLeft: 0,
                  },
                  ...(theme.palette.mode === 'light') ? {
                    backgroundColor: "#ffffff",
                    color: "#6C6A6A;",
                  '&:hover': {
                    background: "#ffffff",
                 },
                } : {
                  color: "#D7D7D7",
                  background: "#2A2727",
                  '&:hover': {
                    background: "#2A2727",
                 },
                },
                  borderRadius: "12px",
                  margin: "0 8px 0 0",
                  boxShadow: "none",
                }),
              },
              {
                props: {variant: "densityBtn"},
                style: ({ theme }) => ({
                  margin: 0,
                  boxShadow: 'none',
                  fontSize: 0,
                  padding: 0,
                  paddingLeft: "8px",
                  minWidth: 20,
                  height: "36px",
                  width: "36px",
                  ...(theme.palette.mode === 'light') ? {
                    backgroundColor: "#ffffff",
                    '&:hover': {
                      background: "linear-gradient(0deg, #E4E4E4, #E4E4E4), #FFFFFF",
                      borderRadius: "20px",
                      height: "36px",
                      width: "36px",
                   },
                  } : {
                    background: "#2A2727",
                  },
                }),
              },
              {
                props: {variant: "filterBtn"},
                style: ({ theme }) => ({
                  background: "rgba(0, 0, 0, 0.08)",
                  borderRadius: "16px",
                  color: "rgba(0, 0, 0, 0.87)",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "18px",
                  
                  '&.filter-active' : {
                    border: "1px solid #2171B5",
                    background: "#ffffff",
                    fontWeight: 600,
                  },
                  ...(theme.palette.mode === 'light') ? {
                    background: "rgba(0, 0, 0, 0.08)",
                    '&:hover': {
                      background: "rgba(0, 0, 0, 0.08)",
                    },
                  } : {
                    background: "#ffffff",
                    '&:hover': {
                      background: "#ffffff",
                    },
                  }
                }),
              },
              {
                props: {variant: "Success"},
                style: ({ theme }) => ({
                  background: "#1D935C",
                  borderRadius: "16px",
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "18px",
                  '&:hover': {
                    background: "#1D935C",
                  },
                  '&.filter-active' : {
                    border: "1px solid #1D935C",
                    background: "#73C686",
                    fontWeight: 600,
                  }
                }),
              },
              {
                props: {variant: "Error"},
                style: ({ theme }) => ({
                  background: "#D12F22",
                  borderRadius: "16px",
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "18px",
                  '&:hover': {
                    background: "#D12F22",
                  },
                  '&.filter-active' : {
                    border: "1px solid #D12F22",
                    background: "#E96D78",
                    fontWeight: 600,
                  }
                }),
              },
              {
                props: {variant: "Successful With Errors"},
                style: ({ theme }) => ({
                  background: "#C8A529",
                  borderRadius: "16px",
                  color: "#ffffff",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "18px",
                  '&:hover': {
                    background: "#C8A529",
                  },
                  '&.filter-active' : {
                    border: "1px solid #C8A529",
                    background: "#EECB62",
                    fontWeight: 600,
                  }
                }),
              }
            ],
          },
          MuiAvatar:{
            styleOverrides: {
              root: ({ theme }) => ({
                ...(theme.palette.mode === 'light') ? {
                  color: "#1D1A1A",
                background: "linear-gradient(0deg, #CFE7FC, #CFE7FC), #FFFFFF",
                } : {},
                borderRadius: "18px",
                width: "30px",
                height: "30px",
              })
            }
          },
          MuiTabs: {
            styleOverrides: {
              root: {
                minHeight: "36px",
              }
            }
          },
          MuiTab: {
            styleOverrides: {
              root: ({ theme }) => ({
                textTransform: "none",
                fontSize: "16px",
                padding: "0px 2px 0px 0px",
                margin: "0px 8px",
                minHeight: "36px",
                minWidth: "fit-content",
                ...(theme.palette.mode === 'light') ? {
                  color: "#383535",
                  fontWeight: "400",
                  "&.Mui-selected": {
                    fontWeight: "600",
                    color: "#383535",
                  }
                } : {
                  
                }
              }) 
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                boxShadow: "none",
                borderRadius: "12px",
              }
            }
          },
          MuiCardHeader: {
            styleOverrides: {
              root: {
                paddingBottom: 0,
              },
              title: {
                display: "flex",
                justifyContent: "start",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "28px",
              },
              avatar: {
                marginRight: "8px",
              }
            }
          },
          MuiTypography: {
              variants: [
                {
                  props: { variant: "dashBoard" },
                  style: ({ theme }) => ({
                    ...(theme.palette.mode === 'light') ? {
                      color: "#615F5F",
                      '&:hover': {
                        color: "#615F5F",
                      },
                    } : {
                      color: "#D7D7D7",
                      '&:hover': {
                        color: "#D7D7D7",
                      },
                    },
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "140%",
                  }),
                },
                {
                  props: { variant: "appbar" },
                  style: ({ theme }) => ({

                    ...(theme.palette.mode === 'light') ? {
                      color: "#6C6A6A",
                      '&:hover': {
                        color: "#454242",
                      },
                    } : {
                      color: "#D7D7D7",
                      '&:hover': {
                        color: "#D7D7D7",
                      },
                    },
                    fontWeight: 400,
                    fontSize: "14px",
                  }),
                },
                {
                  props: { variant: "header2" },
                  style: ({ theme }) => ({
                    ...(theme.palette.mode === 'light') ? {
                      color: "#383535"
                    } : {
                      color: "#D7D7D7"
                    },
                    fontWeight: 500,
                    fontSize: "24px",
                  }),
                },
                {
                  props: { variant: "filter" },
                  style: ({ theme }) => ({
                    ...(theme.palette.mode === 'light') ? {
                      color: "#525050"
                    } : {
                      color: "#E6E6E6"
                    },
                    fontWeight: 500,
                    fontSize: "14px",
                  }),
                },
                {
                  props: { variant: "filterHeader" },
                  style: ({ theme }) => ({
                    fontWeight: 500,
                    fontSize: "16px",
                    ...(theme.palette.mode === 'light') ? {
                      color: "#383535",
                    } : {
                      color: "#E6E6E6"
                    },
                  }),
                }
              ]
          },
          MuiLink: {
            styleOverrides: {
              root: ({ theme }) => ({
                ...(theme.palette.mode === 'light') ? {
                  color: "#3687CB",
                '&:hover': {
                  color: "#3687CB",
                },
                } : {},
                
              })
            }
          },
          MuiListItemButton: {
            styleOverrides: {
              root: ({ theme }) => ({
                '&.Mui-selected.oui-sideBarBtn': {
                  marginLeft: "12px",
                  marginRight: "12px",
                },
                '&.Mui-selected .oui-textSideBar .MuiTypography-root' : {
                  color: "#FF9549",
                },
                ...(theme.palette.mode === 'light') ? {
                  '&:hover': {
                    color: "inherit",
                  },
                  '&.Mui-selected.oui-sideBarBtn': {
                    background: "linear-gradient(0deg, #383535, #383535), #FFFFFF",
                    color: "#FF9549",
                    marginLeft: "12px",
                    marginRight: "12px",
                  },
                  '&:hover .oui-textSideBar .MuiTypography-root' : {
                    color: "#FFFFFF",
                  },
                  
                  '& .oui-textSideBarData .MuiTypography-root' : {
                    color: "#FFFFFF",
                  },
                  '& .oui-textSideBar .MuiTypography-root' : {
                    fontSize: "0.875rem",
                    color: "#BDBCBC",
                  }
                } : {
                  '&:hover': {
                    color: "inherit",
                  },
                },
                
              })
            }
          },
          MuiListItem: {
            styleOverrides: {
              root: ({ theme }) => ({
                
                '&.Mui-selected .oui-selectNav .MuiTypography-root': {
                  color: theme.palette.mode === 'light' ? "#FFAC70" : "#FF9549",
                },
                ...(theme.palette.mode === 'light') ? {
                  color: "#6C6A6A",
                '&.Mui-selected': {
                  backgroundColor: "#ffffff",
                  color: "#EC873E",
                },
                '& .oui-textSideBar .MuiTypography-root': {
                  fontSize: "0.875rem",
                  color: "#BDBCBC",
                },
                } : {
                  '&.Mui-selected': {
                    backgroundColor: "#2A2727",
                  },
                },
              })
            }
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: ({ theme }) => ({
                borderRadius: "4px",
                color: "#878686",
                ...(theme.palette.mode === 'light') ? {
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline' : {
                    borderColor: "#BDBCBC",
                  },
                }: {
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline' : {
                    borderColor: "#D7D7D7",
                  },
                }
              }),
              input: {
                fontSize: "16px",
                color: "#878686",
              },
              notchedOutline : ({ theme }) => ({
                ...(theme.palette.mode === 'light') ? {
                  borderColor: "#BDBCBC", 
                }: {
                  borderColor: "#D7D7D7", 
                },
              })
            }
          },
          MuiSelect: {
            styleOverrides: {
              select: ({ theme }) => ({
                ...(theme.palette.mode === 'light') ? {
                  color: "#615F5F", 
                }: {
                  color: "#D7D7D7", 
                },
              })
            }
          },
          MuiInputLabel: {
            styleOverrides: {
              root: {
                color: "#878686",
              }
            }
          },
          MuiFormControl: {
            styleOverrides: {
              root: {
                borderRadius: "4px",
              }
          },
        },
          MuiDialog: {
            styleOverrides: {
              container: {
                background: "rgba(42, 39, 39, 0.8)",
              }
            }
          },
          MuiDialogActions: {
            styleOverrides: {
              spacing: {
                padding: "12px",
              }
            }
          },
          MuiDivider: {
            styleOverrides: {
              root: {
                borderColor: "#E4E4E4",
                opacity: 1,
              },
            },
          },
          MuiStepConnector: {
            styleOverrides: {
              root: {
                borderTopWidth: "2px",
              },
            },
          },
          MuiStepIcon: {
            styleOverrides: {
              text: {
                fontWeight: 600,
                fontSize: "14px",
              },
              root: {
                color: "#E2E2E2"
              }
            }
          },
          MuiStepLabel: {
            styleOverrides: {
              label: {
                fontWeight: 400,
                fontSize: "14px",
                marginTop: "0px",
              },
              alternativeLabel: {
                marginTop: "0px",
              }
            },
          },
          MuiAlert: {
            styleOverrides: {
              root: {
                backgroundColor: "#F1F9F0",
                border: "1px solid #73C686",
                borderRadius: "12px",
              },
              message: {
                padding: "4px 0",
              }
            },
          },
          MuiDataGrid: {
            styleOverrides: {
              root: ({ theme }) => ({
                border: "none",
                borderRadius: "12px",
                padding: "16px",
                ...(theme.palette.mode === 'light') ? {backgroundColor: "#ffffff",} : {
                  backgroundColor: "#2A2727",},
                fontSize: "14px",
                fontWeight: "400",
                '& .MuiDataGrid-columnHeaderTitle': {
                  ...(theme.palette.mode === 'light') ? {color: "#383535",} : { color: "#E4E4E4"},
                },
                '& .MuiDataGrid-columnSeparator': {
                  visibility: 'hidden',
                },
                '& .MuiDataGrid-cellContent': {
                  ...(theme.palette.mode === 'light') ? {color: "#383535",} : { color: "#F6F6F6"},
                  fontWeight: "400",
                },
                '& .MuiDataGrid-row.Mui-selected .MuiDataGrid-cellContent': {
                  fontWeight: "600",
                },
                '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
                  outline: "none",
                },
                '& .MuiDataGrid-row.Mui-selected': {
                  fontWeight: "600",
                  ...(theme.palette.mode === 'light') ? {background: "linear-gradient(0deg, #F6F6F6, #F6F6F6), #FFFFFF",} : {
                    background: "linear-gradient(0deg, #383535, #383535), #FFFFFF"
                  },
                },
                '& .MuiDataGrid-cell': {
                  ...(theme.palette.mode === 'light') ? {borderBottom: '1px solid #F6F6F6',} : {borderBottom: '1px solid #2F2D2D',},
                  boxSizing: 'none',
                },
                '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
                  outline: "none",
                },
                '& .MuiDataGrid-cell .MuiLink-root': {
                  ...(theme.palette.mode === 'light') ? {} : {color: "#46A8EA"}
                },
                '& .MuiDataGrid-cell .oui-enableGrid': {
                  ...(theme.palette.mode === 'light') ? {
                    color: "#1D935C",
                    background: "#F1F9F0",
                  } : {
                    color: "#383535",
                    background: "#689F74",
                  }
                },
                '& .MuiDataGrid-cell .oui-disableGrid': {
                  ...(theme.palette.mode === 'light') ? {
                    color: "#D12F22",
                    background: "#FDF4F3",
                  } : {
                    color: "#383535",
                    background: "#CB606A",
                  }
                },
                '& .MuiDataGrid-toolbarContainer .oui-gridSlash' : {
                  width: "20px",
                  transform: "rotate(90deg)",
                  ...(theme.palette.mode === 'light') ? {
                    border: "0.5px solid #454242" ,
                  } : {
                    border: "0.5px solid white" 
                  }
                  
                }
              }),
              columnHeaderRow: ({ theme }) => ({
                '& .MuiSvgIcon-root' : {
                  ...(theme.palette.mode === 'light') ? {} : {fill: "#FF9549"}
                },
                height: "45px"
              }),
            }
          },
          MuiTextField: {
            styleOverrides: {
              root: ({ theme }) => ({
                ...(theme.palette.mode === 'light') ? {backgroundColor: "#ffffff",} : {},
                borderRadius: "4px"
              })
            }
          },
          MuiDrawer: {
            styleOverrides: {
              paper: ({ theme }) => ({
                ...(theme.palette.mode === 'light') ? {backgroundColor: "#2A2727",} : {},
                
              }),
              docked: ({ theme }) => ({
                '.MuiPaper-root': {
                  ...(theme.palette.mode === 'light') ? {
                    borderTop: "0.5px solid #E4E4E4",
                    backgroundColor: "#ffffff",} :{
                      borderTop: "0.5px solid #1D1A1A",
                      backgroundColor: "#2A2727"
                    },
                }
              }),
              modal: {
                '.oui-global-sidebar .MuiListItem-root .MuiListItemButton-root' : {
                  marginLeft: "12px",
                  marginRight: "12px",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                },
              }
            },
            
          },
          MuiPopover: {
            styleOverrides: {
              paper: ({ theme }) => ({
                ...(theme.palette.mode === 'light') ? {background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF",} : {},
                boxShadow: '0px 10px 35px rgba(0, 0, 0, 0.08)',
                borderRadius: "8px",
              })
            }
          },
          MuiListItemIcon: {
            styleOverrides: {
              root: {
                minWidth: "31px",
              }
            }
          },
          MuiListItemText: {
            styleOverrides: {
              root: ({ theme }) => ({
                ...(theme.palette.mode === 'light') ? {
                  
                } : {
                  color: "#D7D7D7",
                },
              })
            }
          },
          MuiListSubheader: {
            styleOverrides: {
              root: ({ theme }) => ({
                ...(theme.palette.mode === 'light') ? {
                  color: "#A2A1A1",
                } : {
                  color: "#ffffff",
                  backgroundColor: "#2F2F2F",
                },
                lineHeight: "33px",
              })
            }
          },
          MuiButtonBase: {
            styleOverrides: {
              root: ({ theme }) => ({
                
                ...(theme.palette.mode === 'light') ? {
                  '&:hover.oui-protectover': {
                    background: "linear-gradient(0deg, #F6F6F6, #F6F6F6), #FFFFFF",
                  },
                  '&:hover .oui-WorkloadText' : {
                    color: "#2A2727",
                  },
                  '& .MuiListItemText-root.oui-WorkloadText, .oui-WorkloadSubText' : {
                    color: "#6C6A6A",
                  },
                } : {
                  '& .MuiListItemText-root.oui-WorkloadText, .oui-WorkloadSubText' : {
                    color: "#D7D7D7",
                  },
                },
                MuiMenuItem: {
                  root: {
                    '& .Mui-selected:hover': {
                      ...(theme.palette.mode === 'light') ? {
                        background: "linear-gradient(0deg, #F6F6F6, #F6F6F6), #FFFFFF", 
                      } : {}
                    }
                  }
                }
              })
            }
          },
          MuiAppBar: {
            styleOverrides: {
              root: ({ theme }) => ({
                ...(theme.palette.mode === 'light') ? {
                  borderBottom: "0.5px solid #E4E4E4",
                } : {
                  backgroundColor: "#2A2727",
                  backgroundImage: 'none'
                },
              })
            }
          },
          MuiIconButton: {
            styleOverrides: {
              root : ({ theme }) => ({
                ...(theme.palette.mode === 'light') ? {
                  '&.oui-logoMenu:hover' : {
                    background: "linear-gradient(0deg, #383535, #383535), #FFFFFF",
                  }
                } : {},
              })
            }
          },
          MuiFormLabel: {
            styleOverrides: {
              root: ({ theme }) => ({
                ...(theme.palette.mode === 'light') ? {
                  '&.MuiInputLabel-root' : {
                    color: "#615F5F"
                  }
                } : {
                  '&.MuiInputLabel-root' : {
                    color: "#D7D7D7"
                  }
                }
              })
            }
          },
          MuiSwitch: {
            styleOverrides: {
              switchBase : {
                '&.Mui-checked': {
                  color: "#FFAC70",
                },
                '&.Mui-checked+.MuiSwitch-track' : {
                  backgroundColor: "#FFAC70",
                }
              }
            },
          }
        },
      }),
    [mode]
  );

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <NavBar />
          <div
            style={{
              display: "flex",
              maxHeight: "calc(100vh - 65px)",
              minHeight: "calc(100vh - 65px)",
              overflow: "hidden",
            }}
          >
            <InAppSidebar />
              <Routes>
                <Route exact key="1" path="/" element={<VCenterListContainer />} />
                <Route exact key="7" path="/configVM" element={<MainContainer />} />
                <Route exact key="2" path="/backup-proxy" element={<BackupProxyContainer />} />
                <Route exact key="3" path="/backup-policies" element={<BackupPoliciesContainer />} />
                <Route exact key="4" path="text" element={<TypographyContainer />} />
                <Route exact key="5" path="/detail/:detailID" element={<DetailComponent />} />
                <Route exact key="6" path="/vclist" element={<VCenterListContainer />} />
              </Routes>
            {/* <MainContainer /> */}
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
