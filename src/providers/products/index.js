import { createContext } from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      name: 'Smart TV LED 32"',
      price: 1999.0,
      qtd: 1,
      img: "https://a-static.mlcdn.com.br/160x160/smart-tv-32-hd-led-tcl-s615-va-60hz-android-wi-fi-e-bluetooth-google-assistente-2-hdmi/magazineluiza/230531900/a74f79c5e2ff63182a417c62f521a25a.jpg",
    },
    {
      id: 2,
      name: 'Monitor Gamer 25"',
      price: 836.0,
      qtd: 1,
      img: "https://a-static.mlcdn.com.br/160x160/monitor-gamer-ultrawide-75hz-full-hd-25-lg-25um58g-p-ips-2-hdmi-1ms/magazineluiza/232282900/cfcbd4c2274a7716f8f642d3436a1745.jpg",
    },
    {
      id: 3,
      name: "Smartphone Sansung Galaxy A32",
      price: 1200.72,
      qtd: 1,
      img: "https://a-static.mlcdn.com.br/160x160/smartphone-samsung-galaxy-a32-128gb-branco-4g-4gb-ram-tela-64-cam-quadrupla-selfie-20mp/magazineluiza/155623700/abc931a4fb23dd4d624790b28edaf5aa.jpg",
    },
    {
      id: 4,
      name: "Notebook Ultra Intel Pentium",
      price: 1359.0,
      qtd: 1,
      img: "https://a-static.mlcdn.com.br/160x160/notebook-ultra-ub320-intel-pentium-quad-core-4gb-120gb-ssd-141-hd-lcd/magazineluiza/230022400/3a6c0698aba078fbaa7530b9ac36fbaf.jpg",
    },
    {
      id: 5,
      name: "AirPods Apple",
      price: 999.0,
      qtd: 1,
      img: "https://a-static.mlcdn.com.br/160x160/airpods-apple-com-estojo-de-recarga/magazineluiza/223026300/e7fcdf111a3a39b56acacc022e5d6cc3.jpg",
    },
    {
      id: 6,
      name: "Teclado Gamer",
      price: 1215.16,
      qtd: 1,
      img: "https://a-static.mlcdn.com.br/160x160/teclado-gamer-warrior-ragnar-led-grafite-tc222/kabum/98723/75705449b43d841a2f1e9bb896d7eca6.jpg",
    },
  ];

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
