import { createContext, useContext, useState,useEffect } from "react";
const UsuarioContext = createContext();
export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(()=> {
    const usuarioGuardado=localStorage.getItem("usuario");
    let usuarioInicial;
    if (usuarioGuardado){
      usuarioInicial=JSON.parse(usuarioGuardado);
    } else{
      usuarioInicial={   
      nombre: "Nicole",
      dni: "1234",
      rol: "Alumno",
      institucion: "Universidad Nacional de Jujuy",
    };
  }
  return usuarioInicial;
});

  const actualizarPerfil = (datosActualizados) => {
    setUsuario(datosActualizados);
  };
   useEffect(() => {

    localStorage.setItem(
      "usuario",
      JSON.stringify(usuario)
    );

  }, [usuario]);

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};
export const useUsuario = () => {
  return useContext(UsuarioContext);
};
