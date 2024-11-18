import { createContext, useState } from "react";

interface IShoppingCartContext{
    cartItems: []
}


interface IShoppingCartProvider {
  children: React.ReactNode;
}

export const ShoppingCartContext = createContext<IShoppingCartContext>({
    cartItems:[]
});

export function ShoppingCartProvider({children}: IShoppingCartProvider) {
    const [cartItems, setCartItems] = useState<[]>([])
  return (
    <ShoppingCartContext.Provider value={{cartItems}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
