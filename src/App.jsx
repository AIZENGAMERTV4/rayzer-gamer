import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Produto from "./pages/Produto";
import Carrinho from "./pages/Carrinho";
import Favoritos from "./pages/Favoritos";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";


export default function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/catalogo" element={<Catalogo />} />

<Route path="/produto/:id" element={<Produto />} />

<Route path="/carrinho" element={<Carrinho />} />

<Route path="/favoritos" element={<Favoritos />} />

<Route path="/login" element={<Login />} />

<Route path="/checkout" element={<Checkout />} />

<Route path="/admin" element={<Admin />} />

</Routes>

</BrowserRouter>

);

}