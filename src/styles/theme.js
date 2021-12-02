import { createTheme } from "@material-ui/core";

export const theme = createTheme({
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
