import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import one from "../../public/imgs/galleries1/1.svg";
import two from "../../public/imgs/galleries1/2.svg";
import three from "../../public/imgs/galleries1/3.svg";
import four from "../../public/imgs/galleries1/4.svg";
import five from "../../public/imgs/galleries1/5.svg";
import six from "../../public/imgs/galleries1/6.svg";
import seven from "../../public/imgs/galleries1/7.svg";
import eight from "../../public/imgs/galleries1/8.svg";
import nine from "../../public/imgs/galleries1/9.svg";
import ten from "../../public/imgs/galleries1/10.svg";
import ele from "../../public/imgs/galleries1/11.svg";
import twe from "../../public/imgs/galleries1/12.svg";
import third from "../../public/imgs/galleries1/13.svg";

const Galleries1 = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center"
        }}
      >
        <Box>
          <Typography
            
            fontWeight={700}
            sx={{
              fontFamily: "Playfair Display",
              color: "#0E206E",
              fontSize:"24px"
            }}
          >
            Available Homes
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          pt: 2
        }}
      >
        <Box>
          <Typography
            fontWeight={300}
            sx={{
              fontFamily: "Lato",
              color: "#0E206E",
              textDecoration: "none",
              px: 6,
              textAlign: "center"
            }}
          >
            a community that gives you a taste of happiness, a place you’ll love
            to live and an opportunity to build a home.
          </Typography>
        </Box>
      </Box>

      <Grid2
        container
        spacing={2}
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          pt: 2,
          px: "20px"
        }}
      >
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={one}
            priority={true}
            style={{ width: "100%", height: "150px" , objectFit: "cover" }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={two}
            priority={true}
            style={{ width: "100%", height: "150px" , objectFit: "cover" }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={three}
            priority={true}
            style={{ width: "100%", height: "150px" , objectFit: "cover" }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={four}
            priority={true}
            style={{ width: "100%", height: "150px" , objectFit: "cover" }}
          />
        </Grid2>
      </Grid2>

      <Grid2
        container
        spacing={2}
        flexWrap={"wrap"}
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          pt: 2,
          px: "20px"
        }}
      >
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={five}
            priority={true}
            style={{ width: "100%", height: "150px" , objectFit: "cover" }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            position: "relative"
          }}
        >
          <Image
            alt="home about"
            src={six}
            priority={true}
            style={{ width: "100%", height: "210%", position: "absolute" , objectFit: "cover"}}
          />
        </Grid2>

        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={seven}
            priority={true}
            style={{ width: "100%", height: "150px" , objectFit: "cover" }}
          />
        </Grid2>
      </Grid2>
      <Grid2
        container
        spacing={2}
        flexWrap={"wrap"}
        flexDirection={"row-reverse"}
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          pt: 2,
          px: "20px"
        }}
      >
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={twe}
            priority={true}
            style={{ width: "100%", height: "150px" , objectFit: "cover" }}
          />
        </Grid2>

        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            position: "relative"
          }}
        >
          <Image
            alt="home about"
            src={eight}
            priority={true}
            style={{ width: "100%", height: "210%", position: "absolute", objectFit: "cover" }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={nine}
            priority={true}
            style={{ width: "100%", height: "150px" , objectFit: "cover" }}
          />
        </Grid2>
      </Grid2>
      <Grid2
        container
        spacing={2}
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          py: 2,
          px: "20px"
        }}
      >
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={ten}
            priority={true}
            style={{ width: "100%", height: "150px" , objectFit: "cover" }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={ele}
            priority={true}
            style={{ width: "100%", height: "150px" , objectFit: "cover" }}
          />
        </Grid2>
        <Grid2
          size={12}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={third}
            priority={true}
            style={{ width: "100%", height: "150px" , objectFit: "cover" }}
          />
        </Grid2>
      </Grid2>
      {/* <Grid2
        container
        spacing={2}
        sx={{
          display: { xs: "flex", md: "none", lg: "none" }
        }}
      >
        <Grid2
          container
          spacing={2}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            mt: 15,
            px:4
          }}
        >
          <Image
            alt="home about"
            src={ten}
            priority={true}
            style={{ width: "100%", height: "100%" , objectFit: "cover" }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center"
          }}
        >
          <Image
            alt="home about"
            src={ele}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid2>
        <Grid2
          size={12}
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center",
            mb: 3
          }}
        >
          <Image
            alt="home about"
            src={third}
            priority={true}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid2>
      </Grid2> */}
    </>
  )
}
export default Galleries1
