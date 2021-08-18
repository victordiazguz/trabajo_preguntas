const Calificacion = ({ resultados, setUsuario, setResultados }) => {
  const puntos = () => {
    const objResol = resultados.filter((r) => r.acerto);
    let aciertos = Object.keys(objResol).length;
    let totalRes = Object.keys(resultados).length;
    let gano = false;
    if ((aciertos * 100) / totalRes > 50) {
      gano = true;
    }
    return { aciertos, cantPreg: totalRes, gano };
  };

  const reiniciar = () => {
    setUsuario("");
    setResultados(null);
  };

  return (
    <div className="resultados">
      <h3>RESULTADOS</h3>
      {resultados &&
        resultados.map((res) => (
          <div className="resultado-pregunta" key={res.id}>
            <div className="texto-califi">
              <small>
                Pregunta <span className="texto-lg">{res.id}</span>
              </small>
              <p className="text">
                <strong>{res.pre}</strong>
              </p>
              <p className="text">
                TU RESPUESTA:
                <span
                  className={res.acerto ? "texto-bien" : "texto-mal"}
                >{` ${res.miOpcion.valor} - ${res.miOpcion.texto}`}</span>
              </p>
              <p className="text">
                RESPUESTA CORRECTA:
                <span className="texto-bien">{` ${res.res.valor} - ${res.res.texto}`}</span>
              </p>
            </div>
            <div className="icono-califi">{res.acerto ? `✅` : `❌`}</div>
          </div>
        ))}
      <div className="resultado-final">
        <div className={`cuadro cuadro-${puntos().gano ? "bien" : "mal"}`}>
          <p className="cuadro-t1">{`${puntos().aciertos} / ${
            puntos().cantPreg
          }`}</p>
          <strong className="cuadro-t2">ACIERTOS</strong>
        </div>
        <div className={`cuadro cuadro-${puntos().gano ? "bien" : "mal"}`}>
          <p className="cuadro-t1">{puntos().gano ? "🎉" : "👎"}</p>
          <strong className="cuadro-t2">
            {puntos().gano ? "APROBADO" : "REPROBADO"}
          </strong>
        </div>
      </div>
      <div className="pie">
        <button onClick={() => reiniciar()}>REINICIAR</button>
      </div>
    </div>
  );
};

export default Calificacion;
