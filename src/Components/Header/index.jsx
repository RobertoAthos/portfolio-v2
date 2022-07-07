import React from 'react'
import { Container } from './styles';

function index() {
  return (
    <Container>
    <ul>
        <li><a href='/' id='active'>Home</a></li>
        <li><a href='https://github.com/RobertoAthos' _blank>Projetos</a></li>
    </ul>
  </Container>
  )
}

export default index