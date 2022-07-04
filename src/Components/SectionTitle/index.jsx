import React from 'react'
import { Container } from './styles';

function index({title,description}) {
  return (
    <Container>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </Container>
  )
}

export default index