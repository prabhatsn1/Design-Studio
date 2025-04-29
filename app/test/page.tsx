"use client";

import { Stack } from "@mui/material";

export default function TestPage() {
  return (
    <Stack
      id="pp"
      bgcolor="red"
      sx={{
        width: 250,
        height: 200,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        bgcolor="blue"
        sx={{ width: 100, height: 100, zIndex: 100 }}
      ></Stack>
      <Stack
        bgcolor="green"
        sx={{ width: 100, height: 100, mt: 6, ml: -2 }}
      ></Stack>
    </Stack>
  );
}
