/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const ArtisanCard: React.FC<{
  name: string;
  image: any;
  description: string;
  align: "left" | "right";
}> = ({ name, image, description, align }) => {
  return (
    <Stack
      sx={{
        width: "fit-content",
        height: "fit-content",
        display: "flex",
        flexDirection: align === "left" ? "row" : "row-reverse",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: 300,
          height: 266,
          zIndex: 100,
          bgcolor: "#337180",
          color: "#fff",
          borderRadius: "24px",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1,
            color: "#F2F1D9",
            fontSize: 20,
            fontFamily: "Inter",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: "Inter", color: "#FFFFFF", fontSize: 15 }}
        >
          {description}
        </Typography>
      </Stack>
      <Stack
        bgcolor="green"
        sx={{
          width: 300,
          height: 266,
          mt: 6,
          ml: align === "left" ? -2 : 0,
          mr: align === "left" ? 0 : -2,
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <Image
          src={image}
          alt={name}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Stack>
    </Stack>
  );
};

export default ArtisanCard;
