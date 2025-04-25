import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const items = [
  {
    size: 48,
    img: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1745593054~exp=1745596654~hmac=b2ecdcd4f67e823fcb277852f10942cb01c4653aa1d902b6c82ac9a84118f00d&w=740",
     desc: "First feature",
  },
  {
    size: 64,
    img: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1745593054~exp=1745596654~hmac=b2ecdcd4f67e823fcb277852f10942cb01c4653aa1d902b6c82ac9a84118f00d&w=740",
     desc: "First feature",
  },
  {
    size: 120,
    img: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1745593054~exp=1745596654~hmac=b2ecdcd4f67e823fcb277852f10942cb01c4653aa1d902b6c82ac9a84118f00d&w=740",
     desc: "First feature",
  },
  {
    size: 64,
    img: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1745593054~exp=1745596654~hmac=b2ecdcd4f67e823fcb277852f10942cb01c4653aa1d902b6c82ac9a84118f00d&w=740",
     desc: "First feature",
  },
  {
    size: 48,
    img: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1745593054~exp=1745596654~hmac=b2ecdcd4f67e823fcb277852f10942cb01c4653aa1d902b6c82ac9a84118f00d&w=740",
     desc: "First feature",
  },
];

const CommentSection: React.FC = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: "grey.700",
      py: 5,
      width: "100%",
    }}
  >
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      sx={{ maxWidth: 1200, mx: "auto" }}
    >
      {items.map((item, idx) => (
        <Grid key={idx}>
          <Box display="flex" alignItems="center">
            {/* Image Circle */}
            <Box
              sx={{
                width: item.size,
                height: item.size,
                borderRadius: "50%",
                bgcolor: "grey.300",
                mr: 2,
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Description Text */}
            <Typography
              variant="body2"
              sx={{ color: "grey.100", fontWeight: 400 }}
            >
              {item.desc}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default CommentSection;
// This component is a comment section that displays a series of circular images with descriptions below them. The images and descriptions are arranged in a grid layout, and the component is styled using Material-UI's Box and Grid components. The images are placeholders, and the descriptions are represented as lines of varying widths to simulate text.
