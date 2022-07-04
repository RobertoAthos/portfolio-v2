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
          year="Front-End"
          title="Linguas que eu falo"
          description="Html"
          description2="Css"
          description3="Javascript"
          description4="ReatJs"
        />
        <ConhecimentoCard
          year="Ux-Design"
          title="Não sou nenhum especialista, mas sei me virar na hora de ser criativo com o design"
          description="Figma"
        />
        <ConhecimentoCard
          year="Back-End"
          title="Linguas que eu falo"
          description="NodeJs"
          description2="FireBase"
        />
      </section>
    </Container>
  )
}

export default index