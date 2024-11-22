import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";

function Navbar() {
  const { cartQty,handleLogOut } = useShoppingCartContext();
  return (
    <div className="h-14 border-b-8 shadow flex items-center">
      <Container>
        <div className="flex justify-between flex-row-reverse ">
          <ul className="flex flex-row-reverse">
            <li className="ml-4">
              <Link to="/">خانه</Link>
            </li>
            <li className="ml-4 ">
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>

          <div>
            <Button onClick={handleLogOut}>Logout</Button>
            <Link to="/cart">
              <button>سبد خرید</button>
              <span className="absolute w-8 h-8 bg-red-400 flex justify-center items-center rounded-full">{cartQty !== 0 ? cartQty : ""}</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
