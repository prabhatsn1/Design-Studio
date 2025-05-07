import ArtisanCard from "@/components/ArtisanCard";
import { Box, Stack, Typography } from "@mui/material";
import Person1 from "@/media/p01.jpg";
import Person8 from "@/media/p08.jpg";
import Person9 from "@/media/p09.jpg";
import Person10 from "@/media/p10.jpg";
import Carasol from "@/components/Carasol";

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
      <Stack
        mt={4}
        spacing={4}
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArtisanCard
          name="Sirajuddin"
          image={Person8} // Replace with your image path
          description="A passionate bone carving artisan with 15 years of experience, Sirajuddin plays a key role in Asthiratna’s workshop. He is known for his exceptional detail and dedication to the craft, ensuring every piece is finished to perfection and ready for Asthiratna’s signature form, crafting many utility products."
          align="left"
        />
        <ArtisanCard
          name="Salauddin"
          image={Person9} // Replace with your image path
          description="Salauddin’s bone carving artistry runs in the family, handed down through generations. One of Asthiratna’s founding artisans, he helps to train and mentor others, while developing his own style and collection. His technical knowledge and skill are reflected in the highly detailed pieces he creates from different angles."
          align="right"
        />
        <ArtisanCard
          name="Aqueel Akhtar"
          image={Person10} // Replace with your image path
          description="Individual bone carving styles result in a distinct variety within Asthiratna’s product range. Aqueel adds his refined, modern carving skills to the brand, blending contemporary aesthetics with traditional technique. He is also Asthiratna’s youngest artisan and deeply passionate about traditional bone carving."
          align="left"
        />
        <ArtisanCard
          name="Abrar Ahmed"
          image={Person1} // Replace with your image path
          description="Abrar’s drive for art and tradition allows Asthiratna designs to be pushed to new creative heights. He specializes in ornamentation and surface detailing, with a focus on new forms and innovative finishing techniques. His work brings a fresh perspective to the team, ensuring the evolution of bone carving craftsmanship."
          align="right"
        />
      </Stack>
      <Typography
        sx={{ fontFamily: "Georgia", fontSize: "40px", mb: -8, mt: 4 }}
      >
        Craftsmen
      </Typography>
      <Carasol />
    </Box>
  );
}
