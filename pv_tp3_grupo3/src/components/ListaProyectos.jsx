/*import { useEffect, useState } from "react";
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
                    {proyectos.map((proyecto) => (
                        <ProyectoCard
                        key={proyecto.id}
                        proyecto={proyecto}
                        eliminar={eliminar}
                        />

                    ))}
                </tbody>
            </table>
            </div>
        </div>

    );
}
export default ListaProyectos;*/
import proyectoService from "../service/proyectoService.js";
import { useState } from "react";
import ProyectoCard from "./ProyectoCard.jsx";
const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  ); //actualiza el estado de proyectos y lo inicializa con los proyectos del array
  const [titulo, setTitulo] = useState(""); //estado para el titulo cuando agrege
  const [category, setCategory] = useState("");
  const [estado, setEstado] = useState(false);
  const [busqueda,setBusqueda]=useState("");//para manejar el input de la busqueda

  const agregarProyecto = () => {
    const nuevo = {
      id: proyectos.length + 1,
      titulo: titulo,
      categoria: category,
      estado: estado,
    };
    proyectoService.agregarProyecto(nuevo); //modifico el arreglo
    setProyectos(proyectoService.obtenerProyectos()); // modifico el componente
    // limpiar formulario
    setTitulo("");
    setCategoria("");
    setEstado(false);
  };
   const quitarProyecto=(p)=>{
    proyectoService.eliminarProyecto(p.id);
    setProyectos(proyectoService.obtenerProyectos());
   }
   const buscandoProyecto=(term)=>{
    setBusqueda(term);
    const resultados=proyectoService.buscarProyecto(term);
    setProyectos(resultados);
   }
  return (
    <div className="main">
      <div className="input">
        <input value={busqueda} type="text" placeholder="Buscar" onChange={(e)=>buscandoProyecto(e.target.value)} />
        
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Ingresar titulo..."
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <select
          id="categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option> Educativo</option>
          <option> Salud</option>
          <option> Informatica</option>
          <option >Pedagogia</option>
        </select>
        <select
          id="estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value === "true")}
        >
          <option value="true"> Completado</option>
          <option value="false"> En proceso</option>
        </select>
        <button onClick={agregarProyecto}>Agregar</button>
      </div>
      <div id="contenedorCard">
        {proyectos.map((p) => (
          /*<div className="card" key={p.id}>
            <h2>Titulo : {p.titulo}</h2>
            <p>Categoria : {p.categoria}</p>
            <p>Estado: {p.estado ? "Hecho" : "En proceso"}</p>
            <button onClick={()=>quitarProyecto(p)}>Eliminar</button>
          </div>*/
          <ProyectoCard key={p.id} proyecto={p} quitarProyecto={quitarProyecto}/>
        ))}
      </div>
    </div>
  );
};
export default ListaProyectos;