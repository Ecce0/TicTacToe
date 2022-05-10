import React from 'react'
import styled from 'styled-components'

const CellBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content;
    border: 1px solid white;
    width: 200px;
    height: 200px;
    background-color: white;    
`



const Cell = ({ onClick, isNext, box }) => {

  return (
    <CellBlock
      onClick={onClick}
      isNext={isNext} 
      box={box}     
    />

  )
}

export default Cell