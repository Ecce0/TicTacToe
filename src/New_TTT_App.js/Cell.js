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
const X = styled.img`
  width: 50px;
  height: 50px
`



const Cell = ({ occupied, children }) => {


  const handleClick = (e) => {
    console.log(e.target)
    
}
  return (
    <CellBlock 
     occupied={occupied}
     onClick={handleClick}
     >
         {children}
     </CellBlock>
  )
}

export default Cell