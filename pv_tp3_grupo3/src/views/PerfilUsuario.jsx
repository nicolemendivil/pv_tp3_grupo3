import { Container, Paper, Typography } from "@mui/material";

const PerfilUsuario = () => {
  return (
    <Container>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Perfil de Usuario
        </Typography>

        <Typography>
          <strong>Nombre:</strong> Juan Carlos Rodriguez
        </Typography>
        <Typography>
          <strong>Rol:</strong> Profesor
        </Typography>
        <Typography>
          <strong>Institución:</strong> Universidad Nacional de Jujuy
        </Typography>

        <hr />

        <Typography>
          <strong>Nombre:</strong> Debora Chavez
        </Typography>
        <Typography>
          <strong>Rol:</strong> Estudiante
        </Typography>
        <Typography>
          <strong>Institución:</strong> Universidad Nacional de Jujuy
        </Typography>

        <hr />

        <Typography>
          <strong>Nombre:</strong> Nicole Mendivil Cabrera
        </Typography>
        <Typography>
          <strong>Rol:</strong> Estudiante
        </Typography>
        <Typography>
          <strong>Institución:</strong> Universidad Nacional de Jujuy
        </Typography>
      </Paper>
    </Container>
  );
};

export default PerfilUsuario;
