import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ListaProyectos from "./components/ListaProyectos"

function App() {
  return(
    <div>
      <Header></Header>
      <Nav></Nav>
      <ListaProyectos></ListaProyectos>
      <Footer></Footer>
    </div>
  )
}
export default App