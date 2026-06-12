import { useState } from "react";
import {TextField,Select,MenuItem,Button,FormControl,InputLabel, Box} from "@mui/material";
const FormularioProyecto = ({ agregar}) => {
    const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: ""
    });
    const {titulo,categoria,estado} = formulario;
    const handleChange= (e) =>{
        const {name, value} =e.target;
        setFormulario({
            titulo: formulario.titulo,
            categoria: formulario.categoria,
            estado: formulario.estado,
            [name]:value
        });
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    agregar(formulario);
    setFormulario({
        titulo:"",
        categoria:"",
        estado:""
    });
    };
  return (
  <form onSubmit={handleSubmit}>
  <Box sx={{ display: "flex", flexDirection:"column" }}>
    
      <TextField
        label="Título"
        name="titulo"
        value={titulo}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Box sx={{ display: "flex", gap: 1}}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Categoría</InputLabel>
        <Select
          label="Categoría"
          name="categoria"
          value={categoria}
          onChange={handleChange}
        >
          <MenuItem value="">Seleccione</MenuItem>
          <MenuItem value="Tecnologia Educativa">
            Tecnologia Educativa
          </MenuItem>
          <MenuItem value="Educación Digital">
            Educación Digital
          </MenuItem>
          <MenuItem value="Pedagogía">
            Pedagogía
          </MenuItem>
          <MenuItem value="Informática">
            Informática
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Estado</InputLabel>

        <Select
          label="Estado"
          name="estado"
          value={estado}
          onChange={handleChange}
        >
          <MenuItem value="">Seleccione</MenuItem>
          <MenuItem value="En Proceso">En Proceso</MenuItem>
          <MenuItem value="Completado">Completado</MenuItem>
          <MenuItem value="En Pausa">En Pausa</MenuItem>
        </Select>
      </FormControl>
      </Box>
      </Box>
      <Button
        type="submit"
        variant="contained">
        Agregar
      </Button>
      

    </form>
  );
};
export default FormularioProyecto;
