import { Manrope } from "next/font/google";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import image6 from '../../images/6.jpg'
import image7 from '../../images/7.jpg'
import Image from 'next/image';

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})

export default function Features() {
  return (
    <Container
      sx={{
        maxWidth: {
          mobile: "100%",
          laptop: "70%"
        },
        padding: {
          mobile: "0"
        },
        mb: {
          mobile: 7,
          laptop: 30
        },
      }}
    >
      <Grid container
        sx={{
          mb: 30,
          display: {
            mobile: "none",
            laptop: "flex"
          },
          justifyContent: "space-between"
        }}
      >
        <Grid item desktop={7}
          sx={{
            display: "flex",
          }}
        >
          <Image
            src={image6}
            alt="test"
            width={484}
            height={725}
          />
          <Box
            sx={{
              width: 175,
              height: 445,
              borderRadius: 0,
              backgroundColor: "#0E204E",
              flexDirection: "row-reverse",
              alignSelf: "center",
              zIndex: -1,
            }}
          />
        </Grid>
        <Grid item desktop={5}>
          <Typography
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontSize: "60px",
              color: '#0E204E',
              lineHeight: "80px",
              mb: 2,
            }}
          >
            Amazing Features
          </Typography>

          {/* List */}
          <Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(14, 63, 51, 0.2)",
                  px: 3
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 400,
                    py: 1,
                  }}
                  className={manrope.className}

                >
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Checkbox
                  defaultChecked
                  style={{
                    color: "#0E204E",
                    padding: 0
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: 3
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 400,
                    py: 3,
                  }}
                  className={manrope.className}

                >
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Checkbox
                  defaultChecked
                  style={{
                    color: "#0E204E",
                    padding: 0
                  }}
                />
              </Box>

            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(14, 63, 51, 0.2)",
                  px: 3
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 400,
                    py: 1,
                  }}
                  className={manrope.className}

                >
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Checkbox
                  defaultChecked
                  style={{
                    color: "#0E204E",
                    padding: 0
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: 3
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 400,
                    py: 3,
                  }}
                  className={manrope.className}

                >
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Checkbox
                  defaultChecked
                  style={{
                    color: "#0E204E",
                    padding: 0
                  }}
                />
              </Box>

            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(14, 63, 51, 0.2)",
                  px: 3
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 400,
                    py: 1,
                  }}
                  className={manrope.className}

                >
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Checkbox
                  defaultChecked
                  style={{
                    color: "#0E204E",
                    padding: 0
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: 3
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 400,
                    py: 3,
                  }}
                  className={manrope.className}

                >
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Checkbox
                  defaultChecked
                  style={{
                    color: "#0E204E",
                    padding: 0
                  }}
                />
              </Box>

            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(14, 63, 51, 0.2)",
                  px: 3
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 400,
                    py: 1,
                  }}
                  className={manrope.className}

                >
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Checkbox
                  defaultChecked
                  style={{
                    color: "#0E204E",
                    padding: 0
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: 3
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 400,
                    py: 3,
                  }}
                  className={manrope.className}

                >
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Checkbox
                  defaultChecked
                  style={{
                    color: "#0E204E",
                    padding: 0
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(14, 63, 51, 0.2)",
                  px: 3
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 400,
                    py: 1,
                  }}
                  className={manrope.className}

                >
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Checkbox
                  defaultChecked
                  style={{
                    color: "#0E204E",
                    padding: 0
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: 3
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 400,
                    py: 3,
                  }}
                  className={manrope.className}

                >
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Checkbox
                  defaultChecked
                  style={{
                    color: "#0E204E",
                    padding: 0
                  }}
                />
              </Box>
            </Box>
          </Box>

        </Grid>
      </Grid>

      <Grid container
        sx={{
          flexDirection: "row-reverse",
          justifyContent: "space-between"
        }}
      >
        <Grid item mobile={0} laptop={7}
          sx={{
            display: {
              mobile: "none",
              laptop: "flex"
            },
            flexDirection: "row-reverse",
            alignContent: "flex-end"
          }}
        >
          <Image
            src={image7}
            alt="image"
            width={552}
            height={725}
            style={{
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              width: 175,
              height: 445,
              borderRadius: 0,
              backgroundColor: "#0E204E",
              flexDirection: "row-reverse",
              alignSelf: "center",
              zIndex: -1,
            }}
          />
        </Grid>

        <Grid item mobile={12} laptop={5}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: {
              mobile: "center",
              laptop: "start"
            },
            backgroundColor: {
              mobile: "#0E204E",
              laptop: "transparent"
            },
            height: {
              mobile: 262,
              laptop: "auto"
            },
            px: 3
          }}
        >
          <Box
            sx={{
              my: "auto",
              color: {
                mobile: "#fff",
                laptop: '#0E204E'
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontSize: {
                  mobile: 24,
                  laptop: 60
                },
                lineHeight: {
                  laptop: "80px"
                },
                width: {
                  laptop: 317
                }
              }}
            >
              Become an Agent
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  mobile: 16,
                  tablet: 20
                },
                my: {
                  mobile: 2,
                  laptop: 5
                },
                width: {
                  laptop: "100%",
                  desktop: 417
                },
              }}
              className={manrope.className}
            >
              a community that gives you a taste of
              happiness, a place you’ll love to live and an
              opportunity to build a home.
            </Typography>

            <Button
              sx={{
                backgroundColor: {
                  mobile: "#fff",
                  laptop: "#0E204E"
                },
                borderRadius: {
                  mobile: "5px",
                  laptop: 0
                },
                width: {
                  mobile: 103,
                  laptop: 239
                },
                height: {
                  mobile: 40,
                  laptop: 62
                },
                fontSize: {
                  mobile: 16,
                  laptop: 18
                },
                color: {
                  mobile: "#0E204E",
                  laptop: "#fff"
                },
                alignSelf: "center",
                textTransform: "capitalize",
                '&:hover': {
                  background: {
                    mobile: "#fff",
                    laptop: "#0E204E",
                  }
                }
              }}
              className={manrope.className}
            >
              Join Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
