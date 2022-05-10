import React from 'react'
import styled from 'styled-components'
import X1 from './images/X1.jpg'
import X2 from './images/X2.jpg'
import X3 from './images/X3.jpg'


const Image = styled.img`
  width: 175px;
  height: 175px; 
`

const Xs = () => {

    const X = [X1, X2, X3]     
    const randomXImg = Math.floor(Math.random() * X.length)
   
    
  return (
    <Image src={X[randomXImg]} />
  )
}

export default Xs