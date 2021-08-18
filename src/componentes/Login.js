import { useState } from "react";

const Login = ({ setUsuario }) => {
  const [nombre, setNombre] = useState(null);

  const manejarFormulario = (e) => {
    e.preventDefault();
    setUsuario(nombre);
  };

  return (
    <div className="tarjeta tarjeta-entrar">
      <form className="formulario-entrar" onSubmit={manejarFormulario}>
        <div className="formulario-nombre">
          <label className="etiqueta-nombre" htmlFor="nombre">
            Nombres
          </label>
          <input
            className="campo-nombre"
            id="nombre"
            type="text"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <button className="boton-entrar" type="submit">
          Empezar prueba
        </button>
      </form>
    </div>
  );
};

export default Login;
