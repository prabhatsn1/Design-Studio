import { Box } from "@mui/material";
import React from "react";
import CustomCard from "./CustomCard";
import p06 from "@/media/p06.jpg";
import p02 from "@/media/p02.jpg";
import p07 from "@/media/p07.jpg";
import p04 from "@/media/p04.jpg";

function Carasol() {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto", // Ensures horizontal scrolling
        py: 2,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "flex-start", // Align items to the start for better scrolling
        height: 500,
        width: "100%",
        scrollBehavior: "smooth", // Enables smooth scrolling
        "&::-webkit-scrollbar": {
          display: "none", // Hides the scrollbar for a cleaner look
        },
      }}
    >
      <Box
        sx={{
          minWidth: 300, // Ensures each card has a minimum width
          flexShrink: 0, // Prevents cards from shrinking
        }}
      >
        <CustomCard name="Hasan Ahmad" imageUrl={p06} />
      </Box>
      <Box
        sx={{
          minWidth: 300, // Ensures each card has a minimum width
          flexShrink: 0, // Prevents cards from shrinking
        }}
      >
        <CustomCard name="Shakir Ali" imageUrl={p02} />
      </Box>
      <Box
        sx={{
          minWidth: 300, // Ensures each card has a minimum width
          flexShrink: 0, // Prevents cards from shrinking
        }}
      >
        <CustomCard name="Suhiyab Bano" imageUrl={p07} />
      </Box>
      <Box
        sx={{
          minWidth: 300, // Ensures each card has a minimum width
          flexShrink: 0, // Prevents cards from shrinking
        }}
      >
        <CustomCard name="Mohd Siraj" imageUrl={p04} />
      </Box>
    </Box>
  );
}

export default Carasol;
