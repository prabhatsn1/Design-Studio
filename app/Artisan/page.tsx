import { Box, Typography } from "@mui/material";

export default function Artisan() {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 6 },
        width: "100%",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 700,
          letterSpacing: 1,
          mb: 3,
          color: "#232323",
          textAlign: "left",
          maxWidth: 900,
          mx: "auto",
          fontSize: "32px",
          fontFamily: "'Georgia', serif",
        }}
      >
        Meet the Makers
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#232323",
          fontWeight: 500,
          fontSize: 17,
          maxWidth: 900,
          mx: "auto",
          lineHeight: 1.6,
          textAlign: "center",
          fontFamily: "Montserrat",
          LineHeight: "150%",
        }}
      >
        Behind every intricate carving lies a story-of heritage, skill, and
        soulful craftsmanship. Our artisans are the heart of this tradition,
        carrying forward generations of knowledge through their hands and tools.
        With patience and precision, they transform bone into timeless art,
        keeping alive a craft that echoes the spirit of their culture.
      </Typography>
    </Box>
  );
}
