import React from "react"
import styled from '@emotion/styled'
import CardP from "./Card_product"
import Maps from "./Maps"


const Contenedor = styled.div`
  width: 100%;
  background-color: #dddddd;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  `


  const Heading = styled.a `
  font-family: 'Lato', sans-serif;
  Color: #000000;
  cursor: pointer;
  font-size: 25px;
  margin-bottom: 25px;
  `


const Home = () => {
  return (
    <>
      <section className='hero'>
        <h1>Los mejores FRITOS del Pais</h1>
      </section>

      <Contenedor>
        <CardP title="Empanada Dorada" price="$1.500"/>	 
        <CardP title="Pastel Melo" price="$2.500"/>
        <CardP title="Butifarra Kool" price="$5.000"/>
        <Heading>
            <a>Ver todos los productos</a>
        </Heading> 	  	
      </Contenedor>
    
     
  
        <Maps/>
     
    
     

    </>
  )
}
export default Home