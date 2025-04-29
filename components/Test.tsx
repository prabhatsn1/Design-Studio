import { Stack, Typography } from "@mui/material";

const ArtisanCard: React.FC<{
  name: string;
  image: any;
  description: string;
  align: "left" | "right";
}> = ({ name, description, align }) => {
  return (
    <Stack
      id="pp"
      bgcolor="red"
      sx={{
        width: 250,
        height: 200,
        display: "flex",
        flexDirection: align === "left" ? "row" : "row-reverse",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: 100,
          height: 100,
          zIndex: 100,
          bgcolor: "#337180",
          color: "#fff",
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, mb: 1, color: "#fff", fontSize: 20 }}
        >
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#e2e8ea", fontSize: 15 }}>
          {description}
        </Typography>
      </Stack>
      <Stack
        bgcolor="green"
        sx={{
          width: 100,
          height: 100,
          mt: 6,
          ml: align === "left" ? -2 : 0,
          mr: align === "left" ? 0 : -2,
        }}
      ></Stack>
    </Stack>
  );
};
