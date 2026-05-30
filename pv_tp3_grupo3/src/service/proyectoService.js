const proyectoService = (() => {
  let proyectos = [
    {
      id: 101,
      titulo: "Impacto de la IA en la Educación",
      categoria: "Tecnologia Educativa",
      estado: "En Proceso",

      descripcion: {
        parrafo1:
          "La inteligencia artificial está transformando los procesos de enseñanza y aprendizaje en las instituciones educativas.",
        parrafo2:
          "Las plataformas inteligentes permiten personalizar contenidos y mejorar el seguimiento académico de los estudiantes.",
      },

      recursos: {
        pdf: "proyecto1.pdf",
        drive: "https://drive.google.com/proyecto1",
        github: "https://github.com/proyecto1",
      },

      equipo: [
        { nombre: "Ana Pérez", rol: "Frontend" },
        { nombre: "Luis Gómez", rol: "Backend" },
      ],
    },

    {
      id: 102,
      titulo: "Alfabetización Digital en los Institutos de Educación Superior",
      categoria: "Educación Digital",
      estado: "En Proceso",

      descripcion: {
        parrafo1:
          "La alfabetización digital busca desarrollar competencias tecnológicas esenciales en estudiantes universitarios.",
        parrafo2:
          "El proyecto promueve el uso responsable de herramientas digitales para mejorar la formación académica.",
      },

      recursos: {
        pdf: "proyecto2.pdf",
        drive: "https://drive.google.com/proyecto2",
        github: "https://github.com/proyecto2",
      },

      equipo: [
        { nombre: "María Fernández", rol: "Investigadora" },
        { nombre: "Carlos Ruiz", rol: "Diseñador Instruccional" },
      ],
    },

    {
      id: 103,
      titulo: "Innovación Pedagógica: Aulas Invertidas",
      categoria: "Pedagogía",
      estado: "Completado",

      descripcion: {
        parrafo1:
          "El modelo de aula invertida propone que los estudiantes accedan a los contenidos antes de la clase presencial.",
        parrafo2:
          "Las actividades en el aula se enfocan en la resolución de problemas y el trabajo colaborativo.",
      },

      recursos: {
        pdf: "proyecto3.pdf",
        drive: "https://drive.google.com/proyecto3",
        github: "https://github.com/proyecto3",
      },

      equipo: [
        { nombre: "Lucía Torres", rol: "Coordinadora" },
        { nombre: "Pedro Martínez", rol: "Capacitador" },
      ],
    },

    {
      id: 104,
      titulo: "Estrategias de estudio en la Educación Superior",
      categoria: "Formación Académica",
      estado: "En Pausa",

      descripcion: {
        parrafo1:
          "El proyecto analiza métodos y técnicas de estudio que favorecen el aprendizaje significativo.",
        parrafo2:
          "Se busca mejorar el rendimiento académico mediante hábitos de organización y planificación.",
      },

      recursos: {
        pdf: "proyecto4.pdf",
        drive: "https://drive.google.com/proyecto4",
        github: "https://github.com/proyecto4",
      },

      equipo: [
        { nombre: "Sofía López", rol: "Tutora Académica" },
        { nombre: "Martín Silva", rol: "Analista" },
      ],
    },

    {
      id: 105,
      titulo: "Ciberseguridad y Protección de Datos en la Universidad",
      categoria: "Informática",
      estado: "Completado",

      descripcion: {
        parrafo1:
          "La protección de la información institucional es fundamental en los entornos universitarios modernos.",
        parrafo2:
          "El proyecto desarrolla buenas prácticas para prevenir incidentes de seguridad y pérdida de datos.",
      },

      recursos: {
        pdf: "proyecto5.pdf",
        drive: "https://drive.google.com/proyecto5",
        github: "https://github.com/proyecto5",
      },

      equipo: [
        { nombre: "Diego Ramírez", rol: "Especialista en Seguridad" },
        { nombre: "Valentina Castro", rol: "Administradora de Sistemas" },
      ],
    },
  ];
  const obtenerProyectos = () => [...proyectos];
  const agregarProyecto = (nuevoProyecto) => {
    return proyectos.push(nuevoProyecto);
  }; //Recibe un objeto y lo añade al arreglo.
  const eliminarProyecto = (proyectos, id) => {
    //Mantiene todos los proyectos cuyo id sea distinto al que quiero eliminar
    return proyectos.filter(
      (proyecto) => proyecto.id !== id, //si el id coincide, ese elemento desaparece.
    );
  }; //LISTO
  const buscarProyecto = (texto) => {
    return proyectos.filter((proyecto) =>
      proyecto.titulo.toLowerCase().includes(texto.toLowerCase()),
    );
  }; //Recibe un texto y retorna los proyectos que coincidan con el título

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto,
  };
})();

export default proyectoService;
