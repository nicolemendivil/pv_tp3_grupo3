import { useState } from "react";
const FormularioProyecto = ({ agregar}) => {
    const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: ""
    });
    const {titulo,categoria,estado} = formulario;
    const handleChange= (e) =>{
        const {name, value} =e.target;
        setFormulario({
            titulo: formulario.titulo,
            categoria: formulario.categoria,
            estado: formulario.estado,
            [name]:value
        });
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    agregar(formulario);
    setFormulario({
        titulo:"",
        categoria:"",
        estado:""
    });
    };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Proyecto</h3>
      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={titulo}
        onChange={handleChange}
      />
      <select name="categoria" value={categoria} onChange={handleChange}>
        <option value="">Categoría</option>
        <option>Tecnologia Educativa</option>
        <option>Educación Digital</option>
        <option>Pedagogía</option>
        <option>Informática</option>
      </select>

      <select name="estado" value={estado} onChange={handleChange}>
        <option value="">Estado</option>
        <option>En Proceso</option>
        <option>Completado</option>
        <option>En Pausa</option>
      </select>
      <button type="submit"> Agregar</button>
    </form>
  );
};
export default FormularioProyecto;
