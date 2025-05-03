/* eslint-disable @typescript-eslint/no-explicit-any */
// components/CustomCard.tsx
import { Card, CardContent, Typography, Box } from "@mui/material";

interface CustomCardProps {
  name?: string;
  imageUrl?: any;
}

export default function CustomCard({ name, imageUrl }: CustomCardProps) {
  return (
    <Card
      sx={{
        backgroundColor: "#1F6F83",
        borderRadius: 2,
        padding: 2,
        width: 200,
        height: 237,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={name}
        sx={{
          width: 135.1,
          height: 126.6,
          objectFit: "cover",
          borderRadius: 2,
          mb: 2,
        }}
      />
      <CardContent sx={{ padding: 0 }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontWeight: 500,
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
