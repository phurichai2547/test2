import {
    Box,
    Button,
    FormLabel,
    Grid2,
    TextField,
    Typography
  } from "@mui/material";
  
  const Contact = () => {
    return (
      <>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              width: "100%"
            }
          }}
        >
          <Grid2
            container
            gap={"53px"}
            sx={{
              px: "100px",
              justifyContent: "center",
              py: "100px"
            }}
          >
            <Grid2
              size={8}
              sx={{
                display: { sm: "none", md: "flex", lg: "flex" },
                justifyContent: "center"
              }}
            >
              <Typography
                fontWeight={700}
                sx={{
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  textDecoration: "none",
                  fontSize: "60px"
                }}
              >
                Stay In Touch
              </Typography>
            </Grid2>
            <Grid2
              size={8}
              sx={{
                justifyContent: "center"
              }}
            >
              <Typography
                fontWeight={300}
                sx={{
                  fontFamily: "Lato",
                  color: "#0E204E",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "20px"
                }}
              >
                Are you curious about Pineapple Island? Send a message
              </Typography>
            </Grid2>
            <Grid2
              size={8}
              sx={{
                display: { sm: "none", md: "flex", lg: "flex" },
                justifyContent: "center"
              }}
            >
              <TextField
                name="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                sx={{
                  width: "900px",
                  [`& fieldset`]: {
                    borderRadius: 0
                  }
                }}
              />
            </Grid2>
            <Grid2
              size={8}
              sx={{
                display: { sm: "none", md: "flex", lg: "flex" },
                justifyContent: "center"
              }}
            >
              <TextField
                name="Phone No"
                id="outlined-basic"
                label="Phone No"
                variant="outlined"
                sx={{
                  width: "900px",
                  [`& fieldset`]: {
                    borderRadius: 0
                  }
                }}
              />
            </Grid2>
            <Grid2
              size={8}
              sx={{
                display: { sm: "none", md: "flex", lg: "flex" },
                justifyContent: "center"
              }}
            >
              <TextField
                name="Email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{
                  width: "900px",
                  [`& fieldset`]: {
                    borderRadius: 0
                  }
                }}
              />
            </Grid2>
            <Grid2
              size={8}
              sx={{
                display: { sm: "none", md: "none", lg: "flex" },
                justifyContent: "center"
              }}
            >
              <TextField
                name="Message"
                id="outlined-basic"
                label="Message"
                variant="outlined"
                inputProps={{
                  style: {
                    height: "302px"
                  }
                }}
                sx={{
                  width: "909px",
  
                  [`& fieldset`]: {
                    borderRadius: 0
                  }
                }}
              />
            </Grid2>
            <Grid2
              size={8}
              sx={{
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                justifyContent: "center"
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  width: "120px",
                  borderRadius: 0,
                  backgroundColor: "#0E204E"
                }}
              >
                Send
              </Button>
            </Grid2>
          </Grid2>
        </Box>
  
        {/* mobile */}
        <Box
          sx={{
            pt: 3
          }}
        >
          <Box
            sx={{
              display: { xs: "flex-row", md: "none", lg: "none" },
              width: "100%",
              height: "262px",
              bgcolor: "#0E204E",
              justifyContent: "center"
            }}
          >
            <Box
              sx={{
                py: 2,
                justifyItems: "center"
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{
                  fontFamily: "Playfair Display",
                  color: "white",
                  textDecoration: "none"
                }}
              >
                Become an Agent
              </Typography>
            </Box>
            <Box
              sx={{
                py: 2
              }}
            >
              <Typography
                fontWeight={300}
                sx={{
                  fontFamily: "Lato",
                  color: "white",
                  textDecoration: "none",
                  textAlign: "center",
                  px: 8
                }}
              >
                A community that gives you a taste of happiness, a place you’ll
                love to live and an opportunity to build a home.
              </Typography>
            </Box>
            <Box
              sx={{
                justifyItems: "center"
              }}
            >
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Lato",
                    textTransform: "none",
                    width: "103px",
                    height: "40px",
                    backgroundColor: "white",
                    color: "#0E204E"
                  }}
                >
                  Join Now
                </Button>
              </Box>
            </Box>
          </Box>
  
          <Box
            sx={{
              display: { xs: "flex", md: "none", lg: "none" },
              justifyContent: "center"
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{
                mt: 6,
                fontFamily: "Playfair Display",
                color: "#0E204E",
                textDecoration: "none"
              }}
            >
              Stay In Touch
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none", lg: "none" },
              justifyContent: "center"
            }}
          >
            <Typography
              fontWeight={300}
              sx={{
                mt: 3,
                fontFamily: "Lato",
                color: "#0E204E",
                px: 2,
                textDecoration: "none",
                textAlign: "center"
              }}
            >
              If you are interested in finding out more about The Discovery
              Village, leave a message
            </Typography>
          </Box>
          <Box>
            <Grid2
              container
              sx={{
                display: { sm: "flex", md: "none", lg: "none" },
                justifyContent: "center",
                pt: "20px"
              }}
              rowSpacing={"56px"}
            >
              <Box>
                <Grid2 size={12} sx={{}}>
                  <TextField
                    label="Name"
                    variant="standard"
                    sx={{
                      width: "275px"
                    }}
                    InputLabelProps={{
                      sx: {
                        fontFamily: "Lato",
                        fontSize: "17px"
                      }
                    }}
                  />
                </Grid2>
                <Grid2 size={12}>
                  <TextField
                    label="Phone No"
                    variant="standard"
                    sx={{
                      width: "275px"
                    }}
                    InputLabelProps={{
                      sx: {
                        fontFamily: "Lato",
                        fontSize: "17px"
                      }
                    }}
                  />
                </Grid2>
                <Grid2 size={12}>
                  <TextField
                    label="Email"
                    variant="standard"
                    sx={{
                      width: "275px"
                    }}
                    InputLabelProps={{
                      sx: {
                        fontFamily: "Lato",
                        fontSize: "17px"
                      }
                    }}
                  />
                </Grid2>
                <Grid2
                  size={12}
                  sx={{
                    my: 2
                  }}
                >
                  <FormLabel
                    style={{
                      fontFamily: "Lato"
                    }}
                  >
                    Message
                  </FormLabel>
                </Grid2>
                <Grid2 size={12} sx={{}}>
                  <TextField
                    name="Message"
                    id="outlined-basic"
                    variant="outlined"
                    inputProps={{
                      style: {
                        fontFamily: "Lato",
                        height: "83px"
                      }
                    }}
                    sx={{
                      width: "275px",
                      [`& fieldset`]: {
                        borderRadius: 0
                      }
                    }}
                  />
                </Grid2>
                <Grid2
                  size={12}
                  sx={{
                    mt: 2
                  }}
                >
                  <Box sx={{
                    justifyItems:"center"
                  }}>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          fontFamily: "Lato",
                          textTransform: "none",
                          width: "82px",
                          height: "40px",
  
                          backgroundColor: "#0E204E",
                          color: "white"
                        }}
                      >
                        Send
                      </Button>
                    </Box>
                  </Box>
                </Grid2>
              </Box>
            </Grid2>
          </Box>
        </Box>
      </>
    )
  }
  export default Contact
  