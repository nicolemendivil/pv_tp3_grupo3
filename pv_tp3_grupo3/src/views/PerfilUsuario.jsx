import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
} from "@mui/material";
import { useUsuario } from "../context/UsuarioContext";
import { useState } from "react";

const PerfilUsuario = () => {
  //const { usuario } = useUsuario();
  const { usuario, actualizarPerfil } = useUsuario();
  // Estado para habilitar/deshabilitar edición
  const [editar, setEditar] = useState(false);
  // Estado del formulario
  const [formulario, setFormulario] = useState(usuario);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };
  const guardarCambios = () => {
    actualizarPerfil(formulario);
    setEditar(false);
  };
  if(!editar){
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Perfil de Usuarios
      </Typography>
      <Paper sx={{ p: 2 }}>
        <List>
          <ListItem>
            <ListItemText
              primary={usuario.nombre}
              secondary={`DNI: ${usuario.dni}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Rol" secondary={usuario.rol} />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Institucion"
              secondary={usuario.institucion}
            />
          </ListItem>
        </List>
         <Button
              variant="contained"
              onClick={() => setEditar(true)}
            >
              Editar Perfil
          </Button>
      </Paper>
    </Container>
  );
};
return (
  <Container>
    <Typography variant="h4" gutterBottom>
      Editar Perfil
    </Typography>
    <Paper sx={{ p: 2 }}>
      <TextField
        fullWidth
        margin="normal"
        label="Nombre"
        name="nombre"
        value={formulario.nombre}
        onChange={handleChange}
      />
      <TextField
       fullWidth
       margin="normal"
       label="DNI"
       name="dni"
       value={formulario.dni}
       onChange={handleChange}
      />

      <TextField
       fullWidth
       margin="normal"
       label="Rol"
       name="rol"
       value={formulario.rol}
       onChange={handleChange}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Institución"
        name="institucion"
        value={formulario.institucion}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        onClick={guardarCambios}
      >
        Guardar Cambios
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setFormulario(usuario);
          setEditar(false);
        }}
      >
        Cancelar
      </Button>
    </Paper>
  </Container>
);
};
export default PerfilUsuario; 
