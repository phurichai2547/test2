import { Box, Button, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import Chair from "../../public/imgs/Chair.png";
import Women from "../../public/imgs/Women.png";
import Lorem from "../../components/Section4/Lorem";

const Project = () => {
  return (
    <>
      <Grid2
        container
        columnSpacing={{ xs: 1, sm: 3, md: 3 }}
        gap={24}
        sx={{
          display: "flex",
          py: "250px",
          px: "250px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid2 size={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* กล่องสีน้ำเงิน */}
            <Box
              sx={{
                position: "absolute",
                right: "-50px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "250px",
                height: "400px",
                bgcolor: "#0E204E",
                zIndex: -1,
              }}
            ></Box>

            {/* รูป Chair */}
            <Image
              alt="home about"
              src={Chair}
              priority={true}
              style={{
                width: "85%",
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid2>

        <Grid2 size={4}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ maxWidth: "500px" }}>
              <Typography
                variant="h2"
                fontWeight={700}
                sx={{
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "wrap",
                }}
              >
                Amazing Features
              </Typography>
              <Lorem />
            </Box>
          </Box>
        </Grid2>
      </Grid2>

      {/* women */}
      <Grid2
        container
        columnSpacing={{ xs: 1, sm: 3, md: 3 }}
        gap={4}
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          px: "100px",
          justifyContent: "center",
        }}
      >
        <Grid2 size={4}>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                lg: "flex",
                width: "100%",
                justifyContent: "center",
              },
            }}
          >
            <Box>
              <Typography
                fontWeight={700}
                sx={{
                  mb: 3,
                  display: { xs: "none", md: "flex", lg: "flex" },
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "wrap",
                  fontSize: "60px",
                }}
              >
                Become an
                <br /> Agent
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "pretty",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                a community that gives you a taste of <br /> happiness, a place
                you’ll love to live and an
                <br /> opportunity to build a home.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  fontSize: "17px",
                  borderRadius: 0,
                  backgroundColor: "#0E204E",
                  mt: 4,
                  display: {
                    xs: "none",
                    md: "flex",
                    lg: "flex",

                    width: "239px",
                    height: "62px",
                  },
                }}
              >
                Join Now
              </Button>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={6}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
            }}
          >
            <Box
              sx={{
                width: "500px",
                height: "445px",
                bgcolor: "#0E204E",
              }}
            ></Box>

            <Image
              alt="home about"
              src={Women}
              priority={true}
              style={{
                marginTop: "-150px",
                marginRight: "100px",
                width: "484px",
                height: "725px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};
export default Project;
