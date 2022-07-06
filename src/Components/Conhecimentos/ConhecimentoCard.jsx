import React from 'react'
import { ItemContainer } from './styles';

export default function ConhecimentoCard({title,description}) {
  return (
    <ItemContainer data-aos="fade-up">
    <div>
      <h2>{title}</h2>
     <p>{description}</p>
    </div>
  </ItemContainer>
  )
}
