"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import obj1 from "@/media/obj1.png";
import obj2 from "@/media/obj2.png";
import obj3 from "@/media/obj3.png";
import obj4 from "@/media/obj4.png";

export default function Home() {
  return (
    <Stack>
      <Stack
        id="First Section"
        sx={{
          bgcolor: "#F2F1D9",
          height: "916px",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Georgia",
              letterSpacing: 4.8,
              mt: "50%",
            }}
          >
            Craft intro video
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
            mb: -20,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#1F6F83",
              borderRadius: "24px",
              flexShrink: 0,
            }}
          >
            <Image src={obj1} alt={"Image"} width={260} height={300} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#1F6F83",
              borderRadius: "24px",
              flexShrink: 0,
            }}
          >
            <Image src={obj2} alt={"Image"} width={260} height={300} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#1F6F83",
              borderRadius: "24px",
              flexShrink: 0,
            }}
          >
            <Image src={obj3} alt={"Image"} width={260} height={300} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#1F6F83",
              borderRadius: "24px",
              flexShrink: 0,
            }}
          >
            <Image src={obj4} alt={"Image"} width={260} height={300} />
          </Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="70"
            viewBox="0 0 31 70"
            fill="none"
          >
            <path
              d="M3 3L28 35L3 67"
              stroke="#767676"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Stack>
      </Stack>
      <Stack id="Second Section" sx={{ height: "916px" }}></Stack>
      <Stack
        id="Third Section"
        sx={{ bgcolor: "#F2F1D9", height: 1402 }}
      ></Stack>
      <Stack id="Fourth Section" sx={{ height: "916px" }}></Stack>
    </Stack>
  );
}
