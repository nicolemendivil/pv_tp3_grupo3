import Alert from "@mui/material/Alert";

const RegistroActividad = ({ fecha }) => {
  return (
    <Alert severity="info">
      Última actualización de la lista: {fecha}
    </Alert>
  );
};

export default RegistroActividad;
