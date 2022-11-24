import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [linea1, setLinea1]= useState('');
  const [linea2, setLinea2]= useState('');
  const [imagen, setImagen]= useState('');

  const onchangelinea1 = function(evento){
    setLinea1(evento.target.value)
  }

  const onchangelinea2 = function(evento){
    setLinea2(evento.target.value)
  }
  const onchangeImagen = function(evento){
    setImagen(evento.target.value)
  }
  return (
    <div className="App">
      <select onChange={onchangeImagen}>
        <option value="Alien">Alien</option>
        <option value="Paulito">Mpaulito</option>
        <option value="Liodine">Liodine</option>
      </select> <br/>
      <input onChange={onchangelinea1} type= "text" placeholder="Line 1"></input> <br/>
      <input onChange={onchangelinea2} type= "text" placeholder="Line 2"></input> <br/>
      <button>Add</button>
      <div className='meme' >
        <span>{linea1}</span><br/>
        <img src= {'/img/'+ imagen + '.jpg'}></img>
        <span>{linea2}</span>
      </div>

    </div>
  );
}

export default App;
