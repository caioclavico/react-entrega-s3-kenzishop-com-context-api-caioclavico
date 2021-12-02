import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("KenzieShop_cart")) || []
  );

  const addToCart = (item) => {
    const list = JSON.parse(localStorage.getItem("KenzieShop_cart")) || [];
    if (list.filter((product) => product.id === item.id).length === 0) {
      list.push(item);
      localStorage.setItem("KenzieShop_cart", JSON.stringify(list));
      setCartProducts(list);
      toast.success("Item adicionado ao seu carrinho");
    } else {
      const newItems = [...list];
      const index = newItems.findIndex((e) => e.id === item.id);
      newItems[index].qtd++;
      localStorage.setItem("KenzieShop_cart", JSON.stringify(newItems));
      //dispatch(updateQtdUp(newItems)); // quantidade!!!
      toast.success("Item já adicionado, aumentamos sua quantidade");
    }
  };

  const removeFromCart = (item) => {
    const newItems = cartProducts.filter((product) => product.id !== item.id);
    item.qtd = 1;
    localStorage.setItem("KenzieShop_cart", JSON.stringify(newItems));
    setCartProducts(newItems);
    toast.error("Item removido do carrinho");
  };

  const updateQtdUp = (index) => {
    const newItems = [...cartProducts];
    newItems[index].qtd++;
    localStorage.setItem("KenzieShop_cart", JSON.stringify(newItems));
    setCartProducts(newItems);
  };

  const updateQtdDown = (index) => {
    const newItems = [...cartProducts];
    if (newItems[index].qtd > 1) {
      newItems[index].qtd--;
      localStorage.setItem("KenzieShop_cart", JSON.stringify(newItems));
      setCartProducts(newItems);
    }
  };

  const removeAllFromCart = () => {
    const cart = [...cartProducts];
    cart.map((item) => (item.qtd = 1));
    localStorage.setItem("KenzieShop_cart", JSON.stringify([]));
    setCartProducts([]);
    toast.error("Todos os itens foram removidos do carrinho");
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        updateQtdUp,
        updateQtdDown,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
