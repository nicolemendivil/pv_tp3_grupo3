import { Link } from "react-router-dom";
function Nav(){
    return(
    <nav>
        {/*<Link to="/">Inicio</Link>*/} 
        <Link to="/dashboard">Inicio</Link>
        <Link to="/proyectos">Proyectos</Link> 
        {/*<Link to="/detalle">Detalle</Link> */}
        <Link to="/perfil">Perfil</Link> 
    </nav>
    );
}
export default Nav