import React from 'react'
import ConhecimentoCard from './ConhecimentoCard';
import { Container } from './styles';
import SectionTitle from '../SectionTitle';


function index({title,year,description,description2,description3,description4}) {
  return (
    <Container>
      <SectionTitle title="Conhecimento" description="2 anos de experiência" />

      <section>
        <ConhecimentoCard
          title="Front-End"
          description="A minha parte preferida de ser Dev, gosto do poder criar coisas que milhares ou até milhões de pessoas possam ver e interagir"

        />
        <ConhecimentoCard
          title="Ux-Design"
          description="Não sou nenhum especialista, mas sei me virar na hora de ser criativo com o design"
        />
        <ConhecimentoCard
          title="Back-End"
          description="Apesar de preferir e seguir na carreira do front, também tenho conhecimentos mínimos do back end para construit aplicações completas"
        />
      </section>
    </Container>
  )
}

export default index