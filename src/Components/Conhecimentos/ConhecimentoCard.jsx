import React from 'react'
import { ItemContainer } from './styles';

export default function ConhecimentoCard({title,year,description,description2,description3,description4}) {
  return (
    <ItemContainer data-aos="fade-up">
    <div>
      <h1>{year}</h1>
      <h2>{title}</h2>
      <ul>
        <li>{description}</li>
        <li>{description2}</li>
        <li>{description3}</li>
        <li>{description4}</li>
      </ul>
    </div>
  </ItemContainer>
  )
}
