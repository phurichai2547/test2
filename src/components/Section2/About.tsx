import {
  Box,
  Container,
  Typography,
  Button
} from "@mui/material";
import { Manrope } from "next/font/google";
import Image from "next/image";
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const Mobile = useMediaQuery('(min-width:1024px)');

  const slide = [
    image2,
    image3,
    image4,
  ]

  const pervSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slide.length - 1 : currentSlide - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slide.length - 1 ? 0 : currentSlide + 1)
  }

  return (
    <Container
      id="About Us"
      sx={{
        maxWidth: {
          laptop: '92%'
        },
        my: {
          mobile: 5,
          laptop: 30
        },
      }}
    >

      <Box
        sx={{
          display: {
            mobile: "block",
            laptop: "flex"
          },
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 700,
            fontSize: {
              mobile: 24,
              laptop: 60
            },
            mr: {
              mobile: 0,
              laptop: 10
            },
            display: {
              mobile: "block",
              laptop: "flex"
            },
            alignItems: 'center',
            color: "#0E204E",
            width: {
              mobile: "100%",
              laptop: "317px"
            },
            textAlign: {
              mobile: "center",
              tablet: "center",
              laptop: "start",
            }
          }}
        >
          About Pineapple Island
        </Typography>

        <Box sx={{
          display: {
            laptop: "flex"
          },
          my: {
            mobile: 2,
            laptop: 0
          },
          borderRadius: 0,
        }}>

          <Box
            sx={{
              width: {
                laptop: 728
              },
              height: {
                mobile: 392,
                laptop: 620
              },
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(to top, rgba(62, 62, 62, 0.64), rgba(62, 62, 62, 0.64))',
                zIndex: 1,
                display: {
                  laptop: "none"
                }
              }
            }}>

            <Image
              src={Mobile ? slide[currentSlide] : slide[0]}
              alt='logo'
              fill
              sizes="100%"
              priority
              style={{ objectFit: 'cover' }}
            />

            <Box
              sx={{
                position: "absolute",
                left: 0,
                zIndex: 999,
                p: 2,
                display: {
                  mobile: "none",
                  laptop: "block"
                }
              }}
            >
              <Button
                onClick={pervSlide}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 10L18 20L28 30L26 34L12 20L26 6L28 10Z" fill="white" />
                </svg>
              </Button>
            </Box>

            <Box
              sx={{
                position: "absolute",
                right: 0,
                zIndex: 999,
                p: 2,
                rotate: "180deg",
                display: {
                  mobile: "none",
                  laptop: "block"
                }
              }}
            >
              <Button
                onClick={nextSlide}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 10L18 20L28 30L26 34L12 20L26 6L28 10Z" fill="white" />
                </svg>
              </Button>
            </Box>

            <Box
              sx={{
                zIndex: 2,
                textAlign: "center",
                color: 'white',
                display: {
                  mobile: "block",
                  laptop: "none"
                },
              }}
            >
              <Typography
                sx={{
                  my: 4,
                  fontSize: 14,
                  px: 8,
                  lineHeight: "25.6px",
                }}
                className={manrope.className}
              >
                Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#0E204E",
              height: 620,
              display: {
                mobile: "none",
                laptop: "flex"
              },
              alignItems: "center"
            }}
          >
            <Typography
              variant="subtitle1"
              color="#ffff"
              sx={{
                px: 8,
                fontSize: 20,
                lineHeight: "32px",
                borderRadius: 0,
                width: "315px"
              }}
              className={manrope.className}
            >
              Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.
            </Typography>
          </Box>

        </Box>
      </Box>
    </Container>
  )
}
