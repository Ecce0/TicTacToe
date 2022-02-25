import React, { useState } from 'react'
import CheckForWinner from './CheckForWinner'
import './TicTacToe.css'

const Cell = ({ num }) => {
    const [gameBoard, setGameBoard] = useState(Array(9).fill(''))
    let grid = [];
    let row = 3
    let column = 3
    let count = 0

    for (let i = 0; i < row; i++) {
        grid[i] = [];


        for (let j = 0; j < column; j++) {
            grid[i][j] = count
            count++
        }
    }

    const [player, setPlayer] = useState('Player 1')
    const [pieces, setPieces] = useState('X')


    const handleClick = (box) => {
        let cells = [...grid]

        if (player === 'Player 1') {
            cells[box] = 'X'
            setPieces('O')
            setPlayer('Player 2')
        } else {
            cells[box] = 'O'
            setPlayer('Player 1')
            setPieces('X')
        }
        setGameBoard(cells)
    }

    return (
        <>
            {grid.map((cell) => {
                return cell.map((box) => {
                    return (
                        <td
                            className="myTd"
                            num={box}
                            key={box}
                            onClick={() => handleClick(box)}
                        >
                            {gameBoard[box]}
                            {console.log(gameBoard)}
                        </td>
                    )
                })
            })
            }
        </>


    )


}
export default Cell
