import React from 'react'
import picture from '../../Assets/piccoding.svg'
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

function index() {
  return (
    <Container data-aos="fade-up">
    <img src={picture} alt="Minha foto"  className='img-container'/>
    <div>
      <TextContainer>
        <h1>Olá</h1>
        <h2>Me chamo Roberto</h2>
      </TextContainer>
      <InfosContainer>
        <CodeItem data-aos="zoom-in">
          <span className="comment">//Minha apresentação</span>
          <span className="purple">Infos</span> {'\u007B'}
          <div>
            Nome: <span className="blue">Roberto,</span>
          </div>
          <div>
            Sobrenome: <span className="blue">Athos</span>
          </div>
          {'\u007D'}
        </CodeItem>
        <CodeItem data-aos="zoom-in">
          <span className="purple">Cargo</span> {'\u007B'}
          <div>
            Função: <span className="blue">Dev Front-end,</span>
          </div>
          {'\u007D'}
        </CodeItem>
      </InfosContainer>
    </div>
  </Container>
  )
}

export default index