import { useState } from 'react';
import './styles.css';
import { FiSearch } from 'react-icons/fi'
import api from "./services/api"
import Header from './components/Header';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});


  async function handleSearch() {
    if (input == '') {
      alert("Preencha o CEP!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("");

    } catch {
      alert("Erro ao buscar")
      setInput("")
    }

  }

  return (
    <div className='App'>
      <Header />
      <div className="container">
        <h1 className="title">Seu CEP</h1>
        <div className="containerInput">
          <input type="text" placeholder="Digite seu cep..."
            value={input}
            onChange={(e) => setInput(e.target.value)} />
          <button className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} color="#FFF" />
          </button>
        </div>

        {Object.keys(cep).length > 0 && (

          <main className="main">
            <h2>CEP: {cep.cep}</h2>
            <span>{cep.logradouro}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
          </main>
        )}
      </div>
     
    </div>
  );
}

export default App;
