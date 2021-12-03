import { useTheme } from "@emotion/react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
} from "@material-ui/core";
import { useContext } from "react";
import {
  MdBrightnessLow,
  MdDarkMode,
  MdLogin,
  MdShoppingCart,
} from "react-icons/md";
import { useHistory } from "react-router";
import { CartContext } from "../../providers/cart";
import { ThemeContext } from "../../providers/theme";

const Header = () => {
  const history = useHistory();
  const { cartProducts } = useContext(CartContext);
  const { toggleColorMode } = useContext(ThemeContext);
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1" variant="h6">
            Kenzie Shop
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {theme.palette.mode} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => toggleColorMode()}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <MdDarkMode />
            ) : (
              <MdBrightnessLow />
            )}
          </IconButton>
          <Box>
            <IconButton
              size="large"
              aria-label="Show cart itens"
              color="inherit"
              onClick={() => history.push("/cart")}
            >
              <Badge badgeContent={cartProducts.length} color="error">
                <MdShoppingCart />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="login" color="inherit">
              <MdLogin />
              <Typography component="p" variant="body1">
                Entrar
              </Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
