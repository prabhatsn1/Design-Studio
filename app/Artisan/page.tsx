import { Stack, Typography } from "@mui/material";

export default function Artisan() {
  return (
    <Stack
      spacing={20}
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2} sx={{ width: "100%", px: 20 }}>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Meet the Makers
        </Typography>
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "50%",
          }}
        >
          Behind every intricate carving lies a story—of heritage, skill, and
          soulful craftsmanship. Our artisans are the heart of this tradition,
          carrying forward generations of knowledge through their hands and
          tools. With patience and precision, they transform bone into timeless
          art, keeping alive a craft that echoes the spirit of their culture
        </Typography>
      </Stack>
    </Stack>
  );
}
