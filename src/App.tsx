import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/home'
import Perfil from './components/PerfilRest'
import CheckoutPage from './Pages/checkout'
import Carrinho from './components/Carrinho'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Perfil/:id" element={<Perfil />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
            <Carrinho />
        </BrowserRouter>
    )
}



