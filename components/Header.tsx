import React from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { useState } from "react";
import Logo from "@/media/logo.png";
import SearchIcon from "@mui/icons-material/Search";

const navLinks = [
  { label: "Artisan", href: "/Artisan" },
  { label: "Products", href: "#" },
  { label: "Motifs", href: "#" },
  {
    label: "Explore",
    href: "#",
    icon: <ExpandMoreIcon sx={{ fontSize: 18, ml: 0.5 }} />,
  },
];

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header
      style={{
        width: "100%",
        position: "sticky", // Make the header sticky
        top: 0, // Stick to the top of the viewport
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          maxWidth: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image
            src={Logo} // Replace with your logo path
            alt="Asthiratna Logo"
            width={216}
            height={125}
            style={{ objectFit: "scale-down" }}
            priority
          />
        </Box>

        {/* Desktop Search and Nav */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            flex: 1,
            ml: 4,
          }}
        >
          {/* Search */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#fff",
              border: "2px solid #183C3C",
              borderRadius: "2rem",
              px: 2,
              py: 0.5,
              mr: 4,
              minWidth: 280,
              maxWidth: 340,
              boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
            }}
          >
            <Box
              sx={{
                bgcolor: "#1F6F83",
                color: "white",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1.5,
                fontSize: 18,
              }}
            >
              <SearchIcon sx={{ fontSize: 20 }} />
            </Box>
            <InputBase
              placeholder="Search....."
              sx={{
                fontSize: 17,
                fontWeight: 600,
                color: "#040E10",
                width: "100%",
                "&::placeholder": {
                  color: "#040E10",
                  fontWeight: 500,
                },
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Box>

          {/* Nav Links */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {navLinks.map((link) => (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#232323",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  px: 1,
                  transition: "color 0.2s",
                  "&:hover": { color: "#183C3C" },
                }}
              >
                {link.label}
                {link.icon}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Mobile Hamburger */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            size="large"
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260, pt: 2 } }}
      >
        <Box sx={{ px: 2, mb: 2 }}>
          <Image
            src="/logo-asthiratna.png"
            alt="Asthiratna Logo"
            width={100}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#fff",
            border: "2px solid #183C3C",
            borderRadius: "2rem",
            px: 2,
            py: 0.5,
            mx: 2,
            mb: 3,
          }}
        >
          <Box
            sx={{
              bgcolor: "#183C3C",
              color: "#fff",
              borderRadius: "50%",
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1.5,
              fontSize: 18,
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20 }}
            >
              search
            </span>
          </Box>
          <InputBase
            placeholder="Search....."
            sx={{
              fontSize: 17,
              fontWeight: 600,
              color: "#183C3C",
              width: "100%",
              "&::placeholder": {
                color: "#183C3C",
                opacity: 0.7,
                fontWeight: 500,
                letterSpacing: 1,
              },
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} component="a" href={link.href}>
              <ListItemText
                primary={
                  <span
                    style={{ fontWeight: 600, fontSize: 18, color: "#232323" }}
                  >
                    {link.label}
                  </span>
                }
              />
              {link.icon}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </header>
  );
};

export default Header;
