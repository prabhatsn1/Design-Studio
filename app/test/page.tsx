"use client";

import OverlappingPanels from "@/components/OverlappingPanels";
import { Box } from "@mui/material";

export default function TestPage() {
  return (
    <Box sx={{ p: 4 }}>
      {/* Example 1: Left panel on top */}
      <OverlappingPanels
        variant="leftTop"
        primaryContent={{
          title: "Presenting the ",
          description:
            "This year's Limca Book of Records is a combined edition of two challenging years and celebrates stellar victories and accomplishments in human endeavor, education, adventure, business, cinema, the natural world, literature, and the arts.",
          buttonText: "Learn more",
          buttonAction: () => console.log("Learn more clicked"),
        }}
        secondaryContent={{
          imageUrl:
            "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1745593054~exp=1745596654~hmac=b2ecdcd4f67e823fcb277852f10942cb01c4653aa1d902b6c82ac9a84118f00d&w=740",
          alt: "Limca Book of Records 2023",
        }}
        primaryBgColor="#ffffff"
        secondaryBgColor="#f0f7ff"
      />

      {/* Example 2: Right panel on top */}
      <Box sx={{ mt: 8 }}>
        <OverlappingPanels
          variant="rightTop"
          primaryContent={{
            title: "Innovation in Design",
            description:
              "Explore the latest trends in UI/UX design with our comprehensive guide to modern interfaces and user experience principles.",
            buttonText: "Discover",
            buttonAction: () => console.log("Discover clicked"),
          }}
          secondaryContent={{
            imageUrl:
              "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1745593054~exp=1745596654~hmac=b2ecdcd4f67e823fcb277852f10942cb01c4653aa1d902b6c82ac9a84118f00d&w=740",
            alt: "Design Innovation",
          }}
          primaryBgColor="#ffffff"
          secondaryBgColor="#f5f5f5"
        />
      </Box>

      {/* Example 3: Left panel on bottom */}
      <Box sx={{ mt: 8 }}>
        <OverlappingPanels
          variant="leftBottom"
          primaryContent={{
            title: "Sustainable Technology",
            description:
              "Learn about how technology is helping to create a more sustainable future through innovative solutions and eco-friendly designs.",
            buttonText: "Explore",
            buttonAction: () => console.log("Explore clicked"),
          }}
          secondaryContent={{
            imageUrl:
              "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1745593054~exp=1745596654~hmac=b2ecdcd4f67e823fcb277852f10942cb01c4653aa1d902b6c82ac9a84118f00d&w=740",
            alt: "Sustainable Technology",
          }}
          primaryBgColor="#ffffff"
          secondaryBgColor="#f0fff5"
        />
      </Box>
    </Box>
  );
}
