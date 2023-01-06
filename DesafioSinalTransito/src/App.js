import logo from './logo.svg';
import './App.css';
import Sinal from './components/Sinal';
import { useState } from 'react';

function App() {
  const [cores,setcores] = useState([
    {
      id: 1,
      cor: "red"
    },
    {
      id: 2,
      cor: "green"
    },
    {
      id: 3,
      cor: "yellow"
    },
    {
      id: 4,
      cor: "darkmagenta"
    }

  ]
)
  return (
    <Sinal cores={cores}/>
  );
}

export default App;
