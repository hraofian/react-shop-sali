import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Layout from "./components/layout/Layout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { ShoppingCartProvider, useShoppingCartContext } from "./context/ShoppingCartContext";
import { PrivateRoute } from "./components/privaterout/PrivateRout";
import Login from "./pages/login/Login";

function App() {
  const {isLogin} = useShoppingCartContext()
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={isLogin ? <Navigate to="/"/>: <Login />} />
          <Route path="/product/:id" element={<Product />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Layout>
  );
}

export default App;

// lesson 23 min
