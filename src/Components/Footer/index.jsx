import React from 'react'
import {
    AiOutlineGithub,
    AiFillLinkedin
  } from 'react-icons/ai';
  import { Container } from './styles';

function index() {

    function handleRedirect(url) {
        window.open(url);
      }

      function handleScrollTop() {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
    }
  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/RobertoAthos')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://www.linkedin.com/in/roberto-athos-6a0a1517a/')}
          />
        </section>
      </div>
    </Container>
  )
}

export default index