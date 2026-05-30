const ProyectoCard = ({ proyecto, eliminar, verDetalle }) =>{
  const { id, titulo, categoria, estado } = proyecto; //DESESTRUCTURACION
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{categoria}</p>
      <p>{estado}</p>
      <div className="btn-contenedor">
        <button className="btn btn-eliminar" onClick={() => eliminar(id)}>Eliminar</button>
        <button className="btn btn-detalle" onClick={() => verDetalle(proyecto)}>Ver detalle</button>
        </div>
    </div>
  );
}
export default ProyectoCard;