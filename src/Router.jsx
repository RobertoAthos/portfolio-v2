import React from 'react'
import {Routes,Route} from 'react-router-dom'
import App from './App'
import Contato from './Pages/Contato'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Contato' element={<Contato/>}/>
    </Routes>
  )
}

export default Router