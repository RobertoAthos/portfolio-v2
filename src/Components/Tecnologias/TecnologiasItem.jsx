import React from 'react'
import {TecnologiaContainer} from './styles'

function TecnologiasItem({title,icon}) {
  return (
    <TecnologiaContainer>
      <p>{title}</p>
      {icon}
    </TecnologiaContainer>
  )
}

export default TecnologiasItem