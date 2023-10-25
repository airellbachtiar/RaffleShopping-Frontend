import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      main: "#2b3a42", // Dark Grayish Blue
      lighter: "#3e5360", // Lighter Grayish Blue
      darker: "#1e2b32", // Darker Grayish Blue
    },
    background: {
      main: "#f5f5f5", // Light Gray
      lighter: "#ffffff", // White
      darker: "#e0e0e0", // Slightly Darker Gray
    },
    text: {
      main: "#333333", // Dark Gray
      lighter: "#555555", // Slightly Lighter Gray
      darker: "#1a1a1a", // Almost Black
    },
    secondary: {
      main: "#9e9e9e", // Medium Gray
      lighter: "#bcbcbc", // Lighter Gray
      darker: "#7a7a7a", // Darker Gray
    },
    accent: {
      main: "#3d5af1", // Vibrant Blue
      lighter: "#4c6af9", // Slightly Lighter Blue
      darker: "#3147e9", // Darker Blue
    },
    neutral: {
      main: "#c9c9c9", // Neutral Gray
      lighter: "#dddddd", // Lighter Neutral Gray
      darker: "#b3b3b3", // Darker Neutral Gray
    },
    button: {
      primary: {
        main: "#3d5af1", // Blue Button
        text: "#ffffff", // White Text
      },
      secondary: {
        main: "#ff7043", // Orange Button
        text: "#ffffff", // White Text
      },
    },
  },
});

export default theme;
