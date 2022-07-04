import React from 'react'
import {ContainerText, ContainerItem, ContainerImg} from './styles'

function ProjetoItem({title,desc,img}) {
  return (
    <ContainerItem>
       <ContainerText>
          <div className='text'>
          <h2>{title}</h2>
          <p>{desc}</p>
          </div>
       </ContainerText>
      <ContainerImg>
          <img src={img}/>
      </ContainerImg>
    </ContainerItem>
  )
}

export default ProjetoItem