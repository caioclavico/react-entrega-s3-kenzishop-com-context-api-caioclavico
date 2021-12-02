import { Container, Typography } from "@material-ui/core";

const EmptyCard = () => {
  return (
    <Container
      sx={{ py: 8, display: "flex", justifyContent: "center" }}
      maxWidth="md"
    >
      <Typography component="h2" variant="h4">
        Carrinho vazio
      </Typography>
    </Container>
  );
};

export default EmptyCard;
