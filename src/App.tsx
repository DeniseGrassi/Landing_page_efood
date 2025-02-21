import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Content, GlobalCss } from './styles';
import { Provider } from 'react-redux';

import Home from './Pages/home';
import Perfil from './components/PerfilRest';
import Footer from './components/Footer';
import Carrinho from './components/Carrinho';
import store from './store';

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Perfil/:id" element={<Perfil />} />
    </Routes>
);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalCss />
                <Container>
                    <Content>
                        <Rotas />
                    </Content>
                    <Footer />
                </Container>
                <Carrinho />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
