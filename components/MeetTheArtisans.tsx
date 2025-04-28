import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";

// Data for artisans
const artisans: {
  name: string;
  image: string;
  description: string;
  align: "left" | "right";
}[] = [
  {
    name: "Sirajuddin",
    image: "/artisans/sirajuddin.jpg", // Replace with your image path
    description:
      "A passionate bone carving artisan with 15 years of experience, Sirajuddin plays a key role in Asthiratna’s workshop. He is known for his exceptional detail and dedication to the craft, ensuring every piece is finished to perfection and ready for Asthiratna’s signature form, crafting many utility products.",
    align: "left",
  },
  {
    name: "Salauddin",
    image: "/artisans/salauddin.jpg",
    description:
      "Salauddin’s bone carving artistry runs in the family, handed down through generations. One of Asthiratna’s founding artisans, he helps to train and mentor others, while developing his own style and collection. His technical knowledge and skill are reflected in the highly detailed pieces he creates from different angles.",
    align: "right",
  },
  {
    name: "Aqueel Akhtar",
    image: "/artisans/aqueel.jpg",
    description:
      "Individual bone carving styles result in a distinct variety within Asthiratna’s product range. Aqueel adds his refined, modern carving skills to the brand, blending contemporary aesthetics with traditional technique. He is also Asthiratna’s youngest artisan and deeply passionate about traditional bone carving.",
    align: "left",
  },
  {
    name: "Abrar Ahmed",
    image: "/artisans/abrar.jpg",
    description:
      "Abrar’s drive for art and tradition allows Asthiratna designs to be pushed to new creative heights. He specializes in ornamentation and surface detailing, with a focus on new forms and innovative finishing techniques. His work brings a fresh perspective to the team, ensuring the evolution of bone carving craftsmanship.",
    align: "right",
  },
];

const ArtisanCard: React.FC<{
  name: string;
  image: string;
  description: string;
  align: "left" | "right";
}> = ({ name, image, description, align }) => (
  <Grid
    container
    spacing={2}
    direction={align === "left" ? "row" : "row-reverse"}
    alignItems="center"
    sx={{ mb: { xs: 5, md: 7 } }}
  >
    <Grid size={{ xs: 12, md: 6 }}>
      <Paper
        elevation={0}
        sx={{
          bgcolor: "#337180",
          color: "#fff",
          borderRadius: 3,
          p: { xs: 2, md: 3 },
          maxWidth: 340,
          ml: align === "left" ? 0 : "auto",
          mr: align === "left" ? "auto" : 0,
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
      </Paper>
    </Grid>
    <Grid
      size={{ xs: 12, md: 6 }}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: 220,
          height: 170,
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "#ecebe6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={image}
          alt={name}
          width={220}
          height={170}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Box>
    </Grid>
  </Grid>
);

const MeetTheArtisans: React.FC = () => (
  <Box
    sx={{
      bgcolor: "#f8f8f4",
      px: { xs: 2, md: 6 },
      py: { xs: 5, md: 8 },
      maxWidth: 700,
      mx: "auto",
    }}
  >
    {artisans.map((artisan) => (
      <ArtisanCard key={artisan.name} {...artisan} />
    ))}
  </Box>
);

export default MeetTheArtisans;
