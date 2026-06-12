import { Container, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const PerfilUsuario = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Perfil de Usuarios
      </Typography>
      <Paper sx={{ p: 2 }}>
        <List>
          <ListItem>
            <ListItemText
              primary="Juan Carlos Rodriguez"
              secondary="Profesor - Universidad Nacional de Jujuy"
            />
          </ListItem>
          <hr/>
          <ListItem>
            <ListItemText
              primary="Débora Chavez"
              secondary="Estudiante - Universidad Nacional de Jujuy"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Nicole Mendivil Cabrera"
              secondary="Estudiante - Universidad Nacional de Jujuy"
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default PerfilUsuario;
