import React from 'react'
import styled from '@emotion/styled'

import "../css/card_product.css"
import ImagenEmpanada from "../img/empanada.png"


const Imagen = styled.img`
    max-width: 400px;
    width: 50%;
    margin: 100px auto 0 auto;
    display: block;
`

const Heading = styled.a `
  font-family: 'Lato', sans-serif;
  Color: #000000;
  cursor: pointer;
  font-size: 25px;
  margin-bottom: 25px;
  `

export const Card_product = (props) => {
  return (
    <div class="card">

    <div class="imgBox">
        <Imagen
            src={ImagenEmpanada}
        />	
    </div>

  <div class="contentBox">
    <h3>{props.title}</h3>
    <h2 className="price">{props.price}</h2>
    <a href="#" class="buy">Comprar</a>
  </div>

</div>

  )
}
export default Card_product