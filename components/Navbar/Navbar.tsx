import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const pages = ["About Us", "What we do", "Project"];

function ResponsiveAppBar() {
  return (
    <AppBar
      sx={{
        position: "static",
        bgcolor: "white",
        boxShadow: 0,
        py: 3,
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            fontWeight={700}
            sx={{
              display: { xs: "flex", md: "flex", lg: "flex" },
              fontFamily: "Playfair Display",
              fontWeight: 700,
              color: "#0E204E",
              textDecoration: "none",
            }}
          >
            Pineapple <br /> Island
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "none", lg: "flex" },
              justifyContent: "center",
              gap: "87px",
            }}
          >
            {pages.map((page) => (
              <Button key={page} sx={{ color: "#0E204E", display: "block" }}>
                <Typography
                  sx={{ fontFamily: "Manrope", textTransform: "none" }}
                >
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>

          <Tooltip title="Open menu">
            <IconButton
              size="large"
              sx={{
                display: { xs: "flex", md: "flex", lg: "none" },
                color: "#0E204E",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>

          <Button
            variant="contained"
            sx={{
              fontFamily: "Manrope",
              textTransform: "none",
              borderRadius: 0,
              backgroundColor: "#0E204E",
              width: "188px",
              height: "50px",
              display: { xs: "none", md: "none", lg: "flex" },
            }}
          >
            <Typography sx={{ fontFamily: "Manrope", textTransform: "none" }}>
              Get in Touch
            </Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
