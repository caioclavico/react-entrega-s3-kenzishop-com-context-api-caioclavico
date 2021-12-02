import { Container, Grid, Card, CardMedia, Button } from "@material-ui/core";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { ProductsContext } from "../../providers/products";
import formatValue from "../../utils/formatValue";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={6}>
        {products.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card variant="product">
              <Card variant="productDetails">
                <CardMedia component="img" image={item.img} alt={item.name} />
                <p>{item.name}</p>
                <p>{formatValue(item.price)}</p>
              </Card>
              <Button variant="contained" onClick={() => addToCart(item)}>
                Adicionar ao Carrinho
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
