import { useContext } from "react";
import Button from "../../components/button/Button";
import CartItem from "../../components/cartitem/CartItem";
import Container from "../../components/container/Container";
import { ShoppingCartContext, useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
  const {cartItems} = useShoppingCartContext()

 localStorage.setItem("office", "university")

  return (
    <div>
      <Container>
        <div>
          {
            cartItems.map(item=>(
              <CartItem {...item}/>

            ))
          }


        </div>
        <div className="text-right bg-slate-400 rounded p-6">
            <p> 2000 :قیمت کل</p>
            <p>  300 :تخفیف شما</p>
            <p> 1700 :قیمت نهایی</p>
        </div>
        <Button variant="success" >
            ثبت سفارش
        </Button>
      </Container>
    </div>
  );
}

export default Cart;
