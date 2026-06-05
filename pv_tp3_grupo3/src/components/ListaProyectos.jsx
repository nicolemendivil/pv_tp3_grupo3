import { useEffect, useState } from "react";
import Titulo from "./Titulo";
import proyectoService from "../service/proyectoService.js";
import ProyectoCard from "../components/ProyectoCard.jsx";
import DetalleProyecto from "../components/DetalleProyecto.jsx";
import RegistroActividad from "./RegistroActividad.jsx";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState([]); //inicia con lista vacia
  const [texto, setTexto] = useState("");
  useEffect(() => {
    //funcion de efecto, para renderizar estadoi de componentes
    //se ejecuta una sola vez
    //setProyectos(obtenerProyectos());//actualizar una varible de estado
    setProyectos(proyectoService.obtenerProyectos());
  }, []);
  // Estados del formulario
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState("");
  //Estado de la actualizacion
  const[ultimaActualizacion, setUltimaActualizacion]=useState("");
  //useEffect 
  useEffect(() => {

    const ahora = new Date();

    const dia = String(ahora.getDate()).padStart(2, "0");
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const anio = ahora.getFullYear();

    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");

    const mensaje =
        `${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;

    setUltimaActualizacion(mensaje);

}, [proyectos]);


  const eliminar = (id) => {
    setProyectos(proyectoService.eliminarProyecto(proyectos, id));
  };
  const buscar = (texto) => {
    console.log(`Buscar: ${texto}`);
    setTexto(texto);
    setProyectos(proyectoService.buscarProyecto(texto));
  };
  // Agregar proyecto
  const agregar = () => {
    const nuevoProyecto = {
      id: Date.now(),
      titulo: titulo,
      categoria: categoria,
      estado: estado,
    };
    //agregarProyecto(nuevoProyecto);
    //setProyectos(obtenerProyectos());
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
    // Limpiar formulario
    setTitulo("");
    setCategoria("");
    setEstado("");
  };
  return (
    <div>
      <Titulo valor={"Proyectos"}></Titulo>
      
      <input
        type="text"
        placeholder="Buscar proyecto"
        value={texto}
        onChange={(e) => buscar(e.target.value)}
      />
      <h3>Agregar Proyecto</h3>

      <input
        type="text"
        placeholder="Titulo"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Categoria</option>
        <option>Tecnologia Educativa</option>
        <option>Educación Digital</option>
        <option>Pedagogía</option>
        <option>Informática</option>
      </select>

      <select value={estado} onChange={(e) => setEstado(e.target.value)}>
        <option value="">Estado</option>
        <option>En Proceso</option>
        <option>Completado</option>
        <option>En Pausa</option>
      </select>

      <button onClick={agregar}>Agregar</button>
      <hr />
      {proyectoSeleccionado && (
        <DetalleProyecto
          proyecto={proyectoSeleccionado}
          ocultar={() => setProyectoSeleccionado(null)}
        />
      )}
      <div className="tabla">
        {proyectos.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            eliminar={eliminar}
            verDetalle={setProyectoSeleccionado}
          />
        ))}
      </div>
      {ultimaActualizacion && (
      <RegistroActividad
      fecha={ultimaActualizacion}
      />
       )}
    </div>
  );
};
export default ListaProyectos;
