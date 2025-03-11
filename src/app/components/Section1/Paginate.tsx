import { Carousel } from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import one from "../../public/imgs/galleries/1.png";
import two from "../../public/imgs/galleries/2.png";
import three from "../../public/imgs/galleries/3.png";
import home2 from "../../public/imgs/home2.png";
import Image from "next/image";
export default function App() {
  return (
    <div className="App">
      <Carousel
        className="crsl"
        infiniteLoop
        interval={1000}
        showThumbs={false}
      >
        <Image
          alt="home about"
          src={one}
          priority={true}
          style={{
            width: "100%",
            height: "620px",
            objectFit: "cover",
          }}
        />
        <Image
          alt="home about"
          src={two}
          priority={true}
          style={{
            width: "100%",
            height: "620px",
            objectFit: "cover",
          }}
        />
        <Image
          alt="home about"
          src={three}
          priority={true}
          style={{
            width: "100%",
            height: "620px",
            objectFit: "cover",
          }}
        />
        <Image
          alt="home about"
          src={home2}
          priority={true}
          style={{
            width: "100%",
            height: "620px",
            objectFit: "cover",
          }}
        />
      </Carousel>
    </div>
  );
}
