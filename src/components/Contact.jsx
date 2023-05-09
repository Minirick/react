import React from "react"
import styled from "@emotion/styled"
import "../css/Form.css"

const Aboutus = styled.h1`
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

const Contact = () => {
  return (
    <>
      <br></br>   
      <Aboutus>Comuniquese con nosotros</Aboutus> 
      <br></br>
      <form action="" method="post"> 
        <ul>
          <li>
            <label for="name">Nombre:</label>
              <input type="text" id="name" name="user_name" />
          </li>
          <li>
            <label for="mail">Correo electrónico:</label>
              <input type="email" id="mail" name="user_email" />
          </li>
            <li>
              <label for="msg">Mensaje:</label>
                <textarea id="msg" name="user_message"></textarea>
            </li>
            <li className="button3">
              <button className="button3" type="submit">Enviar</button>
            </li>
        </ul>  
      </form>   
      <br></br>
      <br></br>
      <br></br>
  
      
    </>
  )
}
export default Contact