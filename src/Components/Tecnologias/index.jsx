import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact,FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {SiMongodb,SiFirebase} from 'react-icons/si'
import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import TecnologiasItem from './TecnologiasItem';
import Fade from 'react-reveal'

function index({title,icon}) {
  return (
   <Fade right cascade>
       <Container>
    <SectionTitle title="Tecnologias do meu cotidiano" />
    <section>
      <TecnologiasItem title="HTML" icon={<AiFillHtml5 />} />
      <TecnologiasItem title="CSS" icon={<FaCss3Alt />} />
      <TecnologiasItem title="Javascript" icon={<IoLogoJavascript />} />
      <TecnologiasItem title="React" icon={<FaReact />} />
    </section>
    <div className='text-divisor'><h3>Algumas competências adicionais:</h3></div>
    <section>
        <TecnologiasItem title="NodeJs" icon={<FaNodeJs/>}/>
        <TecnologiasItem title="MongoDB" icon={<SiMongodb/>}/>
        <TecnologiasItem title="FireBase" icon={<SiFirebase/>}/>
    </section>
  </Container>
   </Fade>
  )
}
export default index