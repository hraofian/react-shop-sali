import { createContext, useContext, useState } from "react";

interface ICartItem {
  id: number;
  qty: number;
}

interface IShoppingCartContext {
  cartItems: ICartItem[];
}

interface IShoppingCartProvider {
  children: React.ReactNode;
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);


export const useShoppingCartContext = ()=>{
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: IShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
