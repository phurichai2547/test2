import Image from "next/image";
import home1 from "../../public/imgs/home1.png"
import homecrop from "../../public/imgs/homecrop.png"
import { Box, Button, Grid2, Typography } from "@mui/material";
import homes from "../../public/imgs/homes.png"
import Paginate from "../Section1/Paginate"

const About = () => {
  return (
    <>
      <Grid2
        container
        sx={{
          display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          mb: "250px",
        }}
      >
        <Grid2 size={12}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              justifyContent: "flex-end",
              pl: "500px",
            }}
          >
            <Image
              alt="home about"
              src={home1}
              priority={true}
              style={{
                width: "100%",
                height: "720px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid2>
        <Grid2 size={12}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              pl: "100px",
              mt: -74,
            }}
          >
            <Box
              sx={{
                width: "786px",
                height: "496px",
                bgcolor: "#0E204E",
                py: 10,
              }}
            >
              <Typography
                variant="h2"
                noWrap
                fontWeight={700}
                sx={{
                  display: { xs: "none", md: "flex", lg: "flex" },
                  pl: 10,
                  fontFamily: "Playfair Display",
                  color: "white",
                  textDecoration: "none",
                  letterSpacing: 2,
                }}
              >
                Pineapple Island: <br /> GenZ and Millenial <br /> Abode
              </Typography>
              <Typography
                variant="h6"
                noWrap
                fontWeight={200}
                sx={{
                  mt: 2,
                  display: { xs: "none", md: "flex", lg: "flex" },
                  fontFamily: "Manrope",
                  color: "white",
                  textDecoration: "none",
                  justifyContent: "center",
                }}
              >
                a community that gives you a taste of happiness, a place you’ll
                love to <br />
                live and an opportunity to build a home.
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>

      {/* Section About */}
      <Grid2
        container
        columnSpacing={{ xs: 1, sm: 1, md: 2 }}
        gap={0}
        sx={{
          pb: "250px",
          display: { xs: "none", md: "flex", lg: "flex" },
          px: "40px",
        }}
      >
        <Grid2 size={4}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              justifyContent: "center",
              width: "100%",
              height: "620px",
            }}
          >
            <Typography
              variant="h2"
              fontWeight={700}
              sx={{
                fontFamily: "Playfair Display",
                color: "#0E204E",
                textDecoration: "none",
                textWrap: "wrap",
                alignContent: "center",
              }}
            >
              About
              <br /> Pineapple <br />
              Island
            </Typography>
          </Box>
        </Grid2>

        {/* ส่วน pagination */}
        <Grid2 size={4}>
          <Paginate />
        </Grid2>
        <Grid2 size={4}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              width: "100%",
              height: "620px",
              bgcolor: "#0E204E",
            }}
          >
            <Typography
              noWrap
              sx={{
                fontFamily: "Manrope",
                color: "white",
                textDecoration: "none",
                textWrap: "wrap",
                p: "2rem",
                alignContent: "center",
                fontSize: "20px",
              }}
            >
              Pineapple Island is the most sought-after community in Ibadan that
              values and puts the needs of their clients first. It is a
              territory with loft complexes that creates a country life and
              homely feeling that is integrated with industrial development. A
              perfect, professional built abode that gives you the true taste of
              beauty and happiness.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>

      <Grid2
        container
        columnSpacing={{ xs: 1, sm: 1, md: 2 }}
        gap={0}
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
        }}
      >
        <Grid2
          size={12}
          sx={{
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: { xs: "flex-row", md: "none", lg: "none" },
              px: "20px",
            }}
          >
            <Image
              alt="home about"
              src={homecrop}
              priority={true}
              style={{
                width: "100%",
                height: "720px",
                filter: "brightness(0.60)",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid2>

        <Grid2
          size={12}
          sx={{
            position: "absolute",
          }}
        >
          <Box
            sx={{
              display: { xs: "flex-row", md: "none", lg: "none" },
              py: "150px",
              px: "40px",
            }}
          >
            <Box
              sx={{
                justifyItems: "center",
                pb: "10px",
              }}
            >
              <Typography
                fontWeight={700}
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: 700,
                  textWrap: "wrap",
                  color: "white",
                  textAlign: "center",
                  fontSize: "26px",
                }}
              >
                Pineapple Island:
              </Typography>
            </Box>
            <Box
              sx={{
                justifyItems: "center",
                pb: "24px",
              }}
            >
              <Typography
                fontWeight={700}
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: 700,
                  textWrap: "wrap",
                  color: "white",
                  textAlign: "center",
                  fontSize: "26px",
                }}
              >
                GenZ and Millenial Abode
              </Typography>
            </Box>
            <Box
              sx={{
                justifyItems: "center",
                pb: "10px",
              }}
            >
              <Typography
                fontWeight={300}
                sx={{
                  fontFamily: "Manrope",
                  textWrap: "pretty",
                  color: "white",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                a community that gives you a taste of happiness, a place you’ll
                love to live and an opportunity to build a home.
              </Typography>
            </Box>
            <Box
              sx={{
                justifyItems: "center",
                pb: "24px",
              }}
            >
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Manrope",
                    textTransform: "none",
                    color: "black",
                    bgcolor: "white",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Manrope",
                      textWrap: "pretty",
                      color: "black",
                      textDecoration: "none",
                      textAlign: "center",
                      fontSize: "14px",
                    }}
                  >
                    Get in Touch
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid2>
      </Grid2>

      <Box
        sx={{
          display: { xs: "flex-row", md: "none", lg: "none" },
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            py: "24px",
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
            }}
          >
            About <br /> Pineapple Island
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            px: "20px",
          }}
        >
          <Image
            alt="home about"
            src={homes}
            priority={true}
            style={{
              width: "100%",
              height: "392px",
              filter: "brightness(0.60)",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center",
            width: "100%",
            height: "392px",
            mt: -50,
          }}
        >
          <Box
            sx={{
              px: "40px",
              alignContent: "center",
            }}
          >
            <Typography
              fontWeight={300}
              sx={{
                fontFamily: "Lato",
                textWrap: "pretty",
                color: "white",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              Pineapple Island is the most sought-after community in Ibadan that
              values and puts the needs of their clients first. It is a
              territory with loft complexes that creates a country life and
              homely feeling that is integrated with industrial development. A
              perfect, professional built abode that gives you the true taste of
              beauty and happiness.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default About;
