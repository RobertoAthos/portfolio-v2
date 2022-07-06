import React from 'react'
import { Container } from './styles';

function index() {
  return (
    <Container>
    <ul>
        <li><a href='/' id='active'>Home</a></li>
        <li><a href='#projetos'>Projetos</a></li>
        <li><a href='#contato'>Contato</a></li>
    </ul>
  </Container>
  )
}

export default index