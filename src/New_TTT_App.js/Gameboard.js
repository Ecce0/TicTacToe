import React, { useState } from 'react'
import Cell from './Cell'
import styled from 'styled-components'
import X1 from './images/X1.jpg'


const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`

const Board = styled.div`
  display: grid;
  grid-template-columns: 210px 210px 202px;
  grid-template-rows: 210px 210px 202px;
  background-color: darkgreen;

`

const Image = styled.img`
  width: 175px;
  height: 175px;
 
`

const Gameboard = ({ gameWon, newGame }) => {
    const [player1, setPlayer1] = useState('X')
    const [player2, setPlayer2] = useState('O')
    const [occupiedBox, setOccupiedBox] = useState(false)
    const [ xImgs, setXImgs ] = useState()
    const [ oImgs, setOImgs ] = useState()

    let squares = []
    squares = Array.from(Array(9).fill(''))
            
    return (
        <Container>
            <Board>
                {squares.map((box, id) => (
                    <Cell
                        id={id}
                        key={id}                                               
                    >
                     <Image src={X1}/>
                    </Cell>
                ))}
            </Board>
        </Container>

    )
}

export default Gameboard