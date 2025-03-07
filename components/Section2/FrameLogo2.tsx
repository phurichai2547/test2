import {  Grid2, Typography } from "@mui/material"
import Image from "next/image"
import Light from "../../public/imgs/FrameLogo/Light.svg"
import Lock from "../../public/imgs/FrameLogo/Lock.svg"
import Money from "../../public/imgs/FrameLogo/Money.svg"
import System from "../../public/imgs/FrameLogo/System.svg"
import Tree from "../../public/imgs/FrameLogo/Tree.svg"
import Network from "../../public/imgs/FrameLogo/Network.svg"

const FrameLogo2 = () => {
  return (
    <>
      <Grid2
        container
        sx={{
          display: { xs: "flex-row", md: "none", lg: "none" },
          width: "100%",
          height: "100%"
        }}
      >
        <Grid2
          size={4}
          sx={{
            justifyItems: "center",
            alignContent: "center"
          }}
        >
          <Image
            alt="Tree"
            src={Tree}
            priority={true}
            style={{
              width: "32px",
              height: "32px"
            }}
          />

          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "Poppins",
              color: "white"
            }}
          >
            Eco Friendly
          </Typography>
        </Grid2>

        <Grid2
          size={4}
          sx={{
            justifyItems: "center",
            alignContent: "center"
          }}
        >
          <Image
            alt="Network"
            src={Network}
            priority={true}
            style={{
              justifyContent: "center",
              width: "32px",
              height: "32px"
            }}
          />

          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "Poppins",
              color: "white"
            }}
          >
            Smart Homes
          </Typography>
        </Grid2>

        <Grid2
          size={4}
          sx={{
            justifyItems: "center",
            alignContent: "center"
          }}
        >
          <Image
            alt="Money"
            src={Money}
            priority={true}
            style={{
              justifyContent: "center",
              width: "32px",
              height: "32px"
            }}
          />

          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "Poppins",
              color: "white"
            }}
          >
            Good Rates
          </Typography>
        </Grid2>
        <Grid2
          size={4}
          sx={{
            justifyItems: "center",
            alignContent: "center"
          }}
        >
          <Image
            alt="System"
            src={System}
            priority={true}
            style={{
              width: "32px",
              height: "32px"
            }}
          />

          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "Poppins",
              color: "white",
              textAlign: "center"
            }}
          >
            Serviced <br />
            Apartment
          </Typography>
        </Grid2>

        <Grid2
          size={4}
          sx={{
            justifyItems: "center",
            alignContent: "center"
          }}
        >
          <Image
            alt="Lock"
            src={Lock}
            priority={true}
            style={{
              width: "32px",
              height: "32px"
            }}
          />

          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "Poppins",
              color: "white",
              textAlign: "center"
            }}
          >
            Private
            <br />
            Security
          </Typography>
        </Grid2>
        <Grid2
          size={4}
          sx={{
            justifyItems: "center",
            alignContent: "center"
          }}
        >
          <Image
            alt="Light"
            src={Light}
            priority={true}
            style={{
              justifyContent: "center",
              width: "32px",
              height: "32px"
            }}
          />

          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "Poppins",
              color: "white",
              textAlign: "center"
            }}
          >
            24/7
            <br />
            Electricity
          </Typography>
        </Grid2>
      </Grid2>
    </>
  )
}
export default FrameLogo2
