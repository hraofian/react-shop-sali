import { createContext, useContext, useState } from "react";

interface ICartItem {
  id: number;
  qty: number;
}

interface IShoppingCartContext {
  cartItems: ICartItem[];
  handleIncreaseProductQty: (id: number)=> void
  handleDecreaseProductQty: (id: number) => void
}

interface IShoppingCartProvider {
  children: React.ReactNode;
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: IShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) =>{
    setCartItems((currentItems)=> {
      let selectedItem = currentItems.find((item)=> item.id == id)
      if (selectedItem?.qty === 1){
        return currentItems.filter((item)=> item.id !== id)
      }else {
        return currentItems.map((item)=> {
          if(item.id == id) {
            return {...item , qty: item.qty - 1}
          }else{
            return item
          }
        })
      }
    })
  }

  return (
    <ShoppingCartContext.Provider value={{ handleDecreaseProductQty,cartItems , handleIncreaseProductQty }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
