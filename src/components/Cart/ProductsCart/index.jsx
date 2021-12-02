import {
  Container,
  Grid,
  Card,
  CardMedia,
  Box,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { MdChevronLeft, MdChevronRight, MdDeleteForever } from "react-icons/md";
import { CartContext } from "../../../providers/cart";

import formatValue from "../../../utils/formatValue";
import EmptyCard from "../EmptyCart";
import TotalCard from "../TotalCard";

const ProductsCart = () => {
  const { cartProducts, removeFromCart, updateQtdUp, updateQtdDown } =
    useContext(CartContext);

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={8} lg={9}>
            {cartProducts.length === 0 ? (
              <EmptyCard />
            ) : (
              cartProducts.map((item, index) => (
                <Grid key={item.id}>
                  <Card variant="productCart">
                    <CardMedia
                      component="img"
                      image={item.img}
                      alt={item.name}
                    />
                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ flexGrow: 1, display: "flex" }}>
                        <Typography variant="body1" sx={{ ml: "15px" }}>
                          {item.name}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton
                          size="large"
                          color="inherit"
                          onClick={() => removeFromCart(item)}
                          sx={{
                            p: 0,
                            m: 0,
                            width: "50px",
                          }}
                        >
                          <MdDeleteForever />
                        </IconButton>
                      </Box>

                      <Card variant="productCartDetails">
                        <Box sx={{ flexGrow: 1 }} />
                        <Card variant="productCartQtd">
                          <IconButton
                            size="large"
                            color="inherit"
                            onClick={() => updateQtdDown(index)}
                            sx={{ p: 0, m: 0 }}
                          >
                            <MdChevronLeft />
                          </IconButton>
                          <Typography variant="body1">{item.qtd}</Typography>
                          <IconButton
                            size="large"
                            color="inherit"
                            onClick={() => updateQtdUp(index)}
                            sx={{ p: 0, m: 0 }}
                          >
                            <MdChevronRight />
                          </IconButton>
                        </Card>

                        <Typography
                          variant="body1"
                          sx={{ m: "0px 7px", minWidth: "90px" }}
                        >
                          {formatValue(item.price)}
                        </Typography>
                      </Card>
                    </Box>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <TotalCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductsCart;
