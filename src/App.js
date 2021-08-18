import Navegacion from "./componentes/Navegacion";
import Login from "./componentes/Login";
import { useState } from "react";
import Cuestionario from "./componentes/Cuestionario";
import Calificacion from "./componentes/Calificacion";

function App() {
  const [usuario, setUsuario] = useState("");
  const [resultados, setResultados] = useState(null);
  return (
    <>
      <Navegacion usuario={usuario} />
      <div className="contenedor">
        {usuario === "" ? (
          <Login setUsuario={setUsuario} />
        ) : resultados ? (
          <Calificacion
            resultados={resultados}
            setUsuario={setUsuario}
            setResultados={setResultados}
          />
        ) : (
          <Cuestionario setResultados={setResultados} />
        )}
      </div>
    </>
  );
}

export default App;
