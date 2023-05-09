import React from "react"
import styled from "@emotion/styled"
import "../css/Productos.css"


const Informacion = styled.h1`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 52px;

text-align: center;

color: #191D23;

flex: none;
order: 0;
flex-grow: 0;
`

const Descripcion = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;

/* identical to box height */
text-align: center;

/* Neutral / 800 */
color: #191D23;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
`
const Caja = styled.div`
display: flex;
align-items: flex-start;
margin: 0 auto;
width: 1184px;
height: 685px;
column-count: 3;
filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

align-self: stretch;

`

const Precios = styled.h1`
font-family: 'Manrope';
font-style: normal;
font-weight: 800;
font-size: 40px;
line-height: 52px;

text-align: center;

color: #191D23;
`
const Boton = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 600;
font-height: 22px

text-align: center;

color: #1D4ED8;
`

const Product = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
        
        
      <Informacion>Nuestros Productos</Informacion> 
      <Descripcion>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat sint perferendis eius fugit vero deserunt.</Descripcion>

      <Caja>
        <div className="imgbox" id="imgbox1"><Informacion>Pasteles</Informacion>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <Precios>$3.000</Precios>
          <button className="button2"><Boton>Pidelo Ya</Boton></button>
          <br></br>
          <br></br>
          <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          </ol>
        </div>

        <div className="imgbox2" id="imgbox2"><Informacion>Empanadas</Informacion>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <Precios>$2.500</Precios>
          <button className="button2"><Boton>Pidelo Ya</Boton></button>
          <br></br>
          <br></br>
          <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          </ol>
        </div>

        <div className="imgbox"><Informacion>Butifarra</Informacion>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <Precios>$10.000</Precios>
          <button className="button2"><Boton>Pidelo Ya</Boton></button>
          <br></br>
          <br></br>
          <ol>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          </ol>
        </div>
      </Caja>

    </>
  )
}
export default Product