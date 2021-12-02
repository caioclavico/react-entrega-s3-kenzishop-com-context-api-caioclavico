import { Route, Switch } from "react-router";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Shop} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
