import React from 'react'
import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function index() {
  return (
    <Container>
    <SectionTitle
      title={
        <>
          Precisa dos
          <br />
          meus serviços?
        </>
      }
      description={
        <>
          Preencha o formulário abaixo que
          <br />
          irei retornar o mai breve possível
        </>
      }
    />

    <Form />
  </Container>
  )
}

export default index