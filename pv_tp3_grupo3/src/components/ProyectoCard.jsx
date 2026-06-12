import { Link } from "react-router-dom";
const ProyectoCard = ({ proyecto, eliminar}) =>{
  const { id, titulo, categoria, estado } = proyecto; //DESESTRUCTURACION
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{categoria}</p>
      <p>{estado}</p>
      <div className="btn-contenedor">
        <button className="btn btn-eliminar" onClick={() => eliminar(id)}>Eliminar</button>
        <Link className="btn btn-detalle" to={`/proyectos/${id}`}>
            Ver Detalle
        </Link>
        </div>
    </div>
  );
}
export default ProyectoCard;