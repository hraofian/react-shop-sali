import { Navigate, Outlet } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

export function PrivateRoute() {
  const { isLogin } = useShoppingCartContext();
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
}
