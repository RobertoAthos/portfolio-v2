import React from "react";
import Header from './Components/Header'
import HomeHero from './Components/HomeHero'
import Conhecimento from './Components/Conhecimentos'
import Projetos from './Components/Projetos'



function App() {
  return (
        <>
          <Header/>
          <HomeHero/>
          <Conhecimento/>
          <Projetos/>
        </>
  );
}

export default App;
