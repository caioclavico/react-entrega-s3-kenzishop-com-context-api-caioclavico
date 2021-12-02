import { Button, Container, Box } from "@material-ui/core";
import { useContext } from "react";

import { useHistory } from "react-router";
import { CartContext } from "../../../providers/cart";

const CartHeader = () => {
  const { removeAllFromCart } = useContext(CartContext);
  const history = useHistory();
  return (
    <Container sx={{ py: 2 }} maxWidth="md">
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/")}
        >
          Continuar comprando
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="removed" onClick={() => removeAllFromCart()}>
          Remover tudo
        </Button>
      </Box>
    </Container>
  );
};

export default CartHeader;
