import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useUsuario } from "../context/UsuarioContext";

const PerfilUsuario = () => {
  const { usuario } = useUsuario();
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
      </Paper>
    </Container>
  );
};

export default PerfilUsuario;
