import React, { useState } from 'react'
import Cell from './Cell'
import Xs from './Xs'
import Os from './Os'
import styled from 'styled-components'



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

const Box = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content;
 `

const Gameboard = () => {
  const [player, setPlayer] = useState('O')
  const [isNotOccupied, setIsNotOccupied] = useState(false)
  const cells = [...Array(9).keys()]
  const [squares, setSquares] = useState(cells)

  const play = (i) => {
    setPlayer('X')
    setIsNotOccupied(true)
    
    if (player === 'O') {
      setPlayer('X')
      setSquares(squares[i]) 
      setIsNotOccupied(true)
    } else if (player === 'X') {
      setPlayer('O')
      setSquares(squares[i])
      setIsNotOccupied(true)
    }
  }

  

  return (
    <>
      <Container>
        <Board>
          {cells.map((box, key) => (
            <Cell
              key={key}
              isNext={player}
              onClick={() => play(key)}
              box={squares}
            >
                              
                {isNotOccupied && player === 'X' && squares && <Xs />}
                {isNotOccupied && player === 'O' && squares && <Os />}
                          
            </Cell>
          ))
          }                    
        </Board>
      </Container>


    </>
  )
}

export default Gameboard