import { ChangeEventHandler, useState } from "react";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Login() {
  const { handleLogin } = useShoppingCartContext();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setUser({
        ...user,
        [name]: value,
    })
  };

  return (
    <Container>
      <div className="bg-slate-400 p-12 rounded">
        <input
          onChange={handleChange}
          className=""
          type="text"
          placeholder="username"
          name="username"
          value={user.username}
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
        />
        <Button onClick={()=>{handleLogin(user.username, user.password)}}>Login</Button>
      </div>
    </Container>
  );
}

export default Login;
