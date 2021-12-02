import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
} from "@material-ui/core";
import { useContext } from "react";
import { MdLogin, MdShoppingCart } from "react-icons/md";
import { useHistory } from "react-router";
import { CartContext } from "../../providers/cart";

const Header = () => {
  const history = useHistory();
  const { cartProducts } = useContext(CartContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1" variant="h6">
            Kenzie Shop
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
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
