import {
  Box,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import Image from "next/image";

import image4 from '../../images/4.jpg'
import image5 from '../../images/5.jpg'

import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'
import icon5 from '../../images/icon5.png'
import icon6 from '../../images/icon6.png'

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function offer() {
  return (
    <Container
      id="What we do"
      sx={{
        maxWidth: {
          laptop: '85%'
        },
        mb: {
          mobile: 30,
        }
      }}
    >
      <Typography
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: 700,
          textAlign: "center",
          fontSize: "60px",
          color: '#0E204E',
          lineHeight: "80px",
          mb: 15,
          display: {
            mobile: "none",
            laptop: "block"
          }
        }}
      >
        What Pineapple Land Offers
      </Typography>

      <Typography
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: 700,
          textAlign: "center",
          fontSize: "24px",
          color: '#0E204E',
          lineHeight: "80px",
          display: {
            mobile: "block",
            laptop: "none"
          }
        }}
      >
        Pineapple Island Offers
      </Typography>

      <Box
        sx={{
          width: {
            mobile: '100%',
            laptop: 'none'
          },
          height: {
            mobile: '387px',
            laptop: 'none'
          },
          position: 'relative',
          display: {
            display: "flex",
            laptop: "none"
          },
        }}
      >

        <Image
          src={image4}
          alt='image'
          fill
          sizes="100%"
          priority
          style={{ objectFit: "cover" }}
        />

        <Box
          sx={{
            display: {
              mobile: "absolute",
              laptop: "none"
            },
            top: 20,
            width: 299,
            height: 247,
            borderRadius: 0,
            backgroundColor: "#0E204E",
            alignItems: "center",
            zIndex: 3,
            boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
            mx: "auto",
            mt: 41
          }}
        >
          <Grid container
            sx={{
              p: 1,
              height: "100%",
              color: "#fff",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Grid item mobile={4}>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.492 3.53918C17.2097 3.31675 16.8609 3.1958 16.5016 3.1958C16.1422 3.1958 15.7934 3.31675 15.5112 3.53918L10.2184 7.71518C8.93035 8.73118 9.08715 10.504 10.1256 11.4176L7.78316 13.3472C6.24236 14.6192 6.86635 16.9824 8.59915 17.4992L6.06156 19.8768C4.48396 21.3536 5.53035 24 7.69195 24H13.3V26.8C13.3 27.904 14.196 28.8 15.3 28.8H17.7C18.804 28.8 19.7 27.904 19.7 26.8V24H25.3064C27.468 24 28.5144 21.352 26.9352 19.8752L24.396 17.5008C26.1336 16.9872 26.7608 14.6208 25.2168 13.3488L22.8776 11.4192C23.916 10.5056 24.0728 8.73118 22.7864 7.71518L17.492 3.53918ZM18.1 24V26.8C18.1 26.9061 18.0578 27.0078 17.9828 27.0828C17.9078 27.1578 17.806 27.2 17.7 27.2H15.3C15.1939 27.2 15.0921 27.1578 15.0171 27.0828C14.9421 27.0078 14.9 26.9061 14.9 26.8V24H18.1ZM16.5016 4.79518L21.7944 8.97118C21.9234 9.07243 22.0181 9.21087 22.0658 9.36777C22.1135 9.52466 22.1119 9.69243 22.061 9.84834C22.0102 10.0043 21.9127 10.1408 21.7818 10.2395C21.6508 10.3381 21.4926 10.3942 21.3288 10.4C21.1663 10.4051 21.0093 10.4595 20.8786 10.5561C20.7479 10.6526 20.6497 10.7867 20.597 10.9404C20.5444 11.0942 20.5398 11.2603 20.5839 11.4167C20.6281 11.5731 20.7187 11.7124 20.844 11.816L24.1992 14.584C24.3258 14.6889 24.417 14.8303 24.4604 14.989C24.5038 15.1476 24.4972 15.3157 24.4416 15.4705C24.386 15.6253 24.284 15.7591 24.1496 15.8539C24.0152 15.9486 23.8548 15.9996 23.6904 16H22.4776C22.317 15.9999 22.1602 16.0481 22.0275 16.1383C21.8947 16.2285 21.7922 16.3566 21.7332 16.5058C21.6741 16.6551 21.6614 16.8187 21.6966 16.9753C21.7317 17.1319 21.8132 17.2743 21.9304 17.384L25.8408 21.0432C25.9556 21.1505 26.0356 21.29 26.0702 21.4434C26.1048 21.5967 26.0925 21.757 26.0349 21.9033C25.9773 22.0496 25.877 22.1752 25.7471 22.2638C25.6172 22.3523 25.4636 22.3998 25.3064 22.4H7.69195C7.53458 22.4001 7.3808 22.3529 7.25063 22.2644C7.12046 22.176 7.01992 22.0504 6.9621 21.904C6.90428 21.7577 6.89184 21.5973 6.92642 21.4437C6.96099 21.2902 7.04097 21.1506 7.15595 21.0432L11.06 17.384C11.1769 17.2745 11.2583 17.1324 11.2936 16.976C11.3289 16.8197 11.3164 16.6564 11.2578 16.5073C11.1991 16.3582 11.0971 16.2301 10.9648 16.1396C10.8326 16.0492 10.6762 16.0005 10.516 16H9.30956C9.14472 16 8.98388 15.9492 8.84905 15.8544C8.71422 15.7595 8.61197 15.6254 8.55628 15.4702C8.5006 15.3151 8.4942 15.1465 8.53796 14.9876C8.58172 14.8287 8.6735 14.6872 8.80076 14.5824L12.1576 11.816C12.2827 11.7125 12.3733 11.5734 12.4175 11.4171C12.4617 11.2608 12.4572 11.0948 12.4048 10.9412C12.3523 10.7875 12.2544 10.6534 12.1239 10.5567C11.9934 10.4601 11.8366 10.4054 11.6744 10.4C11.5105 10.3942 11.3523 10.3381 11.2214 10.2395C11.0904 10.1408 10.9929 10.0043 10.9421 9.84834C10.8913 9.69243 10.8896 9.52466 10.9373 9.36777C10.985 9.21087 11.0798 9.07243 11.2088 8.97118L16.5016 4.79518Z" fill="white" />
              </svg>
              <Typography
                sx={{
                  fontSize: 12
                }}
                className={poppins.className}
              >
                Eco Friendly
              </Typography>
            </Grid>
            <Grid item mobile={4}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 27.2001C17.7674 27.2001 19.2 25.7674 19.2 24C19.2 22.2327 17.7674 20.8 16 20.8C14.2327 20.8 12.8 22.2327 12.8 24C12.8 25.7674 14.2327 27.2001 16 27.2001Z" fill="white" />
                <path d="M1.59998 11.8399C3.40174 9.62669 5.6176 7.8541 8.10037 6.63994C10.5831 5.42579 13.276 4.79785 16 4.79785C18.724 4.79785 21.4168 5.42579 23.8996 6.63994C26.3823 7.8541 28.5982 9.62669 30.4 11.8399L28 14.0799C26.4985 12.1902 24.652 10.6766 22.583 9.63995C20.514 8.60324 18.27 8.06708 16 8.06708C13.73 8.06708 11.4859 8.60324 9.41697 9.63995C7.348 10.6766 5.50144 12.1902 3.99998 14.0799L1.59998 11.8399ZM7.51997 16.9599C8.57132 15.6605 9.88202 14.6161 11.3605 13.8997C12.839 13.1833 14.4497 12.8121 16.08 12.8121C17.7103 12.8121 19.3209 13.1833 20.7994 13.8997C22.2779 14.6161 23.5886 15.6605 24.64 16.9599L22.4 19.1999C21.6504 18.2095 20.7005 17.4102 19.6205 16.861C18.5405 16.3117 17.3579 16.0266 16.16 16.0266C14.9621 16.0266 13.7795 16.3117 12.6995 16.861C11.6195 17.4102 10.6696 18.2095 9.91997 19.1999L7.51997 16.9599Z" fill="white" />
              </svg>
              <Typography
                sx={{
                  fontSize: 12
                }}
                className={poppins.className}
              >
                Smart Homes
              </Typography>
            </Grid>
            <Grid item mobile={4}>
              <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.3334 13.6666V2.99992C24.3334 1.53325 23.1334 0.333252 21.6667 0.333252H3.00004C1.53337 0.333252 0.333374 1.53325 0.333374 2.99992V13.6666C0.333374 15.1333 1.53337 16.3333 3.00004 16.3333H21.6667C23.1334 16.3333 24.3334 15.1333 24.3334 13.6666ZM21.6667 13.6666H3.00004V2.99992H21.6667V13.6666ZM12.3334 4.33325C10.12 4.33325 8.33337 6.11992 8.33337 8.33325C8.33337 10.5466 10.12 12.3333 12.3334 12.3333C14.5467 12.3333 16.3334 10.5466 16.3334 8.33325C16.3334 6.11992 14.5467 4.33325 12.3334 4.33325ZM29.6667 4.33325V18.9999C29.6667 20.4666 28.4667 21.6666 27 21.6666H4.33337V18.9999H27V4.33325H29.6667Z" fill="white" />
              </svg>
              <Typography
                sx={{
                  fontSize: 12,
                  pt: "11px"
                }}
                className={poppins.className}
              >
                Good Rates
              </Typography>
            </Grid>

            <Grid item mobile={4}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 2.5V3.906C20.6801 4.04679 19.9016 4.3671 19.22 4.844L18.188 3.874L16.813 5.344L17.813 6.281C17.3555 6.94769 17.0462 7.70469 16.906 8.501H15.5V10.501H16.906C17.052 11.331 17.38 12.087 17.844 12.751L16.781 13.781L18.221 15.221L19.251 14.157C19.915 14.621 20.671 14.949 21.501 15.095V16.5H23.501V15.094C24.2972 14.9541 25.0542 14.6452 25.721 14.188L26.657 15.188L28.127 13.812L27.157 12.782C27.627 12.112 27.947 11.337 28.095 10.5H29.5V8.5H28.094C27.95 7.6903 27.6298 6.92217 27.156 6.25L28.094 5.312L26.687 3.906L25.75 4.844C25.0778 4.37017 24.3097 4.04994 23.5 3.906V2.5H21.5ZM22.5 5.813C22.9851 5.80981 23.466 5.903 23.9148 6.08714C24.3637 6.27129 24.7715 6.54274 25.1145 6.88573C25.4576 7.22872 25.7292 7.63643 25.9135 8.08521C26.0977 8.53398 26.191 9.01488 26.188 9.5C26.188 11.555 24.555 13.188 22.5 13.188C20.445 13.188 18.812 11.555 18.812 9.5C18.812 7.445 20.445 5.812 22.5 5.812V5.813ZM9.52998 11.718L7.68798 12.468L8.40598 14.278C7.45021 14.85 6.64621 15.6437 6.06198 16.592L4.28198 15.872L3.53198 17.717L5.31198 18.435C5.1715 18.9759 5.09828 19.5321 5.09398 20.091C5.09398 20.661 5.17898 21.217 5.31198 21.747L3.53198 22.467L4.28198 24.31L6.06198 23.59C6.64088 24.5507 7.44549 25.3557 8.40598 25.935L7.68598 27.715L9.53098 28.465L10.251 26.685C10.7918 26.8258 11.3481 26.8991 11.907 26.903C12.477 26.903 13.035 26.818 13.563 26.685L14.283 28.465L16.126 27.715L15.406 25.935C16.355 25.3516 17.1489 24.5474 17.72 23.591L19.53 24.309L20.28 22.466L18.47 21.746C18.6 21.216 18.688 20.659 18.688 20.09C18.688 19.52 18.601 18.962 18.468 18.433L20.281 17.715L19.531 15.87L17.721 16.59C17.1466 15.6441 16.3529 14.8504 15.407 14.276L16.127 12.466L14.282 11.716L13.565 13.526C13.0236 13.3864 12.4671 13.3135 11.908 13.309C11.338 13.309 10.782 13.395 10.252 13.527L9.53198 11.717L9.52998 11.718ZM11.906 15.31C14.569 15.31 16.686 17.43 16.686 20.092C16.688 22.755 14.569 24.904 11.906 24.904C11.2738 24.9048 10.6478 24.7809 10.0636 24.5393C9.4794 24.2978 8.94862 23.9434 8.50162 23.4964C8.05463 23.0494 7.70021 22.5186 7.45867 21.9344C7.21712 21.3502 7.09319 20.7241 7.09398 20.092C7.09398 17.429 9.24398 15.31 11.906 15.31Z" fill="white" />
              </svg>
              <Typography
                sx={{
                  fontSize: 12
                }}
                className={poppins.className}
              >
                Serviced
                Apartment
              </Typography>
            </Grid>
            <Grid item mobile={4}>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 20V23M5.5 15V30H27.5V15H5.5ZM9.5 15C9.5 9 9.5 5 16.5 5C23.5 5 23.5 9 23.5 15H9.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5 25C17.0523 25 17.5 24.5523 17.5 24C17.5 23.4477 17.0523 23 16.5 23C15.9477 23 15.5 23.4477 15.5 24C15.5 24.5523 15.9477 25 16.5 25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <Typography
                sx={{
                  fontSize: 12
                }}
                className={poppins.className}
              >
                Private <br />
                Security
              </Typography>
            </Grid>
            <Grid item mobile={4}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1C10.4865 1 6 4.9445 6 9.793C6 12.358 7.684 14.999 9.3105 17.551C10.712 19.7475 12.0505 21.844 12.4685 24H19.531C19.95 21.8435 21.287 19.747 22.688 17.551C24.3155 14.999 26 12.358 26 9.793C26 4.9445 21.5135 1 16 1ZM16 14.837C16.966 15.8795 17.876 16.1895 18.292 16.2815C18.2295 16.559 18.173 16.83 18.1075 17.097C17.9845 17.643 17.8645 18.175 17.748 18.686C17.4234 20.1222 17.1075 21.5604 16.8005 23.0005H15.199C14.8912 21.5606 14.5754 20.1224 14.2515 18.686L13.891 17.097C13.8255 16.83 13.769 16.559 13.7075 16.2815C14.124 16.1895 15.034 15.8795 16 14.837ZM15.7305 13.7455C15.635 13.539 15.6005 13.328 15.6985 13.1725C15.7805 13.049 15.889 12.9785 16.0005 12.9785C16.112 12.9785 16.2195 13.049 16.3025 13.1725C16.4 13.328 16.366 13.5385 16.2705 13.7455C16.2 13.8915 16.1035 14.0305 16 14.165C15.8954 14.0352 15.8051 13.8946 15.7305 13.7455ZM21.8455 17.0125C20.554 19.037 19.326 20.9615 18.744 23H17.121C17.4808 21.5911 17.833 20.1802 18.1775 18.7675C18.3005 18.257 18.4305 17.7285 18.563 17.1835C18.637 16.8935 18.7025 16.5945 18.775 16.297C19.153 16.2715 19.5145 16.1535 19.7965 15.895C20.0855 15.6105 20.236 15.2385 20.1685 14.8415C20.138 14.6515 19.9955 14.4055 19.7205 14.3215C19.586 14.2761 19.4409 14.2728 19.3045 14.312C19.1909 14.3541 19.0886 14.4218 19.0055 14.51C18.739 14.806 18.642 15.1015 18.533 15.3945C18.482 15.542 18.44 15.6895 18.4 15.835C18.4 15.835 17.975 15.8675 17.066 15.256C16.561 14.9165 16.4155 14.671 16.269 14.5085C16.427 14.333 16.5785 14.1405 16.696 13.907C16.7585 13.7765 16.811 13.635 16.829 13.476C16.847 13.317 16.8175 13.137 16.7265 12.982C16.6294 12.8101 16.4769 12.6762 16.294 12.602C16.203 12.5695 16.1015 12.554 16 12.554C15.8985 12.554 15.796 12.569 15.706 12.602C15.5229 12.6763 15.3702 12.8102 15.2725 12.982C15.1815 13.1375 15.1525 13.317 15.17 13.476C15.1902 13.6262 15.2355 13.7719 15.304 13.907C15.421 14.1405 15.5725 14.3335 15.731 14.5085C15.5845 14.671 15.438 14.9165 14.933 15.256C14.024 15.868 13.599 15.835 13.599 15.835C13.5598 15.6868 13.5158 15.5399 13.467 15.3945C13.3565 15.1015 13.261 14.806 12.9945 14.51C12.9115 14.4217 12.8092 14.354 12.6955 14.312C12.5591 14.2728 12.414 14.2761 12.2795 14.3215C12.003 14.4055 11.8615 14.6515 11.8315 14.8415C11.763 15.2385 11.9145 15.6105 12.2035 15.895C12.4865 16.1535 12.847 16.2715 13.225 16.297C13.2965 16.595 13.3615 16.8935 13.437 17.1835L13.8225 18.7675C14.1673 20.1802 14.5195 21.591 14.879 23H13.256C12.675 20.9635 11.4465 19.039 10.1515 17.0105C8.602 14.579 7 12.065 7 9.793C7 5.496 11.037 2 16 2C20.9625 2 25 5.496 25 9.793C25 12.066 23.3965 14.5805 21.8455 17.0125ZM18.8995 15.832C18.929 15.7295 18.959 15.6255 18.994 15.5255C19.0885 15.262 19.209 14.9755 19.373 14.804C19.412 14.76 19.452 14.7425 19.4725 14.731C19.4725 14.733 19.5215 14.725 19.5525 14.7405C19.608 14.7545 19.661 14.812 19.6815 14.9225C19.7215 15.1365 19.62 15.412 19.4365 15.5845C19.3075 15.707 19.1085 15.793 18.8995 15.832ZM13.0995 15.832C12.8905 15.793 12.6915 15.707 12.5635 15.584C12.379 15.4115 12.2785 15.136 12.3185 14.922C12.339 14.811 12.3915 14.754 12.4475 14.74C12.479 14.725 12.5275 14.7325 12.5275 14.7305C12.547 14.742 12.588 14.76 12.625 14.8035C12.79 14.9755 12.91 15.2615 13.005 15.525C13.04 15.6255 13.0705 15.7295 13.0995 15.832ZM13.26 24.7785H12.76V26.5785H13.144V28.179H13.528V29.7795H14.171C14.4735 30.494 15.1735 31 16 31C16.826 31 17.5255 30.494 17.829 29.7785H18.4925V28.168L18.5485 28.1475L18.876 28.0275V26.566L18.9085 26.5555L19.259 26.4455V24.778H13.26V24.7785Z" fill="white" />
              </svg>
              <Typography
                sx={{
                  fontSize: 12
                }}
                className={poppins.className}
              >
                24/7 <br />
                Electricity
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Grid container
        sx={{
          justifyContent: "space-between"
        }}
      >
        <Grid item desktop={6}
          sx={{
            display: {
              mobile: "relative",
              laptop: "flex"
            },
            alignContent: {
              laptop: "center"
            }
          }}
        >
          <Box
            sx={{
              width: {
                mobile: 'none',
                laptop: 567
              },
              height: {
                mobile: 'none',
                laptop: 582
              },
              position: 'relative',
            }}>
            <Image
              src={image4}
              alt='image'
              fill
              sizes="100%"
              priority
            />
          </Box>

          <Box
            sx={{
              display: {
                mobile: "none",
                laptop: "block"
              },
              width: 232,
              height: 445,
              borderRadius: 0,
              backgroundColor: "#0E204E",
              flexDirection: "row-reverse",
              alignSelf: "center",
              zIndex: -1,
            }}
          />


        </Grid>

        <Grid item desktop={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={18}
            sx={{
              display: {
                mobile: "none",
                laptop: "flex"
              }
            }}
          >

            <Box
              sx={{
                height: 157,
                width: 107,
                alignContent: "center",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  alignSelf: "center"
                }}
              >
                <Image
                  src={icon1}
                  alt="Eco Friendly"
                />
              </Box>

              <Typography
                className={poppins.className}
              >
                Eco Friendly
              </Typography>
            </Box>

            <Box
              sx={{
                height: 157,
                width: 123,
                alignContent: "center",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  alignSelf: "center"
                }}
              >
                <Image
                  src={icon2}
                  alt="Good Rates"
                />
              </Box>

              <Typography className={poppins.className}>
                Smart Homes
              </Typography>
            </Box>

            <Box
              sx={{
                height: 157,
                width: 110,
                alignContent: "center",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >

              <Box
                sx={{
                  width: 80,
                  height: 80,
                  alignSelf: "center"
                }}
              >
                <Image
                  src={icon3}
                  alt="Good Rates"
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 18
                }}
                className={poppins.className}
              >
                Good Rates
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Grid container
        sx={{
          flexDirection: "row-reverse",
          justifyContent: "space-between"
        }}
      >
        <Grid item desktop={6}
          sx={{
            display: {
              mobile: "none",
              laptop: "flex"
            },
            flexDirection: "row-reverse"
          }}
        >
          <Image
            src={image5}
            alt="image"
            width={567}
            height={582}
            style={{
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              width: 235,
              height: 445,
              borderRadius: 0,
              backgroundColor: "#0E204E",
              flexDirection: "row-reverse",
              alignSelf: "center",
              zIndex: -1
            }}
          />
        </Grid>

        <Grid item desktop={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={13}
            sx={{
              display: {
                mobile: "none",
                laptop: "flex"
              }
            }}
          >

            <Box
              sx={{
                height: 157,
                width: 180,
                alignContent: "center",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  alignSelf: "center"
                }}
              >
                <Image
                  src={icon4}
                  alt="Serviced Apartment"
                />
              </Box>

              <Typography
                className={poppins.className}
              >
                Serviced Apartment
              </Typography>
            </Box>

            <Box
              sx={{
                height: 157,
                width: 139,
                alignContent: "center",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  alignSelf: "center"
                }}
              >
                <Image
                  src={icon5}
                  alt="Private Security"
                />
              </Box>

              <Typography className={poppins.className}>
                Private Security
              </Typography>
            </Box>

            <Box
              sx={{
                height: 157,
                width: 135,
                alignContent: "center",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >

              <Box
                sx={{
                  width: 80,
                  height: 80,
                  alignSelf: "center"
                }}
              >
                <Image
                  src={icon6}
                  alt="24/7 Electricity"
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 18
                }}
                className={poppins.className}
              >
                24/7 Electricity
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
