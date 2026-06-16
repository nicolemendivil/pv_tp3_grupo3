import { createContext, useContext, useState } from "react";
const UsuarioContext = createContext();
export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
      nombre: "Nicole",
      dni: "1234",
      rol: "Alumno",
      institucion: "Universidad Nacional de Jujuy",
    });
  const actualizarPerfil = (datosActualizados) => {
    setUsuario(datosActualizados);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};
export const useUsuario = () => {
  return useContext(UsuarioContext);
};
