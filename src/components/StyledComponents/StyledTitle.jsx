import React from 'react'
import styled from "styled-components";



export const StyledTitle = () => {
    
    const Button = styled.button`
        width: 120px;
        height: 30px;
        background-color: blue;
        color: white;
        border-radius: 8px;
        transition: background-color 1s ease-in-out, color 1s ease-in-out;

        &:hover {
            background-color: aquamarine;
            color: black;
        }

    `

  
  
    return (
        <div>
            <h3>Componentes estilizados </h3>
            <Button>Holis</Button>
        </div>
    )
}
