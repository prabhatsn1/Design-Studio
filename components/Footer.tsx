import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const Footer: React.FC = () => (
  <Box component="footer" sx={{ bgcolor: "grey.800", py: 3 }}>
    <Grid container justifyContent="center" spacing={2} maxWidth="md" mx="auto">
      {[1, 2, 3, 4, 5].map((item) => (
        <Grid size={2.4} key={item}>
          <Paper
            elevation={0}
            sx={{
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "grey.200",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={600}
              color="primary.main"
            >
              {`Box ${item}`}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Footer;
