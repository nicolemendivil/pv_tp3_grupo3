import { useEffect, useState } from "react";
import Titulo from "./Titulo";
import { obtenerProyectos } from "../service/proyectoService";
import { eliminarProyecto } from "../service/proyectoService";

function ListaProyectos(){
    const [proyectos, setProyectos] = useState ([]);//inicia con lista vacia
    const [texto, setTexto] = useState("");
    useEffect( () => {//funcion de efecto, para renderizar estadoi de componentes
        //se ejecuta una sola vez
        setProyectos(obtenerProyectos());//actualizar una varible de estado
    }, []);
    
    const eliminar = (id) => {
        console.log(`Se elimina usuario con id ${id}`);
        setProyectos(eliminarProyecto(proyectos, id));
    };
    return (
        <div>
            <Titulo valor ={"Listado de Proyectos"}></Titulo>
            <table border={1} style= {{borderCollapse:'collapse'}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Categoria</th>
                    <th>Estado</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {proyectos.map((proyecto) => 
                        <tr key={proyecto.id}>
                            <td>{proyecto.id}</td>
                            <td>{proyecto.titulo}</td>
                            <td>{proyecto.categoria}</td>
                            <td>{proyecto.estado}</td>
                            <button onClick={()=> eliminar(proyecto.id)}>Eliminar</button> 
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    );
}
export default ListaProyectos;