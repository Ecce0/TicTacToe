import React from 'react'
import styled from 'styled-components'
import O1 from './images/O1.jpg'
import O2 from './images/O2.jpg'
import O3 from './images/O3.jpg'


const Image = styled.img`
  width: 175px;
  height: 175px;
  `

const Os = () => {
    const O = [O1, O2, O3]
    const randomOImg = Math.floor(Math.random() * O.length)

  return (
    <Image src={O[randomOImg]} />
  )
}

export default Os