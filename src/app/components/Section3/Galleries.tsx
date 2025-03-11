import { Grid2, Typography } from "@mui/material";
import Image from "next/image";
import one from "../../public/imgs/galleries/1.png";
import two from "../../public/imgs/galleries/2.png";
import three from "../../public/imgs/galleries/3.png";
import four from "../../public/imgs/galleries/4.png";
import five from "../../public/imgs/galleries/5.png";
import six from "../../public/imgs/galleries/6.png";
import seven from "../../public/imgs/galleries/7.png";
import eight from "../../public/imgs/galleries/8.png";
import nine from "../../public/imgs/galleries/9.png";

const Galleries = () => {
  const images = [one, two, three, four, five, six, seven, eight, nine];

  return (
    <>
      <Typography
        fontWeight={700}
        sx={{
          mr: 2,
          mt: "20%",
          display: "flex",
          justifyContent: "center",
          fontFamily: "Playfair Display",
          fontWeight: 700,
          color: "#0E204E",
          textDecoration: "none",
          fontSize: "60px",
        }}
      >
        Galleries
      </Typography>
      <Typography
        noWrap
        sx={{
          ml: "6%",
          mt: "4%",
          display: "flex",
          fontFamily: "Manrope",
          color: "#0E204E",
          textDecoration: "none",
          lineHeight: "36px",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        A community that gives you a taste of happiness, a place you’ll love to
        live and an opportunity to build a home.
      </Typography>

      <Grid2
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: "4%",
          px: "20%",
        }}
      >
        {images.map((src, index) => (
          <Grid2 key={index} size={4} sx={{ display: "flex" }}>
            <Image
              alt={`gallery image ${index + 1}`}
              src={src}
              priority={true}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default Galleries;
