import Tree from "./../../public/imgs/Tree.png"
import Wifi from "./../../public/imgs/Wifi.png"
import Money from "./../../public/imgs/Money.png"
import Image from "next/image"
import { Box } from "@mui/material"

const FrameLogo = () => {
  return (
    <>
      <Box >
        <Image
          alt="home about"
          src={Tree}
          priority={true}
          style={{
            marginLeft: "80px",
            width: "107px",
            height: "157px"
          }}
        />
        <Image
          alt="home about"
          src={Wifi}
          priority={true}
          style={{
            marginLeft: "80px",
            width: "120px",
            height: "157px"
          }}
        />
        <Image
          alt="home about"
          src={Money}
          priority={true}
          style={{
            marginLeft: "80px",
            width: "107px",
            height: "157px"
          }}
        />
      </Box>
    </>
  )
}
export default FrameLogo
