import React from "react";

const AreaInfo = ({ personagem, error }) => {
  return (
    <div className="areaInfo">
      <div className="listaInfo">
        {error ? (
          <div className="handleError">
            <strong>Oops! </strong>
            <br></br>Personagem não encontrado.<br></br> Explore novamente
          </div>
        ) : (
          ""
        )}

        {personagem.name !== undefined ? (
          <div className="containerPersonagem">
            <div className="namePersonagem">
              <p>{personagem.name}</p>
              <span>
                {personagem.height}
                {personagem.height === "unknown" ? "" : "cm"}
              </span>
            </div>
            <div className="datePersonagem">
              <p>
                <span>Birthday </span>
                {personagem.birth_year}
              </p>
              <p>
                <span>Gender </span>
                {personagem.gender}
              </p>
            </div>
            <div className="cPersonagem">
              <h3>Características</h3>
              <p>
                <span>Hair color </span>
                {personagem.hair_color}
              </p>
              <p>
                <span>Eye color </span>
                {personagem.eye_color}
              </p>
              <p>
                <span>Skin color </span>
                {personagem.skin_color}
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AreaInfo;
