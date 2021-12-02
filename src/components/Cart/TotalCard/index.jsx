import { Container, Typography, Box, Button } from "@material-ui/core";
import formatValue from "../../../utils/formatValue";
import { CartContext } from "../../../providers/cart";
import { useContext } from "react";

const TotalCard = () => {
  const { cartProducts } = useContext(CartContext);
  const total = () =>
    cartProducts.reduce((total, item) => {
      return total + item.price * item.qtd;
    }, 0);
  return (
    <Container>
      <Box display="flex">
        <Typography variant="h4">Total</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="h6">{formatValue(total())}</Typography>
      </Box>
      <Button variant="contained" sx={{ m: "15px 0px" }}>
        Finalizar Compra
      </Button>
    </Container>
  );
};

export default TotalCard;
