import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import room from "../../public/imgs/room.png";
import garden1 from "../../public/imgs/garden1.png";
import garden2 from "../../public/imgs/garden2.png";
import livingroom from "../../public/imgs/livingroom.png";
import FrameLogo from "./FrameLogo";
import FrameLogo1 from "./FrameLogo1";
import FrramLogo2 from "./FrameLogo2";

const WhatWeDo = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          width: "100%",
          height: "708px",
          bgcolor: "#0E204E",
          clipPath:
            "polygon(50% 0%, 100% 0, 100% 100%, 84% 93%, 60% 80%, 0 100%, 0 0)",
          position: "relative"
        }}
      ></Box>
      <Grid2
        container
        columnSpacing={{ xs: 1, sm: 1, md: 2 }}
        gap={0}
        sx={{
          position: "absolute",
          mt: -70
        }}
      >
        <Grid2 size={4}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              justifyContent: "center",
              width: "100%",
              height: "634px"
            }}
          >
            <Typography
              fontWeight={700}
              sx={{
                pl: 4,
                fontFamily: "Playfair Display",
                color: "white",
                textDecoration: "none",
                textWrap: "wrap",
                alignContent: "center",
                fontSize: "60px"
              }}
            >
              Why
              <br /> Choose
              <br /> Pineapple <br />
              Island
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={4}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" }
            }}
          >
            <Box
              sx={{
                boxShadow: 2,
                width: "100%",
                height: "634px",
                bgcolor: "white",
                display: { xs: "none", md: "flex", lg: "flex" },
                alignItems: "center"
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    color: "#0E204E",
                    textDecoration: "none",
                    textWrap: "wrap",
                    fontSize: "18px",
                    p: "50px"
                  }}
                >
                  Pineapple Island is the most sought-after community in Ibadan
                  that values and puts the needs of their clients first. It is a
                  territory with loft complexes that creates a country life and
                  homely feeling that is integrated with industrial development.
                  A perfect, professional built abode that gives you the true
                  taste of beauty and happiness.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2
          size={4}
          sx={{
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            pr: "50px"
          }}
        >
          <Image
            alt="home about"
            src={room}
            priority={true}
            style={{
              width: "100%",
              height: "634px",
              objectFit: "cover"
            }}
          />
        </Grid2>
      </Grid2>

      {/* What Pineapple Land Offers */}
      <Typography
        fontWeight={700}
        sx={{
          mr: 2,
          mt: 20,
          mb: "122px",
          display: { xs: "none", md: "flex", lg: "flex" },
          justifyContent: "center",
          fontFamily: "Playfair Display",
          fontWeight: 700,
          color: "#0E204E",
          textDecoration: "none",
          fontSize: "60px"
        }}
      >
        What Pineapple Land Offers
      </Typography>

      <Grid2
        container
        columnSpacing={{ xs: 1, sm: 3, md: 3 }}
        gap={12}
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          p: "50px",
          justifyContent: "center"
        }}
      >
        <Grid2 size={6}>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                lg: "flex",
                width: "100%",
                justifyContent: "flex-end"
              }
            }}
          >
            <Box
              sx={{
                width: "412px",
                height: "358px",
                bgcolor: "#0E204E"
              }}
            ></Box>
          </Box>

          <Image
            alt="home about"
            src={garden1}
            priority={true}
            style={{
              marginTop: "-450px",
              width: "80%",
              height: "582px",
              objectFit: "cover"
            }}
          />
        </Grid2>

        <Grid2 size={4}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },

              height: "350px"
            }}
          >
            <Box
              sx={{
                alignContent: "center"
              }}
            >
              <FrameLogo />
            </Box>
          </Box>
        </Grid2>
      </Grid2>

      <Grid2
        container
        columnSpacing={{ xs: 1, sm: 3, md: 3 }}
        gap={12}
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          p: "30px",
          justifyContent: "center"
        }}
      >
        <Grid2 size={4}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              height: "582px"
            }}
          >
            <Box
              sx={{
                pt: "20px",
                alignContent: "center"
              }}
            >
              <FrameLogo1 />
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={6}>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                lg: "flex",
                width: "100%",
                justifyContent: "flex-end"
              }
            }}
          >
            <Image
              alt="home about"
              src={garden2}
              priority={true}
              style={{
                width: "80%",
                height: "582px",
                objectFit: "cover"
              }}
            />
          </Box>
          <Box
            sx={{
              mt: "-450px",
              width: "412px",
              height: "358px",
              bgcolor: "#0E204E"
            }}
          ></Box>
        </Grid2>
      </Grid2>

      {/* ส่วน mobile */}

      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          pt: "56px"
        }}
      >
        <Box>
          <Typography
            fontWeight={700}
            sx={{
              fontFamily: "Playfair Display",
              textWrap: "wrap",
              color: "#0E204E",
              textAlign: "center",
              fontSize: "24px"
            }}
          >
            Why Choose <br /> Pineapple Island
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            px: "20px",
            py: "16px"
          }}
        >
          <Typography
            fontWeight={300}
            sx={{
              fontFamily: "Lato",
              textWrap: "wrap",
              color: "#0E204E",
              textAlign: "center"
            }}
          >
            Pineapple Island is the most sought-after community in Ibadan that
            values and puts the needs of their clients first. It is a territory
            with loft complexes that creates a country life and homely feeling
            that is integrated with industrial development. A perfect,
            professional built abode that gives you the true taste of beauty and
            happiness.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          px: "20px"
        }}
      >
        <Image
          alt="home about"
          src={livingroom}
          priority={true}
          style={{
            width: "100%",
            height: "207px",
            objectFit: "cover"
          }}
        />
      </Box>

      <Box
        sx={{
          display: { xs: "flex-row", md: "none", lg: "none" },
          width: "100%",
          py: 5
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            textWrap: "wrap",
            color: "#0E204E",
            textDecoration: "none",
            textAlign: "center",
            mb: 4
          }}
        >
          Pineapple Island Offers
        </Typography>
        <Box
          sx={{
            px: "20px"
          }}
        >
          <Image
            alt="home about"
            src={garden1}
            priority={true}
            style={{
              width: "100%",
              height: "387px",
              objectFit: "cover"
            }}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center",
            mt: -4,
          }}
        >
          <Box
            bgcolor="#0E204E"
            sx={{
              width: "80%",
              height: "247px"
            }}
          >
            <FrramLogo2 />
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default WhatWeDo
