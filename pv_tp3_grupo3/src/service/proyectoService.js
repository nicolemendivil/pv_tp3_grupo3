/*const proyectos = [
    {id:101,titulo:"Impacto de la IA en la Educación", categoria:"Tecnologia Educativa",estado:"En Proceso"},
    {id:102,titulo:"Alfabetización Digital en los Institutos de Educación Superior", categoria:"Educación Digital",estado:"En Proceso"},
    {id:103,titulo:"Innovación Pedagógica: Aulas Invertidas", categoria:"Pedagogía",estado:"Completado"},
    {id:104,titulo:"Estrategias de estudio en la Educación Superior", categoria:"Formación Académica",estado:"En Pausa"},
    {id:105,titulo:"Ciberseguridad y Protección de Datos en la Universidad", categoria:"Informática",estado:"Completado"},
];

export const obtenerProyectos = () => proyectos;//Retorna una copia del arreglo actual. LISTO
export const agregarProyecto = (nuevoPoyecto) => {
    proyectos.push(nuevoPoyecto)
};//Recibe un objeto y lo añade al arreglo.
export const eliminarProyecto = (proyectos, id) => {//Mantiene todos los proyectos cuyo id sea distinto al que quiero eliminar
    return proyectos.filter(
        proyecto => proyecto.id !== id//si el id coincide, ese elemento desaparece.

    );
}//LISTO
export const buscarProyecto = (texto) => {
    return proyectos.filter(proyecto=>proyecto.titulo.toLowerCase().includes(texto.toLowerCase()));
};//Recibe un texto y retorna los proyectos que coincidan con el título*/
const proyectoService = (() => {
  let proyectos = [
    {id:101,titulo:"Impacto de la IA en la Educación", categoria:"Tecnologia Educativa",estado:"En Proceso"},
    {id:102,titulo:"Alfabetización Digital en los Institutos de Educación Superior", categoria:"Educación Digital",estado:"En Proceso"},
    {id:103,titulo:"Innovación Pedagógica: Aulas Invertidas", categoria:"Pedagogía",estado:"Completado"},
    {id:104,titulo:"Estrategias de estudio en la Educación Superior", categoria:"Formación Académica",estado:"En Pausa"},
    {id:105,titulo:"Ciberseguridad y Protección de Datos en la Universidad", categoria:"Informática",estado:"Completado"},
];
  const obtenerProyectos = () => [...proyectos];
  const agregarProyecto = (p) => proyectos.push(p);
  const eliminarProyecto=(id)=>{
    proyectos=proyectos.filter(p=>p.id!==id);
  }
  const buscarProyecto=(term)=>{
    return proyectos.filter(p=>p.titulo.toLowerCase().includes(term.toLowerCase()));
  }
  return{obtenerProyectos,agregarProyecto,eliminarProyecto,buscarProyecto};
})();

export default proyectoService;