import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ListaProyectos from "./components/ListaProyectos"
import "./css/style.css";


function App() {
  return(
    <div>
      <Header></Header>
      <ListaProyectos></ListaProyectos>
      <Footer></Footer>
    </div>
  )
}
export default App