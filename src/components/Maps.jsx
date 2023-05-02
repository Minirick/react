import React from 'react'
import styled from '@emotion/styled'
import ImagenMapa from "../img/mapa.jpg"


const Imagen = styled.img`
    width: 50%;
    margin: 30px 30px;
    border-radius: 50px;

    @media screen and (max-width: 1160px) {

    }
    @media screen and (max-width: 950px) {

    }
    @media screen and (max-width: 768px) {
        width: 80%;
    }

`
const Texto = styled.p `
   
    color: #000000;
    margin: 50px 120px;
    font-size:20px;

    @media screen and (max-width: 1160px) {

    }
    @media screen and (max-width: 950px) {

    }
    @media screen and (max-width: 768px) {
        font-size: 20px;
        margin: 20px 20px;
    }
`



const Contenedor2 = styled.div`
max-width: 100%;
display: flex;
gap: 10px;
flex-wrap: wrap;
justify-content: center;
`

export const Maps = () => {
  return (
<>
    <Contenedor2>
        <Texto> 
            Es un gusto poder ayudar, estamos ubicados
            en las pricipales ciudades del pais, ofreciendo
            los mejores fritos de calidad
        </Texto>

        <Imagen
            src={ImagenMapa}
        />	
    </Contenedor2>
</>
  )
}
export default Maps