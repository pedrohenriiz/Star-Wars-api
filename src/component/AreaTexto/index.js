import React from "react";

const AreaTexto = ({ onClick }) => {
  return (
    <div className="areaTexto">
      <h1>
        Star Wars <span>API</span>
      </h1>
      <p>
        Conheça os personagens do<br></br> universo <span>Star Wars</span>.
      </p>
      <button onClick={onClick}>Explorar</button>
    </div>
  );
};

export default AreaTexto;
