import React, { useReducer, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import AreaInfo from "./component/AreaInfo/";
import AreaTexto from "./component/AreaTexto/";

const initialState = {
  error: "",
  personagem: {
    name: null,
    height: "",
    hair_color: "",
    eye_color: "",
    skin_color: "",
    birth_year: "",
    gender: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        error: "",
        personagem: {
          name: action.payload.name,
          height: action.payload.height,
          hair_color: action.payload.hair_color,
          eye_color: action.payload.eye_color,
          skin_color: action.payload.skin_color,
          birth_year: action.payload.birth_year,
          gender: action.payload.gender,
        },
      };
    case "FETCH_ERROR":
      return {
        error: "Oops! Algo deu errado",
        personagem: {},
      };
    case "NO_SEARCH":
      return {
        error: "",
        personagem: {},
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [id, setId] = useState(null);

  const handleClick = () => {
    let number = Math.floor(Math.random() * 82 + 1);
    if (number === 17) {
      number++;
    }
    setId(number);
  };

  useEffect(() => {
    async function searchPersonagem() {
      if (id > 0 || id !== null) {
        let url = "https://swapi.dev/api/people/" + id;

        await axios
          .get(url)
          .then((response) => {
            dispatch({
              type: "FETCH_SUCCESS",
              payload: response.data,
            });
          })
          .catch(() => {
            dispatch({ type: "FETCH_ERROR" });
          });
      } else {
        dispatch({ type: "NO_SEARCH" });
      }
    }
    searchPersonagem();
  }, [id]);

  return (
    <div className="container">
      <div className="containerApp">
        <AreaTexto onClick={handleClick} />
        <AreaInfo personagem={state.personagem} error={state.error} />
      </div>
    </div>
  );
}

export default App;
