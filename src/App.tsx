import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './pages/components/footer/Footer';
import Navbar from './pages/components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';
import ListaTemas from './pages/components/temas/listaTemas/ListaTemas';
import FormularioTema from './pages/components/temas/formularioTema/FormularioTema';
import DeletarTema from './pages/components/temas/deletarTema/DeletarTema';



function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <div className='min-h-[80vh]'>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/temas" element={<ListaTemas />} />
                        <Route path="/cadastroTema" element={<FormularioTema />} />
                        <Route path="/editarTema/:id" element={<FormularioTema />} />
                        <Route path="/deletarTema/:id" element={<DeletarTema />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </ AuthProvider>
    );
}

export default App;