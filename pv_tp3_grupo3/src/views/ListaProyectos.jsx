import { useEffect, useState, useRef } from "react";
import Titulo from "../components/Titulo.jsx";
import proyectoService from "../service/proyectoService.js";
import ProyectoCard from "../components/ProyectoCard.jsx";
import RegistroActividad from "../components/RegistroActividad.jsx";
import FormularioProyecto from "../components/FormularioProyecto.jsx";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState([]); //inicia con lista vacia
  const [texto, setTexto] = useState("");

  useEffect(() => {
    //funcion de efecto, para renderizar estadoi de componentes
    //se ejecuta una sola vez
    //setProyectos(obtenerProyectos());//actualizar una varible de estado
    //setProyectos(proyectoService.obtenerProyectos());
    const datos = proyectoService.obtenerProyectos();
    setProyectos(datos);
    setProyectosFiltrados(datos);
  }, []);
  // Estados del formulario
  //const [titulo, setTitulo] = useState("");
  //const [categoria, setCategoria] = useState("");
  //const [estado, setEstado] = useState("");

  //Estado de la actualizacion
  const [ultimaActualizacion, setUltimaActualizacion] = useState("");
  //Bandera para acciones de agregar y eliminar
  const accionUsuario = useRef(false);
  //Proyecto para la busqueda
  const [proyectosFiltrados, setProyectosFiltrados] = useState([]);

  //useEffect
  useEffect(() => {
    if (!accionUsuario.current) {
      return;
    }

    const ahora = new Date();

    const dia = String(ahora.getDate()).padStart(2, "0");
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const anio = ahora.getFullYear();

    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");

    const mensaje = `${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;

    setUltimaActualizacion(mensaje);
  }, [proyectos]);

  //Eliminar proyecto
  const eliminar = (id) => {
    accionUsuario.current = true; //bandera
    const nuevos = proyectoService.eliminarProyecto(proyectos, id);

    setProyectos(nuevos);
    setProyectosFiltrados(nuevos);
  };
  //Buscar proyecto
  const buscar = (texto) => {
    console.log(`Buscar: ${texto}`);
    setTexto(texto);
    setProyectosFiltrados(proyectoService.buscarProyecto(texto));
  };
  // Agregar proyecto
  const agregar = (datosProyecto) => {
    accionUsuario.current = true; //bandera
    
    const nuevoProyecto = {
      id: Date.now(),
      titulo: datosProyecto.titulo,
      categoria: datosProyecto.categoria,
      estado: datosProyecto.estado
    };
    //agregarProyecto(nuevoProyecto);
    //setProyectos(obtenerProyectos());
    proyectoService.agregarProyecto(nuevoProyecto);
    //setProyectos(proyectoService.obtenerProyectos());

    const nuevos = proyectoService.obtenerProyectos(); //para la busqueda

    setProyectos(nuevos); //para la busqueda
    setProyectosFiltrados(nuevos); //para la busqueda
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
      <FormularioProyecto agregar={agregar} />
      <hr />
      <div className="tabla">
        {proyectosFiltrados.map(
          (
            proyecto, //cambio de proyectos por proyectosFiltrados
          ) => (
            <ProyectoCard
              key={proyecto.id}
              proyecto={proyecto}
              eliminar={eliminar}
            />
          ),
        )}
      </div>
      {ultimaActualizacion && <RegistroActividad fecha={ultimaActualizacion} />}
    </div>
  );
};
export default ListaProyectos;
