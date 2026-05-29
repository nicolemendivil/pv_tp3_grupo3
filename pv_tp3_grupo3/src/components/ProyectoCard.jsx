function ProyectoCard({ proyecto, eliminar }) {

    const {id,titulo,categoria,estado} = proyecto;

    return (

        <tr>

            <td>{id}</td>

            <td>{titulo}</td>

            <td>{categoria}</td>

            <td>{estado}</td>

            <td>

                <button onClick={() => eliminar(id)}>Eliminar</button>

            </td>

        </tr>
    );
}

export default ProyectoCard;