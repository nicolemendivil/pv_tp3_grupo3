import {Container, Typography, Card, CardContent, Box} from "@mui/material"; 
const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Typography paragraph>
        Bienvenido al sistema de gestión de proyectos. Desde aquí puede
        consultar información general sobre los proyectos registrados.
      </Typography>

      <Box sx={{ display: "flex",gap:2,mt: 3 }}>
        <Card sx={{ flex: 1 }}>
        <CardContent>
          <Typography variant="h6">
            Total de proyectos
          </Typography>
          <Typography>
            5
          </Typography>
        </CardContent>
        </Card>
        <Card sx={{ flex: 1 }}>
        <CardContent>
          <Typography variant="h6">
            Proyectos Completados
          </Typography>
          <Typography>
            2
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ flex: 1 }}>
        <CardContent>
          <Typography variant="h6">
            Proyectos en Proceso
          </Typography>
          <Typography>
            2
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ flex: 1 }}>
        <CardContent>
          <Typography variant="h6">
            Proyectos en Pausa
          </Typography>
          <Typography>
            1
          </Typography>
        </CardContent>
      </Card>
      </Box>
    </Container>
  );
};
export default Dashboard;
