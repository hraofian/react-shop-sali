import Button from "../../components/button/Button";
import CartItem from "../../components/cartitem/CartItem";
import Container from "../../components/container/Container";

function Cart() {
  return (
    <div>
      <Container>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
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
