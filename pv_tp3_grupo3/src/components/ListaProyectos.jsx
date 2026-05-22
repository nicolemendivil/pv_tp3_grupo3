import { useEffect, useState } from "react";
import Titulo from "./Titulo";
import { obtenerProyectos } from "../service/proyectoService";
import { eliminarProyecto } from "../service/proyectoService";
import { buscarProyecto } from "../service/proyectoService";
import { agregarProyecto } from "../service/proyectoService";
function ListaProyectos(){
    const [proyectos, setProyectos] = useState ([]);//inicia con lista vacia
    const [texto, setTexto] = useState("");
    useEffect( () => {//funcion de efecto, para renderizar estadoi de componentes
        //se ejecuta una sola vez
        setProyectos(obtenerProyectos());//actualizar una varible de estado
    }, []);
    // Estados del formulario
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("");
    
    const eliminar = (id) => {
        console.log(`Se elimina usuario con id ${id}`);
        setProyectos(eliminarProyecto(proyectos, id));
    };
    const buscar = (texto) => {
        console.log(`Buscar: ${texto}`);
        setTexto(texto);
        setProyectos(buscarProyecto(texto)
    );
    };
    // Agregar proyecto
    const agregar = () => {
        const nuevoProyecto = {
            id: Date.now(),
            titulo: titulo,
            categoria: categoria,
            estado: estado
        };
        agregarProyecto(nuevoProyecto);
        setProyectos(obtenerProyectos());

        // Limpiar formulario
        setTitulo("");
        setCategoria("");
        setEstado("");
    };
    return (
        <div>
            
            <Titulo valor ={"Listado de Proyectos"}></Titulo>
            <input
                type="text"
                placeholder="Buscar proyecto"
                value={texto}
                onChange={(e) =>buscar(e.target.value)}
            />

            <h3>Agregar Proyecto</h3>

            <input
                type="text"
                placeholder="Titulo"
                value={titulo}
                onChange={(e) =>
                    setTitulo(e.target.value)
                }
            />

            <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Categoria</option>
            <option>Tecnologia Educativa</option>
            <option>Educación Digital</option>
            <option>Pedagogía</option>
            <option>Informática</option>
            </select>

            <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}>
            <option value="">Estado</option>
            <option>En Proceso</option>
            <option>Completado</option>
            <option>En Pausa</option>
            </select>

            <button onClick={agregar}>
                Agregar
            </button>

            <hr />
            <div className="tabla">
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
                            <td><button onClick={()=> eliminar(proyecto.id)}>Eliminar</button> </td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </div>

    );
}
export default ListaProyectos;