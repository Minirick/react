import { useState } from 'react'
import styled from '@emotion/styled'

const Heading = styled.h1 `
  font-family: 'Lato', sans-serif;
  Color: #FFF;
`

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
`

function App() {
  

  return (
    <Contenedor>
    <Heading>Wenasss</Heading>
    </Contenedor>
  )
}

export default App
