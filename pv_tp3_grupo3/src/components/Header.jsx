import { useUsuario } from "../context/UsuarioContext";
function Header() {
  const { usuario, login } = useUsuario();
  return (
    <header>
      <div>
        <h2 className="titulo">Trabajo Práctico Nº3</h2>
      </div>
      <div>
        <h2 className="titulo">Gestion de Proyectos</h2>
      </div>
      <div>
        {usuario.nombre} - {usuario.rol}
      </div>
    </header>
  );
}
export default Header;
