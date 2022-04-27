import React, { useState } from 'react'
import CheckForWinner from './CheckForWinner'
import './TicTacToe.css'

const Cell = ({ box }) => {
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
         <td
          className="myTd"
          box={box}>
            {gameBoard}                            
         </td>   
        </>


    )


}
export default Cell
