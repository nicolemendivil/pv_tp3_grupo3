import styles from "../css/DetalleProyecto.module.css";
const DetalleProyecto = ({ proyecto, ocultar }) => {
  const { titulo, descripcion, recursos, equipo } = proyecto;
  return (
    <div className={styles.detalle}>
      <div className={styles.detalleHeader}>
        <h2 className={styles.detalleTitulo}>{titulo}</h2>
        <button className={styles.btnCerrar} onClick={ocultar}>
          Cerrar detalle
        </button>
      </div>
      <p className={styles.detalleDescripcion}>{descripcion.parrafo1}</p>
      <p className={styles.detalleDescripcion}>{descripcion.parrafo2}</p>
      <div className={styles.detalleColumna}>
        <div>
          <h3 className={styles.seccionTitulo}>Recursos</h3>
          <ul className={styles.detalleLista}>
            <li>
              <strong>PDF:</strong>
              <a href={recursos.pdf}>Abrir</a>
            </li>
            <li>
              <strong>Drive:</strong>
              <a href={recursos.drive}>Abrir</a>
            </li>
            <li>
              <strong>GitHub:</strong>
              <a href={recursos.github}>Abrir</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.seccionTitulo}>Equipo</h3>
          <div className={styles.detalleLista}>
            {equipo.map((miembro, index) => (
              <li key={index}>
                <strong>{miembro.nombre}</strong> - {miembro.rol}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetalleProyecto;
