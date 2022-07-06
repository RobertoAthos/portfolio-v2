import React from 'react'
import { Container } from './styles';
import {Link} from 'react-router-dom'

function index() {
  return (
    <Container>
    <ul>
        <li><a href='/' id='active'>Home</a></li>
        <li><a href='https://github.com/RobertoAthos' _blank>Projetos</a></li>
        <li><Link to='/Contato'><a href='#contato'>Contato</a></Link></li>
    </ul>
  </Container>
  )
}

export default index