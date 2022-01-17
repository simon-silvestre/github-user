import React from 'react'
import Header from './Components/Header';
import Profil from './Components/Profil/Profil';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <SearchBar />
        <Profil />
      </div>
    </div>
  );
}

export default App;
