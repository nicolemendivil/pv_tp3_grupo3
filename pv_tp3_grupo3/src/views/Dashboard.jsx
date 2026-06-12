import {Container, Typography, Card, CardContent} from "@mui/material"; 
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

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">
            Total de proyectos
          </Typography>
          <Typography>
            5
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6">
            Proyectos en curso
          </Typography>
          <Typography>
            2
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dashboard;
