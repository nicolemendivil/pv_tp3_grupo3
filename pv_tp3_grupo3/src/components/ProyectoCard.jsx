import { Link } from "react-router-dom";
import {Card,CardContent,Typography,Button} from "@mui/material";

const ProyectoCard = ({ proyecto, eliminar }) => {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {titulo}
        </Typography>

        <Typography>
          Categoría: {categoria}
        </Typography>

        <Typography>
          Estado: {estado}
        </Typography>

        <Button
          variant="contained"
          color="error"
          onClick={() => eliminar(id)}
          sx={{ mr: 1 }}
        >
          Eliminar
        </Button>

        <Button
          variant="contained"
          component={Link}
          to={`/proyectos/${id}`}
        >
          Ver Detalle
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProyectoCard;