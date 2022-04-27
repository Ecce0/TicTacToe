import React, { useState } from 'react'
import './TicTacToe.css'
import Cell from './Cell'


const TTT_Mine = () => {

  const [gameBoard, setGameBoard] = useState(Array(9).fill(''))
    const [player, setPlayer] = useState('Player 1')
    const [pieces, setPieces] = useState('X')


    const handleClick = ({ box }) => {
        let squares = [...gameBoard]

        if (player === 'Player 1') {
            squares[box] = 'X'
            setPieces('O')
            setPlayer('Player 2')
        } else {
            squares[box] = 'O'
            setPlayer('Player 1')
            setPieces('X')
        }
            setGameBoard(squares)
            
    }

  

  return (
    <>
      <h2>My Version of Tic Tac Toe</h2>
      
        <div className="container_mine">             
        <table className='table'>
        {
          gameBoard.map((cell, id, squares) => {
            return (
              <Cell
                className="myTd"
                key={id}
                onClick={() => handleClick(cell)}>
                  {id}                            
                </Cell>
            )
          })
        }
          
        </table>

      </div>
    </>



  )
}

export default TTT_Mine
