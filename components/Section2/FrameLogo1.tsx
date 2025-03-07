import System from "./../../public/imgs/System.png"
import Ligth from "./../../public/imgs/Ligth.png"
import Lock from "./../../public/imgs/Lock.png"
import Image from "next/image"
import { Box } from "@mui/material"

const FrameLogo = () => {
  return (
    <>
      <Box >
      <Image
          alt="home about"
          src={System}
          priority={true}
          style={{
            marginLeft: "80px",
            width: "180px",
            height: "157px"
          }}
        />
        <Image
          alt="home about"
          src={Lock}
          priority={true}
          style={{
            marginLeft: "80px",
            width: "139px",
            height: "157px"
          }}
        />
        <Image
          alt="home about"
          src={Ligth}
          priority={true}
          style={{
            marginLeft: "80px",
            width: "131px",
            height: "157px"
          }}
        />
        
      </Box>
    </>
  )
}
export default FrameLogo
