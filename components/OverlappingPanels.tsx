import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  styled,
} from "@mui/material";

// Define the props interface
interface OverlappingPanelsProps {
  variant: "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
  primaryContent: {
    title: string;
    description: string;
    buttonText?: string;
    buttonAction?: () => void;
  };
  secondaryContent: {
    imageUrl: string;
    alt: string;
  };
  primaryBgColor?: string;
  secondaryBgColor?: string;
}

// Styled components
const PrimaryPanel = styled(Card)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  borderRadius: 16,
  width: "60%",
  boxShadow: theme.shadows[4],
  padding: theme.spacing(3),
}));

const SecondaryPanel = styled(Card)(({}) => ({
  position: "relative",
  zIndex: 1,
  borderRadius: 16,
  width: "60%",
  overflow: "hidden",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const PanelImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const OverlappingPanels: React.FC<OverlappingPanelsProps> = ({
  variant,
  primaryContent,
  secondaryContent,
  primaryBgColor = "#ffffff",
  secondaryBgColor = "#f5f5f5",
}) => {
  // Determine layout based on variant
  const isLeft = variant === "leftTop" || variant === "leftBottom";
  const isTop = variant === "leftTop" || variant === "rightTop";

  // Calculate layout values
  const containerDirection = isLeft ? "row" : "row-reverse";
  const primaryMarginTop = isTop ? 0 : "10%";
  const primaryMarginBottom = isTop ? "10%" : 0;
  const secondaryMarginTop = isTop ? "10%" : 0;
  const secondaryMarginBottom = isTop ? 0 : "10%";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: containerDirection,
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        py: 6,
        position: "relative",
      }}
    >
      <PrimaryPanel
        sx={{
          bgcolor: primaryBgColor,
          marginTop: primaryMarginTop,
          marginBottom: primaryMarginBottom,
        }}
      >
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            {primaryContent.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {primaryContent.description}
          </Typography>
          {primaryContent.buttonText && (
            <Button
              variant="outlined"
              onClick={primaryContent.buttonAction}
              sx={{ mt: 2 }}
            >
              {primaryContent.buttonText}
            </Button>
          )}
        </CardContent>
      </PrimaryPanel>

      <SecondaryPanel
        sx={{
          bgcolor: secondaryBgColor,
          marginTop: secondaryMarginTop,
          marginBottom: secondaryMarginBottom,
        }}
      >
        <PanelImage
          src={secondaryContent.imageUrl}
          alt={secondaryContent.alt}
        />
      </SecondaryPanel>
    </Box>
  );
};

export default OverlappingPanels;
