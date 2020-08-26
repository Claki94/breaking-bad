import React, {useState} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-top: 12rem;
  }
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  // const consultarAPI = () => {
  //   const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
  //   const frase = api.then(respuesta => respuesta.json())
  //                 .then(resultado => console.log(resultado));
  // }

  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();

    guardarFrase(frase[0]);
  }

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
