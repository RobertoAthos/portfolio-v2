import React from 'react'
import picture from '../../Assets/piccoding.svg'
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import Fade from 'react-reveal'

function index() {
  return (
   <Fade bottom cascade>
         <Container>
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
        </CodeItem>
        <CodeItem data-aos="zoom-in">
          <span className="purple">Cargo</span> {'\u007B'}
          <div>
            Função: <span className="blue">Dev Front-end,</span>
          </div>
        </CodeItem>
      </InfosContainer>
    </div>
  </Container>
  </Fade>
  )
   
}

export default index