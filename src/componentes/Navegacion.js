const Navegacion = ({ usuario }) => {
  return (
    <ul className="navegacion">
      <li className="app-titulo">Cuestionario App</li>
      {usuario && <li className="usuario-nombre">{usuario}</li>}
    </ul>
  );
};

export default Navegacion;
