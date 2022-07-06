import React from 'react'
import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';
import Fade from 'react-reveal'

function index() {
  return (
    <Fade bottom cascade>
      <Container id='Contato'>
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
    </Fade>
  )
}

export default index