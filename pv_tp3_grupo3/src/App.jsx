import './App.css'
import "./css/style.css";
import Header from './components/Header'
import Nav from './components/Nav'
import Dashboard from './views/Dashboard'
import PerfilUsuario from './views/PerfilUsuario'
import ListaProyectos from "./views/ListaProyectos"
import DetalleProyecto from './components/DetalleProyecto'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
function App() {
  return(
    <div>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="/proyectos" element={<ListaProyectos />} />
        <Route path="/proyectos/:id" element={<DetalleProyecto />} />
        <Route path="/perfil" element={<PerfilUsuario />} />

      </Routes>
      <Footer></Footer>
    </div>
  )
}
export default App