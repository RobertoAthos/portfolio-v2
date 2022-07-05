import React from "react";
import Header from './Components/Header'
import HomeHero from './Components/HomeHero'
import Conhecimento from './Components/Conhecimentos'
import Projetos from './Components/Projetos'
import Tecnologias from './Components/Tecnologias'
import FormContato from './Components/FormContato'



function App() {
  return (
        <>
          <Header/>
          <HomeHero/>
          <Conhecimento/>
          <Projetos/>
          <Tecnologias/>
          <FormContato/>
        </>
  );
}

export default App;
