import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/home/store/Store";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/store" element={<Store/>} />
    </Routes>
  );
}

export default App;

// lesson 3 min 6