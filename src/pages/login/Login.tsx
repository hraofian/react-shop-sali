import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Login() {
    const {handleLogin} = useShoppingCartContext()
    return (
       <Container>
        <div className="bg-slate-400 p-12 rounded">
            <input className="" type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <Button onClick={handleLogin}>
                Login
            </Button>
        </div>

       </Container>
        
    )
}

export default Login