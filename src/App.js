import React, { useState } from 'react'
import Header from './Components/Header';
import Profil from './Components/Profil/Profil';
import SearchBar from './Components/SearchBar';

const api = 'https://api.github.com/users/'

function App() {

  const [input, setInput] = useState('')
  const [profil, setProfil] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

    function searchProfil() {
        fetch(`${api}${input}`)
        .then(res => res.json())
        .then((result) => {
            setInput('')
            setProfil(result)
            setIsLoaded(true)
        })
    }

  return (
    <div className="App">
      <div className="content">
        <Header />
        <SearchBar searchProfil={searchProfil} setInput={setInput} input={input}/>
        {profil.message === "Not Found" ? (
          <p className="erreur">L'utilisateur que vous recherchez est introuvable</p>
        ) : isLoaded ? (
          <Profil profil={profil} />
        ): ''}
      </div>
    </div>
  );
}

export default App;
