import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  Link,
} from "@mui/material";
import { Manrope } from "next/font/google";

const manrope = Manrope({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        zIndex: 5,
      }}
    >
      <Container
        sx={{
          maxWidth: { laptop: "92%" },
          zIndex: 5,
        }}
      >
        <Toolbar
          sx={{
            p: 0,
            display: "flex",
            justifyContent: "space-between",
            height: { laptop: "100px" },
            pt: { mobile: 6, laptop: "none" },
            pb: { mobile: 2, laptop: "none" },
            backgroundColor: "white",
          }}
        >
          {/* Logo */}
          <Typography
            sx={{
              display: "flex",
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontSize: { mobile: "20px", tablet: "32px" },
              color: "#0E204E",
              textDecoration: "none",
              lineHeight: { laptop: "42.66px" },
              justifyContent: "center",
              flexWrap: "wrap",
              alignContent: "center",
            }}
          >
            Pineapple <br />
            Island
          </Typography>

          {/* Navigation Menu */}
          <Box
            sx={{
              display: { mobile: "block", laptop: "flex" },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: { mobile: "start", laptop: "center" },
              flexGrow: 1,
              zIndex: { mobile: -1, laptop: 2 },
              gap: 20,
            }}
          >
            {["About Us", "What we do", "Project"].map((item, index) => (
              <Link
                key={index}
                href={`#${item}`}
                underline="none"
                sx={{
                  color: "#000",
                  fontSize: 20,
                  fontFamily: manrope.style.fontFamily,
                  transition: "color 0.3s",
                  "&:hover": { color: "#0E204E" },
                }}
                style={{ scrollBehavior: "smooth" }}
              >
                {item}
              </Link>
            ))}
          </Box>

          {/* Get in Touch Button */}
          <Box sx={{ display: { mobile: "none", laptop: "inline" } }}>
            <Button
              href="#Message"
              variant="text"
              sx={{
                backgroundColor: "#0E204E",
                borderRadius: 0,
                width: 188,
                height: 50,
                fontSize: 20,
                fontWeight: 400,
                color: "white",
                textTransform: "capitalize",
                fontFamily: manrope.style.fontFamily,
                "&:hover": { backgroundColor: "#1A326B" }, // เปลี่ยนสีปุ่มตอน hover
              }}
            >
              Get in Touch
            </Button>
          </Box>

          {/* Mobile Menu (Hamburger) */}
          <Box
            sx={{
              display: { laptop: "none" },
              flexDirection: "column",
              cursor: "pointer",
              gap: "12px",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              "&:hover > div": { transform: "scaleX(1.1)" },
            }}
          >
            {[...Array(3)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: "30px",
                  height: "3px",
                  backgroundColor: "#0E204E",
                  borderRadius: "2px",
                  transition: "transform 0.3s ease-in-out",
                  margin: "5px 0",
                }}
              />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
