import React from "react";
import Image from "next/image";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Logo from "@/media/logo.png";

const footerLinks = [
  {
    heading: "Information",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "FAQ’s", href: "#" },
      { label: "Email", href: "mailto:info@asthiratna.com" },
    ],
  },
  {
    heading: "Policies",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of services", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: <FacebookIcon fontSize="medium" />, href: "#" },
  { icon: <InstagramIcon fontSize="medium" />, href: "#" },
  { icon: <XIcon fontSize="medium" />, href: "#" },
  { icon: <YouTubeIcon fontSize="medium" />, href: "#" },
];

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#F2F1D9",
        color: "#232323",
        px: { xs: 2, md: 6 },
        py: { xs: 5, md: 8 },
        fontFamily: "Montserrat",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{ maxWidth: 1300, mx: "auto" }}
      >
        {/* Logo and Description */}
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: -12,
          }}
        >
          <Box>
            <Image
              src={Logo}
              alt="Asthiratna Logo"
              width={257}
              height={236}
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#232323",
              fontWeight: 400,
              fontSize: 15,
              maxWidth: 340,
              lineHeight: 1.5,
              textAlign: "center",
              my: -7,
              fontFamily: "Montserrat",
            }}
          >
            Asthiratna celebrates the timeless elegance of bone carving through
            contemporary design. Rooted in heritage and handcrafted by skilled
            artisans, each piece tells a story of tradition, patience, and
            precision. We are committed to preserving this fading art form while
            embracing sustainable and ethical practices.
          </Typography>
        </Grid>

        {/* Information & Policies */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Grid container spacing={2} marginLeft={4}>
            {footerLinks.map((section) => (
              <Grid size={6} key={section.heading}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    mb: 1.5,
                    color: "#232323",
                    fontSize: 16,
                    fontFamily: "Montserrat",
                  }}
                >
                  {section.heading}
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", pl: 0, m: 0 }}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Typography
                        component="a"
                        href={link.href}
                        sx={{
                          display: "block",
                          color: "#232323",
                          fontWeight: 400,
                          fontSize: 15,
                          textDecoration: "none",
                          fontFamily: "Montserrat",
                          mb: 1,
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        {link.label}
                      </Typography>
                    </li>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Subscribe & Social */}
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", // Align items in the center horizontally
            textAlign: "center",
            py: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 3,
              maxWidth: 260,
              bgcolor: "#f5f3dc",
              borderRadius: "2rem",
              border: "1.5px solid #183C3C",
              overflow: "hidden",
            }}
          >
            <TextField
              variant="standard"
              placeholder="Your email address"
              InputProps={{
                disableUnderline: true,
                sx: {
                  fontSize: 16,
                  px: 2,
                  py: 1,
                  bgcolor: "#f5f3dc",
                  "&::placeholder": { color: "black", opacity: 0.8 },
                },
              }}
              sx={{
                flex: 1,
                bgcolor: "#f5f3dc",
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#247b83",
                color: "#fff",
                borderRadius: "27.5px",
                px: 3,
                py: 1,
                boxShadow: "none",
                fontWeight: 500,
                fontFamily: "Montserrat",
                textTransform: "none",
                fontSize: "16px",
                "&:hover": {
                  bgcolor: "#183C3C",
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            {socialLinks.map((social, idx) => (
              <IconButton
                key={idx}
                href={social.href}
                sx={{
                  bgcolor: "#247b83",
                  color: "#fff",
                  "&:hover": { bgcolor: "#183C3C" },
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                }}
                aria-label="social"
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
