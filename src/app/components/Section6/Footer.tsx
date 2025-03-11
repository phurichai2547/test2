import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import Group from "../../public/imgs/FrameLogo/Group.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          width: "100%",
          height: "450px",
          bgcolor: "#0E204E",
          clipPath:
            "polygon(100% 42%, 100% 100%, 96% 100%, 84% 100%, 0 100%, 0 32%, 11% 12%)"
        }}
      >
        <Grid2
          container
          gap={0}
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" },
            justifyContent: "center",
            width: "100%"
          }}
        >
          <Grid2 size={6}>
            <Typography
              fontWeight={500}
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
                justifyContent: "center",
                pt: 15,
                pb: 2,
                fontFamily: "Manrope",
                color: "white",
                textDecoration: "none",
                fontSize: "40px"
              }}
            >
              Banana <br />
              Island
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
                justifyContent: "center",
                pl: 15
              }}
            >
              <Box
                sx={{
                  width: "250px"
                }}
              >
                <Typography
                  fontWeight={100}
                  sx={{
                    fontFamily: "Manrope",
                    color: "white",
                    textDecoration: "none",
                    textWrap: "pretty",
                    fontSize: "20px",
                    lineHeight: "36px"
                  }}
                >
                  a community that gives you a taste of happiness, a place
                  you’ll love to live and an opportunity to build a home.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            size={6}
            sx={{
              pt: 25
            }}
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight={500}
                sx={{
                  fontFamily: "Playfair Display",
                  color: "white",
                  textDecoration: "none",
                  pb: 3
                }}
              >
                Follow up
              </Typography>
              <Typography
                fontWeight={100}
                sx={{
                  fontFamily: "Manrope",
                  color: "white",
                  textDecoration: "none",
                  textWrap: "pretty",
                  fontSize: "20px",
                  pb: 3
                }}
              >
                Keep up with our newsletter to get updates about projects and
                offers
              </Typography>
              <TextField
                disabled
                name="Email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{
                  bgcolor: "white",
                  width: "419px",
                  position: "absolute",

                  [`& fieldset`]: {
                    borderRadius: 0
                  },

                  [`& label`]: {
                    fontFamily: "Manrope"
                  }
                }}
              />
              <Button
                variant="text"
                sx={{
                  pl: "320px",
                  pt: "16px",
                  position: "relative",
                  fontFamily: "Manrope",
                  textTransform: "none",
                  borderRadius: 0,
                  color: "grey"
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Box>

      <Box
        sx={{
          display: { xs: "flex-row", md: "none", lg: "none" },
          justifyContent: "center",
          width: "100%",
          height: "100px",
          bgcolor: "#0E204E",
          mt: 5
        }}
      >
        <Box
          sx={{
            pt: 2
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato",
              color: "white",
              textDecoration: "none",
              textWrap: "pretty",
              textAlign: "center",
              fontSize: "18px"
            }}
          >
            Pineapple Island
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            py: 2,
            justifyContent: "center"
          }}
        >
          <Image
            alt="copy rigth"
            src={Group}
            priority={true}
            style={{
              width: "16px",
              height: "16px"
            }}
          />
          <Typography
            fontWeight={300}
            sx={{
              fontFamily: "Lato",
              color: "white",
              textWrap: "pretty",
              textAlign: "center",
              alignItems: "center",
              mt: "-4.5px",
              px: 1
            }}
          >
            Copyright 2021 Glowdsgn All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </>
  )
}
export default Footer
