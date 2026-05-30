function ProyectoCard({ proyecto, quitarProyecto }) {

    const {id,titulo,categoria,estado} = proyecto;

    return (
        
          <div className="card" >
            <h2>Titulo : {titulo}</h2>
            <p>Categoria : {categoria}</p>
            <p>Estado: {estado ? "Hecho" : "En proceso"}</p>
            <button onClick={()=>quitarProyecto(proyecto)}>Eliminar</button>
            <button>Ver detalle</button>
          </div>
      
     
    )
}

export default ProyectoCard;