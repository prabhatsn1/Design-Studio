/* eslint-disable @typescript-eslint/no-explicit-any */
// components/CustomCard.tsx
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

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
      <Image
        src={imageUrl}
        alt={name || "Image"}
        width={135}
        height={127}
        style={{
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "16px",
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
