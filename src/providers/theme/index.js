import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@material-ui/core";
import { createContext, useState } from "react";

export const ThemeContext = createContext([]);

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("KenzieShop_mode")) || "light"
  );
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    if (mode === "light") {
      localStorage.setItem("KenzieShop_mode", JSON.stringify("dark"));
    } else {
      localStorage.setItem("KenzieShop_mode", JSON.stringify("light"));
    }
  };

  const theme = createTheme({
    palette: {
      mode: mode,
    },
    components: {
      // Name of the component
      MuiCard: {
        variants: [
          {
            props: { variant: "product" },
            style: {
              height: "100%",
              display: "flex",
              flexDirection: "column",
              border: "2px solid #9e9e9e",
              padding: "10px",
            },
          },
          {
            props: { variant: "productDetails" },
            style: {
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          },
          {
            props: { variant: "productCart" },
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0px 4px 40px -10px rgba(0, 0, 0, 0.25)",
              marginBottom: 15,
              border: "2px solid #9e9e9e",
            },
          },
          {
            props: { variant: "productCartDetails" },
            style: {
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              flexWrap: "wrap",
              justifyContent: "flex-end",
            },
          },
          {
            props: { variant: "productCartQtd" },
            style: {
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              border: "2px solid #9e9e9e",
              borderRadius: "5px",
              margin: "0px 7px",
            },
          },
        ],
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "removed" },
            style: {
              backgroundColor: "#9e9e9e",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#bdbdbd",
              },
            },
          },
        ],
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleColorMode, theme, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
