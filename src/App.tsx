import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalCss } from './styles';

import Home from './Pages';
import Perfil from './components/PerfilRest';
import Footer from './components/Footer';

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
    </Routes>
);

function App() {
    return (
        <BrowserRouter>
            <GlobalCss />
            <Rotas />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
